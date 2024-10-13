import axios from "axios";
import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "../../components/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import TransactionMessage from "../../components/transactionMessage";
import {jwtDecode} from "jwt-decode";
import TextField from "@mui/material/TextField";


export const OpenAccount = () => {
  const userLoggedIn = localStorage.getItem("accessToken");
  const { firstName, lastName, userid } = jwtDecode(userLoggedIn);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    type: "",
    account: "",
    amount: "",
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
  const openAccount = async (e) => {
    e.preventDefault();

    const newAccount = {
      userid: userid,
      firstName: firstName,
      lastName: lastName,
      account: input.account,
      type: input.type,
      amount: input.amount,
    };
    if (input) {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
        // Add any other custom headers you need
      };
      const responseData = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/account/create`, newAccount,{
        headers: headers
      });
      setMessage(responseData.data.message);
      if (responseData.data.message === "Successfuly opened") {
        setSuccess(true);
        setMessage(responseData.data.message);
        setInput("");
      } else {
        setSuccess(false);
      }
    }
  };

  return success ? (
    <TransactionMessage
      message={message}
      link={`${process.env.REACT_APP_BACKEND_URL}/views/services/accountSearch`}
    />
  ) : (
    <section>
      <Typography variant="h3" color="primary">
        New account
      </Typography>

      <p className={success ? "successMessage" : "failureMessage"}>{message}</p>
      <div className="registerUser">
        <Box component="form" action="#">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4}>
              <label htmlFor="firstName">First Name:</label>
            </Grid>

            <Grid item xs={12} sm={12} md={8}>
              <TextField
                fullWidth
                disabled
                type="text"
                onChange={changeHandle}
                name="firstName"
                value={firstName}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <label htmlFor="lastName">Last Name:</label>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <TextField
                fullWidth
                disabled
                type="text"
                onChange={changeHandle}
                name="lastName"
                value={lastName}
                required
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <label htmlFor="account">Account:</label>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <Select
                fullWidth
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="account"
                value={input.account}
                label="Select"
                onChange={changeHandle}
              >
                <MenuItem value="1000071">1000071</MenuItem>
                <MenuItem value="1000072">1000072</MenuItem>
                <MenuItem value="1000073">1000073</MenuItem>
                <MenuItem value="1000074">1000074</MenuItem>
                <MenuItem value="1000075">1000075</MenuItem>
                <MenuItem value="1000076">1000076</MenuItem>
                <MenuItem value="1000077">1000077</MenuItem>
                <MenuItem value="1000078">1000078</MenuItem>
                <MenuItem value="1000079">1000079</MenuItem>
                <MenuItem value="1000080">1000080</MenuItem>
                <MenuItem value="1000075">1000081</MenuItem>
                <MenuItem value="1000076">1000082</MenuItem>
                <MenuItem value="1000077">1000083</MenuItem>
                <MenuItem value="1000078">1000084</MenuItem>
                <MenuItem value="1000079">1000085</MenuItem>
                <MenuItem value="1000080">1000086</MenuItem>
                <MenuItem value="1000081">1000081</MenuItem>
                <MenuItem value="1000082">1000082</MenuItem>
                <MenuItem value="1000083">1000083</MenuItem>
                <MenuItem value="1000084">1000084</MenuItem>
                <MenuItem value="1000085">1000085</MenuItem>
                <MenuItem value="1000086">1000086</MenuItem>
                <MenuItem value="1000087">1000087</MenuItem>
                <MenuItem value="1000088">1000088</MenuItem>
                <MenuItem value="1000089">1000089</MenuItem>
                <MenuItem value="1000090">1000090</MenuItem>
                <MenuItem value="1000075">1000081</MenuItem>
                <MenuItem value="1000076">1000082</MenuItem>
                <MenuItem value="1000077">1000083</MenuItem>
                <MenuItem value="1000078">1000084</MenuItem>
                <MenuItem value="1000079">1000085</MenuItem>
                <MenuItem value="1000080">1000086</MenuItem>
                <MenuItem value="1000061">1000061</MenuItem>
                <MenuItem value="1000062">1000062</MenuItem>
                <MenuItem value="1000063">1000063</MenuItem>
                <MenuItem value="1000064">1000064</MenuItem>
                <MenuItem value="1000065">1000065</MenuItem>
                <MenuItem value="1000066">1000066</MenuItem>
                <MenuItem value="1000067">1000067</MenuItem>
                <MenuItem value="1000068">1000068</MenuItem>
                <MenuItem value="1000069">1000069</MenuItem>
                <MenuItem value="1000080">1000080</MenuItem>
                <MenuItem value="1000075">1000081</MenuItem>
                <MenuItem value="1000076">1000082</MenuItem>
                <MenuItem value="1000077">1000083</MenuItem>
                <MenuItem value="1000078">1000084</MenuItem>
                <MenuItem value="1000079">1000085</MenuItem>
                <MenuItem value="1000086">1000086</MenuItem>
                <MenuItem value="1000091">1000091</MenuItem>
                <MenuItem value="1000092">1000092</MenuItem>
                <MenuItem value="1000093">1000093</MenuItem>
                <MenuItem value="1000094">1000094</MenuItem>
                <MenuItem value="1000095">1000095</MenuItem>
                <MenuItem value="1000096">1000096</MenuItem>
                <MenuItem value="1000097">1000097</MenuItem>
                <MenuItem value="1000098">1000098</MenuItem>
                <MenuItem value="1000099">1000099</MenuItem>
                <MenuItem value="1000028">1000028</MenuItem>
                <MenuItem value="1000075">1000081</MenuItem>
                <MenuItem value="1000079">1000082</MenuItem>
                <MenuItem value="1000077">1000083</MenuItem>
                <MenuItem value="1000078">1000084</MenuItem>
                <MenuItem value="1000079">1000085</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <label htmlFor="account">Account Type:</label>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <Select
                fullWidth
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="type"
                value={input.type}
                label="Select"
                onChange={changeHandle}
              >
                <MenuItem value={"Saving"}>Saving</MenuItem>
                <MenuItem value={"Checking"}>Checking</MenuItem>
                <MenuItem value={"Checking"}>Fixed Time</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <label htmlFor="amount">Initial Deposit:</label>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <TextField
                fullWidth
                type="number"
                onChange={changeHandle}
                name="amount"
                value={input.amount}
                required
              />
            </Grid>
          </Grid>
          <div className="btn-container">
            <Button name="Submit" onClick={openAccount} />
          </div>
        </Box>
      </div>
    </section>
  );
};
export default OpenAccount;
