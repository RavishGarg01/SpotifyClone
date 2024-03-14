import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function NameListModal(props) {
  return (
    <div>
       <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
      
    >
      <Modal.Header closeButton className='bg-dark text-white'>
        <Modal.Title id="contained-modal-title-vcenter" >
         Create PlayList
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='bg-dark text-white'>
        <h4>Give a name to your Playlist</h4>
        <input style={{width:"80%",padding:"10px"}}/>
      </Modal.Body>
      <Modal.Footer className='bg-dark text-white'>
        <Button >Create</Button>
        <Button onClick={props.onHide} className='btn-danger'>Close</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}
