import { createTheme } from "@mui/material/styles";

const darkBlue = "#3A5BA0";
const lightBlue = "#92B4EC";
const darkYellow = "#FFCC1D";
export default createTheme({
  palette: {
    common: {
      darkblue: `${darkBlue}`,
      lightblue: `${lightBlue}`,
      darkyellow: `${darkYellow}`,
    },
    primary: {
      main: `${darkBlue}`,
    },
    secondary: {
      main: `${darkYellow}`,
    },
  },
  typography: {
    fontWeight: 700,
    fontFamily: "Raleway",
    fontSize: 14,
  },
});
