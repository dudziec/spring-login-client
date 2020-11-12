import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
  
  
    return (
    <div>
      Login
      <TextField onChange={(e) => setEmail(e.target.value)} id="filled-basic" label="E-Mail" variant="filled" type="email"/>
      <TextField onChange={(e) => setPassword(e.target.value)} id="filled-basic" label="Password" variant="filled" type="password"/>
      <Button onClick={() => {
          console.log(email);
          console.log(password);
      }}variant="contained" color="primary">
        Login
      </Button>
    </div>
  );
};

export default Login;
