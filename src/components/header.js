import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import "../styles/nav.css";
const Header = (props) => {
  const loggedInUser = localStorage?.getItem("accessToken");
  const user = loggedInUser && jwtDecode(loggedInUser);

  const useStyle = makeStyles((theme) => ({
    appBar: {
      zIndex: theme.zIndex.modal + 1,
    },
    miniBank: {
      padding: "1.5rem",
      backgroundColor: theme.palette.common.lightblue,
    },
    toolbarMargin: {
      ...theme.mixins.toolbar,
    },
    tabContainer: {
      marginLeft: "auto",
      textAlign: "right",
      color: "white",
    },
    tab: {
      textTransform: "none",
      ...theme.typography,
      marginLeft: "25px",
      color: "white",
    },
    menu: {
      backgroundColor: theme.palette.common.darkblue,
      color: "white",
      zIndex: 1303,
      marginTop: ".70rem",
      borderRadius: "0",
      "&:hover": {
        color: "white",
        backgroundColor: "secondary",
      },
    },
    menuList: {
      "&:hover": {
        color: "black",
        backgroundColor: "#FFCC1D",
      },
    },
    menuIcon: {
      color: "white",
      width: "40px",
      height: "50px",
    },
    loginButton: {
      marginRight: "1rem",
      textTransform: "none",
      "&:hover": {
        fontWeight: "bold",
      },
    },
    loginContainer: {
      marginLeft: "1em",
      display: user?.userid ? "none" : null,
      [theme.breakpoints.down("md")]: {
        marginLeft: "auto",
      },
    },
    drawer: {
      ...theme.mixins.toolbar,
      width: "30%",
      backgroundColor: theme.palette.common.darkblue,
    },
    drawerText: {
      ...theme.typography.tab,
      color: "white",
      "&:hover": {
        color: "black",
        fontWeight: "bolder",
      },
    },
    drawerItem: {
      "&:hover": {
        backgroundColor: theme.palette.common.darkyellow,
        color: "black",
      },
    },
  }));

  // sets indicator for the sellected tab
  const [value, setValue] = useState(0);
  // sets where menu tab should be displayed
  const [anchorElProduct, setAnchorElProduct] = useState(null);
  const [anchorElOperation, setAnchorElOperation] = useState(null);
  const [anchorElService, setAnchorElService] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const openServiceMenu = Boolean(anchorElService);
  const openProductMenu = Boolean(anchorElProduct);
  const openOperationMenu = Boolean(anchorElOperation);

  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const classes = useStyle();
  const themes = useTheme(); // used to access theme from MUI default themes
  const screenSizeMatches = useMediaQuery(themes.breakpoints.down("md"));
  const handleChange = (event, value) => {
    setValue(value);
  };
  const handleClickProduct = (event) => {
    setAnchorElProduct(event.currentTarget);
    setAnchorElService(null);
    setAnchorElOperation(null);
  };
  const handleClickService = (event) => {
    setAnchorElService(event.currentTarget);
    setAnchorElProduct(null);
    setAnchorElOperation(null);
  };
  const handleClickOperation = (event) => {
    setAnchorElOperation(event.currentTarget);
    setAnchorElProduct(null);
    setAnchorElService(null);
  };
  const handleClose = () => {
    setAnchorElProduct(null);
    setAnchorElService(null);
    setAnchorElOperation(null);
  };
  const logoutHandle = () => {
    localStorage.removeItem("accessToken");
    window.reload();
  };
  // Keep track of tab selected on refresh.
  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/products" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/services" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/operations" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/about" && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === "/contact" && value !== 5) {
      setValue(5);
    }
  }, [value]);
  useEffect(() => {
    const mainNav = document.querySelector(".mainNav");
    const navToggle = document.getElementsByClassName("toggle-btn")[0];
    const navLink = document.getElementsByClassName("navbar-links")[0];
    navToggle?.addEventListener("click", () => {
      navLink.classList.toggle("active");
    });
    const loginNav = document.querySelector(".loginNav");
    window.addEventListener("scroll", navFix);
    function navFix() {
      if (window.scrollY > mainNav?.offsetHeight + 150) {
        mainNav?.classList.add("active");

        loginNav?.classList.add("inactive");
      } else {
        mainNav?.classList.remove("active");
        loginNav?.classList.remove("inactive");
      }
    }
  });
  const tab = (
    <>
      <Grid>
        <Grid item md={12}>
          <span className="miniLogo">Mini</span>
          <span className="bankLogo">BANK</span>
        </Grid>
      </Grid>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab
          onMouseOver={handleClose}
          className={classes.tab}
          component={Link}
          to="/"
          label="Home"
        />
        <Tab
          id="product-tab"
          aria-controls={anchorElProduct ? "product-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openProductMenu ? "true" : undefined}
          onMouseOver={handleClickProduct}
          className={classes.tab}
          component={Link}
          to="/"
          label="Products "
        />
        <Tab
          id="service-tab"
          aria-controls={anchorElService ? "service-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openServiceMenu ? "true" : undefined}
          onMouseOver={handleClickService}
          className={classes.tab}
          component={Link}
          to="/"
          label="Services "
        />
        <Tab
          id="operation-tab"
          aria-controls={anchorElOperation ? "operation-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openOperationMenu ? "true" : undefined}
          onMouseOver={handleClickOperation}
          className={classes.tab}
          component={Link}
          to="/"
          label="Operations "
        />
        <Tab
          className={classes.tab}
          onMouseOver={handleClose}
          component={Link}
          to="/about"
          label="About us "
        />
        <Tab
          className={classes.tab}
          onMouseOver={handleClose}
          component={Link}
          to="/contact"
          label="Contact us "
        />
      </Tabs>
    </>
  );
  const drawer = (
    <>
      <SwipeableDrawer
        anchor="right"
        classes={{ paper: classes.drawer }}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <div className={classes.toolbarMargin} />

        <List disablePadding>
          <ListItem
            className={classes.drawerItem}
            divider
            button
            component={Link}
            to="/"
          >
            <ListItemText
              onClick={() => setOpenDrawer(!openDrawer)}
              className={classes.drawerText}
            >
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.drawerItem}
            onMouseLeave={handleClose}
            divider
            button
            component={Link}
            to="/product"
          >
            <ListItemText
              onClick={() => setOpenDrawer(!openDrawer)}
              className={classes.drawerText}
            >
              Products
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setOpenDrawer(!openDrawer)}
            className={classes.drawerItem}
            divider
            button
            component={Link}
            to="/"
          >
            <ListItemText className={classes.drawerText}>Services</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setOpenDrawer(!openDrawer)}
            className={classes.drawerItem}
            divider
            button
            component={Link}
            to="/customer/customerDashboard"
          >
            <ListItemText className={classes.drawerText}>
              Operations
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setOpenDrawer(!openDrawer)}
            className={classes.drawerItem}
            divider
            button
            component={Link}
            to="/about"
          >
            <ListItemText
              onClick={() => setOpenDrawer(!openDrawer)}
              className={classes.drawerText}
            >
              About us
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setOpenDrawer(!openDrawer)}
            className={classes.drawerItem}
            divider
            button
            component={Link}
            to="/contact"
          >
            <ListItemText
              onClick={() => setOpenDrawer(!openDrawer)}
              className={classes.drawerText}
            >
              Contact us
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon className={classes.menuIcon} />
      </IconButton>
    </>
  );
  const Login = (
    <Stack direction="row" className={classes.loginContainer}>
      <Button
        className={classes.loginButton}
        variant="contained"
        color="secondary"
        component={Link}
        to="/user/login"
      >
        Login
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.loginButton}
        component={Link}
        to="/user/registerUser"
      >
        Register
      </Button>
    </Stack>
  );
  const Logout = (
    <Stack direction="row">
      <Button
        className={classes.loginButton}
        variant="contained"
        onClick={logoutHandle}
        color="secondary"
        component={Link}
        to="/"
      >
        logout
      </Button>
    </Stack>
  );

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar disableGutters>
          {screenSizeMatches ? drawer : tab}
          {user ? Logout : Login}
        </Toolbar>
        <Menu
          classes={{ paper: classes.menu }}
          id="service-menu"
          anchorEl={anchorElService}
          open={openServiceMenu}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "service-tab",
          }}
        >
          <MenuItem
            disabled
            className={classes.menuList}
            onClick={handleClose}
            component={Link}
            to="/customer/create"
          >
            Add New Customer
          </MenuItem>
          <MenuItem
            disabled={
              user?.email === "guest@guest.com" ? true : user ? false : true
            }
            className={classes.menuList}
            onClick={handleClose}
            component={Link}
            to="/account/openaccount"
          >
            Open New Account
          </MenuItem>
          <MenuItem
            disabled={
              user?.email === "guest@gmail.com" ? true : user ? false : true
            }
            className={classes.menuList}
            onClick={handleClose}
            component={Link}
            to="/transaction/deposit"
          >
            Deposit
          </MenuItem>
          <MenuItem
            disabled
            className={classes.menuList}
            onClick={handleClose}
            component={Link}
            to="/transaction/loan"
          >
            Request Loan
          </MenuItem>
          <MenuItem
            disabled={
              user?.email === "guest@gmail.com" ? true : user ? false : true
            }
            className={classes.menuList}
            onClick={handleClose}
            component={Link}
            to="/transaction/transfer"
          >
            Transfer
          </MenuItem>
        </Menu>
        <Menu
          id="product-menu"
          classes={{ paper: classes.menu }}
          anchorEl={anchorElProduct}
          open={openProductMenu}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "product-tab",
          }}
        >
          <MenuItem
            disabled
            className={classes.menuList}
            onClick={handleClose}
            component={Link}
            to="/product/saving"
          >
            Saving
          </MenuItem>
          <MenuItem
            disabled
            className={classes.menuList}
            onClick={handleClose}
            component={Link}
            to="/product/personalloan"
          >
            Personal Loan
          </MenuItem>
          <MenuItem
            disabled
            className={classes.menuList}
            onClick={handleClose}
            component={Link}
            to="/product/mortgage"
          >
            Mortgage
          </MenuItem>
          <MenuItem
            disabled
            className={classes.menuList}
            onClick={handleClose}
            component={Link}
            to="/product/investment"
          >
            Investment
          </MenuItem>
        </Menu>

        <Menu
          id="operation-menu"
          classes={{ paper: classes.menu }}
          anchorEl={anchorElOperation}
          open={openOperationMenu}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "operation-tab",
          }}
        >
          <MenuItem
            className={classes.menuList}
            onClick={handleClose}
            component={Link}
            to="/account/search"
          >
            Search Accounts
          </MenuItem>

          <MenuItem
            className={classes.menuList}
            onClick={handleClose}
            component={Link}
            to="/transaction/enquiry"
          >
            Search Transaction
          </MenuItem>
          <MenuItem
            className={classes.menuList}
            onClick={handleClose}
            component={Link}
            to="/user/registerUser"
          >
            Add New User
          </MenuItem>
          <MenuItem
            disabled
            className={classes.menuList}
            onClick={handleClose}
            component={Link}
            to="/user/enquiry"
          >
            Find user
          </MenuItem>

          <MenuItem
            disabled
            className={classes.menuList}
            onClick={handleClose}
            component={Link}
            to="/user/delete"
          >
            Delete user
          </MenuItem>
        </Menu>
      </AppBar>
      <div className={classes.toolbarMargin}></div>
    </>
  );
};

export default Header;
