
import React, { useState } from 'react'
import { DropdownDivider, DropdownHeader, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
const DoctorHeader = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
      <>
                {/* Main Wrapper */}
                <div className="main-wrapper home-one">
                    {/* Header */}
                    <header className="header header-custom header-fixed header-one home-head-one">
                        <div className="container">
                            <nav className="navbar navbar-expand-lg header-nav">
                                <div className="navbar-header">
                                    <a id="mobile_btn" onClick={handleShow}>
                                        <span className="bar-icon" >
                                            <span />
                                            <span />
                                            <span />
                                        </span>
                                    </a>
                                    <Link to="/" className="navbar-brand logo">
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
                                        <li className="has-submenu megamenu active">
                                            <Link to="/">Home </Link>
                                        </li>
                                        <li className="has-submenu megamenu">
                                            <Link to="/mypatients">Patients </Link>
                                        </li>
                                        <li className="has-submenu">
                                            <Link to="/appointments">Appointments </Link>
                                        </li>
                                        <li className="has-submenu">
                                            <Link to="/aboutus">About Us</Link>
                                        </li>
                                        <li className="has-submenu">
                                            <Link to="/contactus">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                                {JSON.parse(localStorage.getItem("userId"))!==null?
                                <>
                                    <Dropdown align="end" className="nav-item dropdown has-arrow logged-item d-md-none d-sm-none d-lg-flex d-xl-flex d-none">
                                        <Dropdown.Toggle as="a" href="#" className="dropdown-toggle nav-link">
                                            <span className="user-img">
                                            <img
                                                className="rounded-circle"
                                                src="assets/img/doctors-dashboard/doctor-profile-img.jpg"
                                                width={31}
                                                alt="Darren Elder"
                                            />
                                            </span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className='p-2 dropdown'>
                                            <div className="user-header d-flex">
                                            <div className="avatar avatar-sm">
                                                <img
                                                src="assets/img/doctors-dashboard/doctor-profile-img.jpg"
                                                alt="User Image"
                                                className="avatar-img rounded-circle p-1"
                                                />
                                            </div>
                                            <div className="user-text p-1">
                                                <h6 className='mb-0'>Dr Edalin Hendry</h6>
                                                <p className="text-success mb-0">Available</p>
                                            </div>
                                            </div>
                                            <Dropdown.Item href="/doctordashboard">Dashboard</Dropdown.Item>
                                            <Dropdown.Item href="/doctorprofilesettings">Profile Settings</Dropdown.Item>
                                            <DropdownDivider/>
                                            <Dropdown.Item href="/login">Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </>:
                                <>
                                    <ul className="nav header-navbar-rht">
                                        <li className="register-btn">
                                            <Link to="/register" className="btn reg-btn">
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
                <div className="progress-wrap active-progress">
                    <svg
                        className="progress-circle svg-content"
                        width="100%"
                        height="100%"
                        viewBox="-1 -1 102 102"
                    >
                        <path
                            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                            style={{
                                transition: "stroke-dashoffset 10ms linear 0s",
                                strokeDasharray: "307.919px, 307.919px",
                                strokeDashoffset: "228.265px"
                            }}
                        />
                    </svg>
                </div>
                <Offcanvas show={show} onHide={handleClose} placement="start" className="offcanvas">
                    <Offcanvas.Header closeButton >
                        <Offcanvas.Title>
                            <Link>
                            <img src="assets/img/logo-01.svg" alt="logo" />
                            </Link>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="ps-0 pe-0">
                    <div className="sidebar ps-4">
                        <div className="menu-item">
                            <Link to="/" className="list">Home</Link>
                        </div>
                        <div className="menu-item">
                            <Link to="/mypatients" className="list">Patients</Link>
                        </div>
                        <div className="menu-item">
                            <Link to="/appointments" className="list">Appointments</Link>
                        </div>
                        <div className="menu-item">
                            <Link to="/aboutus" className="list">About Us</Link>
                        </div>
                        <div className="menu-item">
                            <Link to="/contactus" className="list">Contact Us</Link>
                        </div>
                        {JSON.parse(localStorage.getItem("userId"))!==null?
                        <>
                            <div className="menu-item">
                                <Link to="/doctordashboard" className="list">Account</Link>
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
    </div>
  )
}

export default DoctorHeader
