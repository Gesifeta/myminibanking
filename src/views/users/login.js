import axios from "axios";
import React, { useState } from "react";

import TextInput from "../../components/textInput";
import Button from "../../components/Button";
import Typography from "@mui/material/Typography";
import Dashboard from "./../dashboard";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const changeHandle = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };
  const LoginUser = async () => {
    try {
      const login = {
        email: input.email,
        password: input.password,
      };
      if (login.email && login.password) {
        // Define headers
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
          // Add any other custom headers you need
        };
        const responseData = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/user/login`, 
          login,
          { headers: headers }
        );
        setMessage(responseData.data.message);
        if (responseData.data.token) {
          localStorage.setItem("accessToken", responseData.data.token);
          setSuccess(true);
        }
      }
    } catch (err) {
      return err;
    }
  };
  
  return success ? (
    <Dashboard />
  ) : (
      <>
      <Typography variant="h3" color="primary">
        Sign In
      </Typography>
      <div className="inputForm">
        <h1 style={{ color: "red" }}>{message}</h1>
        <form style={{ width: "100%", margin: "auto", textAlign: "center" }}>
          <TextInput
            id="email"
            label="Email Address"
            variant="outlined"
            onChange={changeHandle}
            name="email"
            value={input.email}
          />
          <TextInput
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            onChange={changeHandle}
            name="password"
            value={input.password}
          />
          <Button name="Login" onClick={LoginUser} />
        </form>
      </div>
    </>
  );
}

export default Login;
