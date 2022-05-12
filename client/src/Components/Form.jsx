import React, { useState, Fragment } from "react";
import { CREATE_USER_MUTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);

  const addUser = () => {
    createUser({
      variables: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      },
    });

    if (error) {
      console.log(error);
    }
  };
  return (
    <Fragment>
      <hr/>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          size="small"
          label="First Name"
          variant="outlined"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <TextField
          size="small"
          label="Last Name"
          variant="outlined"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <TextField
          size="small"
          label="Email"
          variant="outlined"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          size="small"
          label="Password"
          variant="outlined"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          variant="contained"
          sx={{ background: "#FE414D" }}
          onClick={addUser}
        >
          Create User
        </Button>
        <br />
      </Box>
      <Typography variant="overline" component="div" align="center" sx={{ color: "#FE414D" }}>
        Create a new entry and sort the table by decending order to see the
        value
      </Typography>
    </Fragment>
  );
}

export default Form;
