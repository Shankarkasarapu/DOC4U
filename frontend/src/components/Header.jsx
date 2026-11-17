import React, { useState } from "react";
import '../App.css';
import './Header.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useLocation } from 'react-router-dom';
import GetUserId from "../data/GetUserID";

const NAV = [
    { to: '/', label: 'Home' },
    { to: '/doctors-list', label: 'Doctors' },
    { to: '/aboutus', label: 'About Us' },
    { to: '/contactus', label: 'Contact Us' },
];

// Photo if we have one, otherwise a clean initial, so there is never a broken image
const Avatar = ({ src, name, size = 36 }) => {
    const [failed, setFailed] = useState(false);
    const initial = (name || 'U').trim().charAt(0).toUpperCase();
    return src && !failed ? (
        <img className="hdr-avatar" src={src} alt="" width={size} height={size} onError={() => setFailed(true)} />
    ) : (
        <span className="hdr-avatar hdr-avatar--initial" style={{ width: size, height: size, fontSize: size * 0.42 }} aria-hidden="true">{initial}</span>
    );
};

const Header = ({ det }) => {
    const user = GetUserId();
    const { pathname } = useLocation();
    const [show, setShow] = useState(false);
    const close = () => setShow(false);

    const name = det?.name || 'My account';
    const isActive = (to) => (to === '/' ? pathname === '/' : pathname.startsWith(to));

    const logout = () => {
        localStorage.removeItem('user_id');
        window.location.replace('/login');
    };

    return (
        <>
            <div className="main-wrapper home-one">
                <header className="header header-custom header-fixed header-one home-head-one">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg header-nav" aria-label="Main">
                            <div className="navbar-header text-start">
                                <button type="button" id="mobile_btn" className="hdr-burger" onClick={() => setShow(true)} aria-label="Open menu" aria-expanded={show}>
                                    <span className="bar-icon"><span /><span /><span /></span>
                                </button>
                                <Link to="/" className="navbar-brand logo">
                                    <img src="/assets/img/logo-01.svg" className="img-fluid" alt="DOC4U home" />
                                </Link>
                            </div>

                            <div className="main-menu-wrapper">
                                <ul className="main-nav">
                                    {NAV.map((n) => (
                                        <li key={n.to} className={`has-submenu ${isActive(n.to) ? 'active' : ''}`}>
                                            <Link to={n.to} aria-current={isActive(n.to) ? 'page' : undefined}>{n.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {user ? (
                                /* Visible on every screen size (it used to be hidden below 992px) */
                                <Dropdown align="end" className="hdr-user">
                                    <Dropdown.Toggle as="button" type="button" className="hdr-user__toggle" aria-label="Account menu">
                                        <Avatar src={det?.profileImage} name={name} />
                                        <span className="hdr-user__name d-none d-xl-inline">{name}</span>
                                        <i className="feather-chevron-down d-none d-md-inline" aria-hidden="true" />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="hdr-user__menu">
                                        <div className="hdr-user__head">
                                            <Avatar src={det?.profileImage} name={name} size={44} />
                                            <div>
                                                <strong>{name}</strong>
                                                {det?.email && <small>{det.email}</small>}
                                            </div>
                                        </div>
                                        <Dropdown.Divider />
                                        <Dropdown.Item as={Link} to="/patient-dashboard"><i className="feather-grid" aria-hidden="true" /> Dashboard</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/appointments"><i className="feather-calendar" aria-hidden="true" /> Appointments</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/profile-settings"><i className="feather-settings" aria-hidden="true" /> Profile settings</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item as="button" onClick={logout} className="hdr-user__logout"><i className="feather-log-out" aria-hidden="true" /> Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            ) : (
                                <ul className="nav header-navbar-rht">
                                    <li className="register-btn d-none d-sm-block">
                                        <Link to="/signup" className="btn reg-btn"><i className="feather-user" /> Register</Link>
                                    </li>
                                    <li className="register-btn">
                                        <Link to="/login" className="btn btn-primary log-btn"><i className="feather-lock" /> Login</Link>
                                    </li>
                                </ul>
                            )}
                        </nav>
                    </div>
                </header>

                {/* Cursor */}
                <div className="mouse-cursor cursor-outer" />
                <div className="mouse-cursor cursor-inner" />
            </div>

            {/* Mobile / tablet menu */}
            <Offcanvas show={show} onHide={close} placement="start" className="hdr-offcanvas" aria-label="Menu">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title as="div">
                        <Link to="/" onClick={close}><img decoding="async" src="/assets/img/logo-01.svg" alt="DOC4U home" /></Link>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {user && (
                        <div className="hdr-off__user">
                            <Avatar src={det?.profileImage} name={name} size={48} />
                            <div>
                                <strong>{name}</strong>
                                {det?.email && <small>{det.email}</small>}
                            </div>
                        </div>
                    )}

                    <nav className="hdr-off__nav" aria-label="Mobile">
                        {NAV.map((n) => (
                            <Link key={n.to} to={n.to} onClick={close} className={isActive(n.to) ? 'is-active' : ''} aria-current={isActive(n.to) ? 'page' : undefined}>
                                {n.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="hdr-off__foot">
                        {user ? (
                            <>
                                <Link to="/patient-dashboard" onClick={close} className="btn btn-primary w-100">Dashboard</Link>
                                <Link to="/profile-settings" onClick={close} className="btn btn-outline-primary w-100">Profile settings</Link>
                                <button type="button" className="btn btn-link text-danger w-100" onClick={logout}>Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" onClick={close} className="btn btn-primary w-100">Login</Link>
                                <Link to="/signup" onClick={close} className="btn btn-outline-primary w-100">Register</Link>
                            </>
                        )}
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Header;
