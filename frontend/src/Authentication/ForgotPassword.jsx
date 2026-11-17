import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SecurityHeaders from '../data/SecurityHeaders';
import ENDPOINT from '../data/ENDPOINT';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import ToastNotification from '../components/Modals/ToastNotification';
import { CircularProgress } from '@mui/material';

const ForgotPassword = () => {
  const [email, setemail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading,setLoading] = useState(false)
  const [otpEmail, setOtpEmail] = useState('');
  const [otp,setotp] = useState() 
  const [modalloading,setModalloading] = useState(false)
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

  // Function to handle password reset
  const reset = async (e) => {
    e.preventDefault();
    setLoading(true)
    const data = new FormData();
    data.append('mail', email);
    try{
      const response = await axios.post(ENDPOINT + 'forgot-password',data, SecurityHeaders);
      if (response) {
        setLoading(false)
        if(response.data.status==='error')
        {
            handleToast(response.data.message,false)
        }
          if (response.data.status === 'success') {
            console.log(response);
            handleToast("check your email for otp",true)
            setOtpEmail(email);
            setShowModal(true);
          }
        }
    }
    catch{
      setLoading(false)
      handleToast("something went wrong try after some time",false)
    }
   
    }

	const verifyotp = async(e) =>{
		e.preventDefault()
    setModalloading(true)
    try{
      var val = new FormData()
      val.append('mail', email)
      val.append('otp', otp);
      const res = await axios.post(ENDPOINT + 'verify-otp',val,SecurityHeaders)
      if(res){
        setModalloading(false)
        if(res.data.status==='error'){
          handleToast(res.data.message,false)
          }
        if(res.data.status==='success')
        { 
          setShowModal(false)
          console.log(res)
          window.location.replace(`/reset-password/${res.data.user_id}`)
        }
      }
    }
    catch(e)
    {
         setModalloading(false)
         handleToast("something went wrong",false)
    }
		
	}


  

  return (
    <div>
      <div className="content top-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* Account Content */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>Forgot Password?</h3>
                      <p className="small text-muted">
                        Enter your email to get a password reset link
                      </p>
                    </div>

                    {/* Forgot Password Form */}
                    <form>
                      <div className="mb-3 form-focus">
                        <input
                          type="email"
                          className="form-control floating"
                          onChange={(e) => setemail(e.target.value)}
                          value={email}
                        />
                        <label className="focus-label">Email</label>
                      </div>
                      <div className="text-end">
                        <Link className="forgot-link" to="/login">
                          Remember your password?
                        </Link>
                      </div>
                      <button
                        className="btn btn-primary w-100 btn-lg login-btn"
                        type="submit"
                        onClick={(e) => reset(e)}
                      >
                        {loading?<CircularProgress size={15}/>:"Reset Password"}
                      </button>
                    </form>
                    {/* /Forgot Password Form */}
                  </div>
                </div>
              </div>
              {/* /Account Content */}
            </div>
          </div>
        </div>
      </div>

      {/* OTP Verification Modal */}
      <Modal show={showModal} onHide={()=>setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Email OTP Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="login-content-info pt-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="account-content">
                    <div className="login-shapes">
                      <div className="shape-img-left">
                        <img loading="lazy" decoding="async" src="assets/img/shape-01.png" alt="shape-image" />
                      </div>
                      <div className="shape-img-right">
                        <img loading="lazy" decoding="async" src="assets/img/shape-02.png" alt="shape-image" />
                      </div>
                    </div>
                    <div className="account-info">
                      <div className="login-verify-img pb-4">
                        <i className="fa-solid fa-envelope fs-1" style={{ color: "#0E82FD" }}></i>
                      </div>
                      <div className="login-title">
                        <p className="mb-0">
                          OTP sent to your Email ending ***********<strong>{email.slice(-15)}</strong>
                        </p>
                      </div>
                      <form>
                          <div className="mb-3">
                            <input type="text" className='form-control' onChange={(e)=>{setotp(e.target.value)}}  maxLength={6} />
                          </div>
                        <div className="mb-3">
                          <div className="otp-info">
                            <div className="otp-code">
                              <p>Didn't receive OTP code?</p>
                              <a onClick={(e)=>reset(e)}>Resend Code</a>
                            </div>
                          </div>
                        </div>
                        <div className="reset-btn">
                          <button className="btn w-100" type="submit" onClick={(e)=>{verifyotp(e); }}>
                           {modalloading?<CircularProgress size={15}/>:"Submit"} 
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Login Email OTP */}
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <ToastNotification toast={toast} setToast={setToast} />
    </div>
  );
};

export default ForgotPassword;
