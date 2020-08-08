import React, { Component } from "react";
import { DataManager } from "../../../handlers/handlers/dataHandler/handleData";
import dataJson from "../../../data/dummyData.json";
import { Button } from "@material-ui/core";

class JsonHandler extends Component {
  state = {};
  data = new DataManager(dataJson);
  render() {
    return (
      <React.Fragment>
        <div>
          JSON Handler
          {/* <div>{console.log(Object.getOwnPropertyNames(this.data.JSON[0]))}</div> */}
        </div>
        <div style={{ backgroundColor: "blue" }}>
          <Button onClick={this.data.getData}>Check</Button>
        </div>
      </React.Fragment>
    );
  }
}

export default JsonHandler;
