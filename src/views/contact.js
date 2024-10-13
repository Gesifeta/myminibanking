import React, { useState } from "react";
import axios from "axios";

import Grid from "@mui/material/Grid";
import TextInput from "../components/textInput";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

import backgroundImg from "./../assets/headquarters.jpg";
import UserMessage from "../components/userMessage";
import Button from "../components/Button";
import { Box } from "@mui/system";

const useStyle = makeStyles((theme) => ({
  contactContainer: {
    marginLeft: "0.5rem",
    paddingLeft: "0.5rem",
    marginRight: "2rem",
    width: "100%",
    height: "40rem",
    borderRadius: "2px",
    boxShadow: "1px 1px 3px",
  },
  heroContainer: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "60rem",
    marginLeft: "0.5rem",
  },
  inputContainer: {
    width: "95%",
  },
}));
function Contact() {
  const [success,setSuccess]=useState(false)
  const [input, setInput] = useState({
    name: "",
    email: "",
    feedback: "",
  });
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(false);
  const [inputempty, setInputEmpty] = useState(true);

  const classes = useStyle();
  const handleChange = (event) => {
    const { id, value } = event.target;
    setInput((prev) => {
      return { ...prev, [id]: value };
    });
    setInputEmpty(false);
  };
  
  // check whether fields are not empty, and Create feedback and send data to the MongoDB
  // Create feedback and send data to the MongoDB
  const createFeedback = async () => {
    const newFeedback = {
      name: input.name,
      email: input.email,
      feedback: input.feedback,
    };
    if (!inputempty) {
      const feedbackResponse = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/feedback/create`,
        newFeedback
      );

      const { data } = feedbackResponse;
    
      setMessage(data.message);
      if (data.message !== "All fields are required") {
        setSuccess(true);
        setUser(data.newFeedback);
        setInput({
          name: "",
          email: "",
          feedback: "",
        });
      }
    } else {
      setInputEmpty(true);
    }
  };
  return success ? (
    <UserMessage name={user.name} email={user.email} message={message} />
  ) : (
    <Grid container marginTop="1rem" justifyContent="stretch">
      <Grid item container xs={12} md={4} className={classes.contactContainer}>
        <Grid item className={classes.inputContainer}>
          <Typography color="primary" borderBottom="solid" variant="h2">
            Contact us
          </Typography>
          <Typography variant="body2" style={{color:"red", borderBottom:"solid", borderColor:"primary"}}>{message}</Typography>
          <Box component="form" validate>
          <TextInput
            inputEmpty={inputempty}
            label="name"
            id="name"
            value={input.name}
            helperText={!input.name ? `Name is required *` : null}
            onChange={handleChange}
          />
          <TextInput 
            inputEmpty={inputempty}
            label="email"
            id="email"
            type="email"
            value={input.email}
            onChange={handleChange}
            helperText={!input.email ? `email address is required *` : null}
          />
          <TextInput
            label="feedback"
            inputEmpty={inputempty}
            id="feedback"
            value={input.feedback}
            onChange={handleChange}
            helperText={!input.feedback ? `Message box empty *` : null}
          />
          <Button onClick={createFeedback} name="Submit" type="submit"/>
          </Box>
        </Grid>
      
      </Grid>  
      <Grid item xs={12} md={7} className={classes.heroContainer}></Grid>
    </Grid>
  );
}

export default Contact;
