import React from 'react'
import { Link } from 'react-router-dom'

const DoctorAppointmentStart = () => {
  return (
    <div>
      <>
  <div className="breadcrumb-bar-two">
    <div className="container">
      <div className="row align-items-center inner-banner">
        <div className="col-md-12 col-12 text-center">
          <h2 className="breadcrumb-title">Appointment Detail</h2>
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="index.html">Home</Link>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                Appointment Detail
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* /Breadcrumb */}
  {/* Page Content */}
  <div className="content">
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
                    <li className='active'>
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
                    <li>
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
            <div className="header-back">
              <Link to="appointments.html" className="back-arrow">
                <i className="fa-solid fa-arrow-left" />
              </Link>
              <h3>Appointment Details</h3>
            </div>
          </div>
          <div className="appointment-details-wrap">
            {/* Appointment Detail Card */}
            <div className="appointment-wrap appointment-detail-card">
              <ul>
                <li>
                  <div className="patinet-information">
                    <Link to="patient-profile.html">
                      <img
                        src="assets/img/doctors-dashboard/profile-02.jpg"
                        alt="User Image"
                      />
                    </Link>
                    <div className="patient-info">
                      <p>#Apt0001</p>
                      <h6>
                        <Link to="patient-profile.html">Kelly Joseph </Link>
                      </h6>
                      <div className="mail-info-patient">
                        <ul>
                          <li>
                            <i className="fa-solid fa-envelope" />
                            <Link
                              to="https://doccure.dreamstechnologies.com/cdn-cgi/l/email-protection"
                              className="__cf_email__"
                              data-cfemail="bad1dfd6d6c3fadfc2dbd7cad6df94d9d5d7"
                            >
                              [email&nbsp;protected]
                            </Link>
                          </li>
                          <li>
                            <i className="fa-solid fa-phone" />
                            +1 504 368 6874
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="appointment-info">
                  <div className="person-info">
                    <p>Person with patient</p>
                    <ul className="d-flex apponitment-types">
                      <li>Andrew (45)</li>
                    </ul>
                  </div>
                  <div className="person-info">
                    <p>Type of Appointment</p>
                    <ul className="d-flex apponitment-types">
                      <li>
                        <i className="fa-solid fa-hospital text-green" />
                        Direct Visit
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="appointment-action">
                  <div className="detail-badge-info">
                    <span className="badge bg-yellow">Upcoming</span>
                  </div>
                  <div className="consult-fees">
                    <h6>Consultation Fees : $200</h6>
                  </div>
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fa-solid fa-comments" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-solid fa-xmark" />
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="detail-card-bottom-info">
                <li>
                  <h6>Appointment Date &amp; Time</h6>
                  <span>22 Jul 2023 - 12:00 pm</span>
                </li>
                <li>
                  <h6>Clinic Location</h6>
                  <span>Adrian’s Dentistry</span>
                </li>
                <li>
                  <h6>Location</h6>
                  <span>Newyork, United States</span>
                </li>
                <li>
                  <h6>Visit Type</h6>
                  <span>General</span>
                </li>
                <li>
                  <div className="start-btn">
                    <Link to="#" className="btn btn-secondary">
                      Inprogress
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            {/* /Appointment Detail Card */}
            <div className="create-appointment-details">
              <div className="session-end-head">
                <h6>
                  <span>Session Ends in</span>08M:00S
                </h6>
              </div>
              <h5 className="head-text">Create Appointment Details</h5>
              <div className="create-details-card">
                <div className="create-details-card-head">
                  <div className="card-title-text">
                    <h5>Patient Information</h5>
                  </div>
                  <div className="patient-info-box">
                    <div className="row">
                      <div className="col-xl-3 col-md-6">
                        <ul className="info-list">
                          <li>Age / Gender</li>
                          <li>
                            <h6>28 Years / Female</h6>
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-3 col-md-6">
                        <ul className="info-list">
                          <li>Address</li>
                          <li>
                            <h6>Newyork, United States</h6>
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-3 col-md-6">
                        <ul className="info-list">
                          <li>Blood Group</li>
                          <li>
                            <h6>O+ve</h6>
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-3 col-md-6">
                        <ul className="info-list">
                          <li>No of Visit</li>
                          <li>
                            <h6>0</h6>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="create-details-card-body">
                  <form action="https://doccure.dreamstechnologies.com/html/template/doctor-appointment-start.html">
                    <div className="start-appointment-set">
                      <div className="form-bg-title">
                        <h5>Vitals</h5>
                      </div>
                      <div className="row">
                        <div className="col-xl-3 col-md-6">
                          <div className="input-block input-block-new">
                            <label className="form-label">Temprature</label>
                            <div className="input-text-field">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Eg : 97.8"
                              />
                              <span className="input-group-text">F</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                          <div className="input-block input-block-new">
                            <label className="form-label">Pulse</label>
                            <div className="input-text-field">
                              <input
                                type="text"
                                className="form-control"
                                placeholder={454}
                              />
                              <span className="input-group-text">mmHg</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                          <div className="input-block input-block-new">
                            <label className="form-label">
                              Respiratory Rate
                            </label>
                            <div className="input-text-field">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Eg : 97.8"
                              />
                              <span className="input-group-text">rpm</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                          <div className="input-block input-block-new">
                            <label className="form-label">SPO2</label>
                            <div className="input-text-field">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Eg : 98"
                              />
                              <span className="input-group-text">%</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                          <div className="input-block input-block-new">
                            <label className="form-label">Height</label>
                            <div className="input-text-field">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Eg : 97.8"
                              />
                              <span className="input-group-text">cm</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                          <div className="input-block input-block-new">
                            <label className="form-label">Weight</label>
                            <div className="input-text-field">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Eg : 97.8"
                              />
                              <span className="input-group-text">Kg</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                          <div className="input-block input-block-new">
                            <label className="form-label">Waist</label>
                            <div className="input-text-field">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Eg : 97.8"
                              />
                              <span className="input-group-text">cm</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                          <div className="input-block input-block-new">
                            <label className="form-label">BSA</label>
                            <div className="input-text-field">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Eg : 54"
                              />
                              <span className="input-group-text">M</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                          <div className="input-block input-block-new">
                            <label className="form-label">BMI</label>
                            <div className="input-text-field">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Eg : 454"
                              />
                              <span className="input-group-text">kg/cm</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="start-appointment-set">
                      <div className="form-bg-title">
                        <h5>Previous Medical History</h5>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="input-block input-block-new">
                            <textarea
                              className="form-control"
                              rows={3}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="start-appointment-set">
                      <div className="form-bg-title">
                        <h5>Clinical Notes</h5>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="input-block input-block-new">
                            <textarea
                              className="form-control"
                              rows={3}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="start-appointment-set">
                      <div className="form-bg-title">
                        <h5>Clinical Notes</h5>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="input-block input-block-new">
                            <input
                              className="input-tags form-control"
                              id="inputBox"
                              type="text"
                              data-role="tagsinput"
                              placeholder="Type New"
                              name="Label"
                              defaultValue="Skin Allergy"
                            />
                            <Link to="#" className="input-text save-btn">
                              Save
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="start-appointment-set">
                      <div className="form-bg-title">
                        <h5>Laboratory Tests</h5>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="input-block input-block-new">
                            <input
                              className="input-tags form-control"
                              id="inputBox2"
                              type="text"
                              data-role="tagsinput"
                              placeholder="Type New"
                              name="Label"
                              defaultValue="Hemoglobin A1c (HbA1c),Liver Function Tests (LFTs)"
                            />
                            <Link to="#" className="input-text save-btn">
                              Save
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="start-appointment-set">
                      <div className="form-bg-title">
                        <h5>Complaints</h5>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="input-block input-block-new">
                            <input
                              className="input-tags form-control"
                              id="inputBox3"
                              type="text"
                              data-role="tagsinput"
                              placeholder="Type New"
                              name="Label"
                              defaultValue="Fever,Headache,Stomach Pain"
                            />
                            <Link to="#" className="input-text save-btn">
                              Save
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="start-appointment-set">
                      <div className="form-bg-title">
                        <h5>Diagonosis</h5>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="input-block input-block-new">
                            <div className="input-field-set">
                              <label className="form-label">Fever</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Diagnosis"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="input-block input-block-new">
                            <div className="input-field-set">
                              <label className="form-label">Headache</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Diagnosis"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="input-block input-block-new">
                            <div className="input-field-set">
                              <label className="form-label">Stomach Pain</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Diagnosis"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="start-appointment-set">
                      <div className="form-bg-title">
                        <h5>Medications</h5>
                      </div>
                      <div className="row meditation-row">
                        <div className="col-md-12">
                          <div className="d-flex flex-wrap medication-wrap align-items-center">
                            <div className="input-block input-block-new">
                              <label className="form-label">Name</label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="input-block input-block-new">
                              <label className="form-label">Type</label>
                              <select className="select form-control">
                                <option>Select</option>
                                <option>Direct Visit</option>
                                <option>Video Call</option>
                              </select>
                            </div>
                            <div className="input-block input-block-new">
                              <label className="form-label">Dosage</label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="input-block input-block-new">
                              <label className="form-label">Duration</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="1-0-0"
                              />
                            </div>
                            <div className="input-block input-block-new">
                              <label className="form-label">Duration</label>
                              <select className="select form-control">
                                <option>Select</option>
                                <option>Not Available</option>
                              </select>
                            </div>
                            <div className="input-block input-block-new">
                              <label className="form-label">Instruction</label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="delete-row">
                              <Link
                                to="#"
                                className="delete-btn delete-medication trash text-danger"
                              >
                                <i className="fa-solid fa-trash-can" />
                              </Link>
                            </div>
                          </div>
                          <div className="add-new-med text-end mb-4">
                            <Link to="#" className="add-medical more-item mb-0">
                              Add New
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="start-appointment-set">
                      <div className="form-bg-title">
                        <h5>Advice</h5>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="input-block input-block-new">
                            <textarea
                              className="form-control"
                              rows={3}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="start-appointment-set">
                      <div className="form-bg-title">
                        <h5>Follow Up</h5>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="input-block input-block-new">
                            <textarea
                              className="form-control"
                              rows={3}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-set-button">
                        <button className="btn btn-light" type="button">
                          Cancel
                        </button>
                        <button
                          className="btn btn-primary"
                          type="button"
                          data-bs-toggle="modal"
                          data-bs-target="#end_session"
                        >
                          Save &amp; End Appointment
                        </button>
                      </div>
                    </div>
                  </form>
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

export default DoctorAppointmentStart
