import axios from 'axios'
import React, { useState } from 'react'
import { Button, Col, InputGroup, Modal, Row, Form } from 'react-bootstrap'
import ENDPOINT from '../../data/ENDPOINT'
import SecurityHeaders from '../../data/SecurityHeaders'
import GetUserID from '../../data/GetUserID'

const AddDependendantmodal = ({ show, handleClose }) => {
  const user = GetUserID()
  const [name, setName] = useState('')
  const [relationship, setRelationship] = useState('')
  const [Phonenumber, setphonenumber] = useState()
  const [dob, setdob] = useState()
  const [bloodgroup, setbloodgroup] = useState()
  const [gender, setgender] = useState()
  const adddependancy = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('user_id', user);
    data.append('name', name);
    data.append('relationship', relationship);
    data.append('phone', Phonenumber);
    data.append('dob', dob);
    data.append('bloodgroup', bloodgroup);
    data.append('gender', gender);

    try {
      const res = await axios.post(ENDPOINT + 'add-dependants', data, SecurityHeaders);
      if (res && res.data.status === 'success') {
        handleClose();
      } else {
        console.error('Failed to add dependant:', res.data.message || 'Unknown error');
      }
    } catch (error) {
      console.error('Error adding dependant:', error.message || error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Add Dependent</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <div className='row'>
            <div className='col-md-6'>
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" class="form-control" onChange={(e) => { setName(e.target.value) }} />
              </div>
            </div>
            <div className='col-md-6'>
              <div class="form-group">
                <label for="name">Relationship</label>
                <input type="text" name="relationship" class="form-control" onChange={(e) => { setRelationship(e.target.value) }} />
              </div>
            </div>
            <div className='col-md-6'>
              <div class="form-group">
                <label for="dob">DOB <span class="text-danger">*</span></label>
                <div class="input-group">
                  <input type="date" id="dob" name="dob" required class="form-control" onChange={(e) => { setdob(e.target.value) }} />
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div class="form-group">
                <label for="tel">Contact <span class="text-danger">*</span></label>
                <div class="input-group">
                  <input type="tel" id="tel" name="tel" required class="form-control" onChange={(e) => { setphonenumber(e.target.value) }} />
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div class="form-group">
                <label for="blood-group">Select Blood Group</label>
                <select id="blood-group" name="blood-group" class="form-control" onChange={(e) => { setbloodgroup(e.target.value) }}>
                  <option value="">Select</option>
                  <option value="O +ve">O +ve</option>
                  <option value="O -ve">O -ve</option>
                  <option value="A +ve">A +ve</option>
                  <option value="B +ve">B +ve</option>
                  <option value="A -ve">A -ve</option>
                  <option value="B -ve">B -ve</option>
                  <option value="AB +ve">AB +ve</option>
                  <option value="AB -ve">AB -ve</option>
                </select>
              </div>
            </div>
            <div className='col-md-6'>
              <div class="form-group">
                <label for="gender">Select Gender</label>
                <select id="gender" name="gender" class="form-control" onChange={(e) => { setgender(e.target.value) }}>
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit" onClick={(e) => { adddependancy(e) }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default AddDependendantmodal