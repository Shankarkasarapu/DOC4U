import React from 'react'
import { Link } from 'react-router-dom'

const Requests = () => {
  return (
    <div>
      <div className="breadcrumb-bar-two">
        <div className="container">
            <div className="row align-items-center inner-banner">
                <div className="col-md-12 col-12 text-center">
                    <h2 className="breadcrumb-title">Requests</h2>
                    <nav aria-label="breadcrumb" className="page-breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
                            <li className="breadcrumb-item" aria-current="page">Requests</li>
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
						
							{/* <!-- Profile Sidebar --> */}
							<div className="profile-sidebar doctor-sidebar profile-sidebar-new">
								<div className="widget-profile pro-widget-content">
									<div className="profile-info-widget">
										<Link to="doctor-profile.html" className="booking-doc-img">
											<img loading="lazy" decoding="async" src="assets/img/doctors-dashboard/doctor-profile-img.jpg" alt="User Image"/>
										</Link>
										<div className="profile-det-info">
											<h3><Link to="doctor-profile.html">Dr Edalin Hendry</Link></h3>
											<div className="patient-details">
												<h5 className="mb-0">BDS, MDS - Oral & Maxillofacial Surgery</h5>
											</div>
											<span className="badge doctor-role-badge"><i className="fa-solid fa-circle"></i>Dentist</span>
										</div>
									</div>
								</div>
								<div className="doctor-available-head">
									<div className="input-block input-block-new">
										<label className="form-label">Availability <span className="text-danger">*</span></label>
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
											<li className="active">
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
							{/* <!-- /Profile Sidebar --> */}
							
						</div>
						
						<div className="col-lg-8 col-xl-9">

							<div className="dashboard-header">
								<h3>Requests</h3>
								<ul>
									<li>
										<div className="dropdown header-dropdown">
											<Link className="dropdown-toggle nav-tog" data-bs-toggle="dropdown" to="javascript:void(0);">
												Last 7 Days
											</Link>
											<div className="dropdown-menu dropdown-menu-end">
												<Link to="javascript:void(0);" className="dropdown-item">
													Today
												</Link>
												<Link to="javascript:void(0);" className="dropdown-item">
													This Month
												</Link>
												<Link to="javascript:void(0);" className="dropdown-item">
													Last 7 Days
												</Link>
											</div>
										</div>
									</li>
								</ul>
							</div>
							
							{/* <!-- Request List --> */}
							<div className="appointment-wrap">
								<ul>
									<li>
										<div className="patinet-information">
											<Link to="patient-profile.html">
												<img loading="lazy" decoding="async" src="assets/img/doctors-dashboard/profile-01.jpg" alt="User Image"/>
											</Link>
											<div className="patient-info">
												<p>#Apt0001</p>
												<h6><Link to="patient-profile.html">Adrian</Link><span className="badge new-tag">New</span></h6>
											</div>
										</div>
									</li>
									<li className="appointment-info">
										<p><i className="fa-solid fa-clock"></i>11 Nov 2024 10.45 AM</p>
									</li>
									<li className="appointment-type">
										
										<p><i className="fa-solid fa-video text-blue"></i>Video Call</p>
									</li>
									<li>
										<ul className="request-action">
											<li>
												<Link to="#" className="accept-link" data-bs-toggle="modal" data-bs-target="#accept_appointment"><i className="fa-solid fa-check"></i>Accept</Link>
											</li>
											<li>
												<Link to="#" className="reject-link" data-bs-toggle="modal" data-bs-target="#cancel_appointment"><i className="fa-solid fa-xmark"></i>Reject</Link>
											</li>
										</ul>
									</li>
								</ul>
							</div>
							{/* <!-- /Request List -->

							<!-- Request List --> */}
							<div className="appointment-wrap">
								<ul>
									<li>
										<div className="patinet-information">
											<Link to="patient-profile.html">
												<img loading="lazy" decoding="async" src="assets/img/doctors-dashboard/profile-02.jpg" alt="User Image"/>
											</Link>
											<div className="patient-info">
												<p>#Apt0002</p>
												<h6><Link to="patient-profile.html">Kelly</Link></h6>
											</div>
										</div>
									</li>
									<li className="appointment-info">
										<p><i className="fa-solid fa-clock"></i>10 Nov 2024 02.00 PM</p>
									</li>
									<li className="appointment-type">
										
										<p><i className="fa-solid fa-building text-green"></i>Direct Visit <i className="fa-solid fa-circle-info" data-bs-toggle="tooltip" title="Clinic Location Sofia’s Clinic"></i></p>
									</li>
									<li>
										<ul className="request-action">
											<li>
												<Link to="#" className="accept-link" data-bs-toggle="modal" data-bs-target="#accept_appointment"><i className="fa-solid fa-check"></i>Accept</Link>
											</li>
											<li>
												<Link to="#" className="reject-link" data-bs-toggle="modal" data-bs-target="#cancel_appointment"><i className="fa-solid fa-xmark"></i>Reject</Link>
											</li>
										</ul>
									</li>
								</ul>
							</div>
							{/* <!-- /Request List -->


							<!-- Request List --> */}
							<div className="appointment-wrap">
								<ul>
									<li>
										<div className="patinet-information">
											<Link to="patient-profile.html">
												<img loading="lazy" decoding="async" src="assets/img/doctors-dashboard/profile-03.jpg" alt="User Image"/>
											</Link>
											<div className="patient-info">
												<p>#Apt0003</p>
												<h6><Link to="patient-profile.html">Samuel</Link></h6>
											</div>
										</div>
									</li>
									<li className="appointment-info">
										<p><i className="fa-solid fa-clock"></i>08 Nov 2024 08.30 AM</p>
									</li>
									<li className="appointment-type">
										
										<p><i className="fa-solid fa-phone text-indigo"></i>Audio Call</p>
									</li>
									<li>
										<ul className="request-action">
											<li>
												<Link to="#" className="accept-link" data-bs-toggle="modal" data-bs-target="#accept_appointment"><i className="fa-solid fa-check"></i>Accept</Link>
											</li>
											<li>
												<Link to="#" className="reject-link" data-bs-toggle="modal" data-bs-target="#cancel_appointment"><i className="fa-solid fa-xmark"></i>Reject</Link>
											</li>
										</ul>
									</li>
								</ul>
							</div>
							{/* <!-- /Request List -->

							<!-- Request List --> */}
							<div className="appointment-wrap">
								<ul>
									<li>
										<div className="patinet-information">
											<Link to="patient-profile.html">
												<img loading="lazy" decoding="async" src="assets/img/doctors-dashboard/profile-06.jpg" alt="User Image"/>
											</Link>
											<div className="patient-info">
												<p>#Apt0004</p>
												<h6><Link to="patient-profile.html">Anderea</Link></h6>
											</div>
										</div>
									</li>
									<li className="appointment-info">
										<p><i className="fa-solid fa-clock"></i>05 Nov 2024 11.00 AM</p>
									</li>
									<li className="appointment-type">
										
										<p><i className="fa-solid fa-phone text-indigo"></i>Audio Call</p>
									</li>
									<li>
										<ul className="request-action">
											<li>
												<Link to="#" className="accept-link" data-bs-toggle="modal" data-bs-target="#accept_appointment"><i className="fa-solid fa-check"></i>Accept</Link>
											</li>
											<li>
												<Link to="#" className="reject-link" data-bs-toggle="modal" data-bs-target="#cancel_appointment"><i className="fa-solid fa-xmark"></i>Reject</Link>
											</li>
										</ul>
									</li>
								</ul>
							</div>
							{/* <!-- /Request List -->

							<!-- Request List --> */}
							<div className="appointment-wrap">
								<ul>
									<li>
										<div className="patinet-information">
											<Link to="patient-profile.html">
												<img loading="lazy" decoding="async" src="assets/img/doctors-dashboard/profile-05.jpg" alt="User Image"/>
											</Link>
											<div className="patient-info">
												<p>#Apt0005</p>
												<h6><Link to="patient-profile.html">Robert</Link></h6>
											</div>
										</div>
									</li>
									<li className="appointment-info">
										<p><i className="fa-solid fa-clock"></i>07 Nov 2024 11.00 AM</p>
									</li>
									<li className="appointment-type">
										
										<p><i className="fa-solid fa-phone text-indigo"></i>Audio Call</p>
									</li>
									<li>
										<ul className="request-action">
											<li>
												<Link to="#" className="accept-link" data-bs-toggle="modal" data-bs-target="#accept_appointment"><i className="fa-solid fa-check"></i>Accept</Link>
											</li>
											<li>
												<Link to="#" className="reject-link" data-bs-toggle="modal" data-bs-target="#cancel_appointment"><i className="fa-solid fa-xmark"></i>Reject</Link>
											</li>
										</ul>
									</li>
								</ul>
							</div>
							{/* <!-- /Request List --> */}

							<div className="row">
								<div className="col-md-12">
									<div className="loader-item text-center">
										<Link to="javascript:void(0);" className="btn btn-load">Load More</Link>
									</div>
								</div>
							</div>

						</div>
					</div>

				</div>

			</div>
    </div>
  )
}

export default Requests
