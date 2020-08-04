import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import TopMenuProfileName from "./TopMenuProfileName";
import { withRouter } from "react-router-dom";
import { compose } from "ramda";

const styles = (theme) => ({
  appBar: {
    width: "100%",
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.header.background,
    color: theme.palette.primary.main,
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
  divider: {
    width: 2,
    height: 35,
    backgroundColor: theme.palette.primary.main,
  },
  profileDropDownSpace: theme.mixins.toolbar,
  profileDropDown: {
    position: "fixed",
    top: 0,
    right: 0,
    zIndex: theme.zIndex.drawer,
    backgroundColor: theme.palette.primary.main,
    opacity: "80%",
    padding: 15,
  },
  profileDropDownButton: {
    paddingRight: 100,
  },
});

class TopBar extends Component {
  getImgUrl = () => {
    return "https://picsum.photos/32";
  };

  dropDownButtons = [
    {
      id: 1,
      text: "Log Out",
      action: () => {
        this.props.history.push("/");
      },
    },
  ];

  dropDown = () => {
    return (
      <div
        onMouseEnter={() => {
          this.handleDropDownHover(true);
        }}
        onMouseLeave={() => {
          this.handleDropDownHover(false);
        }}
        className={`drop-down ${this.props.classes.profileDropDown}`}
      >
        <div className={this.props.classes.profileDropDownSpace}></div>
        {this.dropDownButtons.map((dropDownButton) => (
          <Button
            key={dropDownButton.id}
            className={this.props.classes.profileDropDownButton}
            onClick={dropDownButton.action}
          >
            {dropDownButton.text}
          </Button>
        ))}
      </div>
    );
  };

  state = {
    profileDropDown: {
      shouldBeActive: false,
      isActive: false,
    },
  };

  handleProfileButtonHover = (isActive) => {
    this.setState((prevState) => ({
      profileDropDown: {
        ...prevState.profileDropDown,
        shouldBeActive: isActive,
      },
    }));
  };
  handleDropDownHover = (isActive) => {
    this.setState((prevState) => ({
      profileDropDown: {
        ...prevState.profileDropDown,
        isActive: isActive,
      },
    }));
  };
  render() {
    return (
      <div>
        <AppBar
          position="fixed"
          className={this.props.classes.appBar}
          // style={{ backgroundColor: "#1b2226" }}
        >
          <Toolbar>
            {/* <IconButton
              className={this.props.classes.logoButton}
              color="inherit"
              aria-label="Menu"
              to="/dashboard"
            > */}
            <img
              src={this.props.logo}
              alt="logo"
              className={this.props.classes.logo}
            />
            {/* </IconButton> */}
            <div
              style={{
                flexGrow: 1,
              }}
            ></div>
            <div className={this.props.classes.divider}> </div>
            <TopMenuProfileName
              onHover={this.handleProfileButtonHover}
              imgUrl={this.getImgUrl()}
              name="Abhi M"
            />
          </Toolbar>
        </AppBar>
        {(this.state.profileDropDown.isActive ||
          this.state.profileDropDown.shouldBeActive) && <this.dropDown />}
      </div>
    );
  }
}

export default compose(withRouter, withStyles(styles))(TopBar);
