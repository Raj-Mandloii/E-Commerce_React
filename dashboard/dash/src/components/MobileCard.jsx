import React from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Skeleton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Rating } from "./Card/Rating";

import { NavLink } from "react-router-dom";
import { FavouriteButton } from "./Card/FavouriteButton";
import { PriceTag } from "./Card/PriceTag";

const starData = {
  size: 20,
  value: 3.5,
  edit: false,
};

const MobileCard = ({ items }) => {
  const futureDate = () => {
    var targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 10);
    var dd = targetDate.getDate();
    var mm = targetDate.getMonth() + 1; // 0 is January, so we must add 1
    var yyyy = targetDate.getFullYear();
    return dd + "-" + mm + "-" + yyyy;
  };
  return (
    <NavLink to="/:id">
      <Box
        // border="1px solid red"
        // position="relative"
        display={{ base: "block", md: "none" }}
        w="100%"
        textAlign={"center"}
        // m="2"
        mt="16"
        columnGap="4"
      >
        {/* <FavouriteButton
          position="absolute"
          top="2"
          right="2"
          aria-label={`Add ${name} to your favourites`}
        /> */}
        <Flex
          // border="1px solid red"
          position="relative"
          alignItems={"center"}
          role={"group"}
          w="100%"
          p="6"
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"lg"}
          rounded={"2xl"}
          pos={"relative"}
          zIndex={1}
        >
          <Avatar
            p="0"
            ml="-2"
            mr="6"
            size="2xl"
            name={items.title}
            src={items.thumbnail}
            fallback={<Skeleton />}
          />

          <Flex
            // border="1px solid red"
            direction={"column"}
            maxW="70%"
            textAlign="start"
          >
            <Heading fontSize={"sm"}>{items.title}</Heading>
            <Text noOfLines={2} fontSize={"xs"}>
              {items.description}
            </Text>
            <Flex alignItems={"center"}>
              <Text fontSize={"xs"} mt="1" mr="1">
                {items.rating}
              </Text>
              <Rating defaultValue={items.rating} size="sm" />
              <Text fontSize={"xs"} mt="1" ml="1">
                ({Math.floor(Math.random() * 100)})
              </Text>
            </Flex>
            <Box
              bg="blue.500"
              my="1"
              color="white"
              w="7rem"
              fontSize={"xs"}
              textAlign="center"
              fontWeight={"medium"}
            >
              Limited Time Deal
            </Box>
            <PriceTag price={items.price+20} salePrice={items.price} currency="INR" />
            <Text color="gray" fontSize={"xs"} mt="1" mr="1">
              Get it by {futureDate()}
            </Text>
            <Text color="gray" fontSize={"xs"} mt="1" mr="1">
              FREE Delivery by E-Shop
            </Text>
          </Flex>
          <FavouriteButton
            position="absolute"
            top={"-2"}
            right="2"
            aria-label={`Add ${items.title} to your favourites`}
          />
        </Flex>
      </Box>
    </NavLink>
  );
};

export default MobileCard;
