import React from 'react'
import { Link } from 'react-router-dom'

const DoctorPayment = () => {
  return (
    <div>
      <>
  <div className="breadcrumb-bar-two">
    <div className="container">
      <div className="row align-items-center inner-banner">
        <div className="col-md-12 col-12 text-center">
          <h2 className="breadcrumb-title">Payout Settings</h2>
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="index.html">Home</Link>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                Payout Settings
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
											<li className='active'>
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
        {/* Payouts */}
        <div className="col-lg-8 col-xl-9">
          <div className="payout-wrap">
            <div className="payout-title">
              <h4>Settings</h4>
              <p>
                All the earning will be sent to below selected payout method
              </p>
            </div>
            <div className="stripe-wrapper">
              <div className="stripe-box">
                <div className="stripe-img">
                  <img src="assets/img/icons/stripe.svg" alt="img" />
                </div>
                <Link to="javascript:void(0);" className="btn">
                  <i className="fa-solid fa-gear" />
                  Configure
                </Link>
              </div>
              <div className="stripe-box active">
                <div className="stripe-img">
                  <img src="assets/img/icons/paypal.svg" alt="img" />
                </div>
                <Link
                  to="javascript:void(0);"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#add_configure"
                >
                  <i className="fa-solid fa-gear" />
                  Configure
                </Link>
              </div>
            </div>
          </div>
          <div className="dashboard-header">
            <h3>Payouts</h3>
          </div>
          <div className="search-header">
            <div className="search-field">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
              <span className="search-icon">
                <i className="fa-solid fa-magnifying-glass" />
              </span>
            </div>
          </div>
          <div className="custom-table">
            <div className="table-responsive">
              <table className="table table-center mb-0">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Payment Method</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>24 Mar 2024</td>
                    <td>Paypal</td>
                    <td>$300</td>
                    <td>
                      <span className="badge badge-green status-badge">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>24 Mar 2024</td>
                    <td>Paypal</td>
                    <td>$200</td>
                    <td>
                      <span className="badge badge-green status-badge">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>25 Mar 2024</td>
                    <td>Paypal</td>
                    <td>$300</td>
                    <td>
                      <span className="badge badge-green status-badge">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>24 Mar 2024</td>
                    <td>Paypal</td>
                    <td>$300</td>
                    <td>
                      <span className="badge badge-green status-badge">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>24 Mar 2024</td>
                    <td>Paypal</td>
                    <td>$300</td>
                    <td>
                      <span className="badge badge-green status-badge">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>24 Mar 2024</td>
                    <td>Paypal</td>
                    <td>$300</td>
                    <td>
                      <span className="badge badge-green status-badge">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>27 Mar 2024</td>
                    <td>Paypal</td>
                    <td>$200</td>
                    <td>
                      <span className="badge badge-green status-badge">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>29 Mar 2024</td>
                    <td>Paypal</td>
                    <td>$350</td>
                    <td>
                      <span className="badge badge-green status-badge">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>24 Mar 2024</td>
                    <td>Paypal</td>
                    <td>$100</td>
                    <td>
                      <span className="badge badge-green status-badge">
                        Completed
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>04 Apr 2024</td>
                    <td>Paypal</td>
                    <td>$180</td>
                    <td>
                      <span className="badge badge-green status-badge">
                        Completed
                      </span>
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
        {/* /Payouts */}
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default DoctorPayment
