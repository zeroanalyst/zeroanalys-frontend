import React, { Component } from "react";
import StatusSelect from "./filters/selectStatus";
import DateFilter from "./filters/periodFilter";
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
  };

  getStatus = (status) => {
    this.setState({ status: status });
  };

  getDates = (dateData) => {
    let [fromDate, toDate] = dateData;
    this.setState({ fromDate: fromDate });
    this.setState({ toDate: toDate });
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
            <StatusSelect getStatus={this.getStatus} />
            <DateFilter getDates={this.getDates} />
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

export default FilterComponent;
