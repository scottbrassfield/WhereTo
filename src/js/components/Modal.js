import React from 'react'
import { Modal } from 'react-bootstrap'

const ModalWrapper = ({ title, size, show, onHide, children, keyboard, closeButton }) => {
  return (
    <Modal
      bsSize={size}
      show={show}
      onHide={onHide}
      keyboard={keyboard}
    >
      <Modal.Header closeButton={closeButton}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal>
  )
}

export default ModalWrapper
