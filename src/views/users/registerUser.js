import axios from "axios";
import React, { useEffect, useState } from "react";

import TextInput from "../../components/textInput";
import Button from "../../components/Button";
import Grid from "@mui/material/Grid";
import Check from "@mui/icons-material/Check";
import Incorrect from "@mui/icons-material/Dangerous";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import TransactionMessage from "../../components/transactionMessage";

// Controlling for input in the useraname and password fild
//const USER_REG = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REG = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

function RegisterUser() {
  //to validate password
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  // to validate if password matches
  const [matchPwd, setMatch] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  useEffect(() => {
    const result = PWD_REG.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });
  const changeHandle = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };
  const registerUser = async (e) => {
    e.preventDefault();
    const newUser = {
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      password: pwd,
    };
    if (validMatch) {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
        // Add any other custom headers you need
      };
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user/create`,
        newUser,{headers:headers}
      );

      setMessage(response.data.message);
      if (response.data.message === "Successfuly completed") {
        setSuccess(true);
        setMessage(response.data.message);
        setInput({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          password2: "",
        });
        setPwd("");
      }
    } else setMessage("Password does not match");
  }
  return (
    <>
      {success ? (
        
        <TransactionMessage link={`${process.env.REACT_APP_BACKEND_URL}/transaction/balance`} message={message} />
      ) : (
        <section>
          <Typography variant="h3" color="primary">
            Register
          </Typography>
          <p className={success ? "successMessage" : "failureMessage"}>
            {message}
          </p>
          <div className="registerUser">
            <Box component="form" action="#">
              <Grid container>
                <Grid item xs={12} sm={12} md={4}>
                  <label htmlFor="firstName">First Name:</label>
                </Grid>

                <Grid item xs={12} sm={12} md={8}>
                  <TextInput
                    type="text"
                    onChange={changeHandle}
                    name="firstName"
                    value={input.firstName}
                    label="Enter first name"
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={4}>
                  <label htmlFor="lastName">Last Name:</label>
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                  <TextInput
                    type="text"
                    onChange={changeHandle}
                    name="lastName"
                    value={input.lastName}
                    required
                    label="Enter last lame"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <label htmlFor="email">Email:</label>
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                  <TextInput
                    type="email"
                    onChange={changeHandle}
                    name="email"
                    value={input.email}
                    label="Enter email address"
                  />
                </Grid>
                <Grid item container md={12}>
                  <Grid item xs={12} sm={12} md={4}>
                    <label htmlFor="password">
                      Password:
                      <span className={validPwd ? "valid" : "hide"}>
                        <Check />
                      </span>
                      <span className={validPwd || !pwd ? "hide" : "invalid"}>
                        <Incorrect />
                      </span>
                    </label>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={4}>
                      <p
                        className={
                          pwd && pwdFocus && !validPwd
                            ? "instruction"
                            : "offscreen"
                        }
                      >
                        8 to 24 characters .
                        <br />
                        Must include uppercase and lowercase letters, a number
                        and a special characters.
                        <br />
                        Allowed special characters:
                        <span aria-label="exclamation mark">!</span>
                        <span aria-label="at symbole">@</span>
                        <span aria-label="hashtag">#</span>
                        <span aria-label="percent">%</span>
                        <span aria-label="dollar sign">$</span>
                      </p>
                    </Grid>

                    {/* {password confirmation} */}
                    <Grid item xs={12} sm={12} md={8} alignContent="right">
                      <TextInput
                        type="password"
                        onChange={(e) => setPwd(e.target.value)}
                        required
                        name="password"
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                        value={pwd}
                        label="Enter password"
                      />{" "}
                    </Grid>
                  </Grid>

                  <Grid item xs={12} sm={12} md={4}>
                    <label htmlFor="pasword1">
                      Confirm Password:
                      <span className={matchPwd ? "valid" : "hide"}>
                        <Check />
                      </span>
                      <span
                        className={validMatch || !matchPwd ? "hide" : "invalid"}
                      >
                        <Incorrect />
                      </span>
                    </label>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} sm={12} md={4}>
                      <p
                        className={
                          matchPwd && matchFocus && !validMatch
                            ? "instruction"
                            : "offscreen"
                        }
                      >
                        The password must match
                      </p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8}>
                      <TextInput
                        type="password"
                        onChange={(e) => setMatch(e.target.value)}
                        required
                        name="password1"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                        value={matchPwd}
                        autoComplete="off"
                        label="Repeat password"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <div className="btn-container">
                <Button name="Submit" onClick={registerUser} />
              </div>
            </Box>
          </div>
        </section>
      )}
    </>
  );
}
export default RegisterUser;
