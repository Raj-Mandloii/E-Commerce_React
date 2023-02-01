import React from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const IMAGE =
  "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-midnight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1656712887881";

const MobileCard = () => {
  return (
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
        <Avatar p="2" ml="-4" size="xl" name="Prosper Otemuyiwa" src={IMAGE} />
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
  );
};

export default MobileCard;
