import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import "../../css/admin.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { loadSkills } from '../../redux/actions/skillsAction'
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import {Button} from "react-bootstrap";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import SkillModal from "./SkillModal";

const SkillTable = ({
                        skills,
                        loadSkills,
                    }) => {
    useEffect(() => {
        if (skills.length === 0) {
            loadSkills().catch(error => {
                alert('Loading skills failed' + error);
            });
        }
    }, [skills, loadSkills]);

    const [modalShow, setModalShow] = React.useState(false);


    return (
        <div>
            <ButtonToolbar>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    Add Skill
                </Button>

                <SkillModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </ButtonToolbar>
            <BootstrapTable data={ skills } search = {true} pagination = {true} striped hover condensed>
                <TableHeaderColumn width="150" dataField='id' isKey>Id</TableHeaderColumn>
                <TableHeaderColumn width="150" dataField='disciplineId'> Discipline Id</TableHeaderColumn>
                <TableHeaderColumn width="150" dataField='name'> Skill Name</TableHeaderColumn>
                <TableHeaderColumn width="150" dataField='TODO'> Number of People</TableHeaderColumn>
            </BootstrapTable>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        skills: state.skills,
    };
};

const mapDispatchToProps = {
    loadSkills,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SkillTable);