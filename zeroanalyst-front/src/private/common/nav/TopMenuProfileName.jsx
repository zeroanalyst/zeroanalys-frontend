import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";

const styles = (theme) => ({
  button: {
    marginRight: theme.spacing(1),
    textTransform: "none",
    cursor: "default",
    height: 70,
    cursor: "pointer",
    color: "white",
    fontWeight: "bold",
  },
  avatar: {
    height: 35,
  },
  profileContainer: {
    marginLeft: 20,
    marginRight: 20,
  },
});
class TopMenuProfileName extends Component {
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
      <div
        className={this.props.classes.profileContainer}
        onMouseEnter={() => {
          setTimeout(() => {
            this.props.onHover(true);
          }, 0);
        }}
        onMouseLeave={() => {
          setTimeout(() => {
            this.props.onHover(false);
          }, 150);
        }}
      >
        <Button color="primary" className={`profile-menu-button`}>
          {this.props.name.toUpperCase()}
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(TopMenuProfileName);
