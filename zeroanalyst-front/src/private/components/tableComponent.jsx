import React, { Component } from "react";
import MaterialTable from "material-table";

import Data from "../../data/placeholders/data_placeholder";

class InsightTableView extends Component {
  dataObj = null;

  constructor() {
    super();
    this.dataObj = new Data();
  }

  render() {
    return (
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          data={this.dataObj.data}
          columns={this.dataObj.columns}
          title="Insights"
        />
      </div>
    );
  }
}

export default InsightTableView;
