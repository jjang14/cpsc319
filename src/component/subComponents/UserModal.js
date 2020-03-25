import Modal from 'react-bootstrap/Modal';
import React from "react";
import Button from "react-bootstrap/Button";
import {SVC_ROOT} from "../../config/config";
import {createAUser} from "../../redux/actions/usersActions";
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';



function UserModal(props) {
    const [user, setUser] = useState({
        "id": 1,
        "firstName": '',
        "lastName": '',
        "username": '',
        "location": '',
        "type": '',
    });

    const [submitted, setSubmitted] = useState(false);
    const dispatch = useDispatch();

    function handleChange(e) {
        const {name, value} = e.target;
        console.log(name,value);
        setUser(user => ({...user, [name]: value}));
    }
    function handleSubmit(e) {
        setSubmitted(true);
        console.log(JSON.stringify(user));
        dispatch(createAUser(JSON.stringify(user)));
    }
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
                <form name="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" name="firstName" value={user.firstName} onChange={handleChange} className={'form-control'} />
                        {submitted && !user.firstName &&
                        <div className="invalid-feedback">First Name is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" name="lastName" value={user.lastName} onChange={handleChange} className={'form-control'} />
                        {submitted && !user.lastName &&
                        <div className="invalid-feedback">Last Name is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" name="username" value={user.username} onChange={handleChange} className={'form-control' } />
                        {submitted && !user.username &&
                        <div className="invalid-feedback">Username is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <label>Location</label>
                        <input type="location" name="location" value={user.location} onChange={handleChange} className={'form-control'} />
                        {submitted && !user.location &&
                        <div className="invalid-feedback">location is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputState">Type of User</label>
                        <select type = "type" name= "type" value ={user.type} onChange={handleChange} className={"form-control"}>
                            <option selected>Choose...</option>
                            <option>Individual Contributor</option>
                            <option>Resource Manager</option>
                            <option>Project Manager</option>
                        </select>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer><Button variant="secondary" onClick={props.onHide}>
                Close
            </Button>
                <Button variant="primary" onClick = {handleSubmit}>
                    Create User
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default UserModal;