import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import InvoiceModal from '../components/Modals/InvoiceModal';
import GetUserId from '../data/GetUserID';
import axios from 'axios';
import SecurityHeaders from '../data/SecurityHeaders';
import ENDPOINT from '../data/ENDPOINT';

const Invoices = () => {
    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    const [details,setdetails] = useState([]) 
    const user_id = GetUserId();
	  const getDetails = async () => {
      try {
        const data = new FormData();
        data.append('user_id', user_id);
        const res = await axios.post(ENDPOINT + 'get-user-details', data, SecurityHeaders);
        if (res && res.data.status === 'success') {
          console.log(res);
          setdetails(res.data.user);
        } else {
          console.error('Failed to fetch user details');
        }
      } catch (error) {
        console.error('Error fetching user details:', error.message || error);
      }
    };
	useEffect(()=>{getDetails()},[])
  return (
    <>
    <InvoiceModal show={showModal} handleClose={handleClose} />
  <div className="breadcrumb-bar-two">
    <div className="container">
      <div className="row align-items-center inner-banner">
        <div className="col-md-12 col-12 text-center">
          <h2 className="breadcrumb-title">Invoices</h2>
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                Invoices
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
        {/* Profile Sidebar */}
        <div className="col-lg-4 col-xl-3 theiaStickySidebar">
          {/* Profile Sidebar */}
          <div className="profile-sidebar patient-sidebar profile-sidebar-new">
            <div className="widget-profile pro-widget-content">
              <div className="profile-info-widget">
                <a href="profile-settings.html" className="booking-doc-img">
                  <img
                    src={details.profileImage ? details.profileImage : null}
                    alt="User Image"
                  />
                </a>
                <div className="profile-det-info">
                  <h3>
                    <Link to="/profile-settings">{details.name}</Link>
                  </h3>
                  <div className="patient-details">
                    <h5 className="mb-0">Patient ID : PT{details.id ? details.id.slice(0,5):''}</h5>
                  </div>
                  <span>
                    {details.gender} <i className="fa-solid fa-circle" /> {details.age} years 
                  </span>
                </div>
              </div>
            </div>
            <div className="dashboard-widget">
              <nav className="dashboard-menu">
                <ul>
                  <li>
                    <Link to='/patient-dashboard'>
                      <i className="fa-solid fa-shapes" />
                      <span>Dashboard</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/appointments">
                      <i className="fa-solid fa-calendar-days" />
                      <span>My Appointments</span>
                    </Link>
                  </li>
                  
                  <li>
                    <Link to="/dependants">
                      <i className="fa-solid fa-user-plus" />
                      <span>Dependants</span>
                    </Link>
                  </li>
                  <li className="active">
                    <Link to="/patient-invoices">
                      <i className="fa-solid fa-file-lines" />
                      <span>Invoices</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile-settings">
                      <i className="fa-solid fa-user-pen" />
                      <span>Profile Settings</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/change-password">
                      <i className="fa-solid fa-key" />
                      <span>Change Password</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">
                      <i className="fa-solid fa-calendar-check" />
                      <span>Logout</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* /Profile Sidebar */}
        </div>
        {/* / Profile Sidebar */}
        {/* Invoices */}
        <div className="col-lg-8 col-xl-9">
          <div className="dashboard-header">
            <h3>Invoices</h3>
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
                    <td>
                      <a
                        href="javascript:void(0);"
                        className="text-blue-600"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_view"
                      >
                        #Inv-2021
                      </a>
                    </td>
                    <td>
                      <h2 className="table-avatar">
                        <a
                          href="doctor-profile.html"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            className="avatar-img rounded-3"
                            src="assets/img/doctors/doctor-thumb-21.jpg"
                            alt="User Image"
                          />
                        </a>
                        <a href="doctor-profile.html">Edalin Hendry</a>
                      </h2>
                    </td>
                    <td>24 Mar 2024</td>
                    <td>21 Mar 2024</td>
                    <td>$300</td>
                    <td>
                      <div className="action-item">
                        <a
                          href="javascript:void(0);"
                          onClick={handleShow}
                        >
                          <i className="fa-solid fa-link" />
                        </a>
                        <a href="javascript:void(0);">
                          <i className="fa-solid fa-print" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="javascript:void(0);"
                        className="text-blue-600"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_view"
                      >
                        #Inv-2021
                      </a>
                    </td>
                    <td>
                      <h2 className="table-avatar">
                        <a
                          href="doctor-profile.html"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            className="avatar-img rounded-3"
                            src="assets/img/doctors/doctor-thumb-13.jpg"
                            alt="User Image"
                          />
                        </a>
                        <a href="doctor-profile.html">John Homes</a>
                      </h2>
                    </td>
                    <td>17 Mar 2024</td>
                    <td>14 Mar 2024</td>
                    <td>$450</td>
                    <td>
                      <div className="action-item">
                        <a
                          href="javascript:void(0);"
                          onClick={handleShow}
                        >
                          <i className="fa-solid fa-link" />
                        </a>
                        <a href="javascript:void(0);">
                          <i className="fa-solid fa-print" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="javascript:void(0);"
                        className="text-blue-600"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_view"
                      >
                        #Inv-2021
                      </a>
                    </td>
                    <td>
                      <h2 className="table-avatar">
                        <a
                          href="doctor-profile.html"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            className="avatar-img rounded-3"
                            src="assets/img/doctors/doctor-thumb-03.jpg"
                            alt="User Image"
                          />
                        </a>
                        <a href="doctor-profile.html">Shanta Neill</a>
                      </h2>
                    </td>
                    <td>11 Mar 2024</td>
                    <td>07 Mar 2024</td>
                    <td>$250</td>
                    <td>
                      <div className="action-item">
                        <a
                          href="javascript:void(0);"
                          onClick={handleShow}
                        >
                          <i className="fa-solid fa-link" />
                        </a>
                        <a href="javascript:void(0);">
                          <i className="fa-solid fa-print" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="javascript:void(0);"
                        className="text-blue-600"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_view"
                      >
                        #Inv-2021
                      </a>
                    </td>
                    <td>
                      <h2 className="table-avatar">
                        <a
                          href="doctor-profile.html"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            className="avatar-img rounded-3"
                            src="assets/img/doctors/doctor-thumb-08.jpg"
                            alt="User Image"
                          />
                        </a>
                        <a href="doctor-profile.html">Anthony Tran</a>
                      </h2>
                    </td>
                    <td>26 Feb 2024</td>
                    <td>23 Feb 2024</td>
                    <td>$320</td>
                    <td>
                      <div className="action-item">
                        <a
                          href="javascript:void(0);"
                          onClick={handleShow}
                        >
                          <i className="fa-solid fa-link" />
                        </a>
                        <a href="javascript:void(0);">
                          <i className="fa-solid fa-print" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="javascript:void(0);"
                        className="text-blue-600"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_view"
                      >
                        #Inv-2021
                      </a>
                    </td>
                    <td>
                      <h2 className="table-avatar">
                        <a
                          href="doctor-profile.html"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            className="avatar-img rounded-3"
                            src="assets/img/doctors/doctor-thumb-01.jpg"
                            alt="User Image"
                          />
                        </a>
                        <a href="doctor-profile.html">Susan Lingo</a>
                      </h2>
                    </td>
                    <td>18 Feb 2024</td>
                    <td>15 Feb 2024</td>
                    <td>$480</td>
                    <td>
                      <div className="action-item">
                        <a
                          href="javascript:void(0);"
                          onClick={handleShow}
                        >
                          <i className="fa-solid fa-link" />
                        </a>
                        <a href="javascript:void(0);">
                          <i className="fa-solid fa-print" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="javascript:void(0);"
                        className="text-blue-600"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_view"
                      >
                        #Apt123
                      </a>
                    </td>
                    <td>
                      <h2 className="table-avatar">
                        <a
                          href="doctor-profile.html"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            className="avatar-img rounded-3"
                            src="assets/img/doctors/doctor-thumb-09.jpg"
                            alt="User Image"
                          />
                        </a>
                        <a href="doctor-profile.html">Joseph Boyd</a>
                      </h2>
                    </td>
                    <td>10 Feb 2024</td>
                    <td>07 Feb 2024</td>
                    <td>$260</td>
                    <td>
                      <div className="action-item">
                        <a
                          href="javascript:void(0);"
                          onClick={handleShow}
                        >
                          <i className="fa-solid fa-link" />
                        </a>
                        <a href="javascript:void(0);">
                          <i className="fa-solid fa-print" />
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a
                        href="javascript:void(0);"
                        className="text-blue-600"
                        data-bs-toggle="modal"
                        data-bs-target="#invoice_view"
                      >
                        #Inv-2021
                      </a>
                    </td>
                    <td>
                      <h2 className="table-avatar">
                        <a
                          href="doctor-profile.html"
                          className="avatar avatar-sm me-2"
                        >
                          <img
                            className="avatar-img rounded-3"
                            src="assets/img/doctors/doctor-thumb-07.jpg"
                            alt="User Image"
                          />
                        </a>
                        <a href="doctor-profile.html">Juliet Gabriel</a>
                      </h2>
                    </td>
                    <td>28 Jan 2024</td>
                    <td>25 Jan 2024</td>
                    <td>$350</td>
                    <td>
                      <div className="action-item">
                        <a
                          href="javascript:void(0);"
                          onClick={handleShow}
                        >
                          <i className="fa-solid fa-link" />
                        </a>
                        <a href="javascript:void(0);">
                          <i className="fa-solid fa-print" />
                        </a>
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
                <a href="#" className="page-link">
                  <i className="fa-solid fa-chevron-left" />
                </a>
              </li>
              <li>
                <a href="#" className="page-link">
                  1
                </a>
              </li>
              <li>
                <a href="#" className="page-link active">
                  2
                </a>
              </li>
              <li>
                <a href="#" className="page-link">
                  3
                </a>
              </li>
              <li>
                <a href="#" className="page-link">
                  4
                </a>
              </li>
              <li>
                <a href="#" className="page-link">
                  ...
                </a>
              </li>
              <li>
                <a href="#" className="page-link">
                  <i className="fa-solid fa-chevron-right" />
                </a>
              </li>
            </ul>
          </div>
          {/* /Pagination */}
        </div>
        {/* /Invoices */}
      </div>
    </div>
  </div>
</>

  )
}

export default Invoices