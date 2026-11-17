/* global Razorpay */

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ENDPOINT from '../data/ENDPOINT'
import SecurityHeaders from '../data/SecurityHeaders'
import '../App.css'
import { CircularProgress, Rating } from '@mui/material'
import { Button, Modal } from 'react-bootstrap'
import ToastNotification from '../components/Modals/ToastNotification'
import GetUserID from '../data/GetUserID'
import { SLOTS, DAYS_SHOWN, nowIST, upcomingDays, toKey, slotState, openSlots } from '../data/slots'

const Booking = () => {
  const user = GetUserID()

    useEffect(() => {

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, []);

  const params = useParams()
  const id = params.id
  const [loading, setLoading] = useState(false)
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const month = new Date().getMonth()
  const day = new Date().getDay()
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthName = months[month];
  const dayName = days[day];
  const [amount, setAmount] = useState()


  const [booked, setBooked] = useState({});          // { 'YYYY-MM-DD': ['9:00 AM', ...] } already taken
  const [slotsLoading, setSlotsLoading] = useState(true);
  const [now, setNow] = useState(nowIST());              // re-evaluated every 30s so passed slots vanish live

  const fetchBooked = async () => {
    try {
      const form = new FormData();
      form.append('doctor_id', id);
      const res = await axios.post(ENDPOINT + 'get-booked-slots', form, SecurityHeaders);
      if (res.data.status === 'success') setBooked(res.data.booked || {});
    } catch (e) {
      console.error('Could not load booked slots', e);
    } finally {
      setSlotsLoading(false);
    }
  };

  // Days are computed in IST, so the strip is right whatever the device's timezone is
  useEffect(() => {
    const days = upcomingDays(DAYS_SHOWN);
    setDates(days);
    const wanted = new URLSearchParams(window.location.search).get('date');   // from the search box
    setSelectedDate(days.find((d) => toKey(d) === wanted) || days[0]);
    fetchBooked();
    const tick = setInterval(() => setNow(nowIST()), 30000);
    const refresh = setInterval(fetchBooked, 60000);   // pick up slots other people booked meanwhile
    return () => { clearInterval(tick); clearInterval(refresh); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectedKey = selectedDate ? toKey(selectedDate) : null;
  const dayOpen = (d) => openSlots(toKey(d), booked, now).length;

  // If the picked date has no free slots left (e.g. it is evening), jump to the first day that has some
  useEffect(() => {
    if (slotsLoading || !selectedKey) return;
    if (openSlots(selectedKey, booked, now).length === 0) {
      const next = dates.find((d) => dayOpen(d) > 0);
      if (next && toKey(next) !== selectedKey) setSelectedDate(next);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slotsLoading, dates, booked, now]);

  // A chosen time that has since passed or been taken must not stay selected
  useEffect(() => {
    if (selectedTime && selectedKey && slotState(selectedKey, selectedTime, booked, now) !== 'open') {
      setSelectedTime(null);
      handleToast('That time is no longer available. Please pick another.', false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [now, booked]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeClick = (time) => {
    if (selectedKey && slotState(selectedKey, time, booked, now) === 'open') setSelectedTime(time);
  };

  const formatDate = (date) => {
    const options = { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" };
    return new Intl.DateTimeFormat("en-GB", options).format(date);
  };

  const [docdata, setdocdata] = useState([])

  const getDocdata = async () => {
    try {
      const data = new FormData();
      data.append('doctor_id', id);
      const res = await axios.post(ENDPOINT + 'get-doctor-details', data, SecurityHeaders);

      if (res.data.status === 'success') {
        setdocdata(res.data.data);
        const price = res.data.data.price_per_hour;
        const numericValue = price.replace("₹", "");
        const integerValue = parseInt(numericValue, 10);
        setAmount(integerValue);
      } else {
        handleToast('Failed to fetch doctor details. Please try again.', false);
      }
    } catch (error) {
      console.error('Error fetching doctor data:', error);
      handleToast('Network error occurred while fetching doctor details. Please try again.', false);
    }
  }
  useEffect(() => {
    getDocdata();

  }, [])

  const [datas,setdatas] = useState([])

  const getuserdata = async() =>{
    var data = new FormData()
    data.append('user_id', user)
    const res = await axios.post(ENDPOINT + 'get-user-details' ,data, SecurityHeaders)
    if (res)
    {
        if(res.data.status==='success')
        {
          setdatas(res.data.user)
          console.log(res.data.user)
        }
    }
  }
  useEffect(()=>{
    getuserdata()
  },[])

  const AppointmentBooking = async () => {
    try {
      const user_id = localStorage.getItem("user_id");
      const data = new FormData();
      data.append("user_id", user_id);
      data.append('doctor_id', id);
      data.append('date', toKey(selectedDate));
      data.append('time', selectedTime);

      const resp = await axios.post(ENDPOINT + 'book-appointment', data, SecurityHeaders);

      if (resp.data.status === 'success') {
        console.log('Appointment booked:', resp);
        handleShow(); // Show success modal
      } else {
        handleToast(resp.data.message || 'Failed to book appointment. Please try again.', false);
      }
      fetchBooked();
    } catch (error) {
      console.error('Error booking appointment:', error);
      const msg = error.response?.data?.message;
      handleToast(msg || 'Network error occurred while booking appointment. Please try again.', false);
      fetchBooked();                       // refresh so a just-taken slot disappears
    }
  };



  const handlePayment = async () => {
    setLoading(true)
    if (!amount) {
      handleToast('Amount is not valid.', false);
      return;
    }

    try {
      const { data } = await axios.post(ENDPOINT + 'create-order', { amount: amount });
      console.log(data)
      setLoading(false)

      const options = {
        key: 'rzp_test_eJ3xYlzzs7p5VC',
        amount: data.order.amount,
        currency: data.order.currency,
        name: 'DOC4U',
        description: 'Test Transaction',
        order_id: data.order.id,
        handler: function (response) {
          setLoading(false)
          console.log('Payment response:', response);
          response.razorpay_payment_id ? handleShow() : handleShowun();
          AppointmentBooking()
          // setTimeout(() => {
          //   window.location.replace("/")
          // }, 2500);
        },
        prefill: {
          name: datas.fullName,
          email: datas.email,
          contact: datas.emergencyContact,
        },
        theme: {
          color: '#3399cc',
        },
      };

      const rzp1 = new Razorpay(options);

      rzp1.on('payment.failed', function (response) {
        console.error("Payment Failed:", response.error);
        handleShowun()
        setLoading(false)
      });

      rzp1.open();
    }
    catch (error) {
      console.error('Error during payment:', error);
      handleToast('Payment failed due to network error. Please try again.', false);
      setLoading(false)
    }
  };

  const [toast, setToast] = useState({
    show: false,
    message: '',
    isSuccess: true,
  });

  const handleToast = (message, isSuccess) => {
    setToast({ show: true, message, isSuccess });
    setTimeout(() => {
      setToast((prevToast) => ({ ...prevToast, show: false }));
    }, 3000);
  };
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const [Unsuccessful, setUnsuccessful] = useState(false);
  const handleShowun = () => setUnsuccessful(true);
  const handleCloseun = () => setUnsuccessful(false);


  return (
    <>

      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content top-space">
        <div className="container">
          <div className="">

            <div className="col-12">
              <div className="profile-widget d-sm-flex">
                <div className="doc-img col-7 col-sm-3 col-lg-3 col-xl-2 m-auto">
                  <Link to={"/doctor-profile/" + docdata._id} >
                    <img loading="lazy" decoding="async" className="img-fluid rounded-3" alt="User Image" src={docdata.image} />
                  </Link>
                </div>
                <div className="pro-content col-12 h-fit text-center text-sm-start ps-sm-4">
                  <h3 className="title">
                    <Link to={"/doctor-profile/" + docdata._id} className='fs-2'>{docdata.name}</Link>
                    <i className="fas fa-check-circle verified fs-6 ms-2"></i>
                  </h3>
                  <p className="speciality fs-6 mb-0">{docdata.qualifications}</p>
                  <p className='mb-1 d-none d-sm-block'>Rating:</p>
                  <Rating value={docdata.rating / 10} precision={0.5} readOnly></Rating>

                  <ul className="available-info fs-6 ">
                    <li>
                      <i className="fas fa-map-marker-alt"></i> {docdata.location}
                    </li>
                    <li>
                      <i className="far fa-money-bill-alt"></i> {docdata.price_per_hour} <i className="fas fa-info-circle" data-bs-toggle="tooltip" ></i>
                    </li>
                  </ul>
                  <p className='mb-2 d-none d-md-block'>specialities:</p>
                  <div className="clinic-services">

                    {docdata.feature_services ? docdata.feature_services.map((item) => (
                      <span>{item}</span>
                    )) : <h4>Loading</h4>}
                  </div>


                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-4 col-md-6">
                  <h4 className="mb-1">{new Date().getDate()} {monthName} {new Date().getFullYear()}</h4>
                  <p className="text-muted">{dayName}</p>
                </div>
              </div>
              {/* Schedule Widget */}
              <div className="card booking-schedule schedule-widget">
                {/* Schedule Header */}
                <div className="schedule-header">
                  <div className="row">
                    <div className="col-md-12">
                      {/* Day Slot */}
                      <div className="day-slot col-12">
                        <div className="date-list-container">
                          <ul className="date-list">
                            {dates.map((date, index) => {
                              const isSelected = selectedKey === toKey(date);
                              const left = slotsLoading ? null : dayOpen(date);
                              const full = left === 0;
                              return (
                                <div
                                  key={toKey(date)}
                                  className={`date-item ${isSelected ? "selected" : ""} ${full ? "is-full" : ""}`}
                                  onClick={() => !full && handleDateChange(date)}
                                  role="button"
                                  aria-disabled={full}
                                  title={full ? 'No slots left' : undefined}
                                >
                                  <span>{index === 0 ? 'Today' : date.toLocaleDateString("en-US", { weekday: "short", timeZone: "UTC" })}</span><br />
                                  <span className="slot-date">
                                    {formatDate(date)}
                                  </span>
                                  {left !== null && <small className="date-left">{full ? 'Full' : `${left} left`}</small>}
                                </div>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                      {/* /Day Slot */}
                    </div>
                  </div>
                </div>
                {/* /Schedule Header */}
                {/* Schedule Content */}
                <div className="schedule-cont">
                  <div className="col-md-12 col-sm-12 col-12">
                    {/* Time Slot */}
                    <div>
                      {selectedDate && (
                        <div className="time-slot text-center col-12">
                          {/* <h3>
                          Selected Date:{" "}
                          {selectedDate ? formatDate(selectedDate) : "No date selected"}
                        </h3> */}
                          <div className="timing-container col-12">
                            {slotsLoading ? (
                              <p className="text-muted py-3">Checking availability...</p>
                            ) : (() => {
                              const visible = SLOTS.filter((t) => slotState(selectedKey, t, booked, now) !== 'past');
                              if (!visible.length) {
                                return <p className="text-muted py-3">No more slots today. Please choose another day.</p>;
                              }
                              return visible.map((t) => {
                                const isBooked = slotState(selectedKey, t, booked, now) === 'booked';
                                const [hm, ap] = t.split(' ');
                                return (
                                  <div className="timing col-lg-2 col-md-4 col-sm-6 col-6" key={t}>
                                    <Link
                                      className={`timing-item ${selectedTime === t ? "selected" : ""} ${isBooked ? "is-booked" : ""}`}
                                      to="#"
                                      aria-disabled={isBooked}
                                      title={isBooked ? 'Already booked' : undefined}
                                      onClick={(e) => { e.preventDefault(); if (!isBooked) handleTimeClick(t); }}
                                    >
                                      <span>{hm}</span> <span>{ap}</span>
                                      {isBooked && <small className="slot-tag">Booked</small>}
                                    </Link>
                                  </div>
                                );
                              });
                            })()}
                          </div>
                        </div>
                      )}

                      {/* Selection Summary */}
                      {selectedTime && selectedDate && (
                        <div className="selection-summary mt-3 ms-2">
                          <p>
                            Selected Date: {formatDate(selectedDate)} <br />
                            Selected Time: {selectedTime}
                          </p>
                        </div>
                      )}
                    </div>
                    {/* /Time Slot */}
                  </div>
                </div>
                {/* /Schedule Content */}
              </div>
              {/* /Schedule Widget */}
              {/* Submit Section */}
              <div className="submit-section proceed-btn text-center text-sm-end py-3">
                <Button className="btn btn-primary submit-btn" onClick={() => { selectedTime ? handlePayment() : <>{handleToast('Please ,select a time slot...!!', false)}</> }}>
                  {loading ? <CircularProgress size={15} /> : "Proceed to pay"}
                </Button>


                <ToastNotification toast={toast} setToast={setToast} />
              </div>
              {/* /Submit Section */}
            </div>
          </div>

        </div>
      </div>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Booking Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body className='pb-0'>
          <div className="success-cont text-center">
            <i className="fas fa-check fs-1" />
            <h3>Appointment booked Successfully!</h3>
            <p>
              Appointment booked with <strong>{docdata.name}</strong>
              <br /> on <strong> {selectedTime && selectedDate && (
                <div className="selection-summary mt-3">
                  <p>{formatDate(selectedDate)} <br />
                    {selectedTime}
                  </p>
                </div>
              )}</strong>
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className='justify-content-center'>
          <p >
            <i ></i>
            Please check your email for booking details.</p>
        </Modal.Footer>
      </Modal>

      <Modal show={Unsuccessful} onHide={handleCloseun} centered>

        <Modal.Body>
          <div className="error-cont text-center">
            <i
              className="fas fa-times-circle"
              style={{ fontSize: '3rem', color: 'red' }}
            />
            <h3>Booking Unsuccessful</h3>
            <p>
              Unfortunately, we couldn't complete your appointment booking.
              <br />
              Please try again or contact support for assistance.
            </p>
          </div>
          <div className='text-center pt-2'>
            <Button variant="primary" onClick={() => { handleCloseun() }}>
              Retry
            </Button>
          </div>
        </Modal.Body>

      </Modal>

    </>

  )
}

export default Booking