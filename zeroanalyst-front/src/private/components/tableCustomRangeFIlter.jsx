import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles, Button } from "@material-ui/core";
import { Component } from "react";

const styles = (theme) => ({
  fieldContainer: {
    // padding: 5,
  },
  minField: {
    marginBottom: 5,
  },
  maxField: {
    // width: "3vw",
    // marginLeft: 5,
  },
});

class FilterNumericBetween extends Component {
  state = {
    minVal: null,
    maxVal: null,
  };

  handleMinVal = (event) => {
    var minVal = event.target.value;
    this.setState({ minVal: minVal });
    this.props.eval(this.state.minVal, this.state.maxVal);
  };

  handleMaxVal = (event) => {
    var maxVal = event.target.value;
    this.setState({ maxVal: maxVal });
    this.props.eval(this.state.minVal, this.state.maxVal);
  };

  render() {
    return (
      <div className={this.props.classes.fieldContainer}>
        <TextField
          className={this.props.classes.minField}
          label="Min"
          variant="outlined"
          type="tel"
          value={this.state.minVal}
          onChange={this.handleMinVal}
        />
        <TextField
          className={this.props.classes.maxField}
          label="Max"
          variant="outlined"
          type="tel"
          value={this.state.maxVal}
          onChange={this.handleMaxVal}
        />
      </div>
    );
  }
}

export default withStyles(styles)(FilterNumericBetween);
