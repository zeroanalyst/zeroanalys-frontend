import React, { Component } from "react";
import LoginBody from "./components/loginBody";
import LoginHeader from "./components/loginHeader";
import LoginFooter from "./components/loginFooter";
import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  background: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.background.default,
  },
});

class Login extends Component {
  state = {};
  render() {
    return (
      <div className={this.props.classes.background}>
        <LoginHeader logo={this.props.logo} />
        <LoginBody />
        {/* <LoginFooter /> */}
      </div>
    );
  }
}

export default withStyles(styles)(Login);
