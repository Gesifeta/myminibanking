import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinkButton from "./linkButton";
export const TransactionMessage = (props) => {
  return (
    <Box style={{ width: "60%", margin: "auto" }}>
      <Typography
        variant="h3"
        color="primary"
        style={{ borderBottom: "solid", margin: "2rem" }}
      >
        {`Thank you!`}
      </Typography>
      <Typography variant="h4">{`${props.message}`}</Typography>
      <LinkButton link={props.link} name="OK" />
    </Box>
  );
};

export default TransactionMessage;
