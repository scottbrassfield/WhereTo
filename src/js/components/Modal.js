import React from 'react'
import { Modal } from 'react-bootstrap'

const ModalTemplate = ({ general, header, title, children }) => {
  return (
    <Modal {...general}>
      <Modal.Header {...header}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal>
  )
}

export default ModalTemplate
