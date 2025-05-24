import React from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const ToastNotification = ({ toast, setToast }) => {
  return (
    <ToastContainer position="bottom-end" className="toast-bottom-fixed p-3 pb-5">
      <Toast
        className='text-start'
        onClose={() => setToast((prevToast) => ({ ...prevToast, show: false }))}
        show={toast.show}
        bg={toast.isSuccess ? 'success' : 'danger'}
      >
        <Toast.Body className="text-white">{toast.message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastNotification;
