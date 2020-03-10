import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../scss/sidebar.scss";
import AEimage from "../image/AEimage.png";


export default class Sidebar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {time: new Date()}
    }
    currentTime () {
        this.setState({
            time: new Date()
        })
    }
    componentWillMount() {
        setInterval(() =>this.currentTime(),1000)
    }

    render() {
      return (
          <div>
              <div className="sidebar">
                  <div className="AESectionImage">
                      <div className="AEImage">
                          <img src={AEimage}></img>
                          <div className= "timeSection">
                              <h3>Welcome</h3>
                              <h3>{this.state.time.toLocaleTimeString()}</h3>
                              <div className="profileText">
                                  <h3><button onClick= {() => this.props.table("user")}>User</button></h3>
                                  <h4><button onClick = {() =>this.props.table("location")}>Location</button></h4>
                                  <h3><button onClick = {() => this.props.table("skill")}>Skill</button></h3>
                                  <h4><button onClick = {() => this.props.table("discipline")}>Discipline</button></h4>
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
          </div>
      );
    }
}

