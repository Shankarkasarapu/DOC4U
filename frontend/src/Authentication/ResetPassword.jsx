import axios from 'axios'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ENDPOINT from '../data/ENDPOINT'
import SecurityHeaders from '../data/SecurityHeaders'
import ToastNotification from '../components/Modals/ToastNotification'

const ResetPassword = () => {
  const params = useParams()
  const id = params.id
  const [password,setpassword] = useState()
  const [loading,setLoading] = useState(false)
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
  const resetpass = async(e) =>{
    setLoading(true)
    e.preventDefault()
    try{
      const data = new FormData()
      data.append('id',id)
      data.append('new_password',password)
      var res = await axios.post(ENDPOINT + 'reset-password',data,SecurityHeaders)
      if(res)
      {
        setLoading(false)
        if(res.data.status==='error')
        {
          handleToast(res.data.message,false)
        }
        if(res.data.status==='success')
        {
          handleToast(res.data.message+" Redirecting to login page",true)
          setTimeout(()=>{ window.location.replace("/login")},3000)
         
        }
      }
    }
    catch{
      setLoading(false)
    }
    
  }
  return (
    <div>
      <div className="login-content-info">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="account-content">
                <div className="account-info">
                  <div className="back-link">
                    <Link to="/"><i className="fa-solid fa-arrow-left-long"></i> Back</Link>
                  </div>
                  <div className="reset-password-title">
                    <h3>Reset Password</h3>
                    <p>Enter your new password below to reset it.</p>
                  </div>
                  <form>
                    <div className="mb-3">
                      <label className="mb-2">New Password</label>
                      <input
                        className="form-control form-control-lg"
                        type="password"
                        id="new-password"
                        name="new-password"
                        placeholder="Enter your new password"
                        onChange={(e)=>{setpassword(e.target.value)}}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="mb-2">Confirm New Password</label>
                      <input
                        className="form-control form-control-lg"
                        type="password"
                        id="confirm-password"
                        name="confirm-password"
                        placeholder="Confirm your new password"
                      />
                    </div>
                    <div className="mb-3">
                      <button className="btn w-100" type="submit" onClick={(e)=>{resetpass(e)}}>Reset Password</button>
                    </div>
                    <div className="account-signup">
                      <p>Remembered your password? <Link to="/login">Login</Link></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ToastNotification toast={toast} setToast={setToast} />
    </div>
  )
}

export default ResetPassword
