import React from "react";
import { Button } from "@material-ui/core";
import theme from "../../assets/themes/ExtraDarkTheme";

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
      status: this.getStatusButton("Open"),
    },
  ];
}

export default Data;
