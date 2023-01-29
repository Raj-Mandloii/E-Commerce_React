import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { login } from "../redux/authReducer/action";
import * as types from "../redux/authReducer/actionTypes";

import { Box } from "@chakra-ui/react";

const Login = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const loginsuccess = () => toast("Login successful");
  // const loginfail = () => toast("Login failed, Please try again later.");

  // const [values, setValues] = useState({
  //   email: "",
  //   password: "",
  // });
  // const handleChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };
  // const handleSignup = () => {
  //   try {
  //     if (values.email && values.password) {
  //       console.log(values);
  //       dispatch(login(values)).then((r) => {
  //         if (r.type === types.LOGIN_SUCCESS) {
  //           loginsuccess();
  //           navigate("/", { replace: true });
  //         } else if (r.type === types.LOGIN_FAILURE) {
  //           console.log("Login is failed, please try again");
  //           loginfail();
  //         }
  //       });
  //     }
  //   } catch (e) {}
  // };
  return (
    <Box>LOGIN</Box>
  );
};

export default Login;
