import React from 'react'
import { Link } from 'react-router-dom'

const DoctorDashboard = () => {
  return (
    <div>
      <div class="breadcrumb-bar-two">
				<div class="container">
					<div class="row align-items-center inner-banner">
						<div class="col-md-12 col-12 text-center">
							<h2 class="breadcrumb-title">Dashboard</h2>
							<nav aria-label="breadcrumb" class="page-breadcrumb">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><Link to="index.html">Home</Link></li>
									<li class="breadcrumb-item" aria-current="page">Dashboard</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /Breadcrumb -->
			
			<!-- Page Content --> */}
			<div class="content">
				<div class="container">

					<div class="row">
						<div class="col-lg-4 col-xl-3 theiaStickySidebar">
							
							{/* <!-- Profile Sidebar --> */}
							<div class="profile-sidebar doctor-sidebar profile-sidebar-new">
								<div class="widget-profile pro-widget-content">
									<div class="profile-info-widget">
										<Link to="doctor-profile.html" class="booking-doc-img">
											<img src="assets/img/doctors-dashboard/doctor-profile-img.jpg" alt="User Image"/>
										</Link>
										<div class="profile-det-info">
											<h3><Link to="doctor-profile.html">Dr Edalin Hendry</Link></h3>
											<div class="patient-details">
												<h5 class="mb-0">BDS, MDS - Oral & Maxillofacial Surgery</h5>
											</div>
											<span class="badge doctor-role-badge"><i class="fa-solid fa-circle"></i>Dentist</span>
										</div>
									</div>
								</div>
								<div class="doctor-available-head">
									<div class="input-block input-block-new">
										<label class="form-label">Availability <span class="text-danger">*</span></label>
										<select class="select form-control">
											<option>I am Available Now</option>
											<option>Not Available</option>
										</select>
									</div>
								</div>
								<div class="dashboard-widget">
								<nav className="dashboard-menu">
										<ul>
											<li className="active">
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
						
						<div class="col-lg-8 col-xl-9">
                            <div class="upcoming-appointment-card">
                                <div class="title-card">
                                    <h5>Upcoming Appointment</h5>
                                </div>
                                <div class="upcoming-patient-info">
                                    <div class="info-details">
                                        <span class="img-avatar"><img src="assets/img/doctors-dashboard/profile-01.jpg" alt="Img"/></span>
                                        <div class="name-info">
                                            <span>#Apt0001</span>
                                            <h6>Adrian Marshall</h6>
                                        </div>
                                        
                                    </div>
                                    <div class="date-details">
                                        <span>General visit</span>
                                        <h6>Today, 10:45 AM</h6>
                                    </div>
                                    <div class="circle-bg">
                                        <img src="assets/img/bg/dashboard-circle-bg.png" alt="Img"/>
                                    </div>
                                </div>
                                <div class="appointment-card-footer">
                                    <h5><i class="fa-solid fa-video"></i>Video Appointment</h5>
                                    <div class="btn-appointments">
                                        <Link to="chat-doctor.html" class="btn">Chat Now</Link>
                                        <Link to="/doctorappointmentstart" class="btn">Start Appointment</Link>
                                    </div>
                                </div>
                            </div>
							<div>
								<div class="col-12 col-lg-12 col-xl-12">
									<div class="col-12 dashboard-box-col w-100 d-xl-flex d-lg-flex d-md-block d-block">
										<div class="dashboard-widget-box me-1">
											<div class="dashboard-content-info">
												<h6>Total Patient</h6>
												<h4>978</h4>
												<span class="text-success"><i class="fa-solid fa-arrow-up"></i>15% From Last Week</span>
											</div>
											<div class="dashboard-widget-icon">
												<span class="dash-icon-box"><i class="fa-solid fa-user-injured"></i></span>
											</div>
										</div>
										<div class="dashboard-widget-box me-1 ms-1">
											<div class="dashboard-content-info">
												<h6>Patients Today</h6>
												<h4>80</h4>
												<span class="text-danger"><i class="fa-solid fa-arrow-up"></i>15% From Yesterday</span>
											</div>
											<div class="dashboard-widget-icon">
												<span class="dash-icon-box"><i class="fa-solid fa-user-clock"></i></span>
											</div>
										</div>
										<div class="dashboard-widget-box ms-1">
											<div class="dashboard-content-info">
												<h6>Appointments Today</h6>
												<h4>50</h4>
												<span class="text-success"><i class="fa-solid fa-arrow-up"></i>20% From Yesterday</span>
											</div>
											<div class="dashboard-widget-icon">
												<span class="dash-icon-box"><i class="fa-solid fa-calendar-days"></i></span>
											</div>
										</div>
									</div>							
								</div>
								<div class="col-12 d-flex">
									<div class="col-5 dashboard-card w-100 me-1">
										<div class="dashboard-card-head">
											<div class="header-title">
												<h5>Appointment</h5>
											</div>
											<div class="dropdown header-dropdown">
												<Link class="dropdown-toggle nav-tog" data-bs-toggle="dropdown" to="javascript:void(0);">
													Last 7 Days
												</Link>
												<div class="dropdown-menu dropdown-menu-end">
													<Link to="javascript:void(0);" class="dropdown-item">
														Today
													</Link>
													<Link to="javascript:void(0);" class="dropdown-item">
														This Month
													</Link>
													<Link to="javascript:void(0);" class="dropdown-item">
														Last 7 Days
													</Link>
												</div>
											</div>
											
										</div>
										<div class="dashboard-card-body">
											<div class="table-responsive">
												<table class="table dashboard-table appoint-table">
													<tbody>
														<tr>
															<td>
																<div class="patient-info-profile">
																	<Link to="appointments.html" class="table-avatar">
																		<img src="assets/img/doctors-dashboard/profile-01.jpg" alt="Img"/>
																	</Link>
																	<div class="patient-name-info">
																		<span>#Apt0001</span>
																		<h5><Link to="appointments.html">Adrian Marshall</Link></h5>
																	</div>
																</div>
																
															</td>
															<td>
																<div class="appointment-date-created">
																	<h6>11 Nov 2024 10.45 AM</h6>
																	<span class="badge table-badge">General</span>
																</div>
															</td>
															<td>
																<div class="apponiment-actions d-flex align-items-center">
																	<Link to="#" class="text-success-icon me-2"><i class="fa-solid fa-check"></i></Link>
																	<Link to="#" class="text-danger-icon"><i class="fa-solid fa-xmark"></i></Link>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div class="patient-info-profile">
																	<Link to="appointments.html" class="table-avatar">
																		<img src="assets/img/doctors-dashboard/profile-02.jpg" alt="Img"/>
																	</Link>
																	<div class="patient-name-info">
																		<span>#Apt0002</span>
																		<h5><Link to="appointments.html">Kelly Stevens</Link></h5>
																	</div>
																</div>
																
															</td>
															<td>
																<div class="appointment-date-created">
																	<h6>10 Nov 2024 11.00 AM</h6>
																	<span class="badge table-badge">Clinic Consulting</span>
																</div>
															</td>
															<td>
																<div class="apponiment-actions d-flex align-items-center">
																	<Link to="#" class="text-success-icon me-2"><i class="fa-solid fa-check"></i></Link>
																	<Link to="#" class="text-danger-icon"><i class="fa-solid fa-xmark"></i></Link>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div class="patient-info-profile">
																	<Link to="appointments.html" class="table-avatar">
																		<img src="assets/img/doctors-dashboard/profile-03.jpg" alt="Img"/>
																	</Link>
																	<div class="patient-name-info">
																		<span>#Apt0003</span>
																		<h5><Link to="appointments.html">Samuel Anderson</Link></h5>
																	</div>
																</div>
																
															</td>
															<td>
																<div class="appointment-date-created">
																	<h6>03 Nov 2024 02.00 PM</h6>
																	<span class="badge table-badge">General</span>
																</div>
															</td>
															<td>
																<div class="apponiment-actions d-flex align-items-center">
																	<Link to="#" class="text-success-icon me-2"><i class="fa-solid fa-check"></i></Link>
																	<Link to="#" class="text-danger-icon"><i class="fa-solid fa-xmark"></i></Link>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div class="patient-info-profile">
																	<Link to="appointments.html" class="table-avatar">
																		<img src="assets/img/doctors-dashboard/profile-04.jpg" alt="Img"/>
																	</Link>
																	<div class="patient-name-info">
																		<span>#Apt0004</span>
																		<h5><Link to="appointments.html">Catherine Griffin</Link></h5>
																	</div>
																</div>
																
															</td>
															<td>
																<div class="appointment-date-created">
																	<h6>01 Nov 2024 04.00 PM</h6>
																	<span class="badge table-badge">Clinic Consulting</span>
																</div>
															</td>
															<td>
																<div class="apponiment-actions d-flex align-items-center">
																	<Link to="#" class="text-success-icon me-2"><i class="fa-solid fa-check"></i></Link>
																	<Link to="#" class="text-danger-icon"><i class="fa-solid fa-xmark"></i></Link>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div class="patient-info-profile">
																	<Link to="appointments.html" class="table-avatar">
																		<img src="assets/img/doctors-dashboard/profile-05.jpg" alt="Img"/>
																	</Link>
																	<div class="patient-name-info">
																		<span>#Apt0005</span>
																		<h5><Link to="appointments.html">Robert Hutchinson</Link></h5>
																	</div>
																</div>
																
															</td>
															<td>
																<div class="appointment-date-created">
																	<h6>28 Oct 2024 05.30 PM</h6>
																	<span class="badge table-badge">General</span>
																</div>
															</td>
															<td>
																<div class="apponiment-actions d-flex align-items-center">
																	<Link to="#" class="text-success-icon me-2"><i class="fa-solid fa-check"></i></Link>
																	<Link to="#" class="text-danger-icon"><i class="fa-solid fa-xmark"></i></Link>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										
									</div>
								</div>	
                                <div class="col-6 w-100 me-1 ms-1">
										<div class="dashboard-card w-100">
											<div class="dashboard-card-head">
												<div class="header-title">
													<h5>Recent Invoices</h5>
												</div>
												<div class="card-view-link">
													<Link to="invoices.html">View All</Link>
												</div>
											</div>
											<div class="dashboard-card-body">
												<div class="table-responsive">
													<table class="table dashboard-table">
														<tbody>
															<tr>
																<td>
																	<div class="patient-info-profile">
																		<Link to="invoices.html" class="table-avatar">
																			<img src="assets/img/doctors-dashboard/profile-01.jpg" alt="Img"/>
																		</Link>
																		<div class="patient-name-info">
																			<h5><Link to="invoices.html">Adrian</Link></h5>
																			<span>#Apt0001</span>
																		</div>
																	</div>
																</td>
																<td>
																	<div class="appointment-date-created">
																		<span class="paid-text">Amount</span>
																		<h6>$450</h6>
																	</div>
																</td>
																<td>
																	<div class="appointment-date-created">
																		<span class="paid-text">Paid On</span>
																		<h6>11 Nov 2024</h6>
																	</div>
																</td>	
																<td>
																	<div class="apponiment-view d-flex align-items-center">
																		<Link to="invoice-view.html"><i class="fa-solid fa-eye"></i></Link>
																	</div>
																</td>
															</tr>
															<tr>
																<td>
																	<div class="patient-info-profile">
																		<Link to="#" class="table-avatar">
																			<img src="assets/img/doctors-dashboard/profile-02.jpg" alt="Img"/>
																		</Link>
																		<div class="patient-name-info">
																			<h5><Link to="#">Kelly</Link></h5>
																			<span>#Apt0002</span>
																		</div>
																	</div>
																</td>
																<td>
																	<div class="appointment-date-created">
																		<span class="paid-text">Paid On</span>
																		<h6>10 Nov 2024</h6>
																	</div>
																</td>
																<td>
																	<div class="appointment-date-created">
																		<span class="paid-text">Amount</span>
																		<h6>$500</h6>
																	</div>
																</td>
																<td>
																	<div class="apponiment-view d-flex align-items-center">
																		<Link to="#"><i class="fa-solid fa-eye"></i></Link>
																	</div>
																</td>
															</tr>
															<tr>
																<td>
																	<div class="patient-info-profile">
																		<Link to="#" class="table-avatar">
																			<img src="assets/img/doctors-dashboard/profile-03.jpg" alt="Img"/>
																		</Link>
																		<div class="patient-name-info">
																			<h5><Link to="#">Samuel</Link></h5>
																			<span>#Apt0003</span>
																		</div>
																	</div>
																</td>
																<td>
																	<div class="appointment-date-created">
																		<span class="paid-text">Paid On</span>
																		<h6>03 Nov 2024</h6>
																	</div>
																</td>
																<td>
																	<div class="appointment-date-created">
																		<span class="paid-text">Amount</span>
																		<h6>$320</h6>
																	</div>
																</td>
																<td>
																	<div class="apponiment-view d-flex align-items-center">
																		<Link to="#"><i class="fa-solid fa-eye"></i></Link>
																	</div>
																</td>
															</tr>
															<tr>
																<td>
																	<div class="patient-info-profile">
																		<Link to="#" class="table-avatar">
																			<img src="assets/img/doctors-dashboard/profile-04.jpg" alt="Img"/>
																		</Link>
																		<div class="patient-name-info">
																			<h5><Link to="#">Catherine</Link></h5>
																			<span>#Apt0004</span>
																		</div>
																	</div>
																</td>
																<td>
																	<div class="appointment-date-created">
																		<span class="paid-text">Paid On</span>
																		<h6>01 Nov 2024</h6>
																	</div>
																</td>
																<td>
																	<div class="appointment-date-created">
																		<span class="paid-text">Amount</span>
																		<h6>$240</h6>
																	</div>
																</td>
																<td>
																	<div class="apponiment-view d-flex align-items-center">
																		<Link to="#"><i class="fa-solid fa-eye"></i></Link>
																	</div>
																</td>
															</tr>
															<tr>
																<td>
																	<div class="patient-info-profile">
																		<Link to="#" class="table-avatar">
																			<img src="assets/img/doctors-dashboard/profile-05.jpg" alt="Img"/>
																		</Link>
																		<div class="patient-name-info">
																			<h5><Link to="#">Robert</Link></h5>
																			<span>#Apt0005</span>
																		</div>
																	</div>
																</td>
																<td>
																	<div class="appointment-date-created">
																		<span class="paid-text">Paid On</span>
																		<h6>28 Oct 2024</h6>
																	</div>
																</td>
																<td>
																	<div class="appointment-date-created">
																		<span class="paid-text">Amount</span>
																		<h6>$380</h6>
																	</div>
																</td>
																<td>
																	<div class="apponiment-view d-flex align-items-center">
																		<Link to="#"><i class="fa-solid fa-eye"></i></Link>
																	</div>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
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

export default DoctorDashboard
