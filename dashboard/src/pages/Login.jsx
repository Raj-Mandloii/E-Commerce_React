import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { login } from "../redux/authReducer/action";
import * as types from "../redux/authReducer/actionTypes";

import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";

import { OAuthButtonGroup } from "../components/OAuthButtonGroup";
import { PasswordField } from "../components/PasswordField";
import customToast from "../components/customToast/toast";

const Login = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

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
        // console.log(values);
        dispatch(login(values)).then((r) => {
          if (r.type === types.LOGIN_SUCCESS) {
            customToast({
              toast: toast,
              title: "Login successful",
              message: "Redirecting.. to Home Page",
              status: "success",
            });
            navigate("/", { replace: true });
          } else if (r.type === types.LOGIN_FAILURE) {
            customToast({
              toast: toast,
              title: "Login failed,",
              message: "Please try again later.",
              status: "error",
            });
          }
        });
      }
    } catch (e) {}
  };
  return (
    <Container
      maxW="lg"
      py={{ base: "8", md: "20" }}
      // px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          {/* <Logo /> */}
          {/* <Image src="./assets/logo" alt="logo"/> */}
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Log in
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Don't have an account?</Text>
              <NavLink to="/signup">
                <Button variant="link" colorScheme="blue">
                  Sign up
                </Button>
              </NavLink>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg-surface" }}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
              </FormControl>
              <PasswordField onChange={handleChange} name="password" />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="link" colorScheme="blue" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                // _hover={{
                //   bg: "blue.500",
                // }}
                onClick={handleSignup}
              >
                Sign in
              </Button>
              <HStack>
                <Divider />
                <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Login;
