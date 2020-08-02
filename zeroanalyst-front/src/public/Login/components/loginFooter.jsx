import React, { Component } from "react";
import { withStyles } from "@material-ui/core";

const useStyles = (theme) => ({
  footerPaper: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    backgroundColor: theme.palette.background.nav,
  },
});
class LoginFooter extends Component {
  state = {};
  render() {
    return <div className={this.props.classes.footerPaper}>I am Footer</div>;
  }
}

export default withStyles(useStyles)(LoginFooter);
