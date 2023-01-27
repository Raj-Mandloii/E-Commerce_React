import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useDispatch } from "react-redux";
import { register } from "../redux/authReducer/action";
import * as types from "../redux/authReducer/actionTypes";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signupSuccess = () => toast("Signup successful");
  const signupFail = () => toast("Signup failed, Please try again later.");

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSignup = () => {
    if (
      values.firstname &&
      values.lastname &&
      values.mobile &&
      values.email &&
      values.password
    ) {
      dispatch(register(values)).then((r) => {
        if (r.type === types.REGISTER_SUCCESS) {
          signupSuccess();
          navigate("/login", { replace: true });
        } else if (r.type === types.REGISTER_FAILURE) {
          signupFail();
        }
      });
    }
  };
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <div className="d-flex flex-column gap-15">
                <CustomInput
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  onChange={handleChange}
                />
                <CustomInput
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  onChange={handleChange}
                />
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
                <CustomInput
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  onChange={handleChange}
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" onClick={handleSignup}>
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
