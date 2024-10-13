import React, { useState } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import TextInput from "../../components/textInput";
import Button from "../../components/Button";
function LoanRequest() {
  const [input, setInput] = useState({
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
  const transferLoan = async (e) => {
    e.preventDefault();
    const search = {
      account: input.account,
      amount: input.amount,
    };
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
      // Add any other custom headers you need
    };
    await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/customers/deposit/transfer`,
      search,{
        headers: headers
      }
    );
  };

  return (
    <div className="contianer">
      <div className=" transactions fundMovements">
        <Typography variant="h3" color="primary">
          Request Loan
        </Typography>
        <div className="transfer">
          <label htmlFor="amount">Amount</label>
          <TextInput
            type="number"
            name="amount"
            value={input.amount}
            onChange={changeHandle}
          />
          <div></div>
          <Button
            className="btn btn-primary"
            type="submit"
            name="Submit"
            onClick={transferLoan}
            formTarget="#"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LoanRequest;
