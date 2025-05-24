import React from 'react'

const VerifyOTP = () => {
  return (
    <div className="login-content-info">
    <div className="container">
      {/* Login Email Otp */}
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="account-content">
            <div className="login-shapes">
              <div className="shape-img-left">
                <img src="assets/img/shape-01.png" alt="shape-image" />
              </div>
              <div className="shape-img-right">
                <img src="assets/img/shape-02.png" alt="shape-image" />
              </div>
            </div>
            <div className="account-info">
              
              <div className="login-verify-img">
              <i class="fa-solid fa-envelope h-100" style={{color:"#0E82FD"}}></i>
              </div>
              <div className="login-title">
                <h3>Email OTP Verification</h3>
                <p className="mb-0">
                  OTP sent to your Email ending{" "}
                  <strong>**********@gmail.com</strong>
                </p>
              </div>
              <form
                method="get"
                className="digit-group login-form-control"
                data-group-name="digits"
                data-autosubmit="false"
                autoComplete="off"
                action="doctor-dashboard.html"
              >
                <div className="otp-box">
                  <div className="mb-3">
                    <input
                      type="text"
                      id="digit-1"
                      name="digit-1"
                      data-next="digit-2"
                      maxLength={1}
                    />
                    <input
                      type="text"
                      id="digit-2"
                      name="digit-2"
                      data-next="digit-3"
                      data-previous="digit-1"
                      maxLength={1}
                    />
                    <input
                      type="text"
                      id="digit-3"
                      name="digit-3"
                      data-next="digit-4"
                      data-previous="digit-2"
                      maxLength={1}
                    />
                    <input
                      type="text"
                      id="digit-4"
                      name="digit-4"
                      data-next="digit-5"
                      data-previous="digit-3"
                      maxLength={1}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="otp-info">
                    <div className="otp-code">
                      <p>Didn't receive OTP code?</p>
                      <a>Resend Code</a>
                    </div>
                    <div className="otp-sec">
                      <p>
                        <i className="feather-clock" /> 00:25 secs
                      </p>
                    </div>
                  </div>
                </div>
                <div className="reset-btn">
                  <button className="btn w-100" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Login Email Otp */}
    </div>
  </div>
  
  )
}

export default VerifyOTP