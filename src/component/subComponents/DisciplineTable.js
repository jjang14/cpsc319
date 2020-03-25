import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import "../../css/admin.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { loadDisciplines } from "../../redux/actions/disciplinesActions"
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import DisciplineModal from "./DisciplineModal";




const DisciplineTable = ({
                             disciplines,
                             loadDisciplines,
                         }) => {
    useEffect(() => {
        if (disciplines.length === 0) {
            loadDisciplines().catch(error => {
                alert('Loading disciplines failed' + error);
            });
        }
    }, [disciplines, loadDisciplines]);

    const [modalShow, setModalShow] = React.useState(false);


    return (
        <div>
            <ButtonToolbar>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Add Discipline
                </Button>

                <DisciplineModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </ButtonToolbar>

            <BootstrapTable data={ disciplines } search={true} pagination = {true} striped hover condensed>
                <TableHeaderColumn width="150" dataField='id' isKey>Id</TableHeaderColumn>
                <TableHeaderColumn width="150" dataField='name'> Discipline Name</TableHeaderColumn>
                <TableHeaderColumn width="150" dataField='TODO'> Number of People</TableHeaderColumn>
            </BootstrapTable>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        disciplines: state.disciplines,
    };
};

const mapDispatchToProps = {
    loadDisciplines,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DisciplineTable);
