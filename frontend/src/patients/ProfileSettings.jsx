import React, { useEffect, useState } from 'react'
import PatientAccountDetails from '../components/PatientAccountDetails'
import EditInfoArea from '../components/EditInfoArea'
import { Link } from 'react-router-dom'
import GetUserId from '../data/GetUserID';
import axios from 'axios';
import SecurityHeaders from '../data/SecurityHeaders';
import ENDPOINT from '../data/ENDPOINT';

const ProfileSettings = () => {
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
  <div className="breadcrumb-bar-two">
    <div className="container">
      <div className="row align-items-center inner-banner">
        <div className="col-md-12 col-12 text-center">
          <h2 className="breadcrumb-title">Profile Settings</h2>
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                Profile Settings
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <div className="content">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-xl-3 theiaStickySidebar">
			    <div className="profile-sidebar patient-sidebar profile-sidebar-new">
				    <div className="widget-profile pro-widget-content">
				      <div className="profile-info-widget">
                <Link to="/profile-settings" className="booking-doc-img">
                  <img loading="lazy" decoding="async" src={details.profileImage} alt="User Image"/>
                </Link>
                <div className="profile-det-info">
                  <h3><Link to="/profile-settings">{details.name}</Link></h3>
                  <div className="patient-details">
                    <h5 className="mb-0">Patient ID : PT{details.id ? details.id.slice(0,5) : ''}</h5>
                  </div>
                  <span>{details.gender} <i className="fa-solid fa-circle"></i> {details.age} years</span>
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
                      <i className="fa-solid fa-user-plus"></i>
                      <span>Dependants</span>
                    </Link>
					        </li>
                  <li>
                    <Link to="/patient-invoices">
                      <i className="fa-solid fa-file-lines" />
                      <span>Invoices</span>
                    </Link>
                  </li>
                  <li className='active'>
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
        <EditInfoArea details={details}/>
      </div>
    </div>
  </div>
</>

  )
}

export default ProfileSettings