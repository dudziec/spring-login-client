import { Button, Container, Grid, TextField } from "@material-ui/core";
import axios from "axios";
import { observer, useLocalObservable } from "mobx-react-lite";
import React from "react";
import { useHistory } from "react-router-dom";

const Register = observer(() => {
  const credentials = useLocalObservable(() => ({
    email: "",
    password: ""
  }));

  const history = useHistory();

  return (
    <>
      <Container className="container" stylmaxWidth="sm">
        <Grid
          container
          className=""
          spacing={2}
          direction="column"
          alignItems="center"
        >
          <Grid item xs={12}>
            Create new account
          </Grid>
          <Grid item xs={12}>
            {" "}
            <TextField
              onChange={(e) => (credentials.email = e.target.value)}
              id="filled-basic"
              label="E-Mail"
              variant="filled"
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            {" "}
            <TextField
              onChange={(e) => (credentials.password = e.target.value)}
              id="filled-basic"
              label="Password"
              variant="filled"
              type="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={() => {
                    console.log("Starting sending request with data:");
                    console.log(`email: ${credentials.email}`);
                    console.log(`password: ${credentials.password}`);
                    
                    axios.post("http://localhost:8081/reg", {
                      email: credentials.email,
                      password: credentials.password
                    }).then(response => {
                      console.log(response);
                    }).catch(error => {
                      console.log(error.response);
                    })
              }}
              variant="contained"
              color="primary"
            >
              Register
            </Button>
          </Grid>
          <Grid item xs={12}>
              Already registered?
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={() => {
             history.push("/login");
            }}
            variant="contained"
            color="primary"
          >
            Login with your existing account
          </Button></Grid>
        </Grid>
      </Container>
    </>
  );
});

export default Register;
