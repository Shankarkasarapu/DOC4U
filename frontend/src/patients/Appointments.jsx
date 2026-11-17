import React, { useEffect, useState } from 'react'
import { ListSkeleton } from '../components/Loaders'
import { Link } from 'react-router-dom'
import GetUserId from '../data/GetUserID';
import axios from 'axios';
import SecurityHeaders from '../data/SecurityHeaders';
import ENDPOINT from '../data/ENDPOINT';
import GetUserID from '../data/GetUserID';
import moment from 'moment';

const Appointments = () => {
    const [activeTab, setActiveTab] = useState('upcoming');
    const [details,setdetails] = useState([]) 
	const user_id = GetUserId();
	const getDetails = async () => {
    try {
      const data = new FormData();
      data.append('user_id', user_id);
      const res = await axios.post(ENDPOINT + 'get-user-details', data, SecurityHeaders);
      if (res && res.data.status === 'success') {
        console.log(res);
        setdetails(res.data.user);
      } else {
        console.error('Failed to fetch user details');
      }
    } catch (error) {
      console.error('Error fetching user details:', error.message || error);
    }
  };
	useEffect(()=>{getDetails()},[])


  const [appoint,setappoint] = useState([])
  const [apLoading,setApLoading] = useState(true)
	const user = GetUserID()
	const getappointments = async() =>{
		var data = new FormData()
		data.append('user_id',user)
		try {
			var res = await axios.post(ENDPOINT + 'get-user-appointments',data,SecurityHeaders)
			if(res && res.data.status==='success')
			{
				setappoint(res.data.appointments || [])
			}
		} catch (e) { console.error(e) }
		finally { setApLoading(false) }
	}
	useEffect(()=>{
		getappointments()
	},[])
  return (
    <>
  <div className="breadcrumb-bar-two">
    <div className="container">
      <div className="row align-items-center inner-banner">
        <div className="col-md-12 col-12 text-center">
          <h2 className="breadcrumb-title">Patient Appointments</h2>
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to='/index'>Home</Link>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                Patient Appointments
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <div className="content doctor-content">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-xl-3 theiaStickySidebar">
          <div className="profile-sidebar patient-sidebar profile-sidebar-new">
            <div className="widget-profile pro-widget-content">
              <div className="profile-info-widget">
                <Link to="/profile-settings" className="booking-doc-img">
                  <img
                    src={details.profileImage}
                    alt="User Image"
                  />
                </Link>
                <div className="profile-det-info">
                  <h3>
                    <Link to="/profile-settings">{details.name}</Link>
                  </h3>
                  <div className="patient-details">
                    <h5 className="mb-0">Patient ID : PT{details.id? details.id.slice(0,5):''}</h5>
                  </div>
                  <span>
                    {details.gender} <i className="fa-solid fa-circle" /> {details.age} years 
                  </span>
                </div>
              </div>
            </div>
            <div className="dashboard-widget">
              <nav className="dashboard-menu">
                <ul>
                  <li>
                    <Link to='/patient-dashboard'>
                      <i className="fa-solid fa-shapes" />
                      <span>Dashboard</span>
                    </Link>
                  </li>
                  <li className="active">
                    <Link to="/appointments">
                      <i className="fa-solid fa-calendar-days" />
                      <span>My Appointments</span>
                    </Link>
                  </li>
                  
                  <li>
                    <Link to="/dependants">
                      <i className="fa-solid fa-user-plus" />
                      <span>Dependants</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/patient-invoices">
                      <i className="fa-solid fa-file-lines" />
                      <span>Invoices</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile-settings">
                      <i className="fa-solid fa-user-pen" />
                      <span>Profile Settings</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/change-password">
                      <i className="fa-solid fa-key" />
                      <span>Change Password</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">
                      <i className="fa-solid fa-calendar-check" />
                      <span>Logout</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-xl-9">
          <div className="dashboard-header">
            <h3>Appointments</h3>
            <ul className="header-list-btns">
              <li>
                <div className="input-block dash-search-input">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <span className="search-icon">
                    <i className="fa-solid fa-magnifying-glass" />
                  </span>
                </div>
              </li>
              <li>
                <div className="view-icons">
                  <Link to="/patient-appointments" className="active">
                    <i className="fa-solid fa-list" />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          <div className="appointment-tab-head">
            <div className="appointment-tabs">
            <ul className="nav nav-pills inner-tab" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'upcoming' ? 'active' : ''}`}
            id="pills-upcoming-tab"
            type="button"
            role="tab"
            aria-controls="pills-upcoming"
            aria-selected={activeTab === 'upcoming'}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming<span>21</span>
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'complete' ? 'active' : ''}`}
            id="pills-complete-tab"
            type="button"
            role="tab"
            aria-controls="pills-complete"
            aria-selected={activeTab === 'complete'}
            onClick={() => setActiveTab('complete')}
          >
            Completed<span>214</span>
          </button>
        </li>
      </ul>
            </div>
            <div className="filter-head">
              <div className="position-relative daterange-wraper me-2">
                <div className="input-groupicon calender-input">
                  <input
                    type="text"
                    className="form-control  date-range bookingrange"
                    placeholder="From Date - To Date "
                  />
                </div>
                <i className="fa-solid fa-calendar-days" />
              </div>
              <div className="form-sorts dropdown">
                <a
                  href="javascript:void(0);"
                  className="dropdown-toggle"
                  id="table-filter"
                >
                  <i className="fa-solid fa-filter me-2" />
                  Filter By
                </a>
                <div className="filter-dropdown-menu">
                  <div className="filter-set-view">
                    <div className="accordion" id="accordionExample">
                      <div className="filter-set-content">
                        <div className="filter-set-content-head">
                          <a
                            href="#"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Name
                            <i className="fa-solid fa-chevron-right" />
                          </a>
                        </div>
                        <div
                          className="filter-set-contents accordion-collapse collapse show"
                          id="collapseTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <ul>
                            <li>
                              <div className="input-block dash-search-input w-100">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Search"
                                />
                                <span className="search-icon">
                                  <i className="fa-solid fa-magnifying-glass" />
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="filter-set-content">
                        <div className="filter-set-content-head">
                          <a
                            href="#"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Appointment Type
                            <i className="fa-solid fa-chevron-right" />
                          </a>
                        </div>
                        <div
                          className="filter-set-contents accordion-collapse collapse show"
                          id="collapseOne"
                          data-bs-parent="#accordionExample"
                        >
                          <ul>
                            <li>
                              <div className="filter-checks">
                                <label className="checkboxs">
                                  <input type="checkbox" defaultChecked="" />
                                  <span className="checkmarks" />
                                  <span className="check-title">All Type</span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="filter-checks">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks" />
                                  <span className="check-title">
                                    Video Call
                                  </span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="filter-checks">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks" />
                                  <span className="check-title">
                                    Audio Call
                                  </span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="filter-checks">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks" />
                                  <span className="check-title">Chat</span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="filter-checks">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks" />
                                  <span className="check-title">
                                    Direct Visit
                                  </span>
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="filter-set-content">
                        <div className="filter-set-content-head">
                          <a
                            href="#"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Visit Type
                            <i className="fa-solid fa-chevron-right" />
                          </a>
                        </div>
                        <div
                          className="filter-set-contents accordion-collapse collapse show"
                          id="collapseThree"
                          data-bs-parent="#accordionExample"
                        >
                          <ul>
                            <li>
                              <div className="filter-checks">
                                <label className="checkboxs">
                                  <input type="checkbox" defaultChecked="" />
                                  <span className="checkmarks" />
                                  <span className="check-title">All Visit</span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="filter-checks">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks" />
                                  <span className="check-title">General</span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="filter-checks">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks" />
                                  <span className="check-title">
                                    Consultation
                                  </span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="filter-checks">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks" />
                                  <span className="check-title">Follow-up</span>
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="filter-checks">
                                <label className="checkboxs">
                                  <input type="checkbox" />
                                  <span className="checkmarks" />
                                  <span className="check-title">
                                    Direct Visit
                                  </span>
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="filter-reset-btns">
                      <Link to="/appointments" className="btn btn-light">
                        Reset
                      </Link>
                      <Link to="/appointments" className="btn btn-primary">
                        Filter Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content appointment-tab-content">
          <div
          className={`tab-pane fade ${activeTab === 'upcoming' ? 'show active' : ''}`}
          id="pills-upcoming"
          role="tabpanel"
          aria-labelledby="pills-upcoming-tab"
        >
        {apLoading ? <ListSkeleton rows={3} /> : appoint ? appoint.map((item)=>(
              <div className="appointment-wrap d4u-fade-in">
                <ul>
                  <li>
                    <div className="patinet-information">
                      <Link to="#">
                        <img
                          src="assets/img/doctors/doctor-thumb-21.jpg"
                          alt="User Image"
                        />
                      </Link>
                      <div className="patient-info">
                        <h6>
                          <Link to="#">
                            Dr {item.doctor.name}
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li className="appointment-info">
                    <p>
                      <i className="fa-solid fa-clock" />
                      {moment.utc(item.date).format('MM/DD/YYYY HH:mm:ss')}
                    </p>
                    
                  </li>
                  <li className="appointment-detail-btn">
                    <Link to="#" className="start-link">
                      <i className="fa-solid fa-calendar-check me-1" />
                      Attend
                    </Link>
                  </li>
                  <li className="appointment-action">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="fa-solid fa-xmark" />
                        </Link>
                      </li>
                    </ul>
                  </li>
                  
                </ul>
                <div className="pagination dashboard-pagination">
                <ul>
                  <li>
                    <Link to="#" className="page-link">
                      <i className="fa-solid fa-chevron-left" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="page-link">
                      1
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="page-link active">
                      2
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="page-link">
                      3
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="page-link">
                      4
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="page-link">
                      ...
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="page-link">
                      <i className="fa-solid fa-chevron-right" />
                    </Link>
                  </li>
                </ul>
              </div>
              </div>
              
            )):<h3 className='text-center'>No Appointments Yet</h3>}
              
              {/* /Pagination */}
            </div>
            <div
          className={`tab-pane fade ${activeTab === 'complete' ? 'show active' : ''}`}
          id="pills-complete"
          role="tabpanel"
          aria-labelledby="pills-complete-tab"
        >
              {/* Appointment List */}
              <div className="appointment-wrap">
                <ul>
                  <li>
                    <div className="patinet-information">
                      <Link to="#">
                        <img
                          src="assets/img/doctors/doctor-thumb-21.jpg"
                          alt="User Image"
                        />
                      </Link>
                      <div className="patient-info">
                        <p>#Apt0001</p>
                        <h6>
                          <Link to="#">
                            Dr Edalin
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li className="appointment-info">
                    <p>
                      <i className="fa-solid fa-clock" />
                      11 Nov 2024 10.45 AM
                    </p>
                    
                  </li>
                  <li className="appointment-detail-btn">
                    <a
                      href="#"
                      className="start-link"
                    >
                      View Details
                      <i className="fa-regular fa-circle-right ms-1" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* /Appointment List */}
              {/* Appointment List */}
              <div className="appointment-wrap">
                <ul>
                  <li>
                    <div className="patinet-information">
                      <Link to="#">
                        <img
                          src="assets/img/doctors/doctor-thumb-13.jpg"
                          alt="User Image"
                        />
                      </Link>
                      <div className="patient-info">
                        <p>#Apt0002</p>
                        <h6>
                          <Link to="#">
                            Dr.Shanta
                          </Link>
                          <span className="badge new-tag">New</span>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li className="appointment-info">
                    <p>
                      <i className="fa-solid fa-clock" />
                      05 Nov 2024 11.50 AM
                    </p>
                  </li>
                  <li className="appointment-detail-btn">
                    <a
                      href="#"
                      className="start-link"
                    >
                      View Details
                      <i className="fa-regular fa-circle-right ms-1" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* /Appointment List */}
              {/* Appointment List */}
              <div className="appointment-wrap">
                <ul>
                  <li>
                    <div className="patinet-information">
                      <Link to="#">
                        <img
                          src="assets/img/doctors/doctor-thumb-14.jpg"
                          alt="User Image"
                        />
                      </Link>
                      <div className="patient-info">
                        <p>#Apt0003</p>
                        <h6>
                          <Link to="#">
                            Dr.John
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li className="appointment-info">
                    <p>
                      <i className="fa-solid fa-clock" />
                      27 Oct 2024 09.30 AM
                    </p>
                    
                  </li>
                  <li className="appointment-detail-btn">
                    <a
                      href="#"
                      className="start-link"
                    >
                      View Details
                      <i className="fa-regular fa-circle-right ms-1" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* /Appointment List */}
              {/* Appointment List */}
              <div className="appointment-wrap">
                <ul>
                  <li>
                    <div className="patinet-information">
                      <Link to="#">
                        <img
                          src="assets/img/doctors/doctor-thumb-15.jpg"
                          alt="User Image"
                        />
                      </Link>
                      <div className="patient-info">
                        <p>#Apt0004</p>
                        <h6>
                          <Link to="#">
                            Dr.Susan
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li className="appointment-info">
                    <p>
                      <i className="fa-solid fa-clock" />
                      18 Oct 2024 12.20 PM
                    </p>
                  </li>
                  <li className="appointment-detail-btn">
                    <a
                      href="#"
                      className="start-link"
                    >
                      View Details
                      <i className="fa-regular fa-circle-right ms-1" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* /Appointment List */}
              {/* Appointment List */}
              <div className="appointment-wrap">
                <ul>
                  <li>
                    <div className="patinet-information">
                      <Link to="#">
                        <img
                          src="assets/img/doctors/doctor-thumb-16.jpg"
                          alt="User Image"
                        />
                      </Link>
                      <div className="patient-info">
                        <p>#Apt0005</p>
                        <h6>
                          <Link to="#">
                            Dr.Juliet
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li className="appointment-info">
                    <p>
                      <i className="fa-solid fa-clock" />
                      10 Oct 2024 11.30 AM
                    </p>
                  </li>
                  <li className="appointment-detail-btn">
                    <a
                      href="#"
                      className="start-link"
                    >
                      View Details
                      <i className="fa-regular fa-circle-right ms-1" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* /Appointment List */}
              {/* Appointment List */}
              <div className="appointment-wrap">
                <ul>
                  <li>
                    <div className="patinet-information">
                      <Link to="#">
                        <img
                          src="assets/img/doctors/doctor-thumb-17.jpg"
                          alt="User Image"
                        />
                      </Link>
                      <div className="patient-info">
                        <p>#Apt0006</p>
                        <h6>
                          <Link to="#">
                            Dr.Joseph
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li className="appointment-info">
                    <p>
                      <i className="fa-solid fa-clock" />
                      26 Sep 2024 10.20 AM
                    </p>
                  </li>
                  <li className="appointment-detail-btn">
                    <a
                      href="#"
                      className="start-link"
                    >
                      View Details
                      <i className="fa-regular fa-circle-right ms-1" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* /Appointment List */}
              {/* Appointment List */}
              <div className="appointment-wrap">
                <ul>
                  <li>
                    <div className="patinet-information">
                      <Link to="#">
                        <img
                          src="assets/img/doctors/doctor-thumb-18.jpg"
                          alt="User Image"
                        />
                      </Link>
                      <div className="patient-info">
                        <p>#Apt0007</p>
                        <h6>
                          <Link to="#">
                            Dr.Victoria
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li className="appointment-info">
                    <p>
                      <i className="fa-solid fa-clock" />
                      14 Sep 2024 08.10 AM
                    </p>
                  </li>
                  <li className="appointment-detail-btn">
                    <a
                      href="#"
                      className="start-link"
                    >
                      View Details
                      <i className="fa-regular fa-circle-right ms-1" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* /Appointment List */}
              {/* Appointment List */}
              <div className="appointment-wrap">
                <ul>
                  <li>
                    <div className="patinet-information">
                      <Link to="#">
                        <img
                          src="assets/img/doctors/doctor-thumb-19.jpg"
                          alt="User Image"
                        />
                      </Link>
                      <div className="patient-info">
                        <p>#Apt0008</p>
                        <h6>
                          <Link to="#">
                            Dr.Benjamin
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li className="appointment-info">
                    <p>
                      <i className="fa-solid fa-clock" />
                      03 Sep 2024 06.00 PM
                    </p>
                    
                  </li>
                  <li className="appointment-detail-btn">
                    <a
                      href="#"
                      className="start-link"
                    >
                      View Details
                      <i className="fa-regular fa-circle-right ms-1" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* /Appointment List */}
              {/* Pagination */}
              <div className="pagination dashboard-pagination">
                <ul>
                  <li>
                    <Link to="#" className="page-link">
                      <i className="fa-solid fa-chevron-left" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="page-link">
                      1
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="page-link active">
                      2
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="page-link">
                      3
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="page-link">
                      4
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="page-link">
                      ...
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="page-link">
                      <i className="fa-solid fa-chevron-right" />
                    </Link>
                  </li>
                </ul>
              </div>
              {/* /Pagination */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Appointments