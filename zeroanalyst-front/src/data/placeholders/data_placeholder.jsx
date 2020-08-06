import React from "react";
import { Button } from "@material-ui/core";
import theme from "../../assets/themes/ExtraDarkTheme";
import FilterNumericBetween from "../../private/components/tableCustomRangeFIlter";

const useStyles = {
  statusActive: {
    backgroundColor: theme.palette.warning.main,
    padding: 10,
    borderRadius: "10%",
    textShadow: "0px 0px 5px black",
  },
  statusClosed: {
    backgroundColor: theme.palette.primary.main,
    padding: 10,
    borderRadius: "10%",
    textShadow: "0px 0px 5px black",
  },
};

class Data {
  getStatusButton = (status) => {
    return (
      <a
        className="unselectable"
        style={
          status === "Open" ? useStyles.statusActive : useStyles.statusClosed
        }
      >
        {status}
      </a>
    );
  };

  constructor(styles) {
    this.styleObj = styles;
  }

  minVal = null;
  maxVal = null;
  setParamsTPScoreLimits = (minVal, maxVal) => {
    console.log(minVal, maxVal);
    this.minVal = minVal;
    this.maxVal = maxVal;
  };

  evalTPScoreTerm = (rowData) => {
    console.log(rowData.tpScore);
    return this.minVal < rowData.tpScore && this.maxVal > rowData.tpScore;
  };

  filterComponentNumericRange = (customProps) => (
    <FilterNumericBetween
      eval={this.setParamsTPScoreLimits}
      customProps={customProps}
    />
  );
  columns = [
    { title: "ID", field: "id", filtering: true },
    { title: "Name", field: "name", filtering: false },
    { title: "Risk Elements", field: "riskelements", filtering: false },
    { title: "Tags", field: "tags", filtering: false },
    { title: "Creation Date", field: "timestamp", filtering: false },
    {
      title: "TP Score (%)",
      field: "tpScore",
      filtering: this.setVisibility,
    },
    {
      title: "ATP Profile ",
      field: "atpProfile",
      filtering: false,
    },
    { title: "Kill Chain Phase", field: "killChain", filtering: false },
    {
      title: "Affected Compliance",
      field: "affectedCompliance",
      filtering: false,
    },
    { title: "Status", field: "status", filtering: false },
  ];
  data = [
    {
      id: 1,
      name: "Threat1",
      riskelements: "10.10.10.10",
      tags: <Button>no tag</Button>,
      timestamp: Date(Date.now()).toString(),
      tpScore: 80,
      atpProfile: "ATP1-70%",
      killChain: "Exploitation",
      affectedCompliance: "PCI, GDPR",
      status: this.getStatusButton("Open"),
    },
  ];
}

export default Data;
