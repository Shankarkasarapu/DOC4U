import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Usercontent } from './Register';
import axios from 'axios';
import ENDPOINT from '../data/ENDPOINT';
import SecurityHeaders from '../data/SecurityHeaders';

const PatientDetails = () => {
  
  const params = useParams()
  const id = params.id
  const type = params.type
  const [focus,setFocus] = useState(true)
  const [isFirst,setFirst] = useState(true)
  const [formData, setFormData] = useState({
    id : id,
    fullName: '',
    age: '',
    weight: '',
    height: '',
    gender: '',
    bloodGroup: '',
    medicalHistory: '',
    recentDoctorAppointment: '',
    emergencyContact: '',
    profileImage: null,
    usertype: 'patient',
  });
  const handleAddAvatar = () => {
    const avatarUrl = getRandomAvatar(formData.fullName || 'user');
    setFormData((prevFormData) => ({
      ...prevFormData,
      profileImage: avatarUrl, 
    }));
  };
  useEffect(()=>{

    if(isFirst)
    {
      setFirst(false)
    }
    else{
      handleAddAvatar()
    }
   
  },[focus])

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

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(formData)
  }

  

  const adduserdetails = async () =>{
    var res = await axios.post(ENDPOINT+'add-user-details', formData,SecurityHeaders);
    if(res){
      console.log(res)
      if(res.data.status==='success')
      {
        window.location.replace('/login')
      }
    }
  }

  function getRandomAvatar(seed = 'user') {
    return `https://api.dicebear.com/6.x/avataaars/svg?seed=${seed}` ;
  }

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
                      <img
                            src={formData.profileImage}
                            alt="Profile"
                            className="img-fluid rounded-circle"
                          />
                        {/* {formData.profileImage ? (
                          <img
                            src={formData.profileImage}
                            alt="Profile"
                            className="img-fluid rounded-circle"
                          />
                        ) : (
                            <i class="fas fa-user-circle"></i>
                        )}
                      </div>
                      <div className="upload-img mt-3">
                        <h5>Profile Image</h5> */}
                        {/* <div className="imgs-load d-flex align-items-center justify-content-center">
                          <label className="upload-label btn text-info">
                            Upload Profile Picture
                            <input
                              type="file"
                              className="upload"
                              onChange={handleImageChange}
                              accept="image/*"
                            />
                          </label>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  
                  

                  <div className="login-header mt-4">
                    <h3>Enter Patient Details</h3>
                  </div>

                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 form-focus">
                      <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required className="floating"/>
                      <Form.Label className="focus-label">Email Address</Form.Label>
                    </Form.Group>

                    <Form.Group className="mb-3 form-focus">
                      <Form.Control type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="floating"/>
                      <Form.Label className="focus-label">Full Name</Form.Label>
                    </Form.Group>

                    <Form.Group className="mb-3 form-focus">
                      <Form.Control
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                        className="floating"
                        onFocus={()=>setFocus(false)}
                      />
                      <Form.Label className="focus-label">Age</Form.Label>
                    </Form.Group>

                    <Form.Group className="mb-3 form-focus">
                      <Form.Control
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        required
                        className="floating"
                      />
                      <Form.Label className="focus-label">Weight (kg)</Form.Label>
                    </Form.Group>

                    <Form.Group className="mb-3 form-focus">
                      <Form.Control
                        type="number"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        required
                        className="floating"
                      />
                      <Form.Label className="focus-label">Height (cm)</Form.Label>
                    </Form.Group>

                    <Form.Group className="mb-3 form-focus">
                      <Form.Select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                        className="floating"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3 form-focus">
                      <Form.Select
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                        required
                        className="floating"
                      >
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="B+">B+</option>
                        <option value="O+">O+</option>
                        <option value="AB+">AB+</option>
                        <option value="A-">A-</option>
                        <option value="B-">B-</option>
                        <option value="O-">O-</option>
                        <option value="AB-">AB-</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3 form-focus">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="medicalHistory"
                        value={formData.medicalHistory}
                        onChange={handleChange}
                        required
                        className="floating"
                      />
                      <Form.Label className="focus-label">Medical History</Form.Label>
                    </Form.Group>

                    <Form.Group className="mb-3 form-focus">
                      <Form.Control
                        type="date"
                        name="recentDoctorAppointment"
                        value={formData.recentDoctorAppointment}
                        onChange={handleChange}
                        required
                        className="floating"
                      />
                      <Form.Label className="focus-label">Recent Doctor Appointment (Date)</Form.Label>
                    </Form.Group>

                    <Form.Group className="mb-3 form-focus">
                      <Form.Control
                        type="text"
                        name="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={handleChange}
                        required
                        className="floating"
                      />
                      <Form.Label className="focus-label">Emergency Contact</Form.Label>
                    </Form.Group>
                    <Link to="/">
                    <Button
                      variant="primary"
                      type="submit"
                      className="w-100 btn-lg login-btn"
                      onClick={()=>{adduserdetails()}}
                    >
                      Signup
                    </Button>
                    </Link>
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

export default PatientDetails;
