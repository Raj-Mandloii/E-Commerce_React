import React, { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../redux/appReducer/cartAction";
import customToast from "../components/customToast/toast";

const Form2 = ({ formCompleted, setFormCompleted, values, setValues }) => {
  const toast = useToast();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });

    // if (
    //   values.country &&
    //   values.address &&
    //   values.city &&
    //   values.state &&
    //   values.postal
    // ) {
    //   setFormCompleted(!formCompleted);
    // }
  };
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        User Details
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]} isRequired>
        <FormLabel
          onChange={handleChange}
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          Country / Region
        </FormLabel>
        <Select
          required
          onChange={handleChange}
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        >
          <option>India</option>
          <option>Australia</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Street address
        </FormLabel>
        <Input
          onChange={handleChange}
          type="text"
          name="address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          City
        </FormLabel>
        <Input
          onChange={handleChange}
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          State / Province
        </FormLabel>
        <Input
          onChange={handleChange}
          type="text"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="postal"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          ZIP / Postal
        </FormLabel>
        <Input
          onChange={handleChange}
          type="text"
          name="postal"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
    </>
  );
};

export default function PaymentDetails() {
  const [formCompleted, setFormCompleted] = useState(false);

  const dispatch = useDispatch();
  const toast = useToast();
  const [progress] = useState(100);
  const navigate = useNavigate();
  const isDirectBuyer = useSelector((store) => store.cartReducer.isDirectbuyer);
  const [values, setValues] = useState({
    country: "",
    address: "",
    city: "",
    state: "",
    postal: "",
  });
   // const camelCase = (str) => {
  //   str= str.split("")
  //   let first = str[0].toUpperCase
  //   console.log(first + [,...str].join("") +  " field should not be empty")
  //   return first + [,...str].join("") +  " field should not be empty"
  // };
  const handlePayment = () => {
    for (let i in values) {
      console.log(i + ": " + values[i]);
      if (values[i] == "") {
        customToast({
          toast: toast,
          title: "Cart",
          // to capitalise the first letter of warning 
          message: i.split("")[0].toUpperCase() + i.substring(1,i.length) + " field should not be empty",
          status: "warning",
        });
        return;
      }
    }

    if (!isDirectBuyer) {
      dispatch(emptyCart());
    }
    toast({
      title: "Order is successfully placed.",
      description: "",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    navigate("/");
  };
  return (
    <Box w={"100%"} h={"100vh"} mt="20">
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        <Form2
          values={values}
          setValues={setValues}
          formCompleted={formCompleted}
          setFormCompleted={setFormCompleted}
        />
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Button
              px="4"
              colorScheme="blue"
              variant="solid"
              onClick={handlePayment}
            >
              Confirm Order
            </Button>
          </Flex>
        </ButtonGroup>
      </Box>
    </Box>
  );
}
