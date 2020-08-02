import React from "react";
import zaLOGO from "./assets/images/logoSVG/newKJ_amey.png";
import "./App.css";
import "./assets/css/nonSelectable.css";
import theme from "./assets/themes/ExtraDarkTheme";
import Root from "./private/common/Frame.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./public/Login/Login";

import { ThemeProvider, createMuiTheme } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={createMuiTheme(theme)}>
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={() => <Root logo={zaLOGO} />} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
