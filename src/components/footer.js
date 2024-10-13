import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedinIcon from "@mui/icons-material/LinkedIn";

function Footer() {
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
  const themes = useTheme();
  const matches = useMediaQuery(themes.breakpoints.down("md"));
  const socialIconsOnly = (
    <div className="footer">
      <Link to="">
        <FacebookIcon className="icons" color="secondary" />
      </Link>
      <Link to="">
        <TwitterIcon className="icons" color="secondary" />
      </Link>
      <Link to="">
        <InstagramIcon className="icons" color="secondary" />
      </Link>
      <Link to="">
        <LinkedinIcon className="icons" color="secondary" />
      </Link>
    </div>
  );
  const socialWithIcons = (
    <div className="footer">
      <div className="copyright">&copy; Gemechu Gesifeta, 2022</div>

      <Link to="">
        <FacebookIcon className="icons" color="secondary" /> Facebook
      </Link>
      <Link to="">
        <TwitterIcon className="icons" color="secondary" /> Twitter
      </Link>
      <Link to="">
        <InstagramIcon className="icons" color="secondary" />
        Instagram
      </Link>
      <Link to="">
        <LinkedinIcon className="icons" color="secondary" /> LinkedIn
      </Link>
    </div>
  );

  return <>{matches ? socialIconsOnly : socialWithIcons}</>;
}

export default Footer;
