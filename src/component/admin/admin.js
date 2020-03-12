import React from 'react';
import UserTable from '../subComponents/UserTable';
import LocationTable from '../subComponents/LocationTable';
import SkillTable from '../subComponents/SkillTable';
import DisciplineTable from '../subComponents/DisciplineTable';
import '../../css/admin.css';
import Sidebar from "../subComponents/Sidebar";

export default class Admin extends React.Component{

  constructor(props) {
    super(props);
    this.state ={
      current_table:"user"
    };
  }
  setTable = (table) => {
    this.setState({current_table:table})
  }

  render() {

    let table = null;
    if(this.state.current_table === "user") {
      table = <div className = "dataTable"> <UserTable/> </div>;
    }else if(this.state.current_table === "location") {
      table = <div className = "dataTable"> <LocationTable/> </div>
    } else if(this.state.current_table === "skill") {
      table = <div className = "dataTable"> <SkillTable/> </div>
    } else {
      table = <div className = "dataTable"> <DisciplineTable/> </div>
    }

    return (
        <div className="adminMain">
          <Sidebar table={this.setTable}/>
          <div className= "dataTable">
            {table}
          </div>
        </div>
    );
  }

}


