import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import React from "react";

export const DropDown = (props) => {
 
  return (
    <>
      <TextField 
            id={props.id}
            className="Input"
            select
            value={props.gender}
            label={props.label}
            onChange={props.onChange}
            helperText={props.helperText}
          >
            {props.value.map((item) => (
              <MenuItem value={item.value} key={item.value}>
                {item.value}
              </MenuItem>
            ))}
          </TextField>
    </>
  );
};

export default DropDown;
