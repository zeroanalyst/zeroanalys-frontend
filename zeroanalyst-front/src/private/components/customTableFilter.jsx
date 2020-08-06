import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

var minLim = 0;
var maxLim = 100;

function handleMinLim(event) {
  minLim = event.target.value;
}

function handleMaxLim(event) {
  maxLim = event.target.value;
}

customFilterAndSearch: {
  (term, rowData) => {};
}

export function RangeFilter(props) {
  const { columnDef, onFilterChanged } = props;

  return (
    <div>
      <TextField
        style={columnDef.type === "numeric" ? { float: "right" } : {}}
        type={columnDef.type === "numeric" ? "number" : "search"}
        onChange={(event) => {
          handleMinLim(event);
          //   let val = columnDef.tableData.id;
          console.log(columnDef);
          //   if (val >= minLim && val <= maxLim) {

          //   }
        }}
      />

      <TextField
        style={columnDef.type === "numeric" ? { float: "right" } : {}}
        type={columnDef.type === "numeric" ? "number" : "search"}
        onChange={(event) => {
          handleMaxLim(event);
        }}
      />
    </div>
  );
}
