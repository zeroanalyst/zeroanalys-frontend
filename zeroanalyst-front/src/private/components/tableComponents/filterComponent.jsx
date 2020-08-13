import React, { Component } from "react";
import StatusSelect from "./filters/selectStatus";
import DateFilter from "./filters/periodFilter";
import ListFilter from "./filters/checkList";
import RangeFilter from "./filters/numericRangeFilter";
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
  state = {};

  getStatus = (status) => {
    this.setState({ status: status });
  };

  getDates = (dateData) => {
    let [fromDate, toDate] = dateData;
    this.setState((prevState) => ({
      date: {
        from: fromDate,
        to: toDate,
      },
    }));
  };

  getComplianceList = (checkedList) => {
    this.setState((prevState) => ({
      complianceList: checkedList,
    }));
  };

  getKCPList = (checkedList) => {
    this.setState((prevState) => ({
      KCPList: checkedList,
    }));
  };

  getTPRange = (rangeObj) => {
    var [from, to] = rangeObj;
    this.setState((prevState) => ({
      tpScore: {
        from: from,
        to: to,
      },
    }));
  };

  applyFilter = (state) => {
    this.props.applyFilter(state);
    this.props.onClose();
  };

  componentWillMount = () => {
    this.setState(this.props.filterState);
  };

  componentDidMount = () => {
    console.log(this.props.filterState);
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
              statusList={this.state.statusList}
              activeStatus={this.state.status}
              getStatus={this.getStatus}
            />
            <div className={this.props.classes.separator}></div>
            <RangeFilter
              title="Enter True Positive Score Range"
              getRange={this.getTPRange}
              fromNum={this.state.tpScore.from}
              toNum={this.state.tpScore.to}
            />
            <div className={this.props.classes.separator}></div>
            <DateFilter
              title="Select Entries Between Dates"
              getDates={this.getDates}
              fromDate={this.state.date.from}
              toDate={this.state.date.to}
            />
            <div className={this.props.classes.separator}></div>
            <ListFilter
              componentTitle="Affected Compliance"
              checkList={this.state.complianceList}
              getCheckedList={this.getComplianceList}
            />
            <ListFilter
              componentTitle="Kill Chain Phase"
              checkList={this.state.KCPList}
              getCheckedList={this.getKCPList}
            />
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              onClick={() => {
                this.props.resetFilter();
                this.setState(this.props.filterState);
                console.log(this.state);
                this.forceUpdate();
              }}
            >
              Reset Filter
            </Button>
            <Button
              autoFocus
              onClick={() => {
                this.applyFilter(this.state);
              }}
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
