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
  const initialState = () => {
    var obj = {};
    props.checkList.map((item) => {
      obj[item] = true;
    });
    return obj;
  };

  const [state, setState] = useState(initialState());

  const handleCheckChanged = (event) => {
    var sendObj = state;
    var checkItem = event.target.name;
    var isChecked = event.target.checked;
    sendObj[checkItem] = isChecked;
    setState({ ...state, [checkItem]: isChecked });

    props.getCheckedList(sendObj);
  };

  useState(() => {
    props.getCheckedList(state);
  }, []);

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
                    name={checkItem}
                    checked={state[checkItem]}
                    onChange={handleCheckChanged}
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
