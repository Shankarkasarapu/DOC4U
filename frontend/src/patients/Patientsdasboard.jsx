import React, { useEffect, useState } from 'react'
import HealthRecords from '../components/HealthRecords'
import PatientAppointment from '../components/PatientAppointment'
import PatientAccountDetails from '../components/PatientAccountDetails'
import HealthOverview from '../components/HealthOverview'
import GetUserId from '../data/GetUserID'
import axios from 'axios'
import ENDPOINT from '../data/ENDPOINT'
import SecurityHeaders from '../data/SecurityHeaders'
import ToastNotification from '../components/Modals/ToastNotification'

const Patientsdasboard = () => {
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
			handleToast('Failed to fetch user details', false);
		  }
		} catch (error) {
		  handleToast(error.message || 'Error fetching user details', false);
		  console.error('Error fetching user details:', error.message || error);
		}
	  };
	  
	useEffect(()=>{getDetails()},[])

	const handleToast = (message, isSuccess) => {
		setToast({ show: true, message, isSuccess });
		setTimeout(() => {
		  setToast((prevToast) => ({ ...prevToast, show: false }));
		}, 3000);
	  };
	  
	  const [toast, setToast] = useState({
		show: false,
		message: '',
		isSuccess: true,
	  });
	
  return (
    <div>
        <div className="breadcrumb-bar-two">
				<div className="container">
					<div className="row align-items-center inner-banner">
						<div className="col-md-12 col-12 text-center">
							<h2 className="breadcrumb-title">Patient Dashboard</h2>
							<nav aria-label="breadcrumb" className="page-breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><a href="/">Home</a></li>
									<li className="breadcrumb-item" aria-current="page">Patient Dashboard</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
			</div>
            <div className="content">
				<div className="container">
					<div className="row">
						<PatientAccountDetails details={details} setdetails={setdetails} />
						<div className="col-lg-8 col-xl-9">
							<div className="dashboard-header">
								<h3>Dashboard</h3>
							</div>
							<div className="row">
								<div className="col-xl-12 d-flex">
									<HealthOverview/>
								</div>
								<PatientAppointment/>
							</div>
						</div>
					</div>

				</div>
				<ToastNotification toast={toast} setToast={setToast} />
			</div>	
    </div>
  )
}

export default Patientsdasboard