import React, { Component } from "react";
import MaterialTable from "material-table";
import theme from "../../assets/themes/ExtraDarkTheme";
import { DataManager } from "../../handlers/handlers/dataHandler/handleData";
import {
  TagButton,
  StatusSet,
} from "../components/tableComponents/stylers/modifiers";

import {
  Filter,
  insightsFilter,
} from "../../handlers/handlers/filterHandler/handleFilter";

import dummyData from "../../data/dummyData.json";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { AppBar, Toolbar, Switch } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import { Grow, Paper, Slide, Fade } from "@material-ui/core";

import FilterComponent from "./tableComponents/filterComponent";
import FilterStatus from "./tableComponents/filters/filterStatus";

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
  statusActive: {
    backgroundColor: theme.palette.warning.main,
    padding: 10,
    borderRadius: 5,
    textShadow: "0px 0px 5px black",
  },
  statusClosed: {
    backgroundColor: theme.palette.primary.main,
    padding: 10,
    borderRadius: 5,
    textShadow: "0px 0px 5px black",
  },
  statusInProgress: {
    backgroundColor: theme.palette.progress.main,
    padding: 10,
    borderRadius: 5,
    textShadow: "0px 0px 5px black",
  },
});

class InsightTableView extends Component {
  dataObject = null;
  filterOpen = false;
  data = null;
  columns = null;
  initialFilterState = {
    status: "",
    date: {
      from: new Date(Date.now()),
      to: new Date(Date.now()),
    },
    complianceList: {
      HIPPA: true,
      NIST: true,
      GPG: true,
      GDPR: true,
      TSC: true,
      "SOC 2": true,
      "ISO 27001": true,
    },
    tpScore: {
      from: null,
      to: null,
    },
    KCPList: {
      Reconnaissance: true,
      Intrusion: true,
      Exploitation: true,
      "Privilege Escalation": true,
      "Lateral Movement": true,
      "Obfuscation / Anti-forensics": true,
      "Denial of Service": true,
      Exfiltration: true,
    },
    activeFilters: [],
    statusList: ["Open", "In Progress", "Closed"],
  };

  state = {
    filter: {
      enable: false,
      open: false,
    },
    data: null,
    filterUpdate: 0,
    filterState: this.initialFilterState,
  };

  constructor() {
    super();
    this.dataObject = new DataManager(dummyData);
    this.data = this.dataObject.getData();
    this.columns = this.dataObject.getColumns();
    this.resetFilter = this.resetFilter.bind(this);
  }
  ///////////////////////////////////////////////////////////////////
  ////////////////
  /////////////////
  /////////////   Move this method into modifiers as a fucntional Component
  ////////////              In order to achieve loose binding
  ////////////////
  ///////////////////////////////////////////////////////////////////
  modifyColumns = (columns) => {
    // Modify the background of the Status Button
    for (let i = 0; i < columns.length; i++) {
      let element = columns[i];
      if (element["title"] == "Status") {
        columns[i] = {
          ...columns[i],
          render: (rowData) => {
            if (rowData.status === "Open") {
              return (
                <div className={this.props.classes.statusActive}>
                  {rowData.status}
                </div>
              );
            } else if (rowData.status === "Closed") {
              return (
                <div className={this.props.classes.statusClosed}>
                  {rowData.status}
                </div>
              );
            } else if (rowData.status === "In Progress") {
              return (
                <div className={this.props.classes.statusInProgress}>
                  {rowData.status}
                </div>
              );
            } else {
              return rowData.status;
            }
          },
        };
      }
    }
  };

  ///////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////

  componentWillMount = () => {
    console.log("Before Mounting", this.columns);
    this.modifyColumns(this.columns);
    this.modifyData(this.data);
  };

  modifyData(data) {
    var tempData = data;
    this.setState({ data: tempData });
  }

  applyFilter = (filterObject) => {
    this.setState({ filterState: filterObject });

    var filteredData = insightsFilter(this.data, filterObject);
    this.modifyData(filteredData);
    this.setState({ filterUpdate: this.state.filterUpdate + 1 });
  };

  async resetFilter() {
    this.modifyData(this.data);
    await this.setState({ filterState: this.initialFilterState });
    console.log(this.state.filterState);
    this.setState({ filterUpdate: this.state.filterUpdate + 1 });
  }

  handleFilterEnable = (event) => {
    let checked = event.currentTarget.checked;
    this.setState((prevState) => ({
      filter: {
        ...prevState.filter,
        enable: checked,
      },
    }));
    if (!checked) {
      this.resetFilter();
    }
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

        <FilterStatus
          key={this.state.filterUpdate}
          initialState={this.initialFilterState}
          currentState={this.state.filterState}
        />
        <div>
          <FilterComponent
            key={this.state.filterUpdate}
            open={this.state.filter.open}
            onClose={this.handleFilterClose}
            applyFilter={this.applyFilter}
            resetFilter={() => {
              this.resetFilter();
            }}
            filterState={this.state.filterState}
          />
        </div>
      </Toolbar>
    );
  };

  render() {
    return (
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          data={this.state.data}
          columns={this.columns}
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
