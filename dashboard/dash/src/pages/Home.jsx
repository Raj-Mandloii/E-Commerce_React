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
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";

// import { services } from "../utils/Data";
const LinkItems = [
  { name: "Home", icon: FiHome },
  { name: "Trending", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
];
const Home = () => {
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
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Home Page goes here  */}
        {/* {children} */}
      </Box>
    </Box>
  );
};

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 80 }}
      // pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        direction={"column  "}
        alignItems="center"
        mx="8"
        justifyContent="space-between"
      >
        {/*  SHOP BY CATEGORY SECTION  */}
        <Flex
          direction={"column"}
          bg="white"
          borderRadius={"15px"}
          py="4"
          px="6"
          mt="4"
        >
          <Text fontSize="md" fontWeight="bold" mb="4">
            Shop By Categories
          </Text>
          <Box lineHeight="1" fontSize={"xs"}>
            <NavItem>Watch</NavItem>
            <NavItem>TV</NavItem>
            <NavItem>Camera</NavItem>
            <NavItem>Laptop</NavItem>
          </Box>
        </Flex>
        {/* ---------- */}
        <Flex
          direction={"column"}
          bg="white"
          borderRadius={"15px"}
          py="4"
          px="6"
          mt="4"
        >
          <Text fontSize="md" fontWeight="bold" mb="4">
            Filter By
          </Text>
          <Box lineHeight="1" fontSize={"xs"}>
            
          </Box>
        </Flex>
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
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
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
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};

export default Home;
