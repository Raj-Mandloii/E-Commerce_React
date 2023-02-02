import { Box } from "@chakra-ui/react";
import React from "react";
import { Card } from "./Card/Card";
import MobileCard from "./MobileCard";

const ProductList = () => {
  return (
    <Box
      // border="1px solid red"
      w="100%"
    >
      {/* For Mobiles  */}
      <MobileCard />
      {/* For bigger screens */}
      <Box
        display={{ base: "none", md: "flex" }}
        flexWrap="wrap"
        mt="10"
        mb="10"
        // flexWrap="wrap"
        gap={["2", "4", "20"]}
        justifyContent={"center"}
      >
        <Card />
      </Box>
    </Box>
  );
};

export default ProductList;
