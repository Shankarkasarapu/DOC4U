import React from 'react'
import { Link } from 'react-router-dom'

const MyPatients = () => {
  return (
    <div>
      <>
  <div className="breadcrumb-bar-two">
    <div className="container">
      <div className="row align-items-center inner-banner">
        <div className="col-md-12 col-12 text-center">
          <h2 className="breadcrumb-title">My Patients</h2>
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="index.html">Home</Link>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                My Patients
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* /Breadcrumb */}
  {/* Page Content */}
  <div className="content doctor-content">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-xl-3 theiaStickySidebar">
          {/* Profile Sidebar */}
          <div className="profile-sidebar doctor-sidebar profile-sidebar-new">
            <div className="widget-profile pro-widget-content">
              <div className="profile-info-widget">
                <Link to="doctor-profile.html" className="booking-doc-img">
                  <img
                    src="assets/img/doctors-dashboard/doctor-profile-img.jpg"
                    alt="User Image"
                  />
                </Link>
                <div className="profile-det-info">
                  <h3>
                    <Link to="doctor-profile.html">Dr Edalin Hendry</Link>
                  </h3>
                  <div className="patient-details">
                    <h5 className="mb-0">
                      BDS, MDS - Oral &amp; Maxillofacial Surgery
                    </h5>
                  </div>
                  <span className="badge doctor-role-badge">
                    <i className="fa-solid fa-circle" />
                    Dentist
                  </span>
                </div>
              </div>
            </div>
            <div className="doctor-available-head">
              <div className="input-block input-block-new">
                <label className="form-label">
                  Availability <span className="text-danger">*</span>
                </label>
                <select className="select form-control">
                  <option>I am Available Now</option>
                  <option>Not Available</option>
                </select>
              </div>
            </div>
            <div className="dashboard-widget">
            <nav className="dashboard-menu">
                <ul>
                    <li>
                        <Link to="/doctordashboard">
                            <i className="fa-solid fa-shapes"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/requests">
                            <i className="fa-solid fa-calendar-check"></i>
                            <span>Requests</span>
                            <small className="unread-msg">2</small>
                        </Link>
                    </li>
                    <li>
                        <Link to="/appointments">
                            <i className="fa-solid fa-calendar-days"></i>
                            <span>Appointments</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/availabletimings">
                            <i className="fa-solid fa-calendar-day"></i>
                            <span>Available Timings</span>
                        </Link>
                    </li>
                    <li className='active'>
                        <Link to="/mypatients">
                            <i className="fa-solid fa-user-injured"></i>
                            <span>My Patients</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/reviews">
                            <i className="fas fa-star"></i>
                            <span>Reviews</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/accounts">
                            <i className="fa-solid fa-file-contract"></i>
                            <span>Accounts</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/invoices">
                            <i className="fa-solid fa-file-lines"></i>
                            <span>Invoices</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/doctorpayment">
                            <i className="fa-solid fa-money-bill-1"></i>
                            <span>Payout Settings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/doctorprofilesettings">
                            <i className="fa-solid fa-user-pen"></i>
                            <span>Profile Settings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/doctorchangepswd">
                            <i className="fa-solid fa-key"></i>
                            <span>Change Password</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            <i className="fa-solid fa-calendar-check"></i>
                            <span>Logout</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            </div>
          </div>
          {/* /Profile Sidebar */}
        </div>
        <div className="col-lg-8 col-xl-9">
          <div className="dashboard-header">
            <h3>My Patients</h3>
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
            </ul>
          </div>
          <div className="appointment-tab-head">
            <div className="appointment-tabs">
              <ul
                className="nav nav-pills inner-tab "
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-upcoming-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-upcoming"
                    type="button"
                    role="tab"
                    aria-controls="pills-upcoming"
                    aria-selected="false"
                  >
                    Active<span>200</span>
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
                <Link
                  to="javascript:void(0);"
                  className="dropdown-toggle"
                  id="table-filter"
                >
                  <i className="fa-solid fa-filter me-2" />
                  Filter By
                </Link>
                <div className="filter-dropdown-menu">
                  <div className="filter-set-view">
                    <div className="accordion" id="accordionExample">
                      <div className="filter-set-content">
                        <div className="filter-set-content-head">
                          <Link
                            to="#"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Name
                            <i className="fa-solid fa-chevron-right" />
                          </Link>
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
                          <Link
                            to="#"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Appointment Type
                            <i className="fa-solid fa-chevron-right" />
                          </Link>
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
                          <Link
                            to="#"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Visit Type
                            <i className="fa-solid fa-chevron-right" />
                          </Link>
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
                      <Link to="#" className="btn btn-light">
                        Reset
                      </Link>
                      <Link to="#" className="btn btn-primary">
                        Filter Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content appointment-tab-content grid-patient">
            <div
              className="tab-pane fade show active"
              id="pills-upcoming"
              role="tabpanel"
              aria-labelledby="pills-upcoming-tab"
            >
              <div className="row">
                {/* Appointment Grid */}
                <div className="col-xl- col-lg-6 col-md-6 d-flex">
                  <div className="appointment-wrap appointment-grid-wrap">
                    
                        <div className="appointment-grid-head">
                          <div className="patinet-information">
                            <Link to="patient-profile.html">
                              <img loading="lazy" decoding="async" src="assets/img/doctors-dashboard/profile-01.jpg" alt="User Image"/>
                            </Link>
                            <div className='d-flex'>
                                <div className="patient-info">
                                <p>#Apt0001</p>
                                <h6>
                                    <Link to="patient-profile.html">Adrian</Link>
                                </h6>
                                <ul>
                                    <li>Age : 42</li>
                                    <li>Male</li>
                                    <li>AB+</li>
                                </ul>
                                </div>
                                <div>
                                    <span class="badge text-dark">11 Nov 2024 10.45 AM</span><br></br>
                                    {/* <span className='badge text-dark'>Alabama, USA</span> */}
                                </div>
                            </div>
                          </div>
                        </div>
                      <div className="appointment-action mt-3">
                        <div className="patient-book">
                          <p>
                            <i className="fa-solid fa-calendar-days" />
                            Last Booking <span>27 Feb 2024</span>
                          </p>
                        </div>
                      </div>
                  </div>
                </div>


                {/* /Appointment Grid */}
                {/* Appointment Grid */}
                <div className="col-xl-6 col-lg-6 col-md-6 d-flex">
                  <div className="appointment-wrap appointment-grid-wrap">
                    
                        <div className="appointment-grid-head">
                          <div className="patinet-information">
                            <Link to="patient-profile.html">
                              <img loading="lazy" decoding="async" src="assets/img/doctors-dashboard/profile-02.jpg" alt="User Image" />
                            </Link>
                            <div className='d-flex justify-content-between'>
                                <div className="patient-info">
                                <p>#Apt0002</p>
                                <h6>
                                    <Link to="patient-profile.html">Kelly Stevens</Link>
                                </h6>
                                <ul>
                                    <li>Age : 37</li>
                                    <li>Female</li>
                                    <li>O+</li>
                                </ul>
                                </div>
                                <div className="text-dark">
                                    <span className='badge text-dark'>27 Oct 2024 09.30 AM</span>
                                </div>
                                
                            </div>
                          </div>
                        </div>
                      
                      <div className="appointment-action mt-3">
                        <div className="patient-book">
                          <p>
                            <i className="fa-solid fa-calendar-days" />
                            Last Booking<span>20 Mar 2024</span>
                          </p>
                        </div>
                      </div>
                    
                  </div>
                </div>
                {/* /Appointment Grid */}
                {/* Appointment Grid */}
                <div className="col-xl-6 col-lg-6 col-md-6 d-flex">
                  <div className="appointment-wrap appointment-grid-wrap">


                        <div className="appointment-grid-head">
                          <div className="patinet-information">
                            <Link to="patient-profile.html">
                              <img
                                src="assets/img/doctors-dashboard/profile-03.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className='d-flex'>
                                <div className="patient-info">
                                <p>#Apt0003</p>
                                <h6>
                                    <Link to="patient-profile.html">Samuel James</Link>
                                </h6>
                                <ul>
                                    <li>Age : 43</li>
                                    <li>Male</li>
                                    <li>B+</li>
                                </ul>
                                </div>
                                <div className="text-dark">
                                        <span className='badge text-dark'>27 Oct 2024 09.30 AM</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                      <div className="appointment-action mt-3">
                        <div className="patient-book">
                          <p>
                            <i className="fa-solid fa-calendar-days" />
                            Last Booking<span>12 Mar 2024</span>
                          </p>
                        </div>
                      </div>
                  </div>
                </div>
                {/* /Appointment Grid */}
                {/* Appointment Grid */}
                <div className="col-xl-6 col-lg-6 col-md-6 d-flex">
                  <div className="appointment-wrap appointment-grid-wrap">
                    
                        <div className="appointment-grid-head">
                          <div className="patinet-information">
                            <Link to="patient-profile.html">
                              <img
                                src="assets/img/doctors-dashboard/profile-04.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className='d-flex'>
                            <div className="patient-info">
                              <p>#Apt0004</p>
                              <h6>
                                <Link to="patient-profile.html">
                                  Catherine Gracey
                                </Link>
                              </h6>
                              <ul>
                                <li>Age : 36</li>
                                <li>Female</li>
                                <li>AB-</li>
                              </ul>
                            </div>
                            <div className="text-dark">
                                <span className='badge text-dark'>18 Oct 2024 12.20 PM</span>
                            </div>
                            </div>
                          </div>
                        </div>
                      
                      <div className="appointment-action mt-3">
                        <div className="patient-book">
                          <p>
                            <i className="fa-solid fa-calendar-days" />
                            Last Booking<span>27 Feb 2024</span>
                          </p>
                        </div>
                      </div>
                  </div>
                </div>
                {/* /Appointment Grid */}
                {/* Appointment Grid */}
                <div className="col-xl-6 col-lg-6 col-md-6 d-flex">
                  <div className="appointment-wrap appointment-grid-wrap">
                   
                        <div className="appointment-grid-head">
                          <div className="patinet-information">
                            <Link to="patient-profile.html">
                              <img
                                src="assets/img/doctors-dashboard/profile-05.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className='d-flex'>
                                <div className="patient-info">
                                <p>#Apt0005</p>
                                <h6>
                                    <Link to="patient-profile.html">Robert Miller</Link>
                                </h6>
                                <ul>
                                    <li>Age : 38</li>
                                    <li>Male</li>
                                    <li>A+</li>
                                </ul>
                                </div>
                                <div className="text-dark">
                                    <span className='badge text-dark'>10 Oct 2024 11.30 AM</span>
                                </div>
                            </div>
                          </div>
                        </div>
                      
                      <div className="appointment-action mt-3">
                        <div className="patient-book">
                          <p>
                            <i className="fa-solid fa-calendar-days" />
                            Last Booking<span>18 Feb 2024</span>
                          </p>
                        </div>
                      </div>
                  </div>
                </div>
                {/* /Appointment Grid */}
                {/* Appointment Grid */}
                <div className="col-xl-6 col-lg-6 col-md-6 d-flex">
                  <div className="appointment-wrap appointment-grid-wrap">
                  
                        <div className="appointment-grid-head">
                          <div className="patinet-information">
                            <Link to="patient-profile.html">
                              <img
                                src="assets/img/doctors-dashboard/profile-06.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="d-flex">
                            <div className="patient-info">
                              <p>#Apt0006</p>
                              <h6>
                                <Link to="patient-profile.html">
                                  Anderea Kearns
                                </Link>
                              </h6>
                              <ul>
                                <li>Age : 40</li>
                                <li>Female</li>
                                <li>B-</li>
                              </ul>
                            </div>
                            <div className="text-dark">
                                <span className='badge text-dark'>10 Oct 2024 11.30 AM</span>
                            </div>
                            </div>
                          </div>
                        </div>
                      
                      <div className="appointment-action mt-3">
                        <div className="patient-book">
                          <p>
                            <i className="fa-solid fa-calendar-days" />
                            Last Booking<span>11 Feb 2024</span>
                          </p>
                        </div>
                      </div>
                  </div>
                </div>
                {/* /Appointment Grid */}
                {/* Appointment Grid */}
                <div className="col-xl-6 col-lg-6 col-md-6 d-flex">
                  <div className="appointment-wrap appointment-grid-wrap">
                    
                        <div className="appointment-grid-head">
                          <div className="patinet-information">
                            <Link to="patient-profile.html">
                              <img
                                src="assets/img/doctors-dashboard/profile-07.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="d-flex">
                            <div className="patient-info">
                              <p>#Apt0007</p>
                              <h6>
                                <Link to="patient-profile.html">
                                  Peter Anderson
                                </Link>
                              </h6>
                              <ul>
                                <li>Age : 30</li>
                                <li>Male</li>
                                <li>A-</li>
                              </ul>
                            </div>
                            <div className="text-dark">
                                <span className='badge text-dark'>10 Oct 2024 11.30 AM</span>
                            </div>
                            </div>
                          </div>
                        </div>
                      
                      <div className="appointment-action mt-3">
                        <div className="patient-book">
                          <p>
                            <i className="fa-solid fa-calendar-days" />
                            Last Booking<span>25 Jan 2024</span>
                          </p>
                        </div>
                      </div>
                  </div>
                </div>
                {/* /Appointment Grid */}
                {/* Appointment Grid */}
                <div className="col-xl-6 col-lg-6 col-md-6 d-flex">
                  <div className="appointment-wrap appointment-grid-wrap">
                    
                        <div className="appointment-grid-head">
                          <div className="patinet-information">
                            <Link to="patient-profile.html">
                              <img
                                src="assets/img/doctors-dashboard/profile-08.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className='d-flex'>
                            <div className="patient-info">
                              <p>#Apt0008</p>
                              <h6>
                                <Link to="patient-profile.html">Emily Musick</Link>
                              </h6>
                              <ul>
                                <li>Age : 32</li>
                                <li>Female</li>
                                <li>O-</li>
                              </ul>
                            </div>
                            <div className="text-dark">
                                <span className='badge text-dark'>10 Oct 2024 11.30 AM</span>
                            </div>
                            </div>
                          </div>
                        </div>
                      
                      <div className="appointment-action mt-3">
                        <div className="patient-book">
                          <p>
                            <i className="fa-solid fa-calendar-days" />
                            Last Booking<span>13 Jan 2024</span>
                          </p>
                        </div>
                      </div>
                  </div>
                </div>
                {/* /Appointment Grid */}
                {/* Appointment Grid */}
                <div className="col-xl-6 col-lg-6 col-md-6 d-flex">
                  <div className="appointment-wrap appointment-grid-wrap">
                   
                        <div className="appointment-grid-head">
                          <div className="patinet-information">
                            <Link to="patient-profile.html">
                              <img
                                src="assets/img/doctors-dashboard/profile-01.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className='d-flex'>
                            <div className="patient-info">
                              <p>#Apt0009</p>
                              <h6>
                                <Link to="patient-profile.html">Darrell Tan</Link>
                              </h6>
                              <ul>
                                <li>Age : 31</li>
                                <li>Male</li>
                                <li>AB+</li>
                              </ul>
                            </div>
                            <div className="text-dark">
                                <span className='badge text-dark'>10 Oct 2024 11.30 AM</span>
                            </div>
                            </div>
                          </div>
                        </div>
                      
                      <div className="appointment-action">
                        <div className="patient-book">
                          <p>
                            <i className="fa-solid fa-calendar-days" />
                            Last Booking<span>03 Jan 2024</span>
                          </p>
                        </div>
                      </div>
                  </div>
                </div>
                {/* /Appointment Grid */}
                <div className="col-md-12">
                  <div className="loader-item text-center">
                    <Link to="javascript:void(0);" className="btn btn-load">
                      Load More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-cancel"
              role="tabpanel"
              aria-labelledby="pills-cancel-tab"
            >
              <div className="row">
                {/* Appointment Grid */}
                <div className="col-xl-6 col-lg-6 col-md-6 d-flex">
                  <div className="appointment-wrap appointment-grid-wrap">
                    <ul>
                      <li>
                        <div className="appointment-grid-head">
                          <div className="patinet-information">
                            <Link to="patient-profile.html">
                              <img
                                src="assets/img/doctors-dashboard/profile-06.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="patient-info">
                              <p>#Apt0006</p>
                              <h6>
                                <Link to="patient-profile.html">
                                  Anderea Kearns
                                </Link>
                              </h6>
                              <ul>
                                <li>Age : 40</li>
                                <li>Female</li>
                                <li>B-</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="appointment-info">
                        <p>
                          <i className="fa-solid fa-clock" />
                          26 Sep 2024 10.20 AM
                        </p>
                        <p className="mb-0">
                          <i className="fa-solid fa-location-dot" />
                          San Francisco, USA
                        </p>
                      </li>
                      <li className="appointment-action">
                        <div className="patient-book">
                          <p>
                            <i className="fa-solid fa-calendar-days" />
                            Last Booking<span>11 Feb 2024</span>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /Appointment Grid */}
                {/* Appointment Grid */}
                <div className="col-xl-6 col-lg-6 col-md-6 d-flex">
                  <div className="appointment-wrap appointment-grid-wrap">
                    <ul>
                      <li>
                        <div className="appointment-grid-head">
                          <div className="patinet-information">
                            <Link to="patient-profile.html">
                              <img
                                src="assets/img/doctors-dashboard/profile-01.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="patient-info">
                              <p>#Apt0009</p>
                              <h6>
                                <Link to="patient-profile.html">Darrell Tan</Link>
                              </h6>
                              <ul>
                                <li>Age : 31</li>
                                <li>Male</li>
                                <li>AB+</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="appointment-info">
                        <p>
                          <i className="fa-solid fa-clock" />
                          25 Aug 2024 10.45 AM
                        </p>
                        <p className="mb-0">
                          <i className="fa-solid fa-location-dot" />
                          San Antonio, USA
                        </p>
                      </li>
                      <li className="appointment-action">
                        <div className="patient-book">
                          <p>
                            <i className="fa-solid fa-calendar-days" />
                            Last Booking<span>03 Jan 2024</span>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /Appointment Grid */}
                {/* Appointment Grid */}
                <div className="col-xl-6 col-lg-6 col-md-6 d-flex">
                  <div className="appointment-wrap appointment-grid-wrap">
                    <ul>
                      <li>
                        <div className="appointment-grid-head">
                          <div className="patinet-information">
                            <Link to="patient-profile.html">
                              <img
                                src="assets/img/doctors-dashboard/profile-04.jpg"
                                alt="User Image"
                              />
                            </Link>
                            <div className="patient-info">
                              <p>#Apt0004</p>
                              <h6>
                                <Link to="patient-profile.html">
                                  Catherine Gracey
                                </Link>
                              </h6>
                              <ul>
                                <li>Age : 36</li>
                                <li>Female</li>
                                <li>AB-</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="appointment-info">
                        <p>
                          <i className="fa-solid fa-clock" />
                          18 Oct 2024 12.20 PM
                        </p>
                        <p className="mb-0">
                          <i className="fa-solid fa-location-dot" />
                          Los Angeles, USA
                        </p>
                      </li>
                      <li className="appointment-action">
                        <div className="patient-book">
                          <p>
                            <i className="fa-solid fa-calendar-days" />
                            Last Booking<span>27 Feb 2024</span>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /Appointment Grid */}
                <div className="col-md-12">
                  <div className="loader-item text-center">
                    <Link to="javascript:void(0);" className="btn btn-load">
                      Load More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default MyPatients
