import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const DoctorDetails = () => {
  const [formData, setFormData] = useState({
    email: '',
    qualification: '',
    specialization: '',
    experience: '',
    clinicName: '',
    clinicAddress: '',
    consultationFee: '',
    profileImage: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      profileImage: file ? URL.createObjectURL(file) : null
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container fluid className="content top-space shadow">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="account-content">
            <Card.Body>
              <Row className="align-items-center justify-content-center">
                <Col md={12} lg={6}>
                  {/* Profile Image Section */}
                  <div className="form-wrap p-0">
                    <div className="change-avatar img-upload text-center">
                      <div className="profile-img ms-0">
                        {formData.profileImage ? (
                          <img
                            src={formData.profileImage}
                            alt="Profile"
                            className="img-fluid rounded-circle"
                          />
                        ) : (
                          <i className="fas fa-user-circle" style={{ fontSize: '100px', color: '#777' }}></i>
                        )}
                      </div>
                      <div className="upload-img mt-3">
                        <h5>Profile Image</h5>
                        <div className="imgs-load d-flex align-items-center justify-content-center">
                       <label className="upload-label btn text-info">
                              Upload Profile Picture
                      <input
                          type="file"
                          className="upload"
                          onChange={handleImageChange}
                          accept="image/*"
                      />
                        </label>
                      </div>


                      </div>
                    </div>
                  </div>

                  {/* Form Section */}
                  <div className="login-header mt-4">
                    <h3>
                      Enter Details{" "}
                      {/* <Link to="/signup">Are you a Patient?</Link> */}
                    </h3>
                  </div>
                  
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 form-focus">
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="floating"
                      />
                      <Form.Label className="focus-label">Email Address</Form.Label>
                    </Form.Group>

                    <Form.Group className="mb-3 form-focus">
                      <Form.Control
                        type="text"
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleChange}
                        required
                        className="floating"
                      />
                      <Form.Label className="focus-label">Qualification</Form.Label>
                    </Form.Group>

                    <Form.Group className="mb-3 form-focus">
                      <Form.Select
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleChange}
                        required
                        className="floating"
                      >
                        <option value="">Select Specialization</option>
                        <option value="Cardiologist">Cardiologist</option>
                        <option value="Dermatologist">Dermatologist</option>
                        <option value="Neurologist">Neurologist</option>
                        <option value="Pediatrician">Pediatrician</option>
                        <option value="Orthopedic">Orthopedic</option>
                        <option value="General Physician">General Physician</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3 form-focus">
                      <Form.Control
                        type="number"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        className="floating"
                      />
                      <Form.Label className="focus-label">Years of Experience</Form.Label>
                    </Form.Group>

                    <Form.Group className="mb-3 form-focus">
                      <Form.Control
                        type="text"
                        name="clinicName"
                        value={formData.clinicName}
                        onChange={handleChange}
                        required
                        className="floating"
                      />
                      <Form.Label className="focus-label">Clinic/Hospital Name</Form.Label>
                    </Form.Group>

                    <Form.Group className="mb-3 form-focus">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="clinicAddress"
                        value={formData.clinicAddress}
                        onChange={handleChange}
                        required
                        className="floating"
                      />
                      <Form.Label className="focus-label">Clinic Address</Form.Label>
                    </Form.Group>

                    <Form.Group className="mb-3 form-focus">
                      <Form.Control
                        type="number"
                        name="consultationFee"
                        value={formData.consultationFee}
                        onChange={handleChange}
                        required
                        className="floating"
                      />
                      <Form.Label className="focus-label">Consultation Fee (₹)</Form.Label>
                    </Form.Group>

                   

                    <Button
                      variant="primary"
                      type="submit"
                      className="w-100 btn-lg login-btn"
                    >
                      Signup
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default DoctorDetails;
