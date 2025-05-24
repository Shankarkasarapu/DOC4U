import React from 'react'
import { Link } from 'react-router-dom'

const Reviews = () => {
  return (
    <div>
      <>
  <div className="breadcrumb-bar-two">
    <div className="container">
      <div className="row align-items-center inner-banner">
        <div className="col-md-12 col-12 text-center">
          <h2 className="breadcrumb-title">Reviews</h2>
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="index.html">Home</Link>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                Reviews
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
                    <li className='active'>
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
          <div className="doc-review">
            <div className="dashboard-header">
              <div className="header-back">
                <h3>Reviews</h3>
              </div>
            </div>
            {/* Review Listing */}
            <ul className="comments-list">
              <li className="over-all-review">
                <div className="review-content">
                  <div className="review-rate">
                    <h5>Overall Rating</h5>
                    <div className="star-rated">
                      <span>4.0</span>
                      <i className="fa-solid fa-star filled" />
                      <i className="fa-solid fa-star filled" />
                      <i className="fa-solid fa-star filled" />
                      <i className="fa-solid fa-star filled" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                  <div className="position-relative daterange-wraper">
                    <div className="input-groupicon calender-input">
                      <input
                        type="text"
                        className="form-control  date-range bookingrange"
                        placeholder="From Date - To Date "
                      />
                    </div>
                    <i className="fa-solid fa-calendar-days" />
                  </div>
                </div>
              </li>
              <li>
                <div className="comments">
                  <div className="comment-head">
                    <div className="patinet-information">
                      <Link to="javascript:void(0);">
                        <img
                          src="assets/img/doctors-dashboard/profile-01.jpg"
                          alt="User Image"
                        />
                      </Link>
                      <div className="patient-info">
                        <h6>
                          <Link to="javascript:void(0);">Adrian</Link>
                        </h6>
                        <span>15 Mar 2024</span>
                      </div>
                    </div>
                    <div className="star-rated">
                      <i className="fa-solid fa-star filled" />
                      <i className="fa-solid fa-star filled" />
                      <i className="fa-solid fa-star filled" />
                      <i className="fa-solid fa-star filled" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                  <div className="review-info">
                    <p>
                      {" "}
                      Dr. Edalin Hendry has been my family's trusted doctor for
                      years. Their genuine care and thorough approach to our
                      health concerns make every visit reassuring. Dr. Edalin
                      Hendry's ability to listen and explain complex health
                      issues in understandable terms is exceptional. We are
                      grateful to have such a dedicated physician by our side
                    </p>
                    <div className="comment-reply">
                      <Link to="#" className="d-inline-flex align-items-center">
                        <i className="fa-solid fa-reply me-2" /> Reply
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="comments">
                  <div className="comment-head">
                    <div className="patinet-information">
                      <Link to="javascript:void(0);">
                        <img
                          src="assets/img/doctors-dashboard/profile-02.jpg"
                          alt="User Image"
                        />
                      </Link>
                      <div className="patient-info">
                        <h6>
                          <Link to="javascript:void(0);">Kelly</Link>
                        </h6>
                        <span>11 Mar 2024</span>
                      </div>
                    </div>
                    <div className="star-rated">
                      <i className="fa-solid fa-star filled" />
                      <i className="fa-solid fa-star filled" />
                      <i className="fa-solid fa-star filled" />
                      <i className="fa-solid fa-star filled" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                  <div className="review-info">
                    <p>
                      I recently completed a series of dental treatments with
                      Dr.Edalin Hendry, and I couldn't be more pleased with the
                      results. From my very first appointment, Dr. Edalin Hendry
                      and their team made me feel completely at ease, addressing
                      all of my concerns with patience and understanding. Their
                      state-of-the-art office and the staff's attention to
                      comfort and cleanliness were beyond impressive.
                    </p>
                    <div className="comment-reply">
                      <Link
                        to="#"
                        className="d-inline-flex align-items-center replied-text"
                      >
                        <i className="fa-solid fa-reply me-2" /> Reply
                      </Link>
                    </div>
                  </div>
                </div>
                <ul>
                  <li>
                    <div className="replied-comment">
                      <div className="patinet-information">
                        <Link to="javascript:void(0);">
                          <img
                            src="assets/img/doctors-dashboard/doctor-profile-img.jpg"
                            alt="User Image"
                          />
                        </Link>
                        <div className="patient-info">
                          <h6>
                            <Link to="javascript:void(0);">Dr Edalin Hendry</Link>
                          </h6>
                          <span>2 days ago</span>
                        </div>
                      </div>
                      <div className="review-info">
                        <p>
                          Thank you so much for taking the time to share your
                          experience at our dental clinic. We are deeply touched
                          by your kind words and thrilled to hear about the
                          positive impact of your treatment. Our team strives to
                          provide a comfortable, welcoming environment for all
                          our patients, and it’s heartening to know we achieved
                          this for you.
                        </p>
                        <div className="comment-reply">
                          <Link
                            to="#"
                            className="d-inline-flex align-items-center"
                          >
                            <i className="fa-solid fa-reply me-2" /> Reply
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="comments">
                  <div className="comment-head">
                    <div className="patinet-information">
                      <Link to="javascript:void(0);">
                        <img
                          src="assets/img/doctors-dashboard/profile-03.jpg"
                          alt="User Image"
                        />
                      </Link>
                      <div className="patient-info">
                        <h6>
                          <Link to="javascript:void(0);">Samuel</Link>
                        </h6>
                        <span>05 Mar 2024</span>
                      </div>
                    </div>
                    <div className="star-rated">
                      <i className="fa-solid fa-star filled" />
                      <i className="fa-solid fa-star filled" />
                      <i className="fa-solid fa-star filled" />
                      <i className="fa-solid fa-star filled" />
                      <i className="fa-solid fa-star" />
                    </div>
                  </div>
                  <div className="review-info">
                    <p>
                      From my first consultation through to the completion of my
                      treatment, Dr. Edalin Hendry, my dentist, has been nothing
                      short of extraordinary. Dental visits have always been a
                      source of anxiety for me, but Dr. Edalin Hendry's office
                      provided an atmosphere of calm and reassurance that I had
                      not experienced elsewhere. Highly Recommended!
                    </p>
                    <div className="comment-reply">
                      <Link to="#" className="d-inline-flex align-items-center">
                        <i className="fa-solid fa-reply me-2" /> Reply
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            {/* /Comment List */}
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
</>

    </div>
  )
}

export default Reviews
