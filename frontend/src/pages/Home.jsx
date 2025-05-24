import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Accordion, Card, Navbar, } from 'react-bootstrap'
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import ENDPOINT from '../data/ENDPOINT';
import ToastNotification from '../components/Modals/ToastNotification';
import { Link } from 'react-router-dom';
import vid from "../assets/img/banner/banner_vedio.mp4"

const Home = () => {

    const [doctorsData, setDoctorsData] = useState([]);

    const gettopdocs = async () => {
        try {
            const response = await axios.post(ENDPOINT + 'top-doctors', {},
                { headers: { 'Content-Type': 'multipart/form-data' } }
            );
            if (response.data && response.data.doctors) {
                console.log(response.data.doctors);
                setDoctorsData(response.data.doctors);
            } else {
                console.warn('No doctor data received.');
                handleToast('Failed to load top doctors. Please try again later.', false);
            }
        } catch (error) {
            console.error('Error fetching top doctors:', error);
            handleToast('Network error occurred while fetching top doctors. Please check your connection.', false);
        }
    };

    useEffect(() => {
        gettopdocs()
    }, [])

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

    return (
        <>
            {/* Home Banner */}
            <section className="banner-section pt-5 position-relative">
                {/* Video Background */}
                <div className="video-background position-absolute top-0 start-0 w-100 h-100">
                    <video autoPlay muted loop className="w-100 h-100 object-fit-cover">
                        <source src={vid} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                
                {/* Banner Content */}
                <div className="banner-container py-5 position-relative w-100 h-100 d-flex align-items-center" 
                    style={{
                        background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2))',
                        zIndex: 1
                    }}
                >
                    <div className="row align-items-center p-0 p-md-5 mx-4 w-100">
                        <div className="col-lg-6 px-sm-5 text-white">
                            <div className="banner-content">
                                <h1>Find the Best Doctors Near You for Expert Care</h1>
                                <p>Embark on your healing journey with DOC4U</p>
                                <a href="/doctors-list" className="btn btn-primary">
                                    Start a Consult
                                </a>
                            </div>

                            {/* Search Box */}
                            <div className="search-box-one bg-light p-3 rounded">
                                <form action="/" role="search">
                                    <div className="search-input search-line d-flex align-items-center">
                                        <i className="feather-search bficon me-2" aria-hidden="true" />
                                        <input type="text" className="form-control" placeholder="Search doctors, clinics, hospitals, etc." aria-label="Search doctors, clinics, hospitals" />
                                    </div>
                                    <div className="search-input search-map-line d-flex align-items-center mt-2">
                                        <i className="feather-map-pin me-2" aria-hidden="true" />
                                        <input type="text" className="form-control" placeholder="Location" aria-label="Enter location" />
                                    </div>
                                    <div className="search-input search-calendar-line d-flex align-items-center mt-2">
                                        <i className="feather-calendar me-2" aria-hidden="true" />
                                        <input type="text" className="form-control datetimepicker" placeholder="Date" aria-label="Select date" />
                                    </div>
                                    <div className="form-search-btn mt-3">
                                        <button className="btn btn-primary w-100" type="submit">
                                            Search
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            {/* /Home Banner */}
            {/* Specialities Section */}
            <section className="specialities-section-one pb-0 mt-5" id='specialities-section-one '>

                <div className="container">

                    <div className="service-sec-one ">

                        <div className="row">
                            <div className="col-md-6 col-7 " >
                                <div className="section-header-one section-header-slider">
                                    <h2>Our Services</h2>
                                </div>
                            </div>

                        </div>
                        <div className="special row row-cols-7 row-cols-xxl-7 row-cols-xl-4 row-cols-lg-4 rows-cols-md-6 justify-content-evenly px-4 ">


                            <div className="col-12 col-sm-8 col-md-4 col-lg-4 col-xl-4 col-xxl-3 text-center animate__animated animate__fadeInLeft">
                                <Card className="border shadow p-2  rounded">
                                    <a href="/doctors-list" className="success-bg flex-fill text-decoration-none">
                                        <Card.Body className="text-center d-flex flex-sm-column justify-content-center align-items-center">
                                            <div className='col-3 col-sm-6 col-md-6 text-center d-flex justify-content-center align-items-center'>
                                                <Card.Img
                                                    src="assets/img/icons/service-01.svg"
                                                    alt="calendar-image"
                                                    className="w-100"
                                                />
                                            </div>
                                            <Card.Title className="text-dark mt-sm-1 p-3 m-0">Book Appointment</Card.Title>
                                            <Card.Text className="text-secondary text-justify ps-2 mt-2 d-none d-sm-block">
                                                Scheduling your doctor appointments has never been easier! With our seamless and easy booking platform.
                                            </Card.Text>
                                        </Card.Body>
                                    </a>
                                </Card>
                            </div>

                            <div className="col-12 col-sm-8 col-md-4 col-lg-4 col-xl-4 col-xxl-3 text-center">
                                <Card className="border shadow p-2 rounded">
                                    <a className="success-bg flex-fill text-decoration-none">
                                        <Card.Body className="text-center d-flex flex-sm-column justify-content-center align-items-center animate__animated animate__fadeIn">
                                            <div className='col-3 col-sm-6 col-md-6 text-center d-flex justify-content-center align-items-center'>
                                                <Card.Img
                                                    src="assets/img/icons/service-05.svg"
                                                    alt="health care-image"
                                                    className="w-100"
                                                />
                                            </div>
                                            <Card.Title className="text-dark mt-sm-1 p-3 py-xl-1 py-xl-3 m-0">Health Care Services</Card.Title>
                                            <Card.Text className="text-secondary text-justify ps-0 mt-2  d-none d-sm-block">
                                                Access a variety of healthcare services, customized for your needs and preferences.
                                                Quality care, just a click away.
                                            </Card.Text>
                                        </Card.Body>
                                    </a>
                                </Card>
                            </div>
                            <div className="col-12 col-sm-8 col-md-4 col-lg-4 col-xl-4 col-xxl-3 text-center animate__animated animate__fadeInRight">
                                <Card className="border shadow p-2 rounded">
                                    <a href="/contactus" className="success-bg flex-fill text-decoration-none">
                                        <Card.Body className="text-center d-flex flex-sm-column justify-content-center align-items-center">
                                            <div className='col-3 col-sm-6 col-md-6 text-center d-flex justify-content-center align-items-center'>
                                                <Card.Img
                                                    src="assets/img/icons/service-06.svg"
                                                    alt="talk to doctor-image"
                                                    className="w-100"
                                                />
                                            </div>

                                            <Card.Title className="text-dark mt-sm-1 p-3 m-0">Talk to our Doctor’s</Card.Title>
                                            <Card.Text className="text-secondary text-justify ps-2 mt-2 d-none d-sm-block">
                                                Connect with trusted doctors
                                                for expert advice, tailored to your
                                                health needs and questions any time any where.
                                            </Card.Text>
                                        </Card.Body>
                                    </a>
                                </Card>
                            </div>


                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-7" >
                            <div className="section-header-one section-header-slider">
                                <h2>Specialities</h2>
                            </div>
                        </div>

                    </div>
                    <div className=" specialities-slider-one d-flex flex-wrap justify-content-evenly">

                        <div className="item text-center">
                            <div className="p-2">
                                <div className="specialities-img">
                                    <span className='p-3 shadow'>
                                        <img
                                            src="assets/img/specialities/specialities-01.svg"
                                            alt="heart-image"
                                        />
                                    </span>
                                </div>
                                <p >Cardiology</p>
                            </div>
                        </div>
                        <div className="item text-center ">
                            <div className=" p-2">
                                <div className="specialities-img">
                                    <span className='shadow'>
                                        <img
                                            src="assets/img/specialities/specialities-02.svg"
                                            alt="brain-image"
                                        />
                                    </span>
                                </div>
                                <p >Neurology</p>
                            </div>
                        </div>
                        <div className="item text-center ">
                            <div className=" p-2">
                                <div className="specialities-img">
                                    <span className='shadow'>
                                        <img
                                            src="assets/img/specialities/specialities-03.svg"
                                            alt="kidney-image"
                                        />
                                    </span>
                                </div>
                                <p>Urology</p>
                            </div>
                        </div>
                        <div className="item text-center">
                            <div className=" p-2">
                                <div className="specialities-img">
                                    <span className='shadow'>
                                        <img
                                            src="assets/img/specialities/specialities-04.svg"
                                            alt="bone-image"
                                        />
                                    </span>
                                </div>
                                <p>Orthopedic</p>
                            </div>
                        </div>
                        <div className="item text-center ">
                            <div className=" p-2">
                                <div className="specialities-img">
                                    <span className='shadow'>
                                        <img
                                            src="assets/img/specialities/specialities-05.svg"
                                            alt="dentist"
                                        />
                                    </span>
                                </div>
                                <p>Dentist</p>
                            </div>
                        </div>
                        <div className="item text-center">
                            <div className=" p-2">
                                <div className="specialities-img">
                                    <span className='shadow'>
                                        <img
                                            src="assets/img/specialities/specialities-06.svg"
                                            alt="brain-image"
                                        />
                                    </span>
                                </div>
                                <p >opticianry</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Specialities Section */}
            {/* Doctors Section */}

            <section className="doctors-section ps-1 py-3" style={{ background: "#F9FAFB" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-header-one section-header-slider">
                                <h2>Best Doctors</h2>
                            </div>
                        </div>
                    </div>
                    <div className="doctor-slider-one d-flex justify-content-between overflow-scroll px-4">
                        {doctorsData.map((doctor) => (
                            <div
                                key={doctor.id}
                                className="item col-11 col-sm-7 col-md-5 col-lg-4 col-xl-3 me-3"
                            >
                                <div className="doctor-profile-widget doc-item">
                                    <div className="doc-pro-img">
                                        <Link to={"/doctor-profile/" + doctor._id}>
                                            <div className="doctor-profile-img " style={{ height: "270px" }}>
                                                <img
                                                    src={doctor.image}
                                                    alt={doctor.name}
                                                    className="image-fluid"

                                                />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="doc-content">
                                        <div className="doc-pro-info">
                                            <div className="doc-pro-name">
                                                <a href="doctor-profile.html">{doctor.name}</a>
                                                <p>{doctor.specialization}</p>
                                            </div>
                                            <div className="reviews-ratings">
                                                <p>
                                                    <span>
                                                        <i className="fas fa-star" /> {doctor.rating}
                                                    </span>{" "}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="doc-pro-location">
                                            <p>
                                                <i className="feather-map-pin" /> {doctor.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* /Doctors Section */}

            {/* Work Section */}
            <section className="py-5 ">
                <div className="container">
                    <div className="row w-100">

                        <div className="">
                            <div className="section-header-one " >
                                <h5>How it Works</h5>
                                <h2>
                                    4 easy steps to get your solution
                                </h2>
                            </div>
                            <div className="row px-3">
                                <div className="col-lg-6 col-md-6" >
                                    <div className="work-info">
                                        <div className="h-100 text-center m-2 ">
                                            <div className='bg-home rounded'>
                                                <span>
                                                    <img
                                                        className='p-3'
                                                        src="assets/img/icons/work-01.svg"
                                                        alt="search-doctor-icon"
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="work-content mt-2 w-75">
                                            <h5 className='mb-0'>Search Doctor</h5>
                                            <p className='m-0'>
                                                Search for a doctor based on specialization, location, or
                                                availability with ease.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 " >
                                    <div className="work-info">
                                        <div className=" h-100 text-center m-2 bg-home rounded">
                                            <div className='bg-home rounded'>
                                                <span>
                                                    <img
                                                        className='p-3'
                                                        src="./assets/img/icons/work-02.svg"
                                                        alt="doctor-profile-icon"
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="work-content mt-2 w-75">
                                            <h5 className='m-0'>Check Doctor Profile</h5>
                                            <p>
                                                Explore detailed doctor profiles on our DOC4U platform for the details.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 " >
                                    <div className="work-info">
                                        <div className=" h-100 text-center m-2 ">
                                            <div className='bg-home rounded'>
                                                <span>
                                                    <img
                                                        className='p-3'
                                                        src="assets/img/icons/work-03.svg"
                                                        alt="calendar-icon"
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="work-content mt-2 w-75">
                                            <h5 className='m-0'>Schedule Appointment</h5>
                                            <p>
                                                After choose your preferred doctor, select a convenient
                                                time slot.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 " >
                                    <div className="work-info">
                                        <div className="text-center m-2 ">
                                            <div className='bg-home rounded'>
                                                <span>
                                                    <img
                                                        className='p-3'
                                                        src="assets/img/icons/work-04.svg"
                                                        alt="solution-icon"
                                                    />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="work-content w-75 mt-2">
                                            <h5 className='m-0'>Get Your Solution</h5>
                                            <p>
                                                Discuss your health concerns with the doctor and receive
                                                personalized advice &amp; solution.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Work Section */}


            {/* FAQ Section */}
            <section className="faq-section p-0 p-sm-4 " style={{ background: "#F9FAFB" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-header-one " >

                                <h2 >Frequently Asked Questions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="faq-bg row align-items-center rounded-4 px-3 ps-sm-4 pt-0 pt-md-5 pb-3" style={{
                        backgroundImage: ` url("assets/img/faq/faqimg.jpg")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }
                    } >
                        <div className="col-lg-6 col-md-4"></div>
                        <div className="col-lg-6 col-md-8">
                            <h5 className='text-light d-none d-sm-block'>Get Your Answers</h5>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="faq-info faq-inner-info">
                                        <Accordion defaultActiveKey="0">
                                            <Card>
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>What is the process to schedule an appointment?</Accordion.Header>
                                                    <Accordion.Body>
                                                        To schedule an appointment, you can visit our website, use the online booking tool, or call our reception desk. You will be asked to provide your basic information and the reason for your visit.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Card>

                                            <Card>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header>Do I need a referral to see a specialist?</Accordion.Header>
                                                    <Accordion.Body>
                                                        In most cases, a referral from your primary care physician is required to see a specialist. However, some specialties may accept self-referrals depending on your insurance provider.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Card>

                                            <Card>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header>What insurance plans do you accept?</Accordion.Header>
                                                    <Accordion.Body>
                                                        We accept a wide range of insurance plans, including major providers like Blue Cross Blue Shield, Aetna, Cigna, and United Healthcare. Please contact us or check our website for a full list of accepted plans.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Card>

                                            <Card>
                                                <Accordion.Item eventKey="3">
                                                    <Accordion.Header>What should I bring to my first appointment?</Accordion.Header>
                                                    <Accordion.Body>
                                                        For your first appointment, please bring a valid ID, your insurance card, any medical records or prescriptions, and a list of medications you are currently taking.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Card>


                                        </Accordion>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /FAQ Section */}

            {/* Testimonial Section */}

            <section className="testimonial-section p-0 mt-5 mb-0 py-4 pb-sm-0">
                <div className="container">
                    <div className="section-header-one">
                        <h2>Testimonials</h2>
                    </div>
                    <Carousel indicators={false} interval={2000} className="testimonial-carousel "  >
                        <Carousel.Item className='h-50' >
                            <div className="testimonial-grid ">
                                <div className="testimonial-info">
                                    <div className="testimonial-img d-none d-md-block">
                                        <img
                                            src="assets/img/clients/client-01.jpg"
                                            className="img-fluid"
                                            alt="John Doe"
                                        />
                                    </div>
                                    <div className="testimonial-content">
                                        <div className="section-header-one section-header testimonial-header d-flex  align-items-center mb-2 ">
                                            <Avatar src='assets/img/clients/client-01.jpg' className='me-3 d-md-none'></Avatar>
                                            <h2 className='fs-5 '>Patient Experiences</h2>
                                        </div>
                                        <div className="testimonial-details text-start p-2 ps-0">
                                            <p>
                                                DOC4U exceeded my expectations in healthcare. The
                                                seamless booking process, coupled with the expertise of
                                                the doctors, made my experience exceptional. Their
                                                commitment to quality care and convenience truly sets
                                                them apart. I highly recommend DOC4U for anyone
                                                seeking reliable and accessible healthcare services.
                                            </p>
                                            <h6>
                                                <span className="d-block">Sai Rohith</span> Parvathipuram
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className='h-50'>
                            <div className="testimonial-grid">
                                <div className="testimonial-info ">
                                    <div className="testimonial-img d-none d-md-block">
                                        <img
                                            src="assets/img/clients/client-03.jpg"
                                            className="img-fluid"
                                            alt="Amanda Warren"
                                        />
                                    </div>
                                    <div className="testimonial-content">
                                        <div className="section-header-one section-header testimonial-header d-flex  align-items-center mb-2 ">
                                            <Avatar src='assets/img/clients/client-03.jpg' className='me-3 d-md-none'></Avatar>
                                            <h2 className='fs-5 '>Patient Experiences</h2>
                                        </div>
                                        <div className="testimonial-details text-start p-2 ps-0">
                                            <p>
                                                As a busy professional, I don't have time to wait on
                                                hold or play phone tag to schedule doctor appointments.
                                                Thanks to DOC4U, booking appointments has never been
                                                easier! The user-friendly interface allows me to quickly
                                                find available appointment slots that fit my schedule
                                                and book them with just a few clicks. It's a
                                                game-changer for anyone looking to streamline their
                                                healthcare management.
                                            </p>
                                            <h6>
                                                <span className="d-block">Gowri Shankar</span> Vizag
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className='h-50'>
                            <div className="testimonial-grid">
                                <div className="testimonial-info ">
                                    <div className="testimonial-img d-none d-md-block">
                                        <img
                                            src="assets/img/clients/client-02.jpg"
                                            className="img-fluid"
                                            alt="Amanda Warren"
                                        />
                                    </div>
                                    <div className="testimonial-content">
                                        <div className="section-header-one section-header testimonial-header d-flex  align-items-center mb-2 ">
                                            <Avatar src='assets/img/clients/client-02.jpg' className='me-3 d-md-none'></Avatar>
                                            <h2 className='fs-5 '>Patient Experiences</h2>
                                        </div>
                                        <div className="testimonial-details text-start p-2 ps-0">
                                            <p>
                                                As a student, managing my time can be challenging, especially when it comes to scheduling doctor appointments around my studies.
                                                Thanks to DOC4U, I no longer have to waste time on long calls or wait for availability. The simple and intuitive platform makes
                                                it easy to find appointment slots that fit into my busy schedule. I can book appointments quickly, allowing me to focus more on my academic commitments without the hassle of healthcare scheduling.                                             </p>
                                            <h6>
                                                <span className="d-block">Panduranga Praveen</span> Kakinada
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className='h-50'>
                            <div className="testimonial-grid">
                                <div className="testimonial-info ">
                                    <div className="testimonial-img d-none d-md-block">
                                        <img
                                            src="assets/img/clients/client-11.jpg"
                                            className="img-fluid"
                                            alt="Amanda Warren"
                                        />
                                    </div>
                                    <div className="testimonial-content">
                                        <div className="section-header-one section-header testimonial-header d-flex  align-items-center mb-2 ">
                                            <Avatar src='assets/img/clients/client-11.jpg' className='me-3 d-md-none'></Avatar>
                                            <h2 className='fs-5 '>Patient Experiences</h2>
                                        </div>
                                        <div className="testimonial-details text-start p-2 ps-0">
                                            <p>
                                                As a parent, coordinating doctor appointments for my
                                                family can be overwhelming. DOC4U has simplified the
                                                process and made scheduling appointments a breeze! I
                                                love being able to see all available appointment times
                                                in one place and book appointments for multiple family
                                                members with ease. Plus, the automatic reminders ensure
                                                we never miss an appointment. I highly recommend DOC4U
                                                to other busy parents!
                                            </p>
                                            <h6>
                                                <span className="d-block">Niya Patel</span> New York
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>

                    </Carousel>
                </div>
            </section>
            {/* /Testimonial Section */}
            <ToastNotification toast={toast} setToast={setToast} />
        </>
    )
}

export default Home