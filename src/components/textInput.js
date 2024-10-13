import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const TextInput = (props) => {
  const isMessage = props.label === "feedback";
  const isPassword = props.type === "password";
  const isEmail = props.type === "email";
  // used to create generic text fields including textarea
  return (
    <Box
      sx={{
        "& .MuiTextField-root": {
          width: "100%",
          m: 0.25,
          marginTop: "0.5rem",
          margin: "auto",
        },
      }}
    >
      <TextField
        type={isPassword ? "password" : isEmail ? "email" : props.type}
        name={props.name}
        autoComplete={isPassword ? "current-password" : "off"}
        value={props.value}
        label={props.label}
        id={props.id}
        multiline={isMessage ? true : false}
        rows={isMessage ? "10" : null}
        helperText={props.helperText}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
    </Box>
  );
};
export default TextInput;
