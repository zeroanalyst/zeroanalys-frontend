import React, { Component } from "react";
import StatusSelect from "./filters/selectStatus";
import DateFilter from "./filters/periodFilter";
import ListFilter from "./filters/checkList";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Toolbar,
  Button,
  withStyles,
} from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  separator: {
    width: "100%",
    height: 2,
    backgroundColor: theme.palette.primary.main,
    marginTop: 20,
    marginBottom: 20,
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

class FilterComponent extends Component {
  state = {
    status: "",
    fromDate: null,
    toDate: null,
    complianceList: null,
  };

  getStatus = (status) => {
    this.setState({ status: status });
  };

  getDates = (dateData) => {
    let [fromDate, toDate] = dateData;
    this.setState({ fromDate: fromDate });
    this.setState({ toDate: toDate });
  };

  getComplianceList = (complianceList) => {
    console.log(complianceList);
    // this.setState({ complianceList: complianceList });
  };

  applyFilter = (state) => {
    console.log(state);
  };

  render() {
    return (
      <React.Fragment>
        <Dialog
          aria-labelledby="customized-dialog-title"
          open={this.props.open}
          onClose={this.props.onClose}
        >
          <DialogTitle onClose={this.props.onClose}>Filter</DialogTitle>
          <DialogContent>
            <StatusSelect
              statusList={["Open", "In Progress", "Closed"]}
              getStatus={this.getStatus}
            />
            <div className={this.props.classes.separator}></div>
            <DateFilter
              title="Select Entries Between Dates"
              getDates={this.getDates}
            />
            <div className={this.props.classes.separator}></div>
            <ListFilter
              componentTitle="Affected Compliance"
              checkList={[
                "HIPPA",
                "NIST",
                "GPG",
                "GDPR",
                "TSC",
                "SOC 2",
                "ISO 27001",
              ]}
              getCheckedList={this.getComplianceList}
            />
            <ListFilter
              componentTitle="Kill Chain Phase"
              checkList={[
                "Reconnaissance",
                "Intrusion",
                "Exploitation",
                "Privilege Escalation",
                "Lateral Movement",
                "Obfuscation / Anti-forensics",
                "Denial of Service",
                "Exfiltration",
              ]}
              getCheckedList={this.getComplianceList}
            />
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              onClick={() => {
                this.applyFilter(this.state);
              }}
              color="primary"
            >
              Apply
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(FilterComponent);
