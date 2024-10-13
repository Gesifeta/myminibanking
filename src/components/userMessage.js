import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinkButton from "./linkButton";
export const UserMessage=(props)=> {
  return (
    <Box style={{ width: "60%", margin: "auto" }}>
      <Typography
        variant="h3" color="primary"
        style={{ borderBottom: "solid",  margin: "2rem" }}
      >
        {`Thank you ${props.name}!`}
      </Typography>
      <Typography variant="h4">
        {`${props.message}, and we have registered your feedback with  email address: ${props.email}.`}
      </Typography>
      <LinkButton link="/view/dashboard" name="Back" />
    </Box>
  );
}

export default UserMessage;
