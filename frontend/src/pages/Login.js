import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useDispatch } from "react-redux";
import { login } from "../redux/authReducer/action";
import * as types from "../redux/authReducer/actionTypes";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginsuccess = () => toast("Login successful");
  const loginfail = () => toast("Login failed, Please try again later.");

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSignup = () => {
    try {
      if (values.email && values.password) {
        console.log(values);
        dispatch(login(values)).then((r) => {
          if (r.type === types.LOGIN_SUCCESS) {
            loginsuccess();
            navigate("/", { replace: true });
          } else if (r.type === types.LOGIN_FAILURE) {
            console.log("Login is failed, please try again");
            loginfail();
          }
        });
      }
    } catch (e) {}
  };
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      {/* <button onClick={loginfail}>Notify!</button> */}
      <ToastContainer />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <div className="d-flex flex-column gap-15">
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                <div>
                  <Link to="/forgot-password">Forgot Password?</Link>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" onClick={handleSignup}>
                      Login
                    </button>
                    <Link to="/signup" className="button signup">
                      SignUp
                    </Link>
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

export default Login;
