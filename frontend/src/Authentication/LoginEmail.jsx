import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import ToastNotification from '../components/Modals/ToastNotification';
import { auth, GoogleAuthProvider, signInWithPopup } from '../data/firebase';
import ENDPOINT from '../data/ENDPOINT';
import { BtnLabel } from '../components/Loaders';
import SecurityHeaders from '../data/SecurityHeaders';

// After login, return to the page the visitor originally wanted (e.g. a booking page)
const goAfterLogin = () => {
  let target = '/';
  try {
    const saved = sessionStorage.getItem('redirect_after_login');
    if (saved && saved.startsWith('/') && !saved.startsWith('//')) target = saved;
    sessionStorage.removeItem('redirect_after_login');
  } catch (e) { /* ignore */ }
  window.location.replace(target);
};

const LoginEmail = () => {
  const routerLocation = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [googmail,setgoogmail] = useState()
  const [busy, setBusy] = useState(false);
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

  // Sent here from a protected page (e.g. booking)? Tell the visitor why.
  useEffect(() => {
    const msg = routerLocation.state?.message;
    if (msg) handleToast(msg, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getLogin = async () => {
    if (busy) return;
    setBusy(true);
    const val = new FormData();
    val.append('email', email);
    val.append('password', password);

    try {
      const response = await axios.post(ENDPOINT+'login', val, SecurityHeaders);

      if (response.data.status === 'success') {
        handleToast('Login Successful! Redirecting...', true);
        console.log('User successfully logged in', response);
        localStorage.setItem('user_id', response.data.id);
        setTimeout(() => {
          goAfterLogin();
        }, 2500);
      } else {
        handleToast('Invalid Credentials. Please try again.', false);
        setBusy(false);
        console.log('Invalid login attempt', response);
      }
    } catch (error) {
      handleToast('An error occurred. Please try again later.', false);
      setBusy(false);
      console.error('Login failed', error);
    }
  };


  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // console.log(user)
      console.log('Google login successful: ', user);
      handleToast('Google login successful!', true);
      setgoogmail(user.email)
      setTimeout(() => {
        goAfterLogin();
      }, 2500);
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
          const type = 'google'
          localStorage.setItem('user_id', JSON.stringify(res.data.user_id));
          window.location.replace("/patient-details/"+res.data.user_id+"/"+type)
        }
      }
  }

  return (
    <div>
      <div className="content top-space">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Login <span>Doc4U</span>
                      </h3>
                    </div>
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="mb-5 form-focus">
                        <label className="pb-2">Email</label>
                        <input
                          type="email"
                          className="form-control floating p-2"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-5 form-focus">
                        <label className="pb-2">Password</label>
                        <input
                          type="password"
                          className="form-control floating p-2"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="text-end">
                        <Link className="forgot-link" to="/forgot-password">
                          Forgot Password?
                        </Link>
                      </div>
                      <button
                        className={`btn btn-primary w-100 btn-lg login-btn ${busy ? 'is-loading' : ''}`}
                        type="submit"
                        onClick={getLogin}
                        disabled={busy}
                      >
                        <BtnLabel loading={busy} loadingText="Logging in...">Login</BtnLabel>
                      </button>
                      <div className="login-or">
                        <span className="or-line" />
                        <span className="span-or">or</span>
                      </div>
                      <div className="row social-login">
                        <div className="col-12 mx-auto">
                          <button
                            className="btn btn-google w-100"
                            onClick={()=>{handleGoogleLogin() ; checkgoogle()}}
                          >
                            <i className="fab fa-google me-1" /> Login with Google
                          </button>
                        </div>
                      </div>
                      <div className="text-center dont-have">
                        Don’t have an account? <Link to="/register">Register</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <ToastNotification toast={toast} setToast={setToast} />
    </div>
  );
};

export default LoginEmail;
