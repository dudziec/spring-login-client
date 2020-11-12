import { Button, Container, Grid, TextField } from "@material-ui/core";
import { observer, useLocalObservable } from "mobx-react-lite";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login = observer(() => {
  const credentials = useLocalObservable(() => ({
    email: "",
    password: ""
  }));

  const history = useHistory();

  return (
    <Container className="container" stylmaxWidth="sm">
      <Grid
        container
        className=""
        spacing={2}
        direction="column"
        alignItems="center"
      >
        <Grid item xs={12}>
          Login
        </Grid>
        <Grid item xs={12}>
          {" "}
          <TextField
            onChange={(e) => credentials.email = e.target.value}
            id="filled-basic"
            label="E-Mail"
            variant="filled"
            type="email"
          />
        </Grid>
        <Grid item xs={12}>
          {" "}
          <TextField
            onChange={(e) => credentials.password = e.target.value}
            id="filled-basic"
            label="Password"
            variant="filled"
            type="password"
          />
        </Grid>
        <Grid item xs={12}>
          {" "}
          <Button
            onClick={() => {
              console.log(credentials.email);
              console.log(credentials.password);
            }}
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </Grid>
        <Grid item xs={12}>
          Dont't have an account yet?
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={() => {
             history.push("/register");
            }}
            variant="contained"
            color="primary"
          >
            Register
          </Button></Grid>
      </Grid>
    </Container>
  );
});

export default Login;
