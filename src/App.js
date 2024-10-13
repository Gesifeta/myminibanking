import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";


import "./App.css";
import AuthenticateUser from "./authentication/authenticateUser";
import theme from "./styles/theme";
import Header from "./components/header";
import Home from "./views/landingPage";
import Saving from "./views/products/saving";
import Mortgage from "./views/products/mortgage";
import PersonalLoan from "./views/products/personalLoan";
import Investment from "./views/products/investment";
import RegisterUser from "./views/users/registerUser";
import Customers from "./views/customers/customerList";
import RegisterCustomer from "./views/customers/registerCustomer";
import About from "./views/about";
import Contact from "./views/contact";
import Deposit from "./views/services/depositForm";
import Login from "./views/users/login";
import Footer from "./components/footer";
import Info from "./components/info";
import UserMessage from "./components/userMessage";
import CloseAccount from "./views/services/closeAccount";
import LoanRequest from "./views/services/loanRequest";
import AccountTransfer from "./views/services/accountTransfer";
import AccountSearch from "./views/services/accountSearch";
import BalanceEnquiry from "./views/services/transactionEnquiry";
import OpenAccount from "./views/customers/openAccount";


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/saving" element={<Saving />} />
            <Route path="/product/personalloan" element={<PersonalLoan />} />
            <Route path="/product/mortgage" element={<Mortgage />} />
            <Route path="/product/investment" element={<Investment />} />
            <Route path="/user/registerUser" element={<RegisterUser />} />
            <Route path="/user/login" element={<Login />} />
            {/* protected routes */}
            
            <Route element={<AuthenticateUser />}>
              <Route path="/customer/create" element={<RegisterCustomer />} />
              <Route path="/account/openaccount" element={<OpenAccount />} />
              <Route path="/account/search" element={<AccountSearch />} />
              <Route path="/transaction/enquiry" element={<BalanceEnquiry />} />
              <Route path="/transaction/balance" element={<BalanceEnquiry />} />
              <Route path="/view/usermessage" element={<UserMessage />} />
              <Route
                path="/customer/registerCustomer"
                element={<RegisterCustomer />}
              />
              <Route path="/customer/customerList" element={<Customers />} />
              <Route
                path="/transaction/transfer"
                element={<AccountTransfer />}
              />
              <Route path="/transaction/deposit" element={<Deposit />} />
              <Route
                path="/transaction/closeAccount"
                element={<CloseAccount />}
              />
              <Route path="/transaction/loan" element={<LoanRequest />} />
            </Route>
          </Routes>
        </div>
        <Info />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
