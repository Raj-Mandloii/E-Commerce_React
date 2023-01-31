import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import ProductCardSmall from "../components/ProductCardSmall";
import ProductList from "../components/ProductList";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <Flex >
      <Sidebar />
      <ProductList/>
    </Flex>
  );
};

export default Home;
