import React, { Component, useState } from "react";
import { withStyles, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  validateUsername,
  validatePassword,
} from "../../../handlers/validators/loginValidator";

import { LoginHandler } from "../../../handlers/handlers/loginHandler";
import { withRouter } from "react-router-dom";
import { compose } from "ramda";

const styles = (theme) => ({
  textFields: {
    backgroundColor: theme.palette.background.paperLight,
    margin: 5,
    width: 375,
  },
  buttons: {
    margin: 25,
    width: 375,
    height: 50,
  },
});

class LoginBody extends Component {
  state = {
    username: {
      value: "",
      error: false,
      helperText: "",
      hasChanged: false,
    },
    password: {
      value: "",
      error: false,
      helperText: "",
      hasChanged: false,
    },
    showPassword: false,
  };

  handleClickShowPassword = () => this.setState({ showPassword: true });
  handleMouseDownPassword = () => this.setState({ showPassword: false });

  //   Handlers for Username:
  handleUsernameUpdate = (e) => {
    var enteredText = e.target.value;

    this.setState((prevState) => ({
      username: {
        ...prevState.username,
        hasChanged: true,
        value: enteredText,
      },
    }));

    var [hasValidationError, validationHint] = validateUsername(enteredText);

    if (this.state.username.hasChanged && hasValidationError) {
      this.setState((prevState) => ({
        username: {
          ...prevState.username,
          error: true,
          helperText: validationHint,
        },
      }));
    } else {
      this.setState((prevState) => ({
        username: {
          ...prevState.username,
          error: false,
          helperText: "",
        },
      }));
    }
    return null;
  };

  //   Handlers for Password:
  handlePasswordUpdate = (e) => {
    var enteredPass = e.target.value;

    this.setState((prevState) => ({
      password: {
        ...prevState.password,
        value: enteredPass,
        hasChanged: true,
      },
    }));

    var [hasValidationError, validationHint] = validatePassword(enteredPass);

    if (this.state.password.hasChanged && hasValidationError) {
      this.setState((prevState) => ({
        password: {
          ...prevState.password,
          error: true,
          helperText: validationHint,
        },
      }));
    } else {
      this.setState((prevState) => ({
        password: {
          ...prevState.password,
          error: false,
          helperText: "",
        },
      }));
    }
  };

  //   Handlers for login:
  handleLogin = () => {
    return LoginHandler(this.state.username.value, this.state.password.value);
  };

  render() {
    return (
      <div>
        <div>
          <TextField
            className={this.props.classes.textFields}
            error={this.state.username.error}
            id="outlined-read-only-input"
            label="Email ID or Username"
            variant="outlined"
            helperText={this.state.username.helperText}
            value={this.state.username.value}
            onChange={this.handleUsernameUpdate}
          />
        </div>
        <div>
          <TextField
            className={this.props.classes.textFields}
            error={this.state.password.error}
            id="outlined-password-input"
            label="Password"
            password={this.state.password.value}
            type={this.state.showPassword ? "text" : "password"}
            autoComplete="current-password"
            variant="outlined"
            helperText={this.state.password.helperText}
            onChange={this.handlePasswordUpdate}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    onMouseDown={this.handleMouseDownPassword}
                  >
                    {this.state.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div>
          <Button
            className={this.props.classes.buttons}
            variant="contained"
            color="primary"
            onClick={() => {
              let isAuth = this.handleLogin();
              if (isAuth) {
                this.props.history.push("/dashboard");
              } else {
                alert("Sorry! We cannot log you in right now...");
              }
            }}
          >
            Login
          </Button>
        </div>
      </div>
    );
  }
}

export default compose(withRouter, withStyles(styles))(LoginBody);
