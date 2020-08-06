import React, { Component } from "react";
import MaterialTable from "material-table";
import theme from "../../assets/themes/ExtraDarkTheme";
import Data from "../../data/placeholders/data_placeholder";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { AppBar, Toolbar, Switch } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import { Grow, Paper, Slide, Fade } from "@material-ui/core";

import FilterComponent from "./tableComponents/filterComponent";

const styles = (theme) => ({
  tableTitle: {
    // margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    fontSize: "1.01em",
    fontWeight: "bolder",
    textShadow: "0px 0px 3px black",
    // marginRight: 30,
    display: "inline-block",
  },
  filterButton: {
    margin: theme.spacing(1),
    display: "inline-block",
    // paddingTop: 10,
  },
  filterDiv: {
    // display: "inline-block",
  },
  paper: {
    // margin: theme.spacing(1),
    backgroundColor: theme.palette.background.paperLight,
    // padding: 0,
  },
});

class InsightTableView extends Component {
  dataObj = null;
  filterOpen = false;

  state = {
    filter: {
      enable: false,
      open: false,
    },
  };

  constructor() {
    super();
    this.dataObj = new Data();
  }

  handleFilterEnable = (event) => {
    let checked = event.currentTarget.checked;
    this.setState((prevState) => ({
      filter: {
        ...prevState.filter,
        enable: checked,
      },
    }));
  };

  handleFilterClose = () => {
    this.setState((prevState) => ({
      filter: {
        ...prevState.filter,
        open: false,
      },
    }));
  };

  TitleElement = () => {
    return (
      <Toolbar>
        <div className={this.props.classes.tableTitle}>INSIGHTS</div>
        <div style={{ marginLeft: 20, flexGrow: 1 }}>
          {this.state.filter.enable ? "Filter ON" : "Filter OFF"}
        </div>
        <Switch
          checked={this.state.filter.enable}
          onChange={this.handleFilterEnable}
        />
        <Button
          disabled={!this.state.filter.enable}
          className={this.props.classes.filterButton}
          onClick={() => {
            this.setState((prevState) => ({
              filter: {
                ...prevState.filter,
                open: true,
              },
            }));
            this.forceUpdate();
          }}
        >
          <FilterListIcon />
        </Button>
        <div className={this.props.classes.filterDiv}>
          <Fade in={this.filterOpen}>
            <Paper elevation={4} className={this.props.classes.paper}>
              <FilterComponent
                open={this.state.filter.open}
                onClose={this.handleFilterClose}
              />
            </Paper>
          </Fade>
        </div>
      </Toolbar>
    );
  };

  render() {
    return (
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          data={this.dataObj.data}
          columns={this.dataObj.columns}
          options={{
            // filtering: this.filterEnable,
            headerStyle: {
              fontSize: "1.01em",
              fontWeight: "bolder",
              backgroundColor: theme.palette.background.default,
              textAlign: "left",
            },
          }}
          title={this.TitleElement()}
        />
      </div>
    );
  }
}

export default withStyles(styles)(InsightTableView);
