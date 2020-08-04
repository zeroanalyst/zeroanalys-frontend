import React, { Component } from "react";
import Content from "../../components/MainContent";
import { withStyles } from "@material-ui/core/styles";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Drawer } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {
  DashboardOutlined,
  ExploreOutlined,
  AssignmentOutlined,
  DeviceHubOutlined,
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
  LayersOutlined,
  GroupWorkOutlined,
  DashboardTwoTone,
  AllInclusive,
  NotificationsActiveSharp,
} from "@material-ui/icons";
import {
  CogOutline,
  Database,
  Binoculars,
  FlaskOutline,
  FolderTableOutline,
} from "mdi-material-ui";

const styles = (theme) => ({
  drawerPaper: {
    minHeight: "100vh",
    width: 60,
    backgroundColor: theme.palette.background.nav,
  },
  drawerPaperOpen: {
    minHeight: "100vh",
    width: 220,
    backgroundColor: theme.palette.background.nav,
  },
  menuList: {
    height: "100%",
  },
  lastItem: {
    bottom: 0,
  },
  logoButton: {
    marginLeft: -23,
    marginRight: 20,
  },
  logo: {
    cursor: "pointer",
    height: 35,
  },
  toolbar: theme.mixins.toolbar,
  menuItem: {
    height: 40,
    padding: 25,
  },
  mainContainerDiv: {
    position: "fixed",
    bottom: 0,
    right: 0,
    width: "98%",
    height: "95%",
    paddingLeft: 70,
    paddingTop: 35,
    paddingRight: 20,
    paddingBottom: 20,
    boxSizing: "border-box",
    backgroundColor: theme.palette.background.paperLight,
  },
});

class Leftbar extends Component {
  state = {};

  render() {
    return (
      <div style={{ position: "relative" }}>
        <Drawer variant="permanent" className={this.props.classes.drawerPaper}>
          <MenuList component="nav">
            <div className={this.props.classes.toolbar} />
            <MenuItem classes={{ root: this.props.classes.menuItem }}>
              <NotificationsActiveSharp
                style={{
                  filter: "scale(1.3)",
                }}
              />
            </MenuItem>
          </MenuList>
        </Drawer>
        <div className={this.props.classes.mainContainerDiv}>
          <Content />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Leftbar);
