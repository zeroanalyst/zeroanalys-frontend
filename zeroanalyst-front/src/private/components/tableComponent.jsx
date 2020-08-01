import React, { Component, forwardRef } from "react";
import ReactDOM from "react-dom";
import MaterialTable from "material-table";
import { Button } from "@material-ui/core";

// Material UI style imports here
import { withStyles } from "@material-ui/core";

// Material Icon imports go here
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const userStyles = (theme) => ({
  statusActive: {},
  statusClosed: {},
});

class InsightTableView extends Component {
  data = [
    {
      id: 1,
      name: "Threat1",
      tags: <Button>no tag</Button>,
      timestamp: Date(Date.now()).toString(),
      tpScore: "80%",
      atpProfile: "ATP1-70%",
      killChain: "Exploitation",
      affectedCompliance: "PCI, GDPR",
      status: this.getStatusButton("Closed"),
    },
  ];
  columns = [
    { title: "ID", field: "id" },
    { title: "Name", field: "name" },
    { title: "Tags", field: "tags" },
    { title: "Creation Date", field: "timestamp" },
    { title: "TP Score", field: "tpScore" },
    { title: "ATP Profile", field: "atpProfile" },
    { title: "Kill Chain Phase", field: "killChain" },
    { title: "Affected Compliance", field: "affectedCompliance" },
    { title: "Status", field: "status" },
  ];

  getStatusButton(status) {
    return (
      <a
        className={
          status == "Open"
            ? this.props.classes.statusActive
            : this.props.classes.statusClosed
        }
      >
        {status}
      </a>
    );
  }
  render() {
    return (
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          data={this.data}
          columns={this.columns}
          title="Insights"
          icons={tableIcons}
        />
      </div>
    );
  }
}

export default withStyles(userStyles)(InsightTableView);
