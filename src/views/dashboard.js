import {jwtDecode} from "jwt-decode";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useState, useEffect } from "react";

import { StickyHeadTable } from "../components/table";
import Loader  from "../components/loader";
export const Dashboard = () => {
  const [success,setSuccess]=useState(false)
  const [transaction, setTransaction] = useState("");
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getHours();
  const second = date.getSeconds();

  const userData = localStorage.getItem("accessToken");
  const { userid } = jwtDecode(userData);
  let balance = 0;
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/transaction/${userid}`)
      .then((response) => response.json())
      .then((trans) => {setTransaction(trans)
        setSuccess(true)
      });
  }, [userid]);
  if (transaction.length > 0) {
    balance = transaction
      .map((am) => am.amount)
      .reduce((acc, cur) => acc + cur);
  }

  const columnData = [
    {
      id: "debitaccount",
      label: "Debit Account",
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "_id",
      label: "Transction",
      align: "right",
      format: (value) => value.toUTCString(),
    },

    {
      id: "creditaccount",
      label: "Credit Account",
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "type",
      label: "Transaction Type",
      align: "right",
      format: (value) => value.toUTCString(),
    },
    {
      id: "amount",
      label: "Amount",
      align: "right",
      format: (value) =>
        value.toLocaleString("sv-SE", { style: "currency", currency: "SEK" }),
    },
    {
      id: "updatedAt",
      label: "Date",
      align: "right",
      format: (value) => value.toUTCString(),
    },
  ];

  return !success ? (
    <Loader />
  ) :  (
    <>
      <Grid container spacing={1} direction="column" justifyItems="right" m>
        <Grid
          item
          textAlign={"right"}
          style={{
            boxShadow: "1px 1px 3px rgba(0,0,0,0.6",
            padding: "1rem",
            marginLeft: "auto",
            marginRight: "1rem",
            width: "40%",
          }}
        >
          <Typography variant="h4" color="primary">
            Current Balance
          </Typography>
          <Typography
            variant="h5"
            color="primary"
          >{`As of ${year}-${month}-${day}  ${hour}:${minute}:${second}`}</Typography>
          <Typography variant="h5">
            {balance.toLocaleString("sv-US", {
              style: "currency",
              currency: "SEK",
            })}
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="h4">Latest transactions:</Typography>
      <StickyHeadTable columnData={columnData} tableData={transaction} />
    </>
  ) 
};
export default Dashboard;
