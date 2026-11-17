import React, { memo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ToastNotification from './Modals/ToastNotification';
import { Button } from 'react-bootstrap';

const DoctorItem = ({ item, date, index = 0 }) => {
  const bookingLink = `/booking/${item._id}${date ? `?date=${date}` : ""}`;
  const user_id = localStorage.getItem('user_id');

  const navigate = useNavigate();
  const [toast, setToast] = useState({ show: false, message: '', isSuccess: false });

  // Logged-out visitors get a toast, then land on login and come back to this booking afterwards
  const handleBookClick = () => {
    setToast({ show: true, message: 'Please log in to book an appointment', isSuccess: false });
    try { sessionStorage.setItem('redirect_after_login', bookingLink); } catch (e) { /* ignore */ }
    setTimeout(() => navigate('/login'), 1500);
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-3 d4u-fade-in" style={{ animationDelay: `${Math.min(index, 8) * 40}ms` }}>
      <div className="profile-widget">
        <div className="doc-img m-auto w-auto" style={{ height: '270px' }}>
          <Link to={`/doctor-profile/${item._id}`}>
            <img loading="lazy" decoding="async" alt={item.name} src={item.image} />
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
                <Link to={bookingLink} className="btn book-btn">
                  Book Now
                </Link>
              ) : (
                <Button
                  className="btn book-btn w-100"
                  onClick={handleBookClick}

                >
                  Book Now
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {toast.show && <ToastNotification toast={toast} setToast={setToast} />}
    </div>
  );
};

export default memo(DoctorItem);
