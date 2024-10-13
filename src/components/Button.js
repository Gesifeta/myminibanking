import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";

const useStyle = makeStyles((theme) => ({
  button: {
    ...theme.typography,

    minWidth: "70%",
    height: "3rem",
    marginTop: "1rem",
    textTransform: "none",
    "&:hover": {
      opacity: 0.6,
    },
  },
}));

const SubmittButton = (props) => {
  const classes = useStyle();
  return (
    <Button
      className={classes.button}
      variant="contained"
      onClick={props.onClick}
    >
      {props.name}
    </Button>
  );
};

export default SubmittButton;
