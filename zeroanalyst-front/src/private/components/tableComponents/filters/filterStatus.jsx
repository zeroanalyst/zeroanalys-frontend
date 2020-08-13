import React, { Component } from "react";
import { HighlightOff } from "@material-ui/icons";
import { Button } from "@material-ui/core";

class FilterStatus extends Component {
  state = {};

  checkActiveFilters = () => {
    var defaultState = this.props.initialState;
    var currentState = this.props.currentState;
    var activeFilters = [];
    let fieldNames = Object.getOwnPropertyNames(defaultState);
    for (let i = 0; i < fieldNames.length; i++) {
      let fieldName = fieldNames[i];

      console.log("default state for", fieldName, defaultState[fieldName]);
      console.log("current state for", fieldName, currentState[fieldName]);
      console.log(
        "current state === default state... for",
        fieldName,
        defaultState[fieldName] == currentState[fieldName]
      );

      if (defaultState[fieldName] != currentState[fieldName]) {
        activeFilters.push(fieldName);
      }
    }
    return activeFilters;
  };

  render() {
    return (
      <div
        style={{
          visibility:
            this.props.initialState === this.props.currentState
              ? "hidden"
              : "visible",
        }}
      >
        {this.checkActiveFilters().map((activeFilter) => (
          <div key={activeFilter}> {activeFilter} </div>
        ))}
        <Button>
          <HighlightOff />
        </Button>
      </div>
    );
  }
}

export default FilterStatus;
