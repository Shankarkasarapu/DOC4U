import React, { useEffect, useState } from 'react'
import GetUserID from '../data/GetUserID'
import axios from 'axios'
import ENDPOINT from '../data/ENDPOINT'
import SecurityHeaders from '../data/SecurityHeaders'
import moment from 'moment';

const PatientAppointment = () => {
	const [appoint,setappoint] = useState([])
	const user = GetUserID()
	const getappointments = async() =>{
		var data = new FormData()
		data.append('user_id',user)
		var res = await axios.post(ENDPOINT + 'get-user-appointments',data,SecurityHeaders)
		if(res){
			if(res.data.status==='success')
			{
				console.log(res)
				setappoint(res.data.appointments)
			}
		}
	}
	useEffect(()=>{
		getappointments()
	},[])
  return (
    <div>
        <div className="col-xl-12 d-flex">
			<div className="dashboard-main-col w-100">
				<div className="dashboard-card w-100">
					<div className="dashboard-card-head">
						<div className="header-title">
							<h5><span className="card-head-icon"><i className="fa-solid fa-calendar-days"></i></span>Appointment</h5>
						</div>
						<div className="card-view-link">
							<div className="owl-nav slide-nav text-end nav-control"></div>
						</div>
					</div>
					<div className="dashboard-card-body">
						<div className="apponiment-dates">
							{/* <ul className="appointment-calender-slider owl-carousel">
								<li>
									<a href="#">
										<h5>19 <span>Mon</span></h5>
									</a>
								</li>
								<li>
									<a href="#">
										<h5>20 <span>Mon</span></h5>
									</a>
								</li>
								<li>
									<a href="#" className="available-date">
										<h5>21 <span>Tue</span></h5>
									</a>
								</li>
								<li>
									<a href="#" className="available-date">
										<h5>22 <span>Wed</span></h5>
									</a>
								</li>
								<li>
									<a href="#">
										<h5>23 <span>Thu</span></h5>
									</a>							
								</li>
								<li>
									<a href="#">
										<h5>24 <span>Fri</span></h5>
									</a>
								</li>
								<li>
									<a href="#">
										<h5>25 <span>Sat</span></h5>
									</a>
								</li>
							</ul> */}
							{appoint ? appoint.map((item)=>(
								<div className="appointment-dash-card">
								<div className="doctor-fav-list">
									<div className="doctor-info-profile">
										<a href="#" className="table-avatar">
											<img src={item.doctor.image} alt="Img"/>
										</a>
										<div className="doctor-name-info">
											<h5><a href="#">{item.doctor.name}</a></h5>
											<span>{item.doctor.speciality}</span>
										</div>
									</div>
									<a href="#" className="cal-plus-icon"><i className="fa-solid fa-hospital"></i></a>
								</div>
								<div className="date-time">
									<p><i className="fa-solid fa-clock"></i>{moment.utc(item.date).format('MM/DD/YYYY HH:mm:ss')}</p>
								</div>
								<div className="card-btns">
									<a href="/chat" className="btn btn-gray"><i className="fa-solid fa-comment-dots"></i>Chat Now</a>
									<a href="/appointments" className="btn btn-outline-primary"><i className="fa-solid fa-calendar-check"></i>Attend</a>
								</div>
							</div>
							)):
								<h3>No appointments</h3>
							}
						</div>
					</div>						
				</div>
			</div>
		</div>
    </div>
  )
}

export default PatientAppointment