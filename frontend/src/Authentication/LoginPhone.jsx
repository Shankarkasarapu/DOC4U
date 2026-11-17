import React from 'react'
import { Link } from 'react-router-dom'

const LoginPhone = () => {
  return (
    <div>
      <div className="login-content-info">
				<div className="container">

					<div className="row justify-content-center">
						<div className="col-lg-4 col-md-6">
							<div className="account-content">
								<div className="login-shapes">
									<div className="shape-img-left">
										<img loading="lazy" decoding="async" src="assets/img/shape-01.png" alt="shape-image"/>
									</div>
									<div className="shape-img-right">
										<img loading="lazy" decoding="async" src="assets/img/shape-02.png" alt="shape-image"/>
									</div>
								</div>
								<div className="account-info">
									<div className="login-back">
										<Link to="/"><i className="fa-solid fa-arrow-left-long"></i> Back</Link>
									</div>
									<div className="login-title">
										<h3>Sign in</h3>
										<p>We'll send a confirmation code to your Phone.</p>
										<span>Sign in with <Link to="/login">Email</Link></span>
									</div>
									<form action="/login-phone-otp">
										<div className="mb-3">
											<label className="mb-2">Phone Number</label>
											<input className="form-control form-control-lg group_formcontrol" id="phone" name="phone" type="text"/>
										</div>
										<div className="mb-3">
											<div className="form-group-flex">
												<label className="mb-2">Password</label>
												<Link to="/forgot-password" className="forgot-link">Forgot password?</Link>
											</div>
											<div className="pass-group">
												<input type="password" className="form-control pass-input" placeholder="*************"/>
												<span className="feather-eye-off toggle-password"></span>
											</div>
										</div>
										<div className="mb-3 form-check-box">
											<div className="form-group-flex">
												<label className="custom_check d-inline-flex"> Remember Me  
													<input type="checkbox" name="login"/>
													<span className="checkmark"></span>
												</label>
												<label className="custom_check d-inline-flex"> Login with OTP  
													<input type="checkbox" name="login"/>
													<Link to="/login-phone-otp"><span className="checkmark"></span></Link>
												</label>
											</div>
										</div>
										<div className="mb-3">
											<button className="btn w-100" type="submit">Sign in</button>
										</div>
										<div className="login-or">
											<span className="or-line"></span>
											<span className="span-or">or</span>
										</div>
										<div className="social-login-btn">
											<Link to="javascript:void(0);" className="btn w-100">
												<img loading="lazy" decoding="async" src="assets/img/icons/google-icon.svg" alt="google-icon"/> Log in with Google
											</Link>
										</div>
										<div className="account-signup">
											<p>Don't have an account ? <Link to="/signup">Sign up</Link></p>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>	
    </div>
  )
}

export default LoginPhone
