import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import "../../css/admin.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { createAUser } from '../../redux/actions/usersActions';
import { connect } from 'react-redux';
import { loadUsers } from '../../redux/actions/usersActions';
import { loadLocations } from '../../redux/actions/locationsActions';
import React, { useEffect } from 'react';
import useModal from "./useModal";
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

    const {isShowing, toggle} = useModal();

    return (
        <div>
            <button type="button" className="myBotton" onClick={toggle}>Add User</button>
            <UserModal 
                isShowing={isShowing}
                hide={toggle}
                />
            <button type="button" className="myBotton">Remove User</button>
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
                        ).name,
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


