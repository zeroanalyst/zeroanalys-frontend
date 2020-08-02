import React, { Component } from "react";
import logo from "../../../assets/images/layout/login/logoWithName-Mod.png";

class LoginHeader extends Component {
  state = {};
  styleObj = {
    logo: {
      width: 410,
      marginTop: "20vh",
      marginBottom: "5vh",
      filter: "drop-shadow(0px 0px 100px white)",
    },
  };

  render() {
    return (
      <div>
        <img src={logo} style={this.styleObj.logo} alt="Logo with Name" />
      </div>
    );
  }
}

export default LoginHeader;
