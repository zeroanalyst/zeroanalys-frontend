import React from "react";
import justLogo from "./assets/images/logoSVG/AB2.svg";
import logoWithName from "./assets/images/layout/login/logoWithName-Mod.png";
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
            <Route
              path="/"
              exact
              component={() => <Login logo={logoWithName} />}
            />
            <Route
              path="/dashboard"
              component={() => <Root logo={justLogo} />}
            />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
