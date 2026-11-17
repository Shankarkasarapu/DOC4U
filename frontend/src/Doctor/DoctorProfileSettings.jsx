import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const DoctorProfileSettings = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  // Handle image selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  // Handle image removal
  const handleRemoveImage = (event) => {
    event.preventDefault(); // Prevent page refresh
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Reset file input
    }
  };
  return (
    <div>
      <>
  <div className="breadcrumb-bar-two">
    <div className="container">
      <div className="row align-items-center inner-banner">
        <div className="col-md-12 col-12 text-center">
          <h2 className="breadcrumb-title">Doctor Profile</h2>
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="index.html">Home</Link>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                Doctor Profile
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
											<li className='active'>
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
          {/* Profile Settings */}
          <div className="dashboard-header">
            <h3>Profile Settings</h3>
          </div>
          <div className="setting-title">
            <h5>Profile</h5>
          </div>
          <form >
      <div className="setting-card">
        <div className="change-avatar img-upload">
          <div className="profile-img">
            {selectedImage ? (
              <img loading="lazy" decoding="async" src={selectedImage} alt="Profile" className="profile-preview" />
            ) : (
              <i className="fa-solid fa-file-image" />
            )}
          </div>
          <div className="upload-img">
            <h5>Profile Image</h5>
            <div className="imgs-load d-flex align-items-center">
              <div className="change-photo">
                <label htmlFor="file-upload">Upload New</label>
                <input
                  type="file"
                  id="file-upload"
                  className="upload"
                  accept="image/*"
                  onChange={handleImageChange}
                  ref={fileInputRef}  // Reference to file input
                />
              </div>
              <button className="upload-remove btn" onClick={handleRemoveImage}>
                Remove
              </button>
            </div>
            <p className="form-text">
              Your image should be below 4 MB, accepted formats: jpg, png, svg.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Information and Form Fields */}
      <div className="setting-title">
        <h5>Information</h5>
      </div>
      <div className="setting-card">
        <div className="row">
          {/* First Name Field */}
          <div className="col-lg-4 col-md-6">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Last Name <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Display Name <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Designation <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Phone Numbers <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-wrap">
                    <label className="col-form-label">
                      Known Languages <span className="text-danger">*</span>
                    </label>
                    <div className="input-block input-block-new mb-0">
                      <input
                        className="input-tags form-control"
                        id="inputBox3"
                        type="text"
                        data-role="tagsinput"
                        placeholder="Type New"
                        name="Label"
                        defaultValue="English German,Portugese"
                      />
                      <Link to="#" className="input-text save-btn">
                        Save
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="setting-title">
              <h5>Memberships</h5>
            </div>
            <div className="setting-card">
              <div className="add-info membership-infos">
                <div className="row membership-content">
                  <div className="col-lg-3 col-md-6">
                    <div className="form-wrap">
                      <label className="col-form-label">
                        Title <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Add Title"
                      />
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-6">
                    <div className="d-flex align-items-center">
                      <div className="form-wrap w-100">
                        <label className="col-form-label">
                          About Membership
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-wrap ms-2">
                        <label className="col-form-label d-block">&nbsp;</label>
                        <Link
                          to="javascript:void(0);"
                          className="trash-icon trash"
                        >
                          Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-end">
                <Link to="#" className="add-membership-info more-item">
                  Add New
                </Link>
              </div>
            </div>
            <div className="modal-btn text-end">
              <Link to="#" className="btn btn-gray">
                Cancel
              </Link>
              <button type="submit" className="btn btn-primary prime-btn">
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

export default DoctorProfileSettings
