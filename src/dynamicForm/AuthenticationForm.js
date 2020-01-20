import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Form from "../../UI/Form/Form";
import {
  registerUser,
  signInUser
} from "../../store/config/redux-token-auth-config";

const AuthenticationForm = props => {
  const [formData, setFormData] = useState({});
  const action = data => {
    switch (props.action) {
      case "register":
        return props.registerUser(data);
      case "login":
        return props.signInUser(data);
      default:
        console.log("Something went wrong");
    }
  };
  const onSubmit = e => {
    e.preventDefault();
    action(formData)
      .then(() => {
        props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Form
      onSubmit={onSubmit}
      formTitle={props.formTitle}
      setFormData={setFormData}
      formStructure={props.formStructure}
      formData={formData}
      buttonText={props.buttonText}
    />
  );
};

export default connect(
  null,
  { registerUser, signInUser }
)(withRouter(AuthenticationForm));
