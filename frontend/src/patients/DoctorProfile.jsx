import { CircularProgress, Rating } from '@mui/material'
import axios from 'axios'
import doc from 'localbase/localbase/api/selectors/doc'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SecurityHeaders from '../data/SecurityHeaders'
import ENDPOINT from '../data/ENDPOINT'
import ToastNotification from '../components/Modals/ToastNotification'

const DoctorProfile = () => {
  const date = new Date().getDate()
  const month=new Date().getMonth()
  const year=new Date().getFullYear()
  const months = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
 const monthName = months[month];
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
  const user_id = localStorage.getItem('user_id')
  const [docdata,setdocdata] = useState([])
  const [review,setreview] = useState("")
  const [rating,setrating] = useState()
  const [reviewtitle,setreviewtitle] = useState("")
  const[reviewed,setReviewed] = useState(1)
  const params = useParams()
  const id = params.id
  const getDocdata = async() =>{
    try
    {
      const data = new FormData()
      data.append('doctor_id',id)
      var res = await axios.post(ENDPOINT+'get-doctor-details',data,SecurityHeaders)
      if(res){
        if(res.data.status==='success')
        {
          console.log(res.data.data)
          setdocdata(res.data.data)
        }
      }
    }
    catch
    {
       console.log('error')
       handleToast("Something went wrong please try again later",false)
    }
   
  }
  const addreview = async (e) =>{
    setReviewed((reviewed+1)%2)
    e.preventDefault()
    try{
      const value = new FormData()
      value.append('doctor_id',id)
      value.append('user_id',user_id)
      value.append('review',review)
      value.append('rating',rating)
      value.append('reviewtitle',reviewtitle)
      var resp = await axios.post(ENDPOINT+'add-review',value,SecurityHeaders)
      if(resp){
       if(resp.data.status==='success'){
         console.log(resp)
       }
      }
    }
    catch{
        handleToast("Something went please try again later",false)
    }
     
  }
  useEffect(()=>{
    getDocdata()
  },[reviewed])
  const [activeTab, setActiveTab] = useState('doc_overview');
  return (
    <>
    <ToastNotification toast={toast} setToast={setToast} />
    {docdata?
    <>
      <div className="breadcrumb-bar-two">
    <div className="container">
    </div>
  </div>
  {/* /Breadcrumb */}
  {/* Page Content */}
  <div className="content">
    <div className="container">
      {/* Doctor Widget */}
      <div className="card">
        <div className="card-body">
          <div className="doctor-widget">
            <div className="doc-info-left">
              <div className="doctor-img">
                <img
                  src={docdata.image}
                  className="img-fluid"
                  alt="User Image"
                />
              </div>
              <div className="doc-info-cont">
                <h4 className="doc-name">{docdata.name}</h4>
                <p className="doc-speciality">
                  {docdata.qualifications}
                </p>
                <p className="doc-department">
                  <img
                    src="/assets/img/specialities/specialities-05.png"
                    className="img-fluid"
                    alt="Speciality"
                  />
                  Dentist
                </p>
                <div className="rating">
                  <Rating value={docdata.rating/10} readOnly/>
                </div>
                <div className="clinic-details">
                  <p className="doc-location">
                    <i className="fas fa-map-marker-alt" /> {docdata.location}
                  </p>
                </div>
                <div className="clinic-services">
                  {docdata.feature_services ? docdata.feature_services.map((item)=>(
                      <span>{item}</span>
                    )): <h4>Loading</h4>}
                </div>
              </div>
            </div>
            <div className="doc-info-right">
              <div className="clini-infos">
                <ul>
                  <li>
                    <i className="far fa-thumbs-up" /> {docdata.feedback}
                  </li>
                  <li>
                    <i className="far fa-comment" /> {docdata.reviews?docdata.reviews.length:"no"} Feedback
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt" /> {docdata.location}
                  </li>
                  <li>
                    <i className="far fa-money-bill-alt" /> {docdata.price_per_hour} per hour{" "}
                  </li>
                </ul>
              </div>
              <div className="doctor-action">
                <Link to="/contactus" className="btn btn-white msg-btn">
                  <i className="far fa-comment-alt" />
                </Link>
                <Link to="/contactus" className="btn btn-white call-btn">
                  <i className="fas fa-phone" />
                </Link>
                <Link to='/contactus' className='btn btn-white call-btn'>
                <i className="fas fa-video" />
                </Link>
              </div>
              <div className="clinic-booking">
                <Link className="apt-btn" to={"/booking/"+docdata._id}>
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body pt-0">
          <nav className="user-tabs mb-4">
            <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 'doc_overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('doc_overview')}
                  href="#doc_overview" data-bs-toggle="tab"
                >
                  Overview
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 'doc_reviews' ? 'active' : ''}`}
                  onClick={() => setActiveTab('doc_reviews')}
                  href="#doc_reviews" data-bs-toggle="tab"
                >
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${activeTab === 'doc_business_hours' ? 'active' : ''}`}
                  onClick={() => setActiveTab('doc_business_hours')}
                  href="#doc_business_hours" data-bs-toggle="tab"
                >
                  Business Hours
                </a>
              </li>
            </ul>
          </nav>
          <div className="tab-content">
          <div className={`tab-pane fade ${activeTab === 'doc_overview' ? 'show active' : ''}`} id="doc_overview" >
              <div className="row">
                <div className="col-md-12 col-lg-9">
                  <div className="widget about-widget">
                    <h4 className="widget-title">About Me</h4>
                    <p>
                    {docdata.overview }
                    </p>
                  </div>
                  <div className="service-list">
                    <h4>Services</h4>
                    <ul className="clearfix">
                      {docdata.services ? docdata.services.map((item)=>(
                          <li>{item}</li>
                      )): 'Loading'}
                    </ul>
                  </div>
                  <div className="service-list">
                    <h4>Specializations</h4>
                    <ul className="clearfix">
                      {docdata.specializations ? docdata.specializations.map((item)=>(
                          <li>{item}</li>
                      )): 'Loading'}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={`tab-pane fade ${activeTab === 'doc_reviews' ? "show active" : " "}`} id="doc_reviews" >
              <div className="widget review-listing">
                <ul className="comments-list">
                  <li>
                    {docdata.reviews?
                    docdata.reviews.map((item)=>(
                      <>
                      <div className="comment">
                      <img
                        className="avatar avatar-sm rounded-circle"
                        alt="User Image"
                        src={item.profileImage}
                      />
                      <div className="comment-body">
                          <span className="comment-author">{item.user_name}</span>
                          <div className="review-count rating">
                           <Rating value={item.rating} readOnly/>
                          </div>
                        <p className="recommended">
                          <i className="far fa-thumbs-up" /> I recommend the
                          doctor
                        </p>
                        <p className="comment-content">
                         {item.review}
                        </p>
                      </div>
                    </div>
                      
                      </>
                    )):
                    <>
                    <p>No reviews</p>
                    </>}
                  </li>
                 
                </ul>
              </div>
              <div className="write-review">
                <h4>
                  Write a review for <strong>{docdata.name}</strong>
                </h4>
                <form>
                  <div className="mb-3">
                    <label className="mb-2">Review</label>
                    <Rating className='star-rating text-end' onChange={(e)=>{setrating(e.target.value)}} precision={0.5} required/>
                  </div>
                  <div className="mb-3">
                    <label className="mb-2">Title of your review</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="If you could say it in one sentence, what would you say?"
                      onChange={(e)=>{setreviewtitle(e.target.value)}}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="mb-2">Your review</label>
                    <textarea
                      id="review_desc"
                      maxLength={100}
                      className="form-control"
                      defaultValue={""}
                      onChange={(e)=>{setreview(e.target.value)}}
                      required
                    />
                    <div className="d-flex justify-content-between mt-3">
                      <small className="text-muted">
                        <span id="chars">100</span> characters remaining
                      </small>
                    </div>
                  </div>
                  <hr />
                  <div className="mb-3">
                    <div className="terms-accept">
                      <div className="custom-checkbox">
                        <input type="checkbox" id="terms_accept" />
                        <label htmlFor="terms_accept">
                          I have read and accept{" "}
                          <a href="#">Terms &amp; Conditions</a>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="submit-section">
                    <button
                      type="submit"
                      className="btn btn-primary submit-btn"
                      onClick={(e)=>{addreview(e)}}
                    >
                      Add Review
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className={`tab-pane fade ${activeTab === 'doc_business_hours' ? "show active" : " "}`} id="doc_business_hours" >
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <div className="widget business-widget">
                    <div className="widget-content">
                      <div className="listing-hours">
                        <div className="listing-day current">
                          <div className="day">
                            Today <span>{date } {monthName.slice(0,3)} {year}</span>
                          </div>
                          <div className="time-items">
                            <span className="open-status">
                              <span className="badge bg-success-light">
                                Open Now
                              </span>
                            </span>  
                            <span className="time">07:00 AM - 09:00 PM</span>
                          </div>
                        </div>
                        <div className="listing-day">
                          <div className="day">Monday</div>
                          <div className="time-items">
                            <span className="time">07:00 AM - 09:00 PM</span>
                          </div>
                        </div>
                        <div className="listing-day">
                          <div className="day">Tuesday</div>
                          <div className="time-items">
                            <span className="time">07:00 AM - 09:00 PM</span>
                          </div>
                        </div>
                        <div className="listing-day">
                          <div className="day">Wednesday</div>
                          <div className="time-items">
                            <span className="time">07:00 AM - 09:00 PM</span>
                          </div>
                        </div>
                        <div className="listing-day">
                          <div className="day">Thursday</div>
                          <div className="time-items">
                            <span className="time">07:00 AM - 09:00 PM</span>
                          </div>
                        </div>
                        <div className="listing-day">
                          <div className="day">Friday</div>
                          <div className="time-items">
                            <span className="time">07:00 AM - 09:00 PM</span>
                          </div>
                        </div>
                        <div className="listing-day">
                          <div className="day">Saturday</div>
                          <div className="time-items">
                            <span className="time">07:00 AM - 09:00 PM</span>
                          </div>
                        </div>
                        <div className="listing-day closed">
                          <div className="day">Sunday</div>
                          <div className="time-items">
                            <span className="time">
                              <span className="badge bg-danger-light">
                                Closed
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>:<>
    <CircularProgress size={40} className='text-center'/>
    </>}


</>
  )
}

export default DoctorProfile