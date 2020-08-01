import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import TopMenuProfile from "./TopMenuProfileButton";

const styles = (theme) => ({
  appBar: {
    width: "100%",
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.header.background,
    color: theme.palette.header.background,
  },
  flex: {
    flexGrow: 1,
  },
  logoButton: {
    marginLeft: -20,
    marginRight: 20,
  },
  logo: {
    cursor: "pointer",
    height: 35,
    filter: "drop-shadow(0px 0px 30px white)",
  },
  menuContainer: {
    float: "left",
  },
  barRight: {
    position: "absolute",
    right: 5,
  },
  searchContainer: {
    display: "inline-block",
    verticalAlign: "middle",
    marginRight: 20,
  },
  button: {
    display: "inline-block",
  },
});

class TopBar extends Component {
  getImgUrl = () => {
    return "https://picsum.photos/32";
  };
  state = {};
  render() {
    return (
      <AppBar
        position="fixed"
        className={this.props.classes.appBar}
        style={{ backgroundColor: "#1b2226" }}
      >
        <Toolbar>
          <IconButton
            className={this.props.classes.logoButton}
            color="inherit"
            aria-label="Menu"
            to="/dashboard"
          >
            <img
              src={this.props.logo}
              alt="logo"
              className={this.props.classes.logo}
            />
          </IconButton>
          <div
            style={{
              flexGrow: 1,
            }}
          ></div>
          <TopMenuProfile imgUrl={this.getImgUrl()} />
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(TopBar);
