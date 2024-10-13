import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import  Typography  from "@mui/material/Typography";

const useStyle = makeStyles((theme) => ({
  infoContainer: {
    backgroundColor: theme.palette.common.darkblue,
    padding:"1rem",
    justifyContent:"space-around",
     marginTop: "12rem",
  
    width: "100%",
    color: "white",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  },
  infoList: {
    listStyleType: "square",
    [theme.breakpoints.down("md")]: {
      listStyleType: "none",
    },
  },
}));

function Info() {
  const classes = useStyle();
  useEffect(() => {
    const nav = document.querySelector(".nav");
    window.addEventListener("scroll", navFix);
    function navFix() {
      if (window.scrollY > nav?.offsetHeight + 150) {
        nav?.classList.add("active");
      } else {
        nav?.classList.remove("active");
      }
    }
  });

  return (
 
      <Grid container direction="row" className={classes.infoContainer}>
        <Grid item xs={12} md={3}>
          <Typography variant="h5" fontWeight={"bold"}>Product and Services</Typography>
          <ul className={classes.infoList}>
            <li>Savings</li>
            <li>Mortgage</li>
            <li>Investment</li>
            <li>Equity Financing</li>
            <li>Salary Payement</li>
          </ul>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h5" fontWeight={"bold"}>Address</Typography>
          <ul className={classes.infoList}>
            <li>XYZ GASGATAN 2B</li>
            <li>312593 , Stockholm</li>
            <li>Sweden</li>
          </ul>
          <h3>Telephone</h3>
          <ul className={classes.infoList}>
            <li>Toll free: +36 xz564876</li>
            <li>+46 xdz764876</li>{" "}
          </ul>
          <h3>Email</h3>
          <ul className={classes.infoList}>
            <li>xyz@notemail.com</li>
            <li> xyz@youremail.com</li>
          </ul>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h5" fontWeight={"bold"}>Branch Office</Typography>
          <ul className={classes.infoList}>
            <li>Malmo</li>
            <li>Lund</li>
            <li>Stockholm</li>
            <li>Kristianstad</li>
            <li>Uppsala</li>
          </ul>
        </Grid>
      </Grid>
   
  );
}

export default Info;
