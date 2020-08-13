import React, { Component, useState } from "react";
import { withStyles, DialogContentText } from "@material-ui/core";
import { FormControl, Select, MenuItem, InputLabel } from "@material-ui/core";

const styles = (theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
});

class StatusSelect extends Component {
  state = {
    status: "",
  };

  handleChannge = (event) => {
    let selection = event.target.value;
    this.setState({ status: selection });
    this.props.getStatus(selection);
  };

  componentWillMount = () => {
    this.setState({ status: this.props.activeStatus });
  };

  componentDidMount = () => {
    this.props.getStatus("");
  };

  render() {
    return (
      <React.Fragment>
        <FormControl className={this.props.classes.formControl}>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.state.status}
            onChange={this.handleChannge}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {this.props.statusList.map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(StatusSelect);
