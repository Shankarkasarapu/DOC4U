import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import Default from '../theme/Default';
import LoginEmail from '../Authentication/LoginEmail';

const  DoctorItem = ({ item }) => {
  const user_id = localStorage.getItem('user_id');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    // setTimeout(() => {
    //   setShow(false);
    // }, 5000);
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3">
      <div className="profile-widget">
        <div className="doc-img m-auto w-auto" style={{ height: '270px' }}>
          <Link to={`/doctor-profile/${item._id}`}>
            <img className="" alt="User Image" src={item.image} />
          </Link>
        </div>
        <div className="pro-content">
          <h3 className="title">
            <Link to={`/doctor-profile/${item._id}`}>{item.name}</Link>
          </h3>
          <p className="speciality">{item.qualifications}</p>
          <div className="rating">
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star filled"></i>
            <span className="d-inline-block average-rating">({item.rating})</span>
          </div>
          <ul className="available-info">
            <li>
              <i className="fas fa-map-marker-alt"></i> {item.location}
            </li>
            <li>
              <i className="far fa-money-bill-alt"></i> {item.price_per_hour}{' '}
              <i className="fas fa-info-circle" data-bs-toggle="tooltip"></i>
            </li>
          </ul>
          <div className="row row-sm">
            <div className="col-6">
              <Link to={`/doctor-profile/${item._id}`} className="btn view-btn">
                View Profile
              </Link>
            </div>
            <div className="col-6">
              {user_id ? (
                <Link to={`/booking/${item._id}`} className="btn book-btn">
                  Book Now
                </Link>
              ) : (
                <Button
                  className="btn book-btn w-100"
                  onClick={handleShow}

                >
                  Book Now
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Design */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="text-center py-4 px-5">
          <Modal.Title className="fw-bold text-primary mb-3">
            Sign In Required
          </Modal.Title>
          <p className="text-muted">
            You need to sign in, to book an appointment..!!!
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <Link to="/login" className="btn btn-primary">
              Sign In
            </Link>
            <Button variant="outline-secondary" onClick={handleClose}>
              Cancel
            </Button>
          </div>
        </Modal.Body>
      </Modal>

    </div>
  );
};

export default DoctorItem;
