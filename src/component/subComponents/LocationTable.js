import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import "../../css/admin.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { loadLocations } from "../../redux/actions/locationsActions"
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import Button from "react-bootstrap/Button";


const LocationTable = ({
                           locations,
                           loadLocations
                       }) => {
    useEffect(() => {
        if (locations.length === 0) {
            loadLocations().catch(error => {
                alert('Loading locations failed' + error);
            });
        }
    }, [locations, loadLocations]);

    return (
        <div>
            <Button>Add Location</Button>
            <BootstrapTable data={ locations } search = {true} pagination = {true} striped hover condensed>
                <TableHeaderColumn width="150" dataField='id' isKey>Location id</TableHeaderColumn>
                <TableHeaderColumn width="150" dataField='code'> Location Code</TableHeaderColumn>
                <TableHeaderColumn width="150" dataField='name' >Location Name</TableHeaderColumn>
                <TableHeaderColumn width="150" dataField='numberOfPeople'> Number of People</TableHeaderColumn>
            </BootstrapTable>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        locations: state.locations,
    };
};

const mapDispatchToProps = {
    loadLocations,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LocationTable);
