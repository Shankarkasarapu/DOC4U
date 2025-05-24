import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../App.css'

const Aboutus = () => {
    return (

        <>


            {/* Main Wrapper */}
            <div className="main-wrapper pt-5">
                {/* Breadcrumb */}
                {/* <div className="breadcrumb-bar-two bg-white">
                    <div className="container">
                        
                    </div>
                </div> */}
                {/* /Breadcrumb */}
                {/* About Us */}
                <section className="about-section p-2 my-5 pt-4 pt-md-5 " >
                    <div className="container">
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-11 col-sm-7 col-md-4 col-lg-3 p-md-0 ">
                                
                                <img
                                    src="assets/img/aboutus.jpeg"
                                    className=" h-100 w-100 rounded-5"
                                    alt="about-image"
                                />
                            </div>
                            <div className="col-11   col-md-8 p-3">
                                <div className="section-inner-header about-inner-header">
                                    <h6>About Our Company</h6>
                                    <h2>
                                        We Are Always Ensure Best Medical Treatment For Your Health
                                    </h2>
                                </div>
                                <div className="about-content">
                                    <div className="about-content-details">
                                        <p>
                                            At DOC4U, our mission is to provide accessible, high-quality healthcare for everyone. We understand the importance of finding the right care quickly, which is why we've built an easy-to-use platform that connects patients with trusted healthcare professionals. From scheduling routine check-ups to consulting specialists, DOC4U makes booking appointments and accessing health information simple and efficient. Our commitment is to ensure the best treatment for every patient, empowering you to focus on your health and well-being.
                                        </p>

                                    </div>
                                    <div className="about-contact">
                                        <div className="about-contact-icon">
                                            <span>
                                                <img
                                                    src="assets/img/icons/phone-icon.svg"
                                                    alt="phone-image"
                                                />
                                            </span>
                                        </div>
                                        <div className="about-contact-text">
                                            <p>Need Emergency?</p>
                                            <h4>+91 1234567890</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* /About Us */}
                {/* Why Choose Us */}
                <section className="why-choose-section pt-5 pb-0" style={{ background: "#F9FAFB" }}>
                    <div className="container" >
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-inner-header text-start " >
                                    <h2>Why We Stand Out</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3 mb-5 pt-3 pb-5" >

                            <div className="col-lg-3 col-md-6 d-flex">
                                <div className="card-body">
                                    <div className="why-choose-icon d-flex align-items-center">
                                        <span className='w-50 me-2'>
                                            <img
                                                src="assets/img/icons/choose-01.svg"
                                                alt="choose-image"
                                                className='shadow rounded-5 col-5 col-sm-4 col-md-8 col-lg-12 col-xl-9 p-2'
                                            />
                                        </span>
                                        <h5>Qualified Staff of Doctors</h5>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex">
                                <div className="card-body">
                                    <div className="why-choose-icon d-flex align-items-center">
                                        <span className='w-50 me-2 rounded-circle'>
                                            <img
                                                src="assets/img/icons/choose-02.svg"
                                                alt="choose-image"
                                                className='shadow rounded-5 col-5 col-sm-4 col-md-8 col-lg-12 col-xl-9 p-2'

                                            />
                                        </span>
                                        <h5>24/7 Customer Support</h5>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex">
                                <div className="card-body">
                                    <div className="why-choose-icon d-flex  align-items-center">
                                        <span className='w-50 me-2 rounded-circle'>
                                            <img
                                                src="assets/img/icons/choose-03.svg"
                                                alt="choose-image"
                                                className='shadow rounded-5 col-5 col-sm-4 col-md-8 col-lg-12 col-xl-9 p-2'

                                            />
                                        </span>
                                        <h5>High-Quality Equipment</h5>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex">
                                <div className="card-body">
                                    <div className="why-choose-icon d-flex  align-items-center">
                                        <span className='w-50 me-2 rounded-circle'>
                                            <img
                                                src="assets/img/icons/choose-04.svg"
                                                alt="choose-image"
                                                className='shadow rounded-5 col-5 col-sm-4 col-md-8 col-lg-12 col-xl-9 p-2'

                                            />
                                        </span>
                                        <h5>Quick and easy process</h5>

                                    </div>
                                </div>
                            </div>

                        </div>
                        

                    </div>


                </section>

                <section className="way-section">
                            <div className="container">
                                <div className="way-bg">
                                    <div className="way-shapes-img">

                                        <div className="way-shapes-right">
                                            <img src="assets/img/shape-07.png" alt="shape-image" />
                                        </div>
                                    </div>
                                    <div className="row align-items-end">

                                        <div className="col-lg-5 col-md-12 text-center">
                                            <div className="way-img">
                                                <img
                                                    src="assets/img/contactus.png"
                                                    className="img-fluid col-xl-10"
                                                    alt="doctor-way-image"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-12">
                                            <div className="section-inner-header way-inner-header p-4 p-lg-6">
                                                <h2>"Start Your Journey to Feeling Better with DOC4U"</h2>
                                                <p>
                                                    Start your journey to feeling better with DOC4U, where personalized healthcare is just a click away. Connect with trusted doctors and medical experts, find the care you need when you need it.
                                                </p>
                                                <Link to="/contactus" className="btn btn-primary">
                                                    Contact With Us
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                {/* /Way Choose Us */}

            </div>
        </>

    )
}

export default Aboutus