import axios from "axios";
import React, { useState } from "react";
import {jwtDecode} from "jwt-decode";
import Grid from "@mui/material/Grid";

import Button from "../../components/Button";
import TextInput from "../../components/textInput";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import TransactionMessage from "../../components/transactionMessage";


function Deposit() {
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const [input, setInput] = useState({
    creditaccount: "",
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
  const makeDeposit = async (e) => {
    e.preventDefault();
    const userData = localStorage.getItem("accessToken");
    const { userid } = jwtDecode(userData);
    const Deposit = {
      userid: userid,
      creditaccount: input.creditaccount,
      debitaccount: "SEK1000112",
      amount: input.amount,
    };
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
      // Add any other custom headers you need
    };
    const response = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/transaction/deposit`,
      Deposit,{
        headers: headers
      }
    );
    setMessage(response.data.message);
    if (response.data.message === "Successfuly deposited") {
      setMessage(response.data.message);
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  };
  return (
    <>
    {  success ? (
        <TransactionMessage link={`${process.env.REACT_APP_BACKEND_URL}/account/search`} message={message} />
      ):
        <section>
          <Typography variant="h3" color="primary">
            Make Deposit{" "}
          </Typography>
          <FormControl action="#">
            <div className="inputForm">
              <Grid container>
                <Grid item sm={12} md={6}>
                  <label htmlFor="name">Account Number:</label>
                </Grid>
                <Grid item sm={12} md={6}>
                  <TextInput
                    type="text"
                    id="crieditaccount"
                    onChange={changeHandle}
                    name="creditaccount"
                    value={input.creditaccount}
                    autoComplete="off"
                    label="Enter account number "
                  />
                </Grid>
                <Grid item sm={12} md={6}>
                  <label htmlFor="name">Deposit Amount:</label>
                </Grid>
                <Grid item sm={12} md={6}>
                  <TextInput
                    type="text"
                    onChange={changeHandle}
                    name="amount"
                    value={input.amount}
                    autoComplete="off"
                    label="Enter amount to deposit"
                  />
                </Grid>
                <Grid item sm={12} md={12}>
                  <Typography
                    style={{
                      color: success ? "green" : "red",
                      fontFamily: "fantasy",
                      fontWeight: "bold",
                      marginTop: "0.5rem",
                    }}
                  >
                    {message}
                  </Typography>
                </Grid>
                <Grid item sm={12} md={12} justifyItems="center">
                  <Button name="Submit" onClick={makeDeposit} />
                </Grid>
              </Grid>
            </div>
          </FormControl>
        </section>}
    </>
  );
}
export default Deposit;
