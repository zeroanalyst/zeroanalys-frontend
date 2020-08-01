import React, { Component } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TopBar from "./nav/TopBar";
import Leftbar from "./nav/LeftBar";
// import InsightTableView from "../components/tableComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 1280,
    height: "100%",
  },
  content: {
    height: "100%",
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: "24px 24px 24px 84px",
    minWidth: 0,
  },

  message: {
    display: "flex",
    alignItems: "center",
  },
  messageIcon: {
    marginRight: theme.spacing(1),
  },
  toolbar: theme.mixins.toolbar,
}));

class Root extends Component {
  state = {};
  render() {
    return (
      <div>
        <TopBar logo={this.props.logo} />
        <Leftbar />
      </div>
    );
  }
}

export default withStyles(useStyles)(Root);
