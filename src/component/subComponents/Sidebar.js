import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../scss/sidebar.scss";
import AEimage from "../image/AEimage.png";
import "font-awesome/css/font-awesome.min.css";


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
                                  <h3><button onClick= {() => this.props.table("user")}><i class ="fa fa-user"></i>User</button></h3>
                                  <h4><button onClick = {() =>this.props.table("location")}><i
                                      className="fa fa-map-marker"></i>Location</button></h4>
                                  <h3><button onClick = {() => this.props.table("skill")}><i className="fa fa-book"></i>Skill</button></h3>
                                  <h4><button onClick = {() => this.props.table("discipline")}><i
                                      className="fa fa-users"></i>Discipline</button></h4>
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
          </div>
      );
    }
}

