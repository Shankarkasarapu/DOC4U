import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AddDependendantmodal from '../components/Modals/AddDependendantmodal'
import EditDependantmodal from '../components/Modals/EditDependantmodal';
import GetUserId from '../data/GetUserID';
import axios from 'axios';
import SecurityHeaders from '../data/SecurityHeaders';
import ENDPOINT from '../data/ENDPOINT';
import DependantItem from '../components/DependantItem';

const Dependants = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modal,setmodal] = useState(false)
  const handleShow = () => setModalShow(true);
  const handleClose = () => setModalShow(false);
  const handleDependClose = () => setmodal(false);

  const [activeTab, setActiveTab] = useState('upcoming');
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
    <AddDependendantmodal show={modalShow} handleClose={handleClose}/>
  <div className="breadcrumb-bar-two">
    <div className="container">
      <div className="row align-items-center inner-banner">
        <div className="col-md-12 col-12 text-center">
          <h2 className="breadcrumb-title">Dependants</h2>
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                Dependants
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
                <a href="/profile-settings" className="booking-doc-img">
                  <img
                    src={details.profileImage}
                    alt="User Image"
                  />
                </a>
                <div className="profile-det-info">
                  <h3>
                    <a href="/profile-settings">{details.name}</a>
                  </h3>
                  <div className="patient-details">
                    <h5 className="mb-0">Patient ID : PT{details.id ? details.id.slice(0,5) : ''}</h5>
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
                  
                  <li className="active">
                    <Link to="/dependants">
                      <i className="fa-solid fa-user-plus" />
                      <span>Dependants</span>
                    </Link>
                  </li>
                  <li>
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
        </div>
        <div className="col-lg-8 col-xl-9">
          <div className="dashboard-header">
            <h3>Dependants</h3>
            <ul className="header-list-btns">
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
          </div>
          <div className="dashboard-header border-0 m-0">
            <ul className="header-list-btns">
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
            <a
              href="#"
              className="btn btn-primary prime-btn"
              data-bs-toggle="modal"
              data-bs-target="#add_dependent"
              onClick={handleShow}
            >
              Add Dependants
            </a>
          </div>
          {details.dependants ? 
              details.dependants.map((item)=>(
                  <DependantItem item={item}/>
              ))
              :
              <></>
          }


        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Dependants