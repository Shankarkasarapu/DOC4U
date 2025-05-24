import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AvailableTimings = () => {
  const [activeDay, setActiveDay] = useState('monday');
  const [selectedSlot, setSelectedSlot] = useState(null); // Stores the index of the selected slot

  const toggleSlot = (index) => {
    // Toggle the slot's selection based on its index
    setSelectedSlot((prev) => (prev === index ? null : index));
  };
  return (
    <div>
      <>
  <div className="breadcrumb-bar-two">
    <div className="container">
      <div className="row align-items-center inner-banner">
        <div className="col-md-12 col-12 text-center">
          <h2 className="breadcrumb-title">Available Timings</h2>
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="index.html">Home</Link>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                Available Timings
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
											<li className="active">
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
            <h3>Available Timings</h3>
          </div>
          <div className="appointment-tabs">
            <ul className="nav available-nav">
              <li className="nav-item" role="presentation">
                <Link
                  className="nav-link active"
                  to="#"
                  data-bs-toggle="tab"
                  data-bs-target="#general-availability"
                >
                  General Availability
                </Link>
              </li>
            </ul>
          </div>
          <div className="tab-content pt-0 timing-content">
            {/* General Availability */}
            <div
              className="tab-pane fade show active"
              id="general-availability"
            >
              <div className="card custom-card">
                <div className="card-body">
                  <div className="card-header">
                    <h3>Select Available Slots</h3>
                  </div>
                  <div className="available-tab">
      <label className="form-label">Select Available days</label>
      <ul className="nav">
        <li>
          <Link to="#" className={activeDay === 'monday' ? 'active' : ''} onClick={() => setActiveDay('monday')}>Monday</Link>
        </li>
        <li>
          <Link to="#" className={activeDay === 'tuesday' ? 'active' : ''} onClick={() => setActiveDay('tuesday')}>Tuesday</Link>
        </li>
        <li>
          <Link to="#" className={activeDay === 'wednesday' ? 'active' : ''} onClick={() => setActiveDay('wednesday')} >
            Wednesday
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className={activeDay === 'thursday' ? 'active' : ''}
            onClick={() => setActiveDay('thursday')}
          >
            Thursday
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className={activeDay === 'friday' ? 'active' : ''}
            onClick={() => setActiveDay('friday')}
          >
            Friday
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className={activeDay === 'saturday' ? 'active' : ''}
            onClick={() => setActiveDay('saturday')}
          >
            Saturday
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className={activeDay === 'sunday' ? 'active' : ''}
            onClick={() => setActiveDay('sunday')}
          >
            Sunday
          </Link>
        </li>
      </ul>

      <div className="tab-content pt-0">
        {activeDay === 'monday' && (
          <div className="tab-pane active show" id="monday">
            <div className="slot-box">
              <div className="slot-header">
                <h5>Monday</h5>
                <ul>
                  <li>
                    <Link to="#" className="add-slot" data-bs-toggle="modal" data-bs-target="#add_slot">Add Slots</Link>
                  </li>
                  <li>
                    <Link to="#" className="del-slot" data-bs-toggle="modal" data-bs-target="#delete_slot">Delete All</Link>
                  </li>
                </ul>
              </div>
              <div className="slot-body">
                <ul className="time-slots">
                  <li className={selectedSlot === 0 ? 'selected' : ''} onClick={() => toggleSlot(0)}><i className="fa-regular fa-clock" /> 09:00 AM</li>
                  <li className={selectedSlot === 1 ? 'selected' : ''} onClick={() => toggleSlot(1)}><i className="fa-regular fa-clock" /> 09:30 AM</li>
                  <li className={selectedSlot === 2 ? 'selected' : ''} onClick={() => toggleSlot(2)}><i className="fa-regular fa-clock" /> 10:00 AM</li>
                  <li className={selectedSlot === 3 ? 'selected' : ''} onClick={() => toggleSlot(3)}><i className="fa-regular fa-clock" /> 10:30 AM</li>
                  <li className={selectedSlot === 4 ? 'selected' : ''} onClick={() => toggleSlot(4)}><i className="fa-regular fa-clock" /> 11:00 AM</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {activeDay === 'tuesday' && (
          <div className="tab-pane active" id="tuesday">
            <div className="slot-box">
              <div className="slot-header">
                <h5>Tuesday</h5>
                <ul>
                  <li>
                    <Link to="#" className="add-slot" data-bs-toggle="modal" data-bs-target="#add_slot">Add Slots</Link>
                  </li>
                  <li>
                    <Link to="#" className="del-slot" data-bs-toggle="modal" data-bs-target="#delete_slot">Delete All</Link>
                  </li>
                </ul>
              </div>
              <div className="slot-body">
                <ul className="time-slots">
                  <li className={selectedSlot === 0 ? 'selected' : ''} onClick={() => toggleSlot(0)}><i className="fa-regular fa-clock" /> 09:00 AM</li>
                  <li className={selectedSlot === 1 ? 'selected' : ''} onClick={() => toggleSlot(1)}><i className="fa-regular fa-clock" /> 09:30 AM</li>
                  <li className={selectedSlot === 4 ? 'selected' : ''} onClick={() => toggleSlot(4)}><i className="fa-regular fa-clock" /> 11:00 AM</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {activeDay === 'wednesday' && (
          <div className="tab-pane active" id="wednesday">
            <div className="slot-box">
              <div className="slot-header">
                <h5>Wednesday</h5>
                <ul>
                  <li>
                    <Link
                                to="#"
                                className="add-slot"
                                data-bs-toggle="modal"
                                data-bs-target="#add_slot"
                              >
                                Add Slots
                              </Link>
                  </li>
                  <li>
                    <Link to="#" className="del-slot" data-bs-toggle="modal" data-bs-target="#delete_slot">Delete All</Link>
                  </li>
                </ul>
              </div>
              <div className="slot-body">
                <ul className="time-slots">
                  <li className={selectedSlot === 0 ? 'selected' : ''} onClick={() => toggleSlot(0)}><i className="fa-regular fa-clock" /> 09:00 AM</li>
                  <li className={selectedSlot === 2 ? 'selected' : ''} onClick={() => toggleSlot(2)}><i className="fa-regular fa-clock" /> 10:00 AM</li>
                  <li className={selectedSlot === 3 ? 'selected' : ''} onClick={() => toggleSlot(3)}><i className="fa-regular fa-clock" /> 10:30 AM</li>
                  <li className={selectedSlot === 4 ? 'selected' : ''} onClick={() => toggleSlot(4)}><i className="fa-regular fa-clock" /> 11:00 AM</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {activeDay === 'thursday' && (
          <div className="tab-pane active show" id="thursday">
            <div className="slot-box">
              <div className="slot-header">
                <h5>Thursday</h5>
                <ul>
                  <li>
                    <Link to="#" className="add-slot" data-bs-toggle="modal" data-bs-target="#add_slot">Add Slots</Link>
                  </li>
                  <li>
                    <Link to="#" className="del-slot" data-bs-toggle="modal" data-bs-target="#delete_slot">Delete All</Link>
                  </li>
                </ul>
              </div>
              <div className="slot-body">
                <ul className="time-slots">
                  <li className={selectedSlot === 1 ? 'selected' : ''} onClick={() => toggleSlot(1)}><i className="fa-regular fa-clock" /> 09:30 AM</li>
                  <li className={selectedSlot === 2 ? 'selected' : ''} onClick={() => toggleSlot(2)}><i className="fa-regular fa-clock" /> 10:00 AM</li>
                  <li className={selectedSlot === 3 ? 'selected' : ''} onClick={() => toggleSlot(3)}><i className="fa-regular fa-clock" /> 10:30 AM</li>
                  <li className={selectedSlot === 4 ? 'selected' : ''} onClick={() => toggleSlot(4)}><i className="fa-regular fa-clock" /> 11:00 AM</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {activeDay === 'friday' && (
          <div className="tab-pane active show" id="friday">
            <div className="slot-box">
              <div className="slot-header">
                <h5>Friday</h5>
                <ul>
                  <li>
                    <Link to="#" className="add-slot" data-bs-toggle="modal" data-bs-target="#add_slot">Add Slots</Link>
                  </li>
                  <li>
                    <Link to="#" className="del-slot" data-bs-toggle="modal" data-bs-target="#delete_slot">Delete All</Link>
                  </li>
                </ul>
              </div>
              <div className="slot-body">
                <ul className="time-slots">
                  <li className={selectedSlot === 0 ? 'selected' : ''} onClick={() => toggleSlot(0)}><i className="fa-regular fa-clock" /> 09:00 AM</li>
                  <li className={selectedSlot === 1 ? 'selected' : ''} onClick={() => toggleSlot(1)}><i className="fa-regular fa-clock" /> 09:30 AM</li>
                  <li className={selectedSlot === 2 ? 'selected' : ''} onClick={() => toggleSlot(2)}><i className="fa-regular fa-clock" /> 10:00 AM</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {activeDay === 'saturday' && (
          <div className="tab-pane active show" id="saturday">
            <div className="slot-box">
              <div className="slot-header">
                <h5>Saturday</h5>
                <ul>
                  <li>
                    <Link to="#" className="add-slot" data-bs-toggle="modal" data-bs-target="#add_slot">Add Slots</Link>
                  </li>
                  <li>
                    <Link to="#" className="del-slot" data-bs-toggle="modal" data-bs-target="#delete_slot">Delete All</Link>
                  </li>
                </ul>
              </div>
              <div className="slot-body">
                <ul className="time-slots">
                  <li className={selectedSlot === 0 ? 'selected' : ''} onClick={() => toggleSlot(0)}><i className="fa-regular fa-clock" /> 09:00 AM</li>
                  <li className={selectedSlot === 1 ? 'selected' : ''} onClick={() => toggleSlot(1)}><i className="fa-regular fa-clock" /> 09:30 AM</li>
                  <li className={selectedSlot === 2 ? 'selected' : ''} onClick={() => toggleSlot(2)}><i className="fa-regular fa-clock" /> 10:00 AM</li>
                  <li className={selectedSlot === 3 ? 'selected' : ''} onClick={() => toggleSlot(3)}><i className="fa-regular fa-clock" /> 10:30 AM</li>
                  <li className={selectedSlot === 4 ? 'selected' : ''} onClick={() => toggleSlot(4)}><i className="fa-regular fa-clock" /> 11:00 AM</li>
                  <li className={selectedSlot === 5 ? 'selected' : ''} onClick={() => toggleSlot(5)}><i className="fa-regular fa-clock" /> 03:00 PM</li>
                  <li className={selectedSlot === 6 ? 'selected' : ''} onClick={() => toggleSlot(6)}><i className="fa-regular fa-clock" /> 04:30 PM</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {activeDay === 'sunday' && (
          <div className="tab-pane active show" id="sunday">
            <div className="slot-box">
              <div className="slot-header">
                <h5>Sunday</h5>
                <ul>
                  <li>
                    <Link to="#" className="add-slot" data-bs-toggle="modal" data-bs-target="#add_slot">Add Slots</Link>
                  </li>
                  <li>
                    <Link to="#" className="del-slot" data-bs-toggle="modal" data-bs-target="#delete_slot">Delete All</Link>
                  </li>
                </ul>
              </div>
              <div className="slot-body">
                <p>No Slots Available</p>
              </div>
            </div>
          </div>
        )}
        {/* Repeat similar structure for Thursday, Friday, Saturday, and Sunday */}
      </div>

      <div className="form-wrap">
        <label className="col-form-label">Appointment Fees ($)</label>
        <input type="text" className="form-control" defaultValue={254} />
      </div>
      <div className="modal-btn text-end">
        <Link to="#" className="btn btn-gray" data-bs-toggle="modal" data-bs-dismiss="modal">Cancel</Link>
        <button className="btn btn-primary prime-btn">Save Changes</button>
      </div>
    </div>
                </div>
              </div>
            </div>
            {/* /General Availability */}
            {/* Clinic Availability */}
            <div className="tab-pane fade" id="clinic-availability">
              <div className="clinic-wrap">
                <h5>Select Clinic</h5>
                <div className="row">
                  <div className="col-md-6">
                    <select className="select-img">
                      <option data-image="assets/img/doctors-dashboard/clinic-01.jpg">
                        The Family Dentistry Clinic
                      </option>
                      <option data-image="assets/img/doctors-dashboard/clinic-02.jpg">
                        Dentistry Clinic
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="card custom-card">
                <div className="card-body">
                  <div className="card-header">
                    <h3>Select Available Slots</h3>
                  </div>
                  <div className="available-tab">
                    <label className="form-label">Select Available days</label>
                    <ul className="nav">
                      <li>
                        <Link
                          to="#"
                          className="active"
                          data-bs-toggle="tab"
                          data-bs-target="#monday-slot"
                        >
                          Monday
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tab"
                          data-bs-target="#tuesday-slot"
                        >
                          Tuesday
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tab"
                          data-bs-target="#wednesday-slot"
                        >
                          Wedneday
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tab"
                          data-bs-target="#thursday-slot"
                        >
                          Thursday
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tab"
                          data-bs-target="#friday-slot"
                        >
                          Friday
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tab"
                          data-bs-target="#saturday-slot"
                        >
                          Saturday
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-bs-toggle="tab"
                          data-bs-target="#sunday-slot"
                        >
                          Sunday
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content pt-0">
                    {/* Slot */}
                    <div className="tab-pane active show" id="monday-slot">
                      <div className="slot-box">
                        <div className="slot-header">
                          <h5>Monday</h5>
                          <ul>
                            <li>
                              <Link
                                to="#"
                                className="add-slot"
                                data-bs-toggle="modal"
                                data-bs-target="#add_slot"
                              >
                                Add Slots
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="del-slot"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_slot"
                              >
                                Delete All
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="slot-body">
                          <ul className="time-slots">
                            <li>
                              <i className="fa-regular fa-clock" />
                              09:00 AM
                            </li>
                            <li>
                              <i className="fa-regular fa-clock" />
                              09:30 AM
                            </li>
                            <li className="slot-space">Space : 2</li>
                            <li>
                              <i className="fa-regular fa-clock" />
                              10:30 AM
                            </li>
                            <li>
                              <i className="fa-regular fa-clock" />
                              11:00 AM
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* /Slot */}
                    {/* Slot */}
                    <div className="tab-pane fade" id="tuesday-slot">
                      <div className="slot-box">
                        <div className="slot-header">
                          <h5>Tuesday</h5>
                          <ul>
                            <li>
                              <Link
                                to="#"
                                className="add-slot"
                                data-bs-toggle="modal"
                                data-bs-target="#add_slot"
                              >
                                Add Slots
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="del-slot"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_slot"
                              >
                                Delete All
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="slot-body">
                          <p>No Slots Available</p>
                        </div>
                      </div>
                    </div>
                    {/* /Slot */}
                    {/* Slot */}
                    <div className="tab-pane fade" id="wednesday-slot">
                      <div className="slot-box">
                        <div className="slot-header">
                          <h5>Wednesday</h5>
                          <ul>
                            <li>
                              <Link
                                to="#"
                                className="add-slot"
                                data-bs-toggle="modal"
                                data-bs-target="#add_slot"
                              >
                                Add Slots
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="del-slot"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_slot"
                              >
                                Delete All
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="slot-body">
                          <p>No Slots Available</p>
                        </div>
                      </div>
                    </div>
                    {/* /Slot */}
                    {/* Slot */}
                    <div className="tab-pane fade" id="thursday-slot">
                      <div className="slot-box">
                        <div className="slot-header">
                          <h5>Thursday</h5>
                          <ul>
                            <li>
                              <Link
                                to="#"
                                className="add-slot"
                                data-bs-toggle="modal"
                                data-bs-target="#add_slot"
                              >
                                Add Slots
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="del-slot"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_slot"
                              >
                                Delete All
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="slot-body">
                          <p>No Slots Available</p>
                        </div>
                      </div>
                    </div>
                    {/* /Slot */}
                    {/* Slot */}
                    <div className="tab-pane fade" id="friday-slot">
                      <div className="slot-box">
                        <div className="slot-header">
                          <h5>Friday</h5>
                          <ul>
                            <li>
                              <Link
                                to="#"
                                className="add-slot"
                                data-bs-toggle="modal"
                                data-bs-target="#add_slot"
                              >
                                Add Slots
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="del-slot"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_slot"
                              >
                                Delete All
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="slot-body">
                          <p>No Slots Available</p>
                        </div>
                      </div>
                    </div>
                    {/* /Slot */}
                    {/* Slot */}
                    <div className="tab-pane fade" id="saturday-slot">
                      <div className="slot-box">
                        <div className="slot-header">
                          <h5>Saturday</h5>
                          <ul>
                            <li>
                              <Link
                                to="#"
                                className="add-slot"
                                data-bs-toggle="modal"
                                data-bs-target="#add_slot"
                              >
                                Add Slots
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="del-slot"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_slot"
                              >
                                Delete All
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="slot-body">
                          <p>No Slots Available</p>
                        </div>
                      </div>
                    </div>
                    {/* /Slot */}
                    {/* Slot */}
                    <div className="tab-pane fade" id="sunday-slot">
                      <div className="slot-box">
                        <div className="slot-header">
                          <h5>Sunday</h5>
                          <ul>
                            <li>
                              <Link
                                to="#"
                                className="add-slot"
                                data-bs-toggle="modal"
                                data-bs-target="#add_slot"
                              >
                                Add Slots
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="#"
                                className="del-slot"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_slot"
                              >
                                Delete All
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="slot-body">
                          <p>No Slots Available</p>
                        </div>
                      </div>
                    </div>
                    {/* /Slot */}
                    <div className="form-wrap">
                      <label className="col-form-label">
                        Appointment Fees ($)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={254}
                      />
                    </div>
                    <div className="modal-btn text-end">
                      <Link
                        to="#"
                        className="btn btn-gray"
                        data-bs-toggle="modal"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </Link>
                      <button className="btn btn-primary prime-btn">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Clinic Availability */}
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default AvailableTimings
