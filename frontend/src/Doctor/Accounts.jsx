import React from 'react'
import { Link } from 'react-router-dom'

const Accounts = () => {
  return (
    <div>
      <>
  <div className="breadcrumb-bar-two">
    <div className="container">
      <div className="row align-items-center inner-banner">
        <div className="col-md-12 col-12 text-center">
          <h2 className="breadcrumb-title">Accounts</h2>
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="index.html">Home</Link>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                Accounts
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
											<li className="active">
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
          <div className="accunts-sec">
            <div className="dashboard-header">
              <div className="header-back">
                <h3>Accounts</h3>
              </div>
            </div>
            <div className="account-details-box">
              <div className="row">
                <div className="col-xxl-6 col-lg-7">
                  <div className="account-payment-info">
                    <h4>Statistics</h4>
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="payment-amount">
                          <h6>
                            <i className="fa-solid fa-file-invoice-dollar text-success" />
                            Total Balance
                          </h6>
                          <span>$900</span>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="payment-amount">
                          <h6>
                            <i className="fa-solid fa-money-bill-1 text-orange" />
                            Earned
                          </h6>
                          <span>$906</span>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="payment-amount">
                          <h6>
                            <i className="fa-solid fa-circle-question text-pink" />
                            Requested
                          </h6>
                          <span>$50</span>
                        </div>
                      </div>
                    </div>
                    <div className="payment-request">
                      <span>Last Payment request : 24 Mar 2023</span>
                      <Link
                        to="#payment_request"
                        className="btn btn-primary prime-btn"
                        data-bs-toggle="modal"
                      >
                        Request Payment
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-1 d-lg-none d-xxl-block" />
                <div className="col-lg-5">
                  <div className="bank-details-info">
                    <h3>Bank Details</h3>
                    <ul>
                      <li>
                        <h6>Bank Name</h6>
                        <h5>Citi Bank Inc</h5>
                      </li>
                      <li>
                        <h6>Account Number</h6>
                        <h5>5396 5250 1908 XXXX</h5>
                      </li>
                      <li>
                        <h6>Branch Name</h6>
                        <h5>London</h5>
                      </li>
                      <li>
                        <h6>Account Name</h6>
                        <h5>Darren</h5>
                      </li>
                    </ul>
                    <div className="edit-detail-link">
                      <Link to="#account_details" data-bs-toggle="modal">
                        Edit Details
                      </Link>
                      <Link to="#other_accounts" data-bs-toggle="modal">
                        Other Accounts
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="account-detail-table">
                {/* Tab Menu */}
                <nav className="accounts-tab">
                  <ul className="nav nav-tabs-bottom">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        to="#pat_accounts"
                        data-bs-toggle="tab"
                      >
                        Accounts
                      </Link>
                    </li>
                  </ul>
                </nav>
                {/* /Tab Menu */}
                {/* Tab Content */}
                <div className="tab-content pt-0">
                  {/* Accounts Tab */}
                  <div id="pat_accounts" className="tab-pane fade show active">
                    <ul className="header-list-btns d-inline-block mb-4">
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
                    <div className="custom-new-table">
                      <div className="table-responsive">
                        <table className="table table-hover table-center mb-0">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Requested Date</th>
                              <th>Account No</th>
                              <th>Credited On</th>
                              <th>Amount</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <Link to="#">
                                  <span className="text-blue">#AC-1234</span>
                                </Link>
                              </td>
                              <td>24 Mar 2024</td>
                              <td>5396 5250 1908 XXXX</td>
                              <td>26 Mar 2024</td>
                              <td>$300</td>
                              <td>
                                <span className="badge badge-success-bg">
                                  Completed
                                </span>
                              </td>
                              <td>
                                <Link
                                  to="#request_details_modal"
                                  className="account-action"
                                  data-bs-toggle="modal"
                                >
                                  <i className="fa-solid fa-link" />
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Link to="#">
                                  <span className="text-blue">#AC-1235</span>
                                </Link>
                              </td>
                              <td>28 Mar 2024</td>
                              <td>8833 8942 9013 XXXX</td>
                              <td>30 Mar 2024</td>
                              <td>$400</td>
                              <td>
                                <span className="badge badge-success-bg">
                                  Completed
                                </span>
                              </td>
                              <td>
                                <Link
                                  to="#request_details_modal"
                                  className="account-action"
                                  data-bs-toggle="modal"
                                >
                                  <i className="fa-solid fa-link" />
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Link to="#">
                                  <span className="text-blue">#AC-1236</span>
                                </Link>
                              </td>
                              <td>02 Apr 2024</td>
                              <td>8920 4041 4725 XXXX</td>
                              <td>04 Apr 2024</td>
                              <td>$350</td>
                              <td>
                                <span className="badge badge-danger-bg">
                                  Cancelled
                                </span>
                              </td>
                              <td>
                                <Link
                                  to="#request_cancel_modal"
                                  className="account-action"
                                  data-bs-toggle="modal"
                                >
                                  <i className="fa-solid fa-link" />
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Link to="#">
                                  <span className="text-blue">#AC-1237</span>
                                </Link>
                              </td>
                              <td>10 Apr 2024</td>
                              <td>5730 4892 0492 XXXX</td>
                              <td>12 Apr 2024</td>
                              <td>$220</td>
                              <td>
                                <span className="badge badge-warning-bg">
                                  Pending
                                </span>
                              </td>
                              <td>
                                <Link to="#" className="account-action">
                                  <i className="fa-solid fa-link" />
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Link to="#">
                                  <span className="text-blue">#AC-1238</span>
                                </Link>
                              </td>
                              <td>16 Apr 2024</td>
                              <td>7922 9024 5824 XXXX</td>
                              <td>18 Apr 2024</td>
                              <td>$470</td>
                              <td>
                                <span className="badge badge-success-bg">
                                  Completed
                                </span>
                              </td>
                              <td>
                                <Link
                                  to="#request_details_modal"
                                  className="account-action"
                                  data-bs-toggle="modal"
                                >
                                  <i className="fa-solid fa-link" />
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
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
                  {/* /Accounts Tab */}
                  {/* Refund Request Tab */}
                  <div className="tab-pane fade" id="pat_refundrequest">
                    <ul className="header-list-btns d-inline-block mb-4">
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
                    <div className="custom-new-table">
                      <div className="table-responsive">
                        <table className="table table-hover table-center mb-0">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Patient</th>
                              <th>Appointment Date</th>
                              <th>Payment</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <Link to="#">
                                  <span className="text-blue">#AC-1234</span>
                                </Link>
                              </td>
                              <td>
                                <div className="table-avtatar">
                                  <Link to="patient-profile.html">
                                    <img
                                      src="assets/img/doctors-dashboard/doctor-profile-img.jpg"
                                      alt="Img"
                                    />
                                    Edalin Hendry
                                  </Link>
                                </div>
                              </td>
                              <td>24 Mar 2024 - 10:30 AM</td>
                              <td>$300</td>
                              <td>
                                <span className="badge badge-success-bg">
                                  Paid
                                </span>
                              </td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <Link to="#" className="account-action me-2">
                                    <i className="fa-solid fa-link" />
                                  </Link>
                                  <Link
                                    to="#"
                                    className="account-action text-success me-2"
                                  >
                                    <i className="fa-solid fa-check" />
                                  </Link>
                                  <Link
                                    to="#"
                                    className="account-action text-danger me-2"
                                  >
                                    <i className="fa-solid fa-x" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Link to="#">
                                  <span className="text-blue">#AC-1235</span>
                                </Link>
                              </td>
                              <td>
                                <div className="table-avtatar">
                                  <Link to="patient-profile.html">
                                    <img
                                      src="assets/img/doctors/doctor-thumb-01.jpg"
                                      alt="Img"
                                    />
                                    Shanta Neill
                                  </Link>
                                </div>
                              </td>
                              <td>28 Mar 2024 - 11:15 AM</td>
                              <td>$250</td>
                              <td>
                                <span className="badge badge-success-bg">
                                  Paid
                                </span>
                              </td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <Link to="#" className="account-action me-2">
                                    <i className="fa-solid fa-link" />
                                  </Link>
                                  <Link
                                    to="#"
                                    className="account-action text-success me-2"
                                  >
                                    <i className="fa-solid fa-check" />
                                  </Link>
                                  <Link
                                    to="#"
                                    className="account-action text-danger me-2"
                                  >
                                    <i className="fa-solid fa-x" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Link to="#">
                                  <span className="text-blue">#AC-1236</span>
                                </Link>
                              </td>
                              <td>
                                <div className="table-avtatar">
                                  <Link to="patient-profile.html">
                                    <img
                                      src="assets/img/doctors/doctor-thumb-02.jpg"
                                      alt="Img"
                                    />
                                    Anthony Tran
                                  </Link>
                                </div>
                              </td>
                              <td>02 Apr 2024 - 04:15 PM</td>
                              <td>$380</td>
                              <td>
                                <span className="badge badge-success-bg">
                                  Paid
                                </span>
                              </td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <Link to="#" className="account-action me-2">
                                    <i className="fa-solid fa-link" />
                                  </Link>
                                  <Link
                                    to="#"
                                    className="account-action text-success me-2"
                                  >
                                    <i className="fa-solid fa-check" />
                                  </Link>
                                  <Link
                                    to="#"
                                    className="account-action text-danger me-2"
                                  >
                                    <i className="fa-solid fa-x" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Link to="#">
                                  <span className="text-blue">#AC-1237</span>
                                </Link>
                              </td>
                              <td>
                                <div className="table-avtatar">
                                  <Link to="patient-profile.html">
                                    <img
                                      src="assets/img/doctors/doctor-thumb-03.jpg"
                                      alt="Img"
                                    />
                                    Susan Lingo
                                  </Link>
                                </div>
                              </td>
                              <td>13 Apr 2024 - 05:30 PM</td>
                              <td>$400</td>
                              <td>
                                <span className="badge badge-warning-bg">
                                  Pending
                                </span>
                              </td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <Link to="#" className="account-action me-2">
                                    <i className="fa-solid fa-link" />
                                  </Link>
                                  <Link
                                    to="#"
                                    className="account-action text-success me-2"
                                  >
                                    <i className="fa-solid fa-check" />
                                  </Link>
                                  <Link
                                    to="#"
                                    className="account-action text-danger me-2"
                                  >
                                    <i className="fa-solid fa-x" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Link to="#">
                                  <span className="text-blue">#AC-1238</span>
                                </Link>
                              </td>
                              <td>
                                <div className="table-avtatar">
                                  <Link to="patient-profile.html">
                                    <img
                                      src="assets/img/doctors/doctor-thumb-08.jpg"
                                      alt="Img"
                                    />
                                    Joseph Boyd
                                  </Link>
                                </div>
                              </td>
                              <td>21 Apr 2024 - 12:30 PM</td>
                              <td>$320</td>
                              <td>
                                <span className="badge badge-success-bg">
                                  Paid
                                </span>
                              </td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <Link to="#" className="account-action me-2">
                                    <i className="fa-solid fa-link" />
                                  </Link>
                                  <Link
                                    to="#"
                                    className="account-action text-success me-2"
                                  >
                                    <i className="fa-solid fa-check" />
                                  </Link>
                                  <Link
                                    to="#"
                                    className="account-action text-danger me-2"
                                  >
                                    <i className="fa-solid fa-x" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Link to="#">
                                  <span className="text-blue">#AC-1239</span>
                                </Link>
                              </td>
                              <td>
                                <div className="table-avtatar">
                                  <Link to="patient-profile.html">
                                    <img
                                      src="assets/img/doctors/doctor-thumb-06.jpg"
                                      alt="Img"
                                    />
                                    Juliet Grabriel
                                  </Link>
                                </div>
                              </td>
                              <td>17 May 2024 - 09:20 AM</td>
                              <td>$280</td>
                              <td>
                                <span className="badge badge-success-bg">
                                  Paid
                                </span>
                              </td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <Link to="#" className="account-action me-2">
                                    <i className="fa-solid fa-link" />
                                  </Link>
                                  <Link
                                    to="#"
                                    className="account-action text-success me-2"
                                  >
                                    <i className="fa-solid fa-check" />
                                  </Link>
                                  <Link
                                    to="#"
                                    className="account-action text-danger me-2"
                                  >
                                    <i className="fa-solid fa-x" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
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
                  {/* /Refund Request Tab */}
                </div>
                {/* Tab Content */}
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

export default Accounts
