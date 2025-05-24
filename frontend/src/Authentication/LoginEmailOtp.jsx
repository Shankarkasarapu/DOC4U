import React from 'react'
import { Link } from 'react-router-dom'

const LoginEmailOtp = () => {
  return (
    <div>
      <div class="login-content-info">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-4 col-md-6">
							<div class="account-content">
								<div class="login-shapes">
									<div class="shape-img-left">
										<img src="assets/img/shape-01.png" alt="shape-image"/>
									</div>
									<div class="shape-img-right">
										<img src="assets/img/shape-02.png" alt="shape-image"/>
									</div>
								</div>
								<div class="account-info">
									<div class="login-back">
										<Link to="/login-email"><i class="fa-solid fa-arrow-left-long"></i> Back</Link>
									</div>
									<div class="login-title">
										<h3>Sign in</h3>
										<p>We'll send a confirmation code to your email.</p>
										<span>Sign in with <Link to="/login-phone">Phone Number</Link></span>
									</div>
									<form action="/email-otp">
										<div class="mb-3">
											<label class="mb-2">E-mail</label>
											<input type="text" class="form-control" placeholder="example@email.com"/>
										</div>
										<div class="mb-3 form-check-box">
											<div class="form-group-flex">
												<label class="custom_check d-inline-flex"> Remember Me  
													<input type="checkbox" name="login" checked/>
													<span class="checkmark"></span>
												</label>
												<label class="custom_check d-inline-flex"> Login with OTP  
													<input type="checkbox" name="login" checked/>
													<span class="checkmark"></span>
												</label>
											</div>
										</div>
										<div class="mb-3">
											<button class="btn w-100" type="submit">Sign in</button>
										</div>
										<div class="login-or">
											<span class="or-line"></span>
											<span class="span-or">or</span>
										</div>
										<div class="social-login-btn">
											<Link class="btn w-100">
												<img src="assets/img/icons/google-icon.svg" alt="google-icon"/> Log in with Google
											</Link>
										</div>
										<div class="account-signup">
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

export default LoginEmailOtp
