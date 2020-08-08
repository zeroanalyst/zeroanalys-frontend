import React, { Component } from "react";
import parse from "html-react-parser";
import { Button, styled } from "@material-ui/core";
import theme from "../../../../assets/themes/ExtraDarkTheme";

export class TagButton {
  constructor(data) {
    this.datas = data;
  }

  formatTitleToField = (str) => {
    var fieldName = str.replace(/[^a-zA-Z]/g, "");
    fieldName = fieldName.toLowerCase();
    return fieldName;
  };

  addButtonToTags = (fieldTitle) => {
    this.datas.map((data) => {
      var tagString = data[this.formatTitleToField(fieldTitle)];
      var tags = tagString.split(",");
      var emptyString = ``;
      tags.map((tag) => {
        emptyString = emptyString + `<Button>${tag}</Button> `;
      });
      data[this.formatTitleToField(fieldTitle)] = (
        <div>{parse(emptyString)}</div>
      );
    });

    return this.datas;
  };
}

const statusActive = {
  backgroundColor: theme.palette.warning.main,
  padding: 10,
  borderRadius: 5,
  textShadow: "0px 0px 5px black",
};

const statusClosed = {
  backgroundColor: theme.palette.primary.main,
  padding: 10,
  borderRadius: 5,
  textShadow: "0px 0px 5px black",
};

const statusInProgress = {
  backgroundColor: theme.palette.progress.main,
  padding: 10,
  borderRadius: 5,
  textShadow: "0px 0px 5px black",
};

export function StatusSet(dataIn, titleToControl) {
  const formatTitleToField = (str) => {
    var fieldName = str.replace(/[^a-zA-Z]/g, "");
    fieldName = fieldName.toLowerCase();
    return fieldName;
  };

  const setStatus = (dataIn, title) => {
    var datas = dataIn;
    datas.map((data) => {
      var statusString = data[formatTitleToField(title)];
      if (statusString == "Closed") {
        data[formatTitleToField(title)] = (
          <div className="unselectable" style={statusClosed}>
            {statusString}
          </div>
        );
      } else if (statusString == "Open") {
        data[formatTitleToField(title)] = (
          <div className="unselectable" style={statusActive}>
            {statusString}
          </div>
        );
      } else if (statusString == "In Progress") {
        data[formatTitleToField(title)] = (
          <div className="unselectable" style={statusInProgress}>
            {statusString}
          </div>
        );
      }
    });

    return datas;
  };

  return setStatus(dataIn, titleToControl);
}
