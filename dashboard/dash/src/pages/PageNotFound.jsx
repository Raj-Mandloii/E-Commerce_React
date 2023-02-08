import React from "react";
import { Box,Image, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import oops from "./../assets/oops.svg"
const PageNotFound = () => (
  <Box display="flex" alignItems="center" justifyContent="center" minH="100vh">
    <Box textAlign="center">
      {/* <Image src="https://via.placeholder.com/300x300.png" />
      <Text fontSize="5xl" fontWeight="bold">
        404
      </Text> */}
     <Image src={oops} alt="page-not-found"  w='72'/>
      <NavLink mt={4} color="teal.500" to="/" replace="">
        <Button mt="4" colorScheme="blue" width="full" fontSize={"xs"}>
          Go to Home Page
        </Button>
      </NavLink>
    </Box>
  </Box>
);

export default PageNotFound;
