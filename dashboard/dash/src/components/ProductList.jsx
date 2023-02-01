import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import ProductCardSmall from "./ProductCardSmall";

const ProductList = () => {
  return (
    <Box
      // border="1px solid red"
      w="100%"
    >
      {/* For Mobiles  */}
      <Box
        display={{ base: "block", md: "none" }}
        w="100%"
        textAlign={"center"}
        m="2"
        mt="16"
        columnGap="4"
      >
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          role={"group"}
          w="100%"
          p="6"
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
          h="60px"
           mb="6"
        >
          <Avatar
            p="2"
            ml="-4"
            size="xl"
            name="Prosper Otemuyiwa"
            src="https://bit.ly/prosper-baba"
          />
          <Flex direction={"column"}>
            <Heading fontSize={"md"}>This is Title</Heading>
            <Text fontSize={"sm"}>This is subtitle</Text>
          </Flex>
          <Flex fontSize={"xs"}>
            <Button fontSize={"xs"} variant="link">
              Add to Cart
            </Button>
            <Button fontSize={"xs"} variant="link">
              Buy
            </Button>
          </Flex>
        </Flex>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          role={"group"}
          w="100%"
          p="6"
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
          h="60px"
           mb="6"
        >
          <Avatar
            p="2"
            ml="-4"
            size="xl"
            name="Prosper Otemuyiwa"
            src="https://bit.ly/prosper-baba"
          />
          <Flex direction={"column"}>
            <Heading fontSize={"md"}>This is Title</Heading>
            <Text fontSize={"sm"}>This is subtitle</Text>
          </Flex>
          <Flex fontSize={"xs"}>
            <Button fontSize={"xs"} variant="link">
              Add to Cart
            </Button>
            <Button fontSize={"xs"} variant="link">
              Buy
            </Button>
          </Flex>
        </Flex>
      </Box>
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
        <ProductCardSmall />
        <ProductCardSmall />
        <ProductCardSmall />
        <ProductCardSmall />
        <ProductCardSmall />
      </Box>
    </Box>
  );
};

export default ProductList;
