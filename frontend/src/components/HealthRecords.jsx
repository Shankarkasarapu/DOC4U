import React, { useState } from 'react'

const HealthRecords = () => {
	const [activeTab, setActiveTab] = useState('appoint-tab');
  return (
    <div>
        <div className="col-xl-12 d-flex">
			<div className="dashboard-card w-100">
				<div className="dashboard-card-head">
					<div className="header-title">
						<h5>Reports</h5>
					</div>
				</div>
				<div className="dashboard-card-body">
					<div className="account-detail-table">
						<nav className="patient-dash-tab border-0 pb-0 mb-3 mt-3">
							<ul className="nav nav-tabs-bottom">
								<li className="nav-item">
									<a className={`nav-link ${activeTab === 'appoint-tab' ? 'active' : ''}`} href="#appoint-tab" data-bs-toggle="tab" onClick={() => setActiveTab('appoint-tab')} >
										Appointments
									</a>
								</li>
								<li className="nav-item">
													<a
													className={`nav-link ${activeTab === 'medical-tab' ? 'active' : ''}`}
													href="#medical-tab"
													data-bs-toggle="tab"
													onClick={() => setActiveTab('medical-tab')}
													>
													Medical Records
													</a>
												</li>
												<li className="nav-item">
													<a
													className={`nav-link ${activeTab === 'prsc-tab' ? 'active' : ''}`}
													href="#prsc-tab"
													data-bs-toggle="tab"
													onClick={() => setActiveTab('prsc-tab')}
													>
													Prescriptions
													</a>
												</li>
												<li className="nav-item">
													<a
													className={`nav-link ${activeTab === 'invoice-tab' ? 'active' : ''}`}
													href="#invoice-tab"
													data-bs-toggle="tab"
													onClick={() => setActiveTab('invoice-tab')}
													>
													Invoices
													</a>
												</li>
												</ul>
											</nav>
											   <div className="tab-content pt-0">
											   <div id="appoint-tab" className={`tab-pane fade ${activeTab === 'appoint-tab' ? 'show active' : ''}`} >
													<div className="custom-new-table">
														<div className="table-responsive">
															<table className="table table-hover table-center mb-0">
																<thead>
																	<tr>
																		<th>ID</th>
																		<th>Test Name</th>
																		<th>Date</th>
																		<th>Referred By</th>
																		<th>Amount</th>
																		<th>Comments</th>
																		<th>Status</th>
																		<th></th>
																	</tr>
																</thead>
																<tbody>
																	<tr>
																		<td>
																			<a href="javascript:void(0);"><span className="text-blue">RE124343</span></a>
																		</td>
																		<td>
																			 Electro cardiography
																		</td>
																		<td>21 Mar 2024</td>
																		<td>Edalin Hendry</td>
																		<td>$300</td>
																		<td>Good take rest</td>
																		<td>
																			<span className="badge badge-success-bg">Normal</span>
																		</td>
																		<td>
																			<div className="d-flex align-items-center">
																				<a href="#" className="account-action me-2"><i className="fa-solid fa-prescription"></i></a>
																				<a href="#" className="account-action"><i className="fa-solid fa-file-invoice-dollar"></i></a>
																			</div>
																		</td>
																	</tr>
																	<tr>
																	<td>
																		<a href="javascript:void(0);"><span className="text-blue">RE124342</span></a>
																	</td>
																	 <td>
																		 Complete Blood Count
																	 </td>
																	 <td>28 Mar 2024</td>
																	 <td>Shanta Nesmith</td>
																	 <td>$400</td>
																	 <td>Stable, no change</td>
																	 <td>
																		 <span className="badge badge-success-bg">Normal</span>
																	 </td>
																	 <td>
																		 <div className="d-flex align-items-center">
																			 <a href="#" className="account-action me-2"><i className="fa-solid fa-prescription"></i></a>
																			 <a href="#" className="account-action"><i className="fa-solid fa-file-invoice-dollar"></i></a>
																		 </div>
																		 
																	 </td>
																 </tr>
																 <tr>
																	 <td>
																		<a href="javascript:void(0);"><span className="text-blue">RE124341</span></a>
																	 </td>
																	 <td>
																		 Blood Glucose Test
																	 </td>
																	 <td>02 Apr 2024</td>
																	 <td>John Ewel</td>
																	 <td>$350</td>
																	 <td>All Clear</td>
																	 <td>
																		 <span className="badge badge-success-bg">Normal</span>
																	 </td>
																	 <td>
																		 <div className="d-flex align-items-center">
																			 <a href="#" className="account-action me-2"><i className="fa-solid fa-prescription"></i></a>
																			 <a href="#" className="account-action"><i className="fa-solid fa-file-invoice-dollar"></i></a>
																		 </div>
																		 
																	 </td>
																 </tr>
																 <tr>
																	 <td>
																		<a href="javascript:void(0);"><span className="text-blue">RE124340</span></a> 
																	 </td>
																	 <td>
																		 Liver Function Tests
																	 </td>
																	 <td>15 Apr 2024</td>
																	 <td>Joseph Engels</td>
																	 <td>$480</td>
																	 <td>Stable, no change</td>
																	 <td>
																		 <span className="badge badge-success-bg">Normal</span>
																	 </td>
																	 <td>
																		 <div className="d-flex align-items-center">
																			 <a href="#" className="account-action me-2"><i className="fa-solid fa-prescription"></i></a>
																			 <a href="#" className="account-action"><i className="fa-solid fa-file-invoice-dollar"></i></a>
																		 </div>
																		 
																	 </td>
																 </tr>
																 <tr>
																	 <td>
																		<a href="javascript:void(0);"><span className="text-blue">RE124339</span></a>
																	 </td>
																	 <td>
																		 Lipid Profile
																	 </td>
																	 <td>27 Apr 2024</td>
																	 <td>Victoria Selzer</td>
																	 <td>$250</td>
																	 <td>Good take rest</td>
																	 <td>
																		 <span className="badge badge-success-bg">Normal</span>
																	 </td>
																	 <td>
																		 <div className="d-flex align-items-center">
																			 <a href="#" className="account-action me-2"><i className="fa-solid fa-prescription"></i></a>
																			 <a href="#" className="account-action"><i className="fa-solid fa-file-invoice-dollar"></i></a>
																		 </div>
																		 
																	 </td>
																 </tr>
																 <tr>
																	 <td>
																		<a href="#"><span className="text-blue">RE124338</span></a> 
																	 </td>
																	 <td>
																		 Blood Cultures
																	 </td>
																	 <td>10 May 2024</td>
																	 <td>Juliet Gabriel</td>
																	 <td>$320</td>
																	 <td>Good take rest</td>
																	 <td>
																		 <span className="badge badge-success-bg">Normal</span>
																	 </td>
																	 <td>
																		 <div className="d-flex align-items-center">
																			 <a href="#" className="account-action me-2"><i className="fa-solid fa-prescription"></i></a>
																			 <a href="#" className="account-action"><i className="fa-solid fa-file-invoice-dollar"></i></a>
																		 </div>
																		 
																	 </td>
																 </tr> 
																</tbody>
															</table>
														</div>
													</div>
												   </div>
												   <div id="medical-tab" className={`tab-pane fade ${activeTab === 'medical-tab' ? 'show active' : ''}`} >
														<div className="custom-table">
															<div className="table-responsive">
																<table className="table table-center mb-0">
																	<thead>
																		<tr>
																			<th>ID</th>
																			<th>Name</th>
																			<th>Date</th>
																			<th>Description</th>
																			<th>Action</th>
																		</tr>
																	</thead>
																	<tbody>
																		<tr>
																			<td className="text-blue-600"><a href="javascript:void(0);">#MR-123</a></td>
																			<td>
																				<a href="javascript:void(0);" className="lab-icon">
																					<span><i className="fa-solid fa-paperclip"></i></span>Lab Report
																				</a>
																			</td>
																			<td>24 Mar 2024</td>
																			<td>Glucose Test V12</td>
																			<td>
																				<div className="action-item">
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-pen-to-square"></i>
																					</a>
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-download"></i>
																					</a>
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-trash-can"></i>
																					</a>
																				</div>
																			</td>
																		</tr>
																		<tr>
																			<td className="text-blue-600"><a href="javascript:void(0);">#MR-124</a></td>
																			<td>
																				<a href="javascript:void(0);" className="lab-icon">
																					<span><i className="fa-solid fa-paperclip"></i></span>Lab Report
																				</a>
																			</td>
																			<td>27 Mar 2024</td>
																			<td>Complete Blood Count(CBC)</td>
																			<td>
																				<div className="action-item">
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-pen-to-square"></i>
																					</a>
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-download"></i>
																					</a>
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-trash-can"></i>
																					</a>
																				</div>
																			</td>
																		</tr>
																		<tr>
																			<td className="text-blue-600"><a href="#">#MR-125</a></td>
																			<td>
																				<a href="javascript:void(0);" className="lab-icon">
																					<span><i className="fa-solid fa-paperclip"></i></span>Lab Report
																				</a>
																			</td>
																			<td>10 Apr 2024</td>
																			<td>Echocardiogram</td>
																			<td>
																				<div className="action-item">
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-pen-to-square"></i>
																					</a>
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-download"></i>
																					</a>
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-trash-can"></i>
																					</a>
																				</div>
																			</td>
																		</tr>
																		<tr>
																			<td className="text-blue-600"><a href="javascript:void(0);">#MR-126</a></td>
																			<td>
																				<a href="javascript:void(0);" className="lab-icon">
																					<span><i className="fa-solid fa-paperclip"></i></span>Lab Report
																				</a>
																			</td>
																			<td>19 Apr 2024</td>
																			<td>COVID-19 Test</td>
																			<td>
																				<div className="action-item">
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-pen-to-square"></i>
																					</a>
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-download"></i>
																					</a>
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-trash-can"></i>
																					</a>
																				</div>
																			</td>
																		</tr>
																		<tr>
																			<td className="text-blue-600"><a href="javascript:void(0);">#MR-127</a></td>
																			<td>
																				<a href="javascript:void(0);" className="lab-icon">
																					<span><i className="fa-solid fa-paperclip"></i></span>Lab Report
																				</a>
																			</td>
																			<td>27 Apr 2024</td>
																			<td>Allergy Tests</td>
																			<td>
																				<div className="action-item">
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-pen-to-square"></i>
																					</a>
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-download"></i>
																					</a>
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-trash-can"></i>
																					</a>
																				</div>
																			</td>
																		</tr>
																		<tr>
																			<td className="text-blue-600"><a href="#">#MR-128</a></td>
																			<td>
																				<a href="javascript:void(0);" className="lab-icon">
																					<span><i className="fa-solid fa-paperclip"></i></span>Lab Report
																				</a>
																			</td>
																			<td>02 May  2024</td>
																			<td>Lipid Panel </td>
																			<td>
																				<div className="action-item">
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-pen-to-square"></i>
																					</a>
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-download"></i>
																					</a>
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-trash-can"></i>
																					</a>
																				</div>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</div>
														</div>
												   </div>
												   <div id="prsc-tab" className={`tab-pane fade ${activeTab === 'prsc-tab' ? 'show active' : ''}`} >
														<div className="custom-table">
															<div className="table-responsive">
																<table className="table table-center mb-0">
																	<thead>
																		<tr>
																			<th>ID</th>
																			<th>Name</th>
																			<th>Created Date</th>
																			<th>Prescriped By</th>
																			<th>Action</th>
																		</tr>
																	</thead>
																	<tbody>
																		<tr>
																			<td className="text-blue-600"><a href="#"  data-bs-toggle="modal" data-bs-target="#view_prescription">#PR-123</a></td>
																			<td>
																				<a href="javascript:void(0);" className="lab-icon prescription">
																					<span><i className="fa-solid fa-prescription"></i></span>Prescription
																				</a>
																			</td>
																			<td>24 Mar 2024, 10:30 AM</td>
																			<td>
																				<h2 className="table-avatar">
																					<a href="doctor-profile.html" className="avatar avatar-sm me-2">
																						<img className="avatar-img rounded-3" src="assets/img/doctors/doctor-thumb-02.jpg" alt="User Image"/>
																					</a>
																					<a href="doctor-profile.html">Edalin Hendry</a>
																				</h2>
																			</td>
																			<td>
																				<div className="action-item">
																					<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_prescription">
																						<i className="fa-solid fa-link"></i>
																					</a>
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-download"></i>
																					</a>
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-trash-can"></i>
																					</a>
																				</div>
																			</td>
																		</tr>
																		<tr>															
																			<td className="text-blue-600"><a href="#"  data-bs-toggle="modal" data-bs-target="#view_prescription">#PR-124</a></td>
																			<td>
																				<a href="javascript:void(0);" className="lab-icon prescription">
																					<span><i className="fa-solid fa-prescription"></i></span>Prescription
																				</a>
																			</td>
																			<td>27 Mar 2024, 11:15 AM</td>
																			<td>
																				<h2 className="table-avatar">
																					<a href="doctor-profile.html" className="avatar avatar-sm me-2">
																						<img className="avatar-img rounded-3" src="assets/img/doctors/doctor-thumb-05.jpg" alt="User Image"/>
																					</a>
																					<a href="doctor-profile.html">John Homes</a>
																				</h2>
																			</td>
																			<td>
																				<div className="action-item">
																					<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_prescription">
																						<i className="fa-solid fa-link"></i>
																					</a>
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-download"></i>
																					</a>
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-trash-can"></i>
																					</a>
																				</div>
																			</td>
																		</tr>
																		<tr>														
																			<td className="text-blue-600"><a href="#"  data-bs-toggle="modal" data-bs-target="#view_prescription">#PR-125</a></td>
																			<td>
																				<a href="javascript:void(0);" className="lab-icon prescription">
																					<span><i className="fa-solid fa-prescription"></i></span>Prescription
																				</a>
																			</td>
																			<td>11 Apr 2024, 09:00 AM</td>
																			<td>
																				<h2 className="table-avatar">
																					<a href="doctor-profile.html" className="avatar avatar-sm me-2">
																						<img className="avatar-img rounded-3" src="assets/img/doctors/doctor-thumb-03.jpg" alt="User Image"/>
																					</a>
																					<a href="doctor-profile.html">Shanta Neill</a>
																				</h2>
																			</td>
																			<td>
																				<div className="action-item">
																					<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_prescription">
																						<i className="fa-solid fa-link"></i>
																					</a>
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-download"></i>
																					</a>
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-trash-can"></i>
																					</a>
																				</div>
																			</td>
																		</tr>
																		<tr>														
																			<td className="text-blue-600"><a href="#"  data-bs-toggle="modal" data-bs-target="#view_prescription">#PR-126</a></td>
																			<td>
																				<a href="javascript:void(0);" className="lab-icon prescription">
																					<span><i className="fa-solid fa-prescription"></i></span>Prescription
																				</a>
																			</td>
																			<td>15 Apr 2024, 02:30 PM</td>
																			<td>
																				<h2 className="table-avatar">
																					<a href="doctor-profile.html" className="avatar avatar-sm me-2">
																						<img className="avatar-img rounded-3" src="assets/img/doctors/doctor-thumb-08.jpg" alt="User Image"/>
																					</a>
																					<a href="doctor-profile.html">Anthony Tran</a>
																				</h2>
																			</td>
																			<td>
																				<div className="action-item">
																					<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_prescription">
																						<i className="fa-solid fa-link"></i>
																					</a>
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-download"></i>
																					</a>
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-trash-can"></i>
																					</a>
																				</div>
																			</td>
																		</tr>
																		<tr>														
																			<td className="text-blue-600"><a href="#" data-bs-toggle="modal" data-bs-target="#view_prescription">#PR-127</a></td>
																			<td>
																				<a href="javascript:void(0);" className="lab-icon prescription">
																					<span><i className="fa-solid fa-prescription"></i></span>Prescription
																				</a>
																			</td>
																			<td>23 Apr 2024, 06:40 PM</td>
																			<td>
																				<h2 className="table-avatar">
																					<a href="doctor-profile.html" className="avatar avatar-sm me-2">
																						<img className="avatar-img rounded-3" src="assets/img/doctors/doctor-thumb-01.jpg" alt="User Image"/>
																					</a>
																					<a href="doctor-profile.html">Susan Lingo</a>
																				</h2>
																			</td>
																			<td>
																				<div className="action-item">
																					<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#view_prescription">
																						<i className="fa-solid fa-link"></i>
																					</a>
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-download"></i>
																					</a>
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-trash-can"></i>
																					</a>
																				</div>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</div>
														</div>
												   </div>
												   <div id="invoice-tab" className={`tab-pane fade ${activeTab === 'invoice-tab' ? 'show active' : ''}`}>
														<div className="custom-table">
															<div className="table-responsive">
																<table className="table table-center mb-0">
																	<thead>
																		<tr>
																			<th>ID</th>
																			<th>Doctor</th>
																			<th>Appointment Date</th>
																			<th>Booked on</th>
																			<th>Amount</th>
																			<th>Action</th>
																		</tr>
																	</thead>
																	<tbody>
																		<tr>
																			<td className="text-blue-600"><a href="#" data-bs-toggle="modal" data-bs-target="#invoice_view">#Inv-2021</a></td>
																			<td>
																				<h2 className="table-avatar">
																					<a href="doctor-profile.html" className="avatar avatar-sm me-2">
																						<img className="avatar-img rounded-3" src="assets/img/doctors/doctor-thumb-21.jpg" alt="User Image"/>
																					</a>
																					<a href="doctor-profile.html">Edalin Hendry</a>
																				</h2>
																			</td>
																			<td>24 Mar 2024</td>
																			<td>21 Mar 2024</td>
																			<td>$300</td>
																			<td>
																				<div className="action-item">
																					<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#invoice_view">
																						<i className="fa-solid fa-link"></i>
																					</a>
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-print"></i>
																					</a>
																				</div>
																			</td>
																		</tr>
																		<tr>
																			<td className="text-blue-600"><a href="#" data-bs-toggle="modal" data-bs-target="#invoice_view">#Inv-2021</a></td>
																			<td>
																				<h2 className="table-avatar">
																					<a href="doctor-profile.html" className="avatar avatar-sm me-2">
																						<img className="avatar-img rounded-3" src="assets/img/doctors/doctor-thumb-13.jpg" alt="User Image"/>
																					</a>
																					<a href="doctor-profile.html">John Homes</a>
																				</h2>
																			</td>
																			<td>17 Mar 2024</td>
																			<td>14 Mar 2024</td>
																			<td>$450</td>
																			<td>
																				<div className="action-item">
																					<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#invoice_view">
																						<i className="fa-solid fa-link"></i>
																					</a>
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-print"></i>
																					</a>
																				</div>
																			</td>
																		</tr>
																		<tr>
																			<td className="text-blue-600"><a href="#" data-bs-toggle="modal" data-bs-target="#invoice_view">#Inv-2021</a></td>
																			<td>
																				<h2 className="table-avatar">
																					<a href="doctor-profile.html" className="avatar avatar-sm me-2">
																						<img className="avatar-img rounded-3" src="assets/img/doctors/doctor-thumb-03.jpg" alt="User Image"/>
																					</a>
																					<a href="doctor-profile.html">Shanta Neill</a>
																				</h2>
																			</td>
																			<td>11 Mar 2024</td>
																			<td>07 Mar 2024</td>
																			<td>$250</td>
																			<td>
																				<div className="action-item">
																					<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#invoice_view">
																						<i className="fa-solid fa-link"></i>
																					</a>
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-print"></i>
																					</a>
																				</div>
																			</td>
																		</tr>
																		<tr>
																			<td className="text-blue-600"><a href="#" data-bs-toggle="modal" data-bs-target="#invoice_view">#Inv-2021</a></td>
																			<td>
																				<h2 className="table-avatar">
																					<a href="doctor-profile.html" className="avatar avatar-sm me-2">
																						<img className="avatar-img rounded-3" src="assets/img/doctors/doctor-thumb-08.jpg" alt="User Image"/>
																					</a>
																					<a href="doctor-profile.html">Anthony Tran</a>
																				</h2>
																			</td>
																			<td>26 Feb 2024</td>
																			<td>23 Feb 2024</td>
																			<td>$320</td>
																			<td>
																				<div className="action-item">
																					<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#invoice_view">
																						<i className="fa-solid fa-link"></i>
																					</a>
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-print"></i>
																					</a>
																				</div>
																			</td>
																		</tr>
																		<tr>
																			<td className="text-blue-600"><a href="#" data-bs-toggle="modal" data-bs-target="#invoice_view">#Inv-2021</a></td>
																			<td>
																				<h2 className="table-avatar">
																					<a href="doctor-profile.html" className="avatar avatar-sm me-2">
																						<img className="avatar-img rounded-3" src="assets/img/doctors/doctor-thumb-01.jpg" alt="User Image"/>
																					</a>
																					<a href="doctor-profile.html">Susan Lingo</a>
																				</h2>
																			</td>
																			<td>18 Feb 2024</td>
																			<td>15 Feb 2024</td>
																			<td>$480</td>
																			<td>
																				<div className="action-item">
																					<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#invoice_view">
																						<i className="fa-solid fa-link"></i>
																					</a>
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-print"></i>
																					</a>
																				</div>
																			</td>
																		</tr>
																		<tr>
																			<td className="text-blue-600"><a href="#" data-bs-toggle="modal" data-bs-target="#invoice_view">#Inv-2021</a></td>
																			<td>
																				<h2 className="table-avatar">
																					<a href="doctor-profile.html" className="avatar avatar-sm me-2">
																						<img className="avatar-img rounded-3" src="assets/img/doctors/doctor-thumb-09.jpg" alt="User Image"/>
																					</a>
																					<a href="doctor-profile.html">Joseph Boyd</a>
																				</h2>
																			</td>
																			<td>10 Feb 2024</td>
																			<td>07 Feb 2024</td>
																			<td>$260</td>
																			<td>
																				<div className="action-item">
																					<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#invoice_view">
																						<i className="fa-solid fa-link"></i>
																					</a>
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-print"></i>
																					</a>
																				</div>
																			</td>
																		</tr>
																		<tr>
																			<td className="text-blue-600"><a href="#" data-bs-toggle="modal" data-bs-target="#invoice_view">#Inv-2021</a></td>
																			<td>
																				<h2 className="table-avatar">
																					<a href="doctor-profile.html" className="avatar avatar-sm me-2">
																						<img className="avatar-img rounded-3" src="assets/img/doctors/doctor-thumb-07.jpg" alt="User Image"/>
																					</a>
																					<a href="doctor-profile.html">Juliet Gabriel</a>
																				</h2>
																			</td>
																			<td>28 Jan 2024</td>
																			<td>25 Jan 2024</td>
																			<td>$350</td>
																			<td>
																				<div className="action-item">
																					<a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#invoice_view">
																						<i className="fa-solid fa-link"></i>
																					</a>
																					<a href="javascript:void(0);">
																						<i className="fa-solid fa-print"></i>
																					</a>
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
  )
}

export default HealthRecords