import { BtnLabel } from '../components/Loaders';
import axios from 'axios'
import React, { createContext, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import SecurityHeaders from '../data/SecurityHeaders'
import ENDPOINT from '../data/ENDPOINT'
import ToastNotification from '../components/Modals/ToastNotification';
import { auth, GoogleAuthProvider, signInWithPopup } from '../data/firebase';


const Register = () => {
  const [email,setemail] = useState()
  const [name,setname] = useState()
  const [password,setpassword] = useState()
  const [googmail,setgoogmail] = useState()
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: '',
    isSuccess: true,
  });

  const handleToast = (message, isSuccess) => {
    setToast({ show: true, message, isSuccess });
    setTimeout(() => {
      setToast((prevToast) => ({ ...prevToast, show: false }));
    }, 3000);
  };
  const useradd = async () =>{
    var data = new FormData()
    data.append('name', name)
    data.append('email', email)
    data.append('password',password)
    var res = await axios.post(ENDPOINT+'add-user',data,SecurityHeaders)
    if(res)
    {
      if(res.data.status==='success')
      {
        const type = 'general'
         window.location.replace('/patient-details/'+ res.data.insertedId+"/"+type)
      }
      if(res.data.status==="error"){
        if(res.data.message==="User already exists"){
          console.log("data present");
          handleToast('User already exists',true);
          window.location.replace("/login")
        }
      }
    }
  }
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // console.log(user)
      console.log('Google login successful: ', user);
      handleToast('Google login successful!', true);
      setgoogmail(user.email)
      
    
      // setTimeout(() => {
      //   window.location.replace('/');
      // }, 2500);
    } catch (error) {
      handleToast('Google login failed. Please try again.', false);
      console.error('Google login error', error);
    }
  };

  

  const checkgoogle = async () =>{
    console.log(googmail)
      var data = new FormData()
      data.append('mail',googmail)
      data.append('logintype',"google")
      var res = await axios.post(ENDPOINT+'google-signup',data,SecurityHeaders)
      if(res)
      {
        if(res.data.status==='success')
        {
          //console.log(res.data.user_id)
          const type = 'google'
          localStorage.setItem('user_id', JSON.stringify(res.data.user_id));
          window.location.replace("/patient-details/"+res.data.user_id+"/"+type)
        }
      }
  }
  
  return (
      <div className="content top-space">
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-8 offset-md-2">
        {/* Register Content */}
        <div className="account-content">
          <div className="row align-items-center justify-content-center">
            
            <div className="col-md-12 col-lg-6 login-right">
              <div className="login-header">
                <h3>
                  Patient Register{" "}
                  <Link to="/doctor-signup">Are you a Doctor?</Link>
                </h3>
              </div>
              {/* Register Form */}
              <form onSubmit={(e)=>{e.preventDefault()}}>
                <div className="mb-3 form-focus">
                  <input type="text" className="form-control floating" onChange={(e)=>{setname(e.target.value)}} />
                  <label className="focus-label">Name</label>
                </div>
                <div className="mb-3 form-focus">
                  <input type="email" className="form-control floating" onChange={(e)=>{setemail(e.target.value)}} />
                  <label className="focus-label">Email</label>
                </div>
                <div className="mb-3 form-focus">
                  <input type="password" className="form-control floating" onChange={(e)=>{setpassword(e.target.value)}}/>
                  <label className="focus-label">Create Password</label>
                </div>
                <div className="text-end">
                  <Link className="forgot-link" to="/login">
                    Already have an account?
                  </Link>
                </div>
                
                <button
                  className={`btn btn-primary w-100 btn-lg login-btn ${loading ? 'is-loading' : ''}`}
                  type="submit"
                  onClick={()=>{useradd()}}
                  disabled={loading}
                >
                  <BtnLabel loading={loading} loadingText="Registering...">Register</BtnLabel>
                </button>
                <div className="login-or">
                  <span className="or-line" />
                  <span className="span-or">or</span>
                </div>
                <div className="row social-login">
                  <div className="col-12">
                    <button className="btn btn-google w-100" onClick={()=>{handleGoogleLogin() ; checkgoogle()}}>
                      <i className="fab fa-google me-1" /> Login
                    </button>
                  </div>
                </div>
              </form>
              {/* /Register Form */}
            </div>
          </div>
        </div>
        {/* /Register Content */}
      </div>
    </div>
  </div>
</div>
  )
}

export default Register
