import React, { Component } from "react";

class LoginHeader extends Component {
  state = {};
  styleObj = {
    logo: {
      width: 375,
      marginTop: "25vh",
      marginBottom: "5vh",
      // filter: "drop-shadow(0px 0px 100px white)",
    },
  };

  render() {
    return (
      <div>
        <img
          src={this.props.logo}
          style={this.styleObj.logo}
          alt="Logo with Name"
        />
      </div>
    );
  }
}

export default LoginHeader;
