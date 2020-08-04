import React, { Component } from "react";
import MaterialTable from "material-table";
import theme from "../../assets/themes/ExtraDarkTheme";
import Data from "../../data/placeholders/data_placeholder";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";

const styles = (theme) => ({
  tableTitle: {
    backgroundColor: theme.palette.primary.main,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    fontSize: "1.01em",
    fontWeight: "bolder",
    textShadow: "0px 0px 3px black",
    marginRight: 30,
    display: "inline-block",
  },
  filterButton: {
    display: "inline-block",
    paddingTop: 10,
  },
});

class InsightTableView extends Component {
  dataObj = null;
  filterEnable = false;

  constructor() {
    super();
    this.dataObj = new Data();
  }

  TitleElement = () => {
    return (
      <div>
        <div className={this.props.classes.tableTitle}>INSIGHTS</div>
        <Button
          className={this.props.classes.filterButton}
          style={this.filterEnable ? { backgroundColor: "gray" } : {}}
          onClick={() => {
            this.filterEnable = !this.filterEnable;
            this.forceUpdate();
          }}
        >
          <FilterListIcon />
        </Button>
      </div>
    );
  };

  render() {
    return (
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          data={this.dataObj.data}
          columns={this.dataObj.columns}
          options={{
            filtering: this.filterEnable,
            headerStyle: {
              fontSize: "1.01em",
              fontWeight: "bolder",
              backgroundColor: theme.palette.background.default,
              textAlign: "left",
            },
          }}
          title={this.TitleElement()}
        />
      </div>
    );
  }
}

export default withStyles(styles)(InsightTableView);
