import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const DoctorChangePswd = () => {
  const [oldPasswordVisible,setOldPasswordVisible]=useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const toggleOldPasswordVisibility = () => {
    setOldPasswordVisible(!oldPasswordVisible);
  };

  const toggleNewPasswordVisibility = () => {
    setNewPasswordVisible(!newPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div>
      <>
  <div className="breadcrumb-bar-two">
    <div className="container">
      <div className="row align-items-center inner-banner">
        <div className="col-md-12 col-12 text-center">
          <h2 className="breadcrumb-title">Change Password</h2>
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="index.html">Home</Link>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                Change Password
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
											<li  className="active">
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
            <h3>Change Password</h3>
          </div>
          <form action="https://doccure.dreamstechnologies.com/html/template/doctor-change-password.html">
            <div className="card pass-card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-block input-block-new">
                      <label className="form-label">Old Password</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="input-block input-block-new">
                      <label className="form-label">New Password</label>
                      <div className="pass-group">
                        <input
                          type={newPasswordVisible ? 'text' : 'password'}
                          className="form-control pass-input"
                        />
                        <span className="feather-eye-off toggle-password" onClick={toggleNewPasswordVisibility}/>
                      </div>
                    </div>
                    <div className="input-block input-block-new mb-0">
                      <label className="form-label">Confirm Password</label>
                      <div className="pass-group">
                        <input
                          type={confirmPasswordVisible ? 'text' : 'password'}
                          className="form-control pass-input-sub"
                        />
                        <span className="feather-eye-off toggle-password-sub" onClick={toggleConfirmPasswordVisibility}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-set-button">
              <button className="btn btn-light" type="button">
                Cancel
              </button>
              <button className="btn btn-primary" type="submit">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default DoctorChangePswd
