import React, { useState } from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

import Loader from "../../components/loader";

function CloseAccount() {
  const [success,setSuccess]=useState(false)
  const [input, setInput] = useState({
    account: "",
    password: "",
  });

    const [messageDelete, setMessageDelete] = useState("");
  const changeHandle = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };
  const userLoggedIn = localStorage.getItem("accessToken");
  const { email } = jwtDecode(userLoggedIn);
  const deleteAccount = async (e) => {
    e.preventDefault();
      const search = {
      account: input.account,
      password: input.password,
      email: email,
    };
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
      // Add any other custom headers you need
    };
    const responseMessage = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/customers/account/deleteAccount`,
      search,{
        headers: headers
      }
    ).then(()=>setSuccess(true));
 setMessageDelete(responseMessage.data.message);
   
  };

  return success ? (
    <Loader />
  ) :  (
    <div className="contianer"> 
    <h3>
          Close Your Account:
          <span style={{ color: "red", textDecoration: "underline" }}>{messageDelete}
         </span>
        </h3>
      <div className=" transactions fundMovements">
       

        <h3>Close your accout</h3>
        <form>
        <div className="transfer">
          
          <label htmlFor="account">Account Number</label>
          <input
            type="text"
            name="account"
            autoComplete="off"
            value={input.account}
            onChange={changeHandle}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            autoComplete="off"
            value={input.password}
            onChange={changeHandle}
          />
          <div></div>
          <button
            className="btn btn-danger"
            type="submit"
            onClick={deleteAccount}
            formTarget="#"
          >
            Confirm and Close
          </button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default CloseAccount;
