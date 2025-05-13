import React from 'react';

const Modal = ({ isOpen, closeModal, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={closeModal}>&times;</span>
        <div className="modal-image-wrapper">
          <img src={imageSrc} alt="Modal" className="modal-image" />
          <a
            href="https://www.instagram.com/grand_hotel_selinunte/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
          >
            Guarda su Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
