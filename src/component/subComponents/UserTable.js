import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import "../../css/admin.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { createAUser } from '../../redux/actions/usersActions';
import { connect } from 'react-redux';
import { loadUsers } from '../../redux/actions/usersActions';
import { loadLocations } from '../../redux/actions/locationsActions';
import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import UserModal from "./UserModal";



const UserTable = ({
                       users,
                       locations,
                       loadUsers,
                       loadLocations,
                   }) => {
    useEffect(() => {
        if (users.length === 0) {
            loadUsers().catch(error => {
                alert('Loading users failed' + error);
            });
        }

        if (locations.length === 0) {
            loadLocations().catch(error => {
                alert('Loading locations failed' + error);
            });
        }
    }, [users, locations, loadUsers, loadLocations]);

    const [modalShow, setModalShow] = React.useState(false);



    return (
        <div>
            <ButtonToolbar>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Add User
                </Button>

                <UserModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </ButtonToolbar>
            <BootstrapTable data={ users } search ={true} pagination = {true} striped hover condensed>
                <TableHeaderColumn width="150" dataField='id' isKey>Id</TableHeaderColumn>
                <TableHeaderColumn width="150" dataField='firstName'>First Name</TableHeaderColumn>
                <TableHeaderColumn width="150" dataField='lastName'>Last Name</TableHeaderColumn>
                <TableHeaderColumn width="150" dataField='username'>User Name</TableHeaderColumn>
                <TableHeaderColumn width="150" dataField='locationName'>Location</TableHeaderColumn>
            </BootstrapTable>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        users:
            state.locations.length === 0
                ? []
                : state.users.map(user => {
                    return {
                        ...user,
                        locationName: state.locations.find(
                            element => element.id === user.locationId,
                        ),
                    };
                }),
        locations: state.locations,
    };
};

const mapDispatchToProps = {
    loadUsers,
    loadLocations,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserTable);



