import React, { useState } from "react";

import { Navigate, NavLink, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { register } from "../redux/authReducer/action";
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
  Image,
} from "@chakra-ui/react";

import { OAuthButtonGroup } from "../components/OAuthButtonGroup";
import { PasswordField } from "../components/PasswordField";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
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
          Sign Up
        </Heading>
          <HStack spacing="1" justify="center">
            <Text color="muted">Already have an account</Text>
            <NavLink to="/login">
              <Button variant="link" colorScheme="blue">
                Sign in
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
        <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
          <Stack spacing="5">
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" />
            </FormControl>
            <PasswordField />
          </Stack>
          <Stack spacing="6">
            <Button
              loadingText="Submitting"
              size="lg"
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Sign up
            </Button>
            {/* <HStack>
              <Divider />
              <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                or continue with
              </Text>
              <Divider />
            </HStack> */}
            {/* <OAuthButtonGroup /> */}
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>
  );
};

export default Signup;