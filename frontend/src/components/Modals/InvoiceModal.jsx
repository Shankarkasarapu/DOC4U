import React, { useState } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';

const InvoiceModal = ({ show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      aria-labelledby="invoice-view-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="invoice-view-modal">View Invoice</Modal.Title>
      </Modal.Header>

      <Modal.Body className="pb-0">
        <div className="prescribe-download">
          <h5>21 Mar 2024</h5>
          <ul>
            <li>
              <Button variant="link" className="print-link">
                <i className="fa-solid fa-print" />
              </Button>
            </li>
            <li>
              <Button variant="primary" className="prime-btn">
                Download
              </Button>
            </li>
          </ul>
        </div>
        
        <div className="view-prescribe invoice-content">
          {/* Invoice Header */}
          <div className="invoice-item">
            <div className="row">
              <div className="col-md-6">
                <div className="invoice-logo">
                  <img src="/assets/img/logo-01.svg" alt="logo" />
                </div>
              </div>
              <div className="col-md-6">
                <p className="invoice-details">
                  <strong>Invoice No : </strong> #INV005<br />
                  <strong>Issued:</strong> 21 Mar 2024
                </p>
              </div>
            </div>
          </div>

          {/* Billing Information */}
          <div className="invoice-item">
            <div className="row">
              <div className="col-md-4">
                <div className="invoice-info">
                  <h6 className="customer-text">Billing From</h6>
                  <p className="invoice-details invoice-details-two">
                    Edalin Hendry <br />
                    806 Twin Willow Lane, <br />
                    Newyork, USA <br />
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="invoice-info">
                  <h6 className="customer-text">Billing To</h6>
                  <p className="invoice-details invoice-details-two">
                    Richard Wilson <br />
                    299 Star Trek Drive<br />
                    Florida, 32405, USA<br />
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="invoice-info invoice-info2">
                  <h6 className="customer-text">Payment Method</h6>
                  <p className="invoice-details">
                    Debit Card <br />
                    XXXXXXXXXXXX-2541<br />
                    HDFC Bank<br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Invoice Details Table */}
          <div className="invoice-item invoice-table-wrap">
            <div className="row">
              <div className="col-md-12">
                <h6>Invoice Details</h6>
                <div className="table-responsive">
                  <Table bordered className="invoice-table">
                    <thead>
                      <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>VAT</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>General Consultation</td>
                        <td>1</td>
                        <td>$0</td>
                        <td>$150</td>
                      </tr>
                      <tr>
                        <td>Video Call</td>
                        <td>1</td>
                        <td>$0</td>
                        <td>$100</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 ms-auto">
                <div className="table-responsive">
                  <Table className="invoice-table-two">
                    <tbody>
                      <tr>
                        <th>Subtotal:</th>
                        <td><span>$350</span></td>
                      </tr>
                      <tr>
                        <th>Discount:</th>
                        <td><span>-10%</span></td>
                      </tr>
                      <tr>
                        <th>Total Amount:</th>
                        <td><span>$315</span></td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>

          {/* Other Information */}
          <div className="other-info mb-0">
            <h4>Other information</h4>
            <p className="text-muted mb-0">
              An account of the present illness, which includes the circumstances surrounding the onset of recent health changes and the chronology of subsequent events that have led the patient to seek medicine.
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default InvoiceModal;
