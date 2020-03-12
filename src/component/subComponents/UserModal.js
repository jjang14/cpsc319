import Modal from 'react-bootstrap/Modal';
import React from "react";
import Button from "react-bootstrap/Button";



function UserModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create New User
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">First and last name</span>
                    </div>
                    <input type="text" className="form-control"/>
                        <input type="text" className="form-control"/>
                </div>
            </Modal.Body>
            <Modal.Footer><Button variant="secondary" onClick={props.onHide}>
                Close
            </Button>
                <Button variant="primary" >
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UserModal;