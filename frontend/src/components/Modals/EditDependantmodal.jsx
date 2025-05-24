import React from 'react'
import { Modal, Button, Form, InputGroup, FormControl } from 'react-bootstrap';

const EditDependantmodal = ({show, handleClose}) => {
  return (              
    <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Dependant</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <div className="add-dependent">
              <div className="row">
                {/* Profile Image Section */}
                <div className="col-md-12">
                  <div className="form-wrap pb-0">
                    <div className="change-avatar img-upload">
                      <div className="profile-img">
                        <i className="fa-solid fa-file-image" style={{ fontSize: '50px' }}></i>
                      </div>
                      <div className="upload-img">
                        <h5>Profile Image</h5>
                        <div className="imgs-load d-flex align-items-center">
                          <div className="change-photo">
                            Upload New
                            <input type="file" className="upload" />
                          </div>
                          <Button variant="link" className="upload-remove">Remove</Button>
                        </div>
                        <p>Your Image should Below 4 MB, Accepted format jpg,png,svg</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Name Input */}
                <div className="col-md-6">
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                      type="text" 
                    />
                  </Form.Group>
                </div>

                {/* Relationship Input */}
                <div className="col-md-6">
                  <Form.Group controlId="relationship">
                    <Form.Label>Relationship</Form.Label>
                    <Form.Control 
                      type="text" 
                    />
                  </Form.Group>
                </div>

                {/* Date of Birth Input */}
                <div className="col-md-6">
                  <Form.Group controlId="dob">
                    <Form.Label>DOB <span className="text-danger">*</span></Form.Label>
                    <InputGroup>
                      <FormControl 
                        type="text" 
                      />
                      <InputGroup.Text><i className="fa-regular fa-calendar-days"></i></InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </div>

                {/* Gender Select */}
                <div className="col-md-6">
                  <Form.Group controlId="gender">
                    <Form.Label>Select Gender</Form.Label>
                    <Form.Control as="select" >
                      <option>Select</option>
                      <option>Male</option>
                      <option>Female</option>
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>
            </div>
          </Modal.Body>

          {/* Modal Footer */}
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
  )
}

export default EditDependantmodal