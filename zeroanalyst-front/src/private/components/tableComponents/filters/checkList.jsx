import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";

const styles = (theme) => ({
  separator: {
    width: "100%",
    height: 2,
    backgroundColor: theme.palette.primary.main,
    marginTop: 20,
    marginBottom: 20,
  },
});

export function ListFilter(props) {
  var { classes } = props;

  // 8 August 2020: Finish this Component

  return (
    <React.Fragment>
      <FormControl component="fieldset" style={{ marginRight: 20 }}>
        <FormLabel component="legend">{props.componentTitle}</FormLabel>
        <FormGroup>
          {props.checkList.map((checkItem) => {
            return (
              <FormControlLabel
                key={checkItem}
                label={checkItem}
                name={checkItem}
                control={
                  <Checkbox
                    onChange={(event) => {
                      console.log("Hello");
                    }}
                  />
                }
              />
            );
          })}
        </FormGroup>
      </FormControl>
    </React.Fragment>
  );
}

ListFilter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListFilter);
