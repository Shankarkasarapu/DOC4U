import React, { useState } from "react";
import '../App.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom'; 
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownDivider } from "react-bootstrap";
import GetUserId from "../data/GetUserID";
    const Header = ({det}) => {
        const user = GetUserId()
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const [isDoctorsOpen, setIsDoctorsOpen] = useState(false);
        const [isBlogOpen, setIsBlogOpen] = useState(false);
        const [isPatientsOpen, setIsPatientsOpen] = useState(false);
        const [isDoctorProfileOpen, setIsDoctorProfileOpen] = useState(false);
        const [isBookingOpen, setIsBookingOpen] = useState(false);
        const [isPagesOpen, setIsPagesOpen] = useState(false);
        const [isInvoicesOpen, setIsInvoicesOpen] = useState(false);
        const [isAuthenticationOpen, setIsAuthenticationOpen] = useState(false);
        const [activeItem, setActiveItem] = useState("home");

        // Function to handle menu item click
        const handleActiveItem = (item) => {
            setActiveItem(item);
        };
        const logout =() =>{
            localStorage.removeItem('user_id')
            window.location.replace('/login')
        }

        return (

            <>
                {/* Main Wrapper */}
                <div className="main-wrapper home-one">
                    {/* Header */}
                    <header className="header header-custom header-fixed header-one home-head-one">
                        <div className="container">
                            <nav className="navbar navbar-expand-lg header-nav">
                                <div className="navbar-header text-start">
                                    <a id="mobile_btn" onClick={handleShow}>
                                        <span className="bar-icon" >
                                            <span />
                                            <span />
                                            <span />
                                        </span>
                                    </a>
                                    <Link to="/" className="navbar-brand logo ">
                                        <img
                                            src='/assets/img/logo-01.svg'
                                            className="img-fluid"
                                            alt="Logo"
                                        />
                                    </Link>
                                </div>
                                <div className="main-menu-wrapper">
                                    <div className="menu-header">

                                        <a
                                            id="menu_close"
                                            className="menu-close"
                                            href=""
                                        >
                                            <i className="fas fa-times" />
                                        </a>
                                    </div>
                                    <ul className="main-nav ">
                                        <li className={`has-submenu megamenu ${activeItem === 'home' ? 'active' : ''}`}>
                                            <Link to="/" onClick={() => handleActiveItem("home")}>Home </Link>
                                        </li>
                                        <li className={`has-submenu ${activeItem === 'doctors' ? 'active' : ''}`}>
                                            <Link to="/doctors-list" onClick={() => handleActiveItem("doctors")}>Doctors </Link>
                                        </li>
                                        <li className={`has-submenu ${activeItem === 'about' ? 'active' : ''}`}>
                                            <Link to="/aboutus" onClick={() => handleActiveItem("about")}>About Us</Link>
                                        </li>
                                        <li className={`has-submenu ${activeItem === 'contact' ? 'active' : ''}`}>
                                            <Link to="/contactus" onClick={() => handleActiveItem("contact")}>Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                                {user ?
                                <>
                                    <Dropdown align="end" className="nav-item dropdown has-arrow logged-item d-md-none d-sm-none d-lg-flex d-xl-flex d-none">
                                        <Dropdown.Toggle as="a" href="#" className="dropdown-toggle nav-link">
                                            <span className="user-img">
                                            <img
                                                className="rounded-circle"
                                                src={det.profileImage}
                                                width={31}
                                                alt={det.name}
                                            />
                                            </span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className='p-2 dropdown'>
                                            <div className="user-header d-flex">
                                            <div className="avatar avatar-sm">
                                                <img
                                                src={det.profileImage}
                                                alt="User Image"
                                                className="avatar-img rounded-circle p-1"
                                                />
                                            </div>
                                            <div className="user-text p-1">
                                                <h6 className='mb-0'>{det.name}</h6>
                                                <p className="text-success mb-0">Available</p>
                                            </div>
                                            </div>
                                            <Dropdown.Item href="/patient-dashboard">Dashboard</Dropdown.Item>
                                            <Dropdown.Item href="/profile-settings">Profile Settings</Dropdown.Item>
                                            <DropdownDivider/>
                                            <Dropdown.Item onClick={()=>{logout()}}>Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </>:
                                <>
                                    <ul className="nav header-navbar-rht">
                                        <li className="register-btn">
                                            <Link to="/signup" className="btn reg-btn">
                                                <i className="feather-user" />
                                                Register
                                            </Link>
                                        </li>
                                        <li className="register-btn">
                                            <Link to ="/login" className="btn btn-primary log-btn">
                                                <i className="feather-lock" />
                                                Login
                                            </Link>
                                        </li>
                                    </ul>
                                </>}
                            </nav>
                        </div>
                    </header>
                    {/* /Header */}


                    {/* Cursor */}
                    <div className="mouse-cursor cursor-outer" />
                    <div className="mouse-cursor cursor-inner" />
                    {/* /Cursor */}
                </div>
                {/* /Main Wrapper */}
                {/* ScrollToTop */}
                <Offcanvas show={show} onHide={handleClose} placement="start" className="offcanvas">
                    <Offcanvas.Header closeButton  className="pb-1 mb-1">
                        <Offcanvas.Title>
                            <Link>
                            <img src="/assets/img/logo-01.svg" alt="logo" />
                            </Link>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="ps-0 pe-0">
                    <div className="sidebar ps-4">
                        <div className="menu-item">
                            <Link to="/" className="list">Home</Link>
                        </div>

                        {/* Doctors Dropdown */}
                        <div className="menu-item">
                            <Link to="/doctors-list" className="list">Doctors</Link>
                        </div>

                        {/* Patients Dropdown */}
                        <div className="menu-item">
                            <Link to="about-us.html" className="list">About Us</Link>
                        </div>
                        <div className="menu-item">
                            <Link to="contact-us.html" className="list">Contact Us</Link>
                        </div>
                        
                        {/* Pages Dropdown */}
                        
                        {user?
                        <>
                            <div className="menu-item">
                                <Link to="/patientdashboard" className="list">Account</Link>
                            </div>
                        </>:
                        <>
                            <div className="menu-item login-link">
                                <Link to="/login" className="list">Login / Signup</Link>
                            </div>
                        </>}
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </>

        );
    };

export default Header;
