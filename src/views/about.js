import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";


const useStyle = makeStyles((theme) => ({
  headquarters: {
       paddingLeft: "2rem",
    [theme.breakpoints.down("md")]:{
      marginLeft:0,
      paddingLeft:0
    }
  },
}));

const About = () => {
  const classes = useStyle();

  return (
    <>
      <Grid container className="about">
        <Grid item container xs={12} md={6} color="primary">
          <Grid item xs={12}>
            <Typography variant="h4">Our Mission</Typography>
            <Typography variant="body1">
              The Components Of A Great About Us Page You don’t need to outright
              say, “our mission is ____,” but you should convey the mission of
              your business in your About Us copy. This is key for attracting
              talent, as well as leads that have Corporate Social Responsibility
              (CSR) goals. There isn’t a winning template to create a great
              About Us page. However, there are key components to make a
              convincing pitch with your brand story.{" "}
            </Typography>
          </Grid>

                    <Grid item xs={12}>
            <Typography variant="h4">Services And Benefits</Typography>
            <Typography variant="body1">
              Of course, you have a homepage and dedicated pages for your
              products, but summarizing your offerings on the About Us page is
              crucial to tie them in with brand values in your messaging.
              Highlight the benefits and showcase what you do and why it is
              unique.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4">Our Social Value</Typography>
            <Typography variant="body1">
              Reviews, client logos, case studies, and results bring consistency
              to your About Us page. It’s what really proves what you are saying
              is real and the impact you can bring to future clients. With these
              components in mind, you will have a framework from which to build
              an engaging and unique{" "}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} className={classes.headquarters}>
          <div className="headquarters"><Grid item xs={6}>
            <Typography variant="h4">History</Typography>
            <Typography variant="body1">
              Every business has an origin story worth telling, and usually, one
              that justifies why you even do business and have clients. Some
              centennial enterprises have pages of content that can fit in this
              section, while startups can tell the story of how the company was
              born, its challenges, and its vision for the future.
            </Typography>
          </Grid> </div>
        </Grid>
      </Grid>
    </>
  );
};
export default About;
