import React from 'react'

const BookingSuccess = () => {
  return (
    <>
  <div className="breadcrumb-bar-two">
    <div className="container">
      <div className="row align-items-center inner-banner">
        <div className="col-md-12 col-12 text-center">
          <h2 className="breadcrumb-title">Booking</h2>
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                Booking
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* /Breadcrumb */}
  {/* Page Content */}
  <div className="content success-page-cont">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          {/* Success Card */}
          <div className="card success-card">
            <div className="card-body">
              <div className="success-cont">
                <i className="fas fa-check" />
                <h3>Appointment booked Successfully!</h3>
                <p>
                  Appointment booked with <strong>Dr. Darren Elder</strong>
                  <br /> on <strong>12 Nov 2023 5:00PM to 6:00PM</strong>
                </p>
                <a
                  href="/invoice-view"
                  className="btn btn-primary view-inv-btn"
                >
                  View Invoice
                </a>
              </div>
            </div>
          </div>
          {/* /Success Card */}
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default BookingSuccess