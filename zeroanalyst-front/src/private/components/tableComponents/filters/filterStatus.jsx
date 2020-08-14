import React, { Component } from "react";
import { HighlightOff } from "@material-ui/icons";
import { Button, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  statusTabContainer: {
    // display: "inline-block",
    backgroundColor: theme.palette.navAlt.backgroundHeader,
    padding: 2,
    borderRadius: 2,
  },
});

class FilterStatus extends Component {
  state = {};

  checkActiveFilters = () => {
    var defaultState = this.props.initialState;
    var currentState = this.props.currentState;
    var activeFilters = [];
    let fieldNames = Object.getOwnPropertyNames(defaultState);
    for (let i = 0; i < fieldNames.length; i++) {
      let fieldName = fieldNames[i];

      if (
        JSON.stringify(defaultState[fieldName]) !=
        JSON.stringify(currentState[fieldName])
      ) {
        activeFilters.push(fieldName);
      }
    }
    return activeFilters;
  };

  render() {
    return (
      <div
        className={this.props.classes.statusTabContainer}
        style={{
          visibility:
            JSON.stringify(this.props.initialState) ===
            JSON.stringify(this.props.currentState)
              ? "hidden"
              : "visible",
        }}
      >
        {this.checkActiveFilters().map((activeFilter) => (
          <React.Fragment>
            <Button key={activeFilter}>{activeFilter},</Button>
          </React.Fragment>
        ))}
        <Button onClick={this.props.clearFilter}>
          <HighlightOff />
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(FilterStatus);
