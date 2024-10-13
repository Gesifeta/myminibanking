import {jwtDecode} from "jwt-decode";
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { StickyHeadTable } from "../../components/table";
import TextInput from "../../components/textInput";

export const AccountSearch = () => {
  const userData = localStorage.getItem("accessToken");
  const { userid } = jwtDecode(userData);
  const [account, setAccount] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [tableData, setTableData] = useState("");

  const changeHandle = (event) => {
    const keyword = event.target.value;
    const filtered = account?.filter(
      (item) => item.account.indexOf(keyword) !== -1
    );
    setTableData(filtered);
    if (filtered.length === 0) {
      setUserMessage("Account not found, Try another account");
    } else {
      setUserMessage("");
    }
  };
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
    // Add any other custom headers you need
  };
  useEffect(() => {
fetch(`${process.env.REACT_APP_BACKEND_URL}/account/${userid}`,{
  method: "GET",
  headers: headers
})
      .then((response) => response.json())
      .then((acc) => setAccount(acc));
  }, [userid]);

  const columnData = [
    {
      id: "account",
      label: "Account",
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "userid",
      label: "User ID",
      align: "right",
      format: (value) => value.toUTCString(),
    },
    {
      id: "type",
      label: "Account Type",
      align: "right",
      format: (value) => value.toUTCString(),
    },
    {
      id: "balance",
      label: "Balance",

      align: "right",
      format: (value) =>
        value.toLocaleString("sv-SE", { style: "currency", currency: "SEK" }),
    },
    {
      id: "interest",
      label: "Interest",

      align: "right",
      format: (value) =>
        value.toLocaleString("sv-SE", { style: "currency", currency: "SEK" }),
    },
    {
      id: "updatedAt",
      label: "Last Activity Date",
      align: "right",
      format: (value) => value.toUTCString(),
    },
  ];
  return (
    <>
      <Box
        sx={{
          padding: "1rem",
          margin: "1rem",
          boxShadow: `1px 1px 3px rgba(0,0,0,0.6)`,
        }}
      >
        <div className="hint">
          <Typography variant="body1" color="red">
            You can open your accounts, by clicking on Services. All account
            Number starts with 10000:
          </Typography>
          <ul style={{ listStyle: "none" }}>
            <li>[ example1:1000072 ]</li>
            <li>[ example2: 100001 ]</li>
          </ul>
        </div>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={6}>
            <TextInput
              id="search"
              name="search"
              onChange={changeHandle}
              type="number"
              label="Start typing the account number here ......."
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography color="red"> {userMessage}</Typography>
          </Grid>
        </Grid>
      </Box>

      <StickyHeadTable columnData={columnData} tableData={tableData} />
    </>
  );
};
export default AccountSearch;
