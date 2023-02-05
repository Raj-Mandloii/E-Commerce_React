import React from "react";
import {
  IconButton,
  Box,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Radio,
  Checkbox,
  Stack,
  RadioGroup,
  DrawerBody,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

const category = [
  { name: "Watch" },
  { name: "TV" },
  { name: "Camera" },
  { name: "Laptop" },
];
const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          {/* <DrawerBody p={0} m={0}> */}
          <SidebarContent onClose={onClose} />
          {/* </DrawerBody> */}
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
    </Box>
  );
};

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.100")}
      // borderRight="0.4px"
      borderRightColor={useColorModeValue("gray.50", "gray.100")}
      w={{ base: "full", md: 64 }}
      h="full"
      {...rest}
    >
      <Flex
        direction={"column  "}
        alignItems="center"
        mt="20"
        justifyContent="space-between"
      >
        {/* --- Sort by Price  */}
        <Flex
          boxShadow={"sm"}
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
          boxShadow={"sm"}
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
          boxShadow={"sm"}
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
      {...rest}
    >
      <IconButton
        w={5}
        h={5}
        variant={"ghost"}
        color="white"
        onClick={onOpen}
        aria-label="open menu"
        icon={<HamburgerIcon />}
      />
    </Flex>
  );
};

export default Sidebar;
