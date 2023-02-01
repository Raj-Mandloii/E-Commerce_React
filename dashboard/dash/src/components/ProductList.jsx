import { Box } from "@chakra-ui/react";
import React from "react";
import ProductCardSmall from "./ProductCardSmall";

const ProductList = () => {
  return (
    <Box mt="10" mb="10" display={"flex"} flexWrap="wrap" gap={["2","4","20"]} justifyContent={"center"}>
      <ProductCardSmall />
      <ProductCardSmall />
      <ProductCardSmall />
      <ProductCardSmall />
      <ProductCardSmall />
      <ProductCardSmall />
      <ProductCardSmall />
      <ProductCardSmall />
      <ProductCardSmall />
      <ProductCardSmall />
      <ProductCardSmall />
      <ProductCardSmall />
      <ProductCardSmall />
    </Box>
  );
};

export default ProductList;
