import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import { getProduct } from "../redux/appReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { ReactNode } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  UnorderedList,
  ListItem,
  Select,
  Radio,
  Checkbox,
  Stack,
  RadioGroup,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import { HamburgerIcon } from "@chakra-ui/icons";

const LinkItems = [
  { name: "Home", icon: FiHome },
  { name: "Trending", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
];

const category = [
  { name: "Watch" },
  { name: "TV" },
  { name: "Camera" },
  { name: "Laptop" },
];
const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const featuredCollectionData = useSelector(
  //   (store) => store.appReducer.product
  // );
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   // if (featuredCollectionData.length === 0) {
  //   dispatch(getProduct());
  //   // }
  // }, []);
  return (
    <Box
      h="100vh"
      bg={useColorModeValue("gray.100", "gray.900")}
      display="flex"
      boxShadow={"2xl"}
    >
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isFullHeight={false}
        autoFocus={false}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs"
      >
        <DrawerContent overflow="scroll">
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
    </Box>
  );
};

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 72 }}
      // pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        direction={"column  "}
        alignItems="center"
        mx="8"
        mt="20"
        justifyContent="space-between"
      >
        {/* --- Sort by Price  */}
        <Flex
          boxShadow={"2xl"}
          direction={"column"}
          bg="white"
          borderRadius={"15px"}
          py="4"
          px="2"
          mt="4"
          w="80%"
          textAlign={"center"}
        >
          <Text fontSize="md" fontWeight="bold" mb="4" mr="8">
            Sort by Price
          </Text>
          <RadioGroup defaultValue="2">
            <Stack spacing={5} direction="column" ml="6">
              <Radio colorScheme="blue" value="1">
                Low to High
              </Radio>
              <Radio colorScheme="blue" value="2">
                High to Low
              </Radio>
            </Stack>
          </RadioGroup>
        </Flex>
        {/*  SHOP BY CATEGORY SECTION  */}
        <Flex
          boxShadow={"2xl"}
          direction={"column"}
          bg="white"
          borderRadius={"15px"}
          py="4"
          px="2"
          mt="4"
          w="80%"
          textAlign={"center"}
        >
          <Text fontSize="md" fontWeight="bold" mb="4">
            Shop By Categories
          </Text>
          <Box lineHeight="1" fontSize={"xs"}>
            {category.map((link) => (
              <NavItem key={link.name}>{link.name}</NavItem>
            ))}
          </Box>
        </Flex>
        {/* ----- SHOP BY AVAILABILITY ----- */}
        <Flex
          boxShadow={"2xl"}
          direction={"column"}
          bg="white"
          borderRadius={"15px"}
          py="4"
          px="6"
          mt="4"
          w="80%"
          textAlign={"center"}
        >
          <Text fontSize="md" fontWeight="bold" mb="4">
            Filter By
          </Text>
          <Box textAlign={"start"} lineHeight="1" fontSize={"`xs`"}>
            <Text fontSize="xs" fontWeight="bold" mb="4">
              Availability
            </Text>
            <Stack spacing={5} direction="column">
              <Checkbox colorScheme="blue" defaultChecked>
                In Stock
              </Checkbox>
              <Checkbox colorScheme="blue" defaultChecked>
                Out of Stock
              </Checkbox>
            </Stack>
          </Box>
        </Flex>

        {/* ----- SHOP BY Product Tags ----- */}
        {/* <Flex
          direction={"column"}
          bg="white"
          borderRadius={"15px"}
          py="4"
          px="6"
          mt="4"
          w="80%"
          textAlign={"center"}
        >
          <Text fontSize="md" fontWeight="bold" mb="4">
            Similar Products
          </Text>
        </Flex> */}
        {/* <ProductCardSmall /> */}
      </Flex>
      {/* <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} /> */}
      {/* {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))} */}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        // _hover={{
        //   bg: "cyan.400",
        //   color: "white",
        // }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="10"
      w="100%"
      alignItems="center"
      bg={useColorModeValue("#232F3E", "gray.900")}
      position="absolute"
      zIndex={100}
      display={"block"}
      borderBottomWidth="0px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="end"
      // border="1px solid red"
      {...rest}
    >
      {/* <Text onClick={onOpen} color="white">
        Filters
      </Text> */}
      <IconButton
        w={5}
        h={5}
        variant={"ghost"}
        color="white"
        onClick={onOpen}
        aria-label="open menu"
        icon={<HamburgerIcon />}
      />

      {/* <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text> */}
    </Flex>
  );
};

export default Sidebar;
