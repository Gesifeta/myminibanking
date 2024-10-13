import axios from "axios";
import { Formik, Field, Form, FieldArray } from "formik";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import TransactionMessage from "../../components/transactionMessage";

const initial = {
  firstName: "",
  lastName: "",
  gender: "",
  DoB: "",
  telephone: "",
  address: { street: "", city: "", country: "" },
  products: [""],
};
export const Createcustomer = () => {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  return success ? (
    <TransactionMessage message={message} />
  ) : (
    <Formik
      initialValues={initial}
      onSubmit={async (values) => {
        if (
          values.firstName === "" ||
          values.lastName === "" ||
          values.gender === "" ||
          values.DoB === "" ||
          values.telephone === "" ||
          values.address.street === "" ||
          values.address.city === "" ||
          values.address.country === ""
        ) { 
           alert("Customer information required");
        }
        else{
          const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
            // Add any other custom headers you need
          };
          const customerResponse = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/customer/register`,
            values,{
              headers: headers,
            }
          );
          values.firstName = "" 
          values.lastName = "" 
          values.gender = "" 
          values.DoB = "" 
          values.telephone = "" 
          values.address.street = "" 
          values.address.city = "" 
          values.address.country = ""
  setSuccess(true)
            setMessage(customerResponse.data.message);
        
        }
      }}
    >
      {({ values }) => (
        <Form className="registrationForm">
          <Grid container spacing={1}>
            <Grid item container direction={"column"} xs={12} sm={12} md={12}>
              <Typography variant="h5" color="primary">
                Personal Information
              </Typography>
              <Typography variant="h5" color="red">
                {message}
              </Typography>
            </Grid>
            <Grid item container xs={12} sm={12} md={4}>
              <label htmlFor="firstName">First Name </label>
            </Grid>
            <Grid item container xs={12} sm={12} md={8}>
              <Field
                className="Input"
                type="text"
                name={"firstName"}
                autoComplete="off"
                placeholder="Enter First Name"
              />
            </Grid>
            <Grid item container xs={12} sm={12} md={4}>
              <label htmlFor="lastName">Last Name </label>
            </Grid>
            <Grid item container xs={12} sm={12} md={8}>
              <Field
                className="Input"
                type="text"
                name={"lastName"}
                autoComplete="off"
                placeholder="Enter Last Name"
              />
            </Grid>
            <Grid item container xs={12} sm={12} md={4}>
              <label htmlFor="gender">Gender </label>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <Field className="Input" as="select" name={"gender"}>
                <option> none</option>
                <option> Female</option>
                <option> Male</option>
                <option> Other</option>
              </Field>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <label htmlFor="DoB">Date of Birth </label>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <Field className="Input" type="date" name={"DoB"} />
            </Grid>
            <Grid item container xs={12} sm={12} md={4}>
              <label htmlFor="telephone">Telephone Number</label>
            </Grid>
            <Grid item container xs={12} sm={12} md={8}>
              <Field
                className="Input"
                type="text"
                name={"telephone"}
                autoComplete="off"
                placeholder="Enter Mobile Number"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography variant="h5" color="primary">
                Address
              </Typography>
            </Grid>

            {Object.entries(values.address).map(([key]) => (
              <Grid container key={key} item xs={12} sm={12} md={12}>
                <Grid item xs={12} sm={12} md={4}>
                  <label htmlFor="street">{`${key} :`}</label>
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                  <Field
                    className="Input"
                    name={`address.${key}`}
                    placeholder={` enter ${key}`}
                  />
                </Grid>
              </Grid>
            ))}
            <FieldArray name="products">
              {({ push, remove }) => (
                <Grid item xs={12} sm={12} md={12}>
                  <Typography variant="h5" color="primary">
                    Product
                  </Typography>

                  {values.products.map((fr, index) => (
                    <Grid item key={index} container xs={12} sm={12} md={12}>
                      <Grid item xs={12} sm={12} md={4}>
                        <label htmlFor="street">Type</label>
                      </Grid>
                      <Grid item xs={4} sm={4} md={6}>
                        <Field
                          className="Input"
                          as="select"
                          name={`products.${index}`}
                        >
                          <option value={"Saving"}>Saving</option>
                          <option value={"Mortgage"}>Mortgage</option>
                          <option value={"Investment"}>Investment</option>
                        </Field>
                      </Grid>
                      <Grid
                        item
                        container
                        xs={2}
                        sm={2}
                        md={1}
                        alignItems="left"
                      >
                        <button type="button" onClick={() => push("")}>
                          +
                        </button>
                        <button type="button" onClick={() => remove(index)}>
                          -
                        </button>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              )}
            </FieldArray>
          </Grid>
          <Grid item textAlign={"center"}>
            <button type="subimt">Submit</button>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default Createcustomer;
