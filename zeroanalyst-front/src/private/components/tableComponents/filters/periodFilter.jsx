import "date-fns";
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useState } from "react";

const styles = (theme) => ({
  separator: {
    width: "100%",
    height: 2,
    backgroundColor: theme.palette.primary.main,
    marginTop: 20,
    marginBottom: 20,
  },
  warning: {
    color: "red",
  },
});

function DateFilter(props) {
  const { classes } = props;

  var expToDate = null;
  var expFromDate = null;

  const [fromDate, setFromDate] = useState(new Date(Date.now()));
  const [toDate, setToDate] = useState(new Date(Date.now()));

  const expDates = (fromDate, toDate) => {
    props.getDates([fromDate, toDate]);
  };

  const handleFromDate = (date) => {
    expToDate = date;
    setFromDate(date);
    expDates(date, toDate);
  };

  const handleToDate = (date) => {
    expFromDate = date;
    setToDate(date);
    expDates(fromDate, date);
  };

  return (
    <div>
      <div className={classes.separator}></div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            style={{ margin: 10 }}
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="From"
            value={fromDate}
            onChange={handleFromDate}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <KeyboardDatePicker
            disableToolbar
            style={{ margin: 10 }}
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="To"
            value={toDate}
            onChange={handleToDate}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      {Number(fromDate) > Number(toDate) ? (
        <div className={classes.warning}>
          **From Date cannot be greater than to Date
        </div>
      ) : null}

      <div className={classes.separator}></div>
    </div>
  );
}

DateFilter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateFilter);
