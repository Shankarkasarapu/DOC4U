import React from 'react'
import { Link } from 'react-router-dom'

const PatientAccountDetails = ({details,setdetails}) => {
  const logout =() =>{
    localStorage.removeItem('user_id')
    window.location.replace('/login')
}
  return (
        <div className="col-lg-4 col-xl-3 theiaStickySidebar">
			<div className="profile-sidebar patient-sidebar profile-sidebar-new">
				<div className="widget-profile pro-widget-content">
				<div className="profile-info-widget">
					<Link to="/profile-settings" className="booking-doc-img">
						<img src={details.profileImage} alt="User Image"/>
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
                  <li className='active'>
                    <Link to="/patient-dashboard">
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
                    <Link to="/login" onClick={()=>{logout()}}>
                      <i className="fa-solid fa-calendar-check" />
                      <span>Logout</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
		</div>
	</div>
  )
}

export default PatientAccountDetails