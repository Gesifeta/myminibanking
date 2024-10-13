import React, { useState } from "react";
import {jwtDecode} from "jwt-decode";
import axios from "axios";
import Grid from "@mui/material/Grid";

import TextInput from "../../components/textInput";
import Button from "../../components/Button";
import TransactionMessage from "../../components/transactionMessage";
import Typography from "@mui/material/Typography";

export const AccountTransfer = () => {
  const [success, setSuccess] = useState(false);
  const [input, setInput] = useState({
    debitaccount: "",
    creditaccount: "",
    amount: "",
  });
  const [messageTransfer, setMessageTransfer] = useState("");
  const changeHandle = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };
  const transferAmount = async (e) => {
    e.preventDefault();
    const userLoggedIn = localStorage.getItem("accessToken");
    const { firstName, lastName, userid } = jwtDecode(userLoggedIn);
    const transfer = {
      userid: userid, // to identify who made the transaction
      firstName: firstName,
      lastName: lastName,
      debitaccount: input.debitaccount,
      creditaccount: input.creditaccount,
      amount: input.amount,
    };
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
      // Add any other custom headers you need
    };
    const responseMessage = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/transaction/transfer`,
      transfer,{
        headers: headers
      }
    );

    setMessageTransfer(responseMessage.data.message);
    if (responseMessage.data.message === "successfuly transfered") {
      setMessageTransfer(responseMessage.data.message);
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  };
  return success ? (
    <TransactionMessage link={`${process.env.REACT_APP_BACKEND_URL}/transaction/enquiry `}message={messageTransfer} />
  ) : (
    <>
      <Typography variant="h4" color="primary">
        Transfer Money
        <div style={{ color: "red", textDecoration: "underline" }}>
          {`${messageTransfer}`}
        </div>
      </Typography>
      <div className="inputForm">
        <Grid container>
          <Grid item sm={12} md={4}>
            <label htmlFor="debitaccount">Your Account Number: </label>
          </Grid>
          <Grid item sm={12} md={6}>
            <TextInput
              onChange={changeHandle}
              type="text"
              name="debitaccount"
              label="Enter your account"
              autoComplete="off"
              value={input.debitaccount}
            />
          </Grid>

          <Grid item sm={12} md={4}>
            <label htmlFor="creditaccount">Reciever's Account Number: </label>
          </Grid>
          <Grid item sm={12} md={6}>
            <TextInput
              onChange={changeHandle}
              type="text"
              name="creditaccount"
              autoComplete="off"
              label="Enter reciever's account"
              value={input.creditaccount}
            />
          </Grid>

          <Grid item sm={12} md={4}>
            <label htmlFor="amount">Amount to Transfer</label>
          </Grid>
          <Grid item sm={12} md={6}>
            <TextInput
              type="number"
              value={input.amount}
              name="amount"
              label="Enter amount to transfer"
              onChange={changeHandle}
            />
          </Grid>
          <Grid item sm={6} md={6}></Grid>
          <Grid item sm={6} md={6}>
            <Button
              className="btn btn-secondary"
              type="submit"
              name="Confirm"
              onClick={transferAmount}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default AccountTransfer;
