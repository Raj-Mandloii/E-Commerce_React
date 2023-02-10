import { Box, Flex } from "@chakra-ui/react";
import React from "react";

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
