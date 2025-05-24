import axios from 'axios';
import React, { useState } from 'react'
import ENDPOINT from '../data/ENDPOINT';
import SecurityHeaders from '../data/SecurityHeaders';
import ToastNotification from '../components/Modals/ToastNotification';
import { CircularProgress } from '@mui/material';


const Contactus = () => {
    const [name, setName] =useState();
    const [email, setEmail] =useState();
    const [message, setMessage] =useState()
    const [phone,setPhone] = useState()
    const [services,setServices] = useState()
    const[loading,setLoading] = useState(false)
    const [toast, setToast] = useState({
        show: false,
        message: '',
        isSuccess: true,
      });
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!name || !email || !message || !phone || !services){
        handleToast("All Fields are necessary",false)
        }
        else{
            SendMessage();
        setLoading(true)
        }
       

    }
      const handleToast = (message, isSuccess) => {
        setToast({ show: true, message, isSuccess });
        setTimeout(() => {
          setToast((prevToast) => ({ ...prevToast, show: false }));
        }, 3000);
      };
    const SendMessage = async()=>{
        const form = new FormData()
        form.append('name',name)
        form.append('mail',email)
        form.append('message',message)
        form.append('phone_no',phone)
        form.append('services',services)
        const res = await axios.post(ENDPOINT+'send-messages',form,SecurityHeaders)
        if(res)
        {
            console.log(res)
            if(res.data.status==='success')
            {
                setLoading(false)
                handleToast('Our team will reach you very soon',true)
            }
        }
    }
return (
        <div>

            <div className="breadcrumb-bar-two bg-white">
                <div className="container">
                    <div className="row align-items-center inner-banner pb-0">
                        <div className="col-md-12 col-12 text-center">
                            <h2 className="breadcrumb-title m-0">Contact Us</h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Breadcrumb */}
            {/* Contact Us */}
            <section className="contact-section pt-5 ">
                <div className="container">
                    <div className="row " >
                        <div className="col-lg-5 col-md-12">
                            <div className="section-inner-header contact-inner-header">
                                <h6>Get in touch</h6>
                                <h2>Have Any Question?</h2>
                            </div>
                            <div className="card contact-card">
                                <div className="card-body">
                                    <div className="contact-icon">
                                        <i className="feather-map-pin" />
                                    </div>
                                    <div className="contact-details">
                                        <h4>Address</h4>
                                        <p>Rajam , Andhra Pradesh</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card contact-card">
                                <div className="card-body">
                                    <div className="contact-icon">
                                        <i className="feather-phone" />
                                    </div>
                                    <div className="contact-details">
                                        <h4>Phone Number</h4>
                                        <p>+91 123 456 5943</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card contact-card">
                                <div className="card-body">
                                    <div className="contact-icon">
                                        <i className="feather-mail" />
                                    </div>
                                    <div className="contact-details">
                                        <h4>Email Address</h4>
                                        <p>
                                            <a

                                                className="__cf_email__"
                                                data-cfemail="afcbc0ccccdaddcaefcad7cec2dfc3ca81ccc0c2"
                                            >docforyouhelpdesk@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 d-flex  fs-5">
                            <div className="card contact-form-card w-100">
                                <div className="card-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="mb-2">Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Your Name"
                                                        onChange={(e)=>setName(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="mb-2">Email Address</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Email Address"
                                                        onChange={(e)=>setEmail(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="mb-2">Phone Number</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Phone Number"
                                                        onChange={(e)=>setPhone(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="mb-2">Services</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Services"
                                                        onChange={(e)=>setServices(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    <label className="mb-2">Message</label>
                                                    <textarea
                                                        className="form-control"
                                                        placeholder="Enter your comments"
                                                        defaultValue={""}
                                                        onChange={(e)=>setMessage(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group-btn mb-0">
                                                    <button
                                                        
                                                        className="btn btn-primary prime-btn"
                                                        onClick={(e)=>{handleSubmit(e)}}
                                                    >
                                                        {loading?<><CircularProgress size={15}/></>:'Send Message'}
                                                       
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Contact Us */}
            
            <ToastNotification toast={toast} setToast={setToast} />
        </div>

    )
}

export default Contactus