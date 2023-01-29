import React, { useState } from "react";

import { Link, Navigate, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { register } from "../redux/authReducer/action";
import * as types from "../redux/authReducer/actionTypes";

import { Box } from "@chakra-ui/react";

const Signup = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const signupSuccess = () => toast("Signup successful");
  // const signupFail = () => toast("Signup failed, Please try again later.");

  // const [values, setValues] = useState({
  //   firstname: "",
  //   lastname: "",
  //   mobile: "",
  //   email: "",
  //   password: "",
  // });
  // const handleChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };
  // const handleSignup = () => {
  //   if (
  //     values.firstname &&
  //     values.lastname &&
  //     values.mobile &&
  //     values.email &&
  //     values.password
  //   ) {
  //     dispatch(register(values)).then((r) => {
  //       if (r.type === types.REGISTER_SUCCESS) {
  //         signupSuccess();
  //         navigate("/login", { replace: true });
  //       } else if (r.type === types.REGISTER_FAILURE) {
  //         signupFail();
  //       }
  //     });
  //   }
  // };
  return (
   <Box>SIGNUP</Box>
  );
};

export default Signup;
