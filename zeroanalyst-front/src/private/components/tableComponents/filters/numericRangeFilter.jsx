import React, { Component, useState } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core";
import { TextField, InputAdornment, FormControl } from "@material-ui/core";

import { AccountCircle } from "@material-ui/icons";
import { useEffect } from "react";

const styles = (theme) => ({
  textFields: {
    display: "inline-block",
    margin: 10,
  },
  warning: {
    color: "red",
  },
});

export function RangeFilter(props) {
  const { classes } = props;

  const [From, setFrom] = useState("");
  const [To, setTo] = useState("");

  useEffect(() => {
    props.getRange([+From, +To]);
  }, []);

  const handleNumberField = (event) => {
    var value = event.target.value;
    var num = +value;
    if (!isNaN(num)) {
      if (event.target.name == "from") {
        setFrom(value);
        props.getRange([num, +To]);
      } else if (event.target.name == "to") {
        setTo(value);
        props.getRange([+From, num]);
      }
    }
  };

  return (
    <React.Fragment>
      <div>{props.title}</div>
      <div>
        <TextField
          className={classes.textFields}
          id="outlined-required"
          name="from"
          label="From"
          type="tel"
          variant="outlined"
          value={From}
          onChange={handleNumberField}
        />

        <TextField
          className={classes.textFields}
          id="outlined-required"
          name="to"
          label="To"
          type="tel"
          variant="outlined"
          value={To}
          onChange={handleNumberField}
        />
      </div>
      {Number(From) > Number(To) ? (
        <div className={classes.warning}>**Please enter a valid Range...</div>
      ) : null}
    </React.Fragment>
  );
}

RangeFilter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RangeFilter);
