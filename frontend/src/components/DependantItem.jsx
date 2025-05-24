import React, { useState } from 'react'
import EditDependantmodal from './Modals/EditDependantmodal';

const DependantItem = ({item}) => {
    const [modalShow, setModalShow] = useState(false);
  const [modal,setmodal] = useState(false)
  const handleShow = () => setModalShow(true);
  const handleClose = () => setModalShow(false);
  const handleDependClose = () => setmodal(false);
  const handleDependShow = () => setmodal(true);
  return (
        <>
            <EditDependantmodal show={modal} handleClose={handleDependClose}/>
            <div class="dependent-wrap">
              <div class="dependent-info">
                <div class="patient-information">
                  <h5>{item.name}</h5>
                  <div class="patient-details">
                    <p><strong>Relation:</strong> {item.relationship}</p>
                    <p><strong>Gender:</strong> {item.gender}</p>
                    <p><strong>Date of Birth:</strong> {item.dob.split('-').reverse().join('/')}</p>
                  </div>
                </div>
                <div class="blood-info">
                  <p><strong>Blood Group:</strong> {item.bloodgroup}</p>
                </div>
              </div>
              <div class="dependent-status">
                <div class="status-toggle">
                  <span class="deactive">Deactivate</span>
                  <input type="checkbox" id="status_4" class="check" />
                  <label for="status_4" class="checktoggle"></label>
                  <span class="active">Activate</span>
                </div>
                <a class="edit-icon" data-bs-toggle="modal" data-bs-target="#edit_dependent" onClick={()=>{handleDependShow()}}>
                  <i class="fa-solid fa-pen-to-square"></i>
                </a>
              </div>
            </div>
        </>
    )
}

export default DependantItem