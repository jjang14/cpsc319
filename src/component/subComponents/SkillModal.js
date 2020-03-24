import Modal from 'react-bootstrap/Modal';
import React from "react";
import Button from "react-bootstrap/Button";



function SkillModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create New Skill
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Skill Name</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Default"
                           aria-describedby="inputGroup-sizing-default"/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Discipline ID</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Default"
                           aria-describedby="inputGroup-sizing-default"/>
                </div>

            </Modal.Body>
            <Modal.Footer><Button variant="secondary" onClick={props.onHide}>
                Close
            </Button>
                <Button variant="primary" >
                    Create User
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SkillModal;