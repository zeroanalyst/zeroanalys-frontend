import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import womanAvatar from "../../../assets/images/avatars/colombian.svg";
import manAvatar from "../../../assets/images/avatars/nerd.svg";

const styles = (theme) => ({
  button: {
    marginRight: theme.spacing(1),
    textTransform: "none",
    cursor: "default",
  },
  avatar: {
    height: 35,
  },
});
class TopMenuProfile extends Component {
  state = {
    gender: "female",
  };

  buttonStyle = {
    borderRadius: "50%",
    height: 50,
    width: 50,
  };

  render() {
    return (
      <div>
        <Button color="primary" style={this.buttonStyle}>
          <img
            src={this.state.gender === "female" ? womanAvatar : manAvatar}
            alt="logo"
            className={this.props.classes.avatar}
          />
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(TopMenuProfile);
