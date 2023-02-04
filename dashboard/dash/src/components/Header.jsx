import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Input,
  InputGroup,
  InputRightElement,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { FiUser } from "react-icons/fi";

import { NavLink } from "react-router-dom";
import WebLogo from "../assets/logo.png";
import { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  // const [profile] = useState(JSON.parse(localStorage.getItem("profile")));
  const { token } = useSelector((store) => {
    return {
      token: store.authReducer.token,
    };
  });
  useEffect(() => {}, [token]);

  return (
    <Box>
      <Flex
        bg={useColorModeValue("#232F3E", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        h={"55px"}
        py={{ base: 6 }}
        px={{ base: 2 }}
        // border="1px solid red"
        // borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            color={"white"}
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 4 }}
          ml='2'
          justify={{ base: "center", md: "start" }}
          //  border="1px solid red"
        >
          <NavLink to="/">
            <Image
              display={{ base: "none", md: "flex" }}
              w={["10", "8", "12"]}
              src={WebLogo}
            />
          </NavLink>

          <Flex
            display={{ base: "flex", md: "none" }}
            justifyContent={"center"}
            bg={useColorModeValue("#232F3E", "gray.800")}
          >
            <Stack spacing={4} py="0" flex>
              <InputGroup>
                <Input
                  placeholder="Search E-Shop"
                  color="gray.500"
                  bg="white"
                  fontWeight={"medium"}
                  _placeholder={{ color: "gray.500" }}
                  fontSize={["xs", "medium", "medium"]}
                />
                <InputRightElement
                  children={
                    <SearchIcon
                      color="gray.500"
                      fontSize={["xs", "medium", "medium"]}
                    />
                  }
                />
              </InputGroup>
            </Stack>
          </Flex>
        </Flex>
        <Flex display={{ base: "none", md: "flex" }} ml={10}>
          <DesktopNav />
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
          mr="2"
        >
          {token ? (
            <Flex
              // _hover={{
              //   color: "gray.500",
              // }}
              w="100px"
              color={"white"}
              fontSize="xs"
              alignItems={"center"}
              mt="0"
              ml='4'
            >
              <FiUser px="4" size={"32"} />
              <Flex direction={"column"}>
                <Text>Welcome</Text>
                <Text>Raj Mandloi</Text>
              </Flex>
            </Flex>
          ) : (
            <NavLink to="/login">
              <Button
                color="gray.200"
                variant={"outline"}
                fontSize={"xs"}
                fontWeight={600}
                mr="4"
                mt="1"
                ml="4"
                // _hover={{
                //   textDecor: "underline",
                //   color: "gray.500",
                // }}
              >
                Sign in
              </Button>
            </NavLink>
          )}
        </Stack>
      </Flex>

      <Flex
        display={{ base: "none", md: "flex" }}
        justifyContent={"center"}
        bg={useColorModeValue("#232F3E", "gray.800")}
      >
        <Stack spacing={4} py="2" w={["80%", "60%", "60%"]} flex>
          <InputGroup>
            <Input
              placeholder="Search E-Shop"
              color="gray.500"
              bg="white"
              fontWeight={"medium"}
              _placeholder={{ color: "gray.500" }}
              fontSize={["xs", "medium", "medium"]}
            />
            <InputRightElement
              children={
                <SearchIcon
                  color="gray.500"
                  fontSize={["xs", "medium", "medium"]}
                />
              }
            />
          </InputGroup>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.200", "gray.200");
  const linkHoverColor = useColorModeValue("gray.500", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                // _hover={{
                //   textDecoration: "none",
                //   color: linkHoverColor,
                // }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      // _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "white")}
      // p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        // _hover={{
        //   textDecoration: "none",
        // }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  // {
  //   label: "Our Store",
  //   children: [
  //     {
  //       label: "Store",
  //       subLabel: "Trending Items",
  //       href: "/",
  //     },
  //     {
  //       label: "Wishlist",
  //       subLabel: "Your Wishlist",
  //       href: "/wishlist",
  //     },
  //   ],
  // },
  {
    label: "Your Cart",
    href: "/cart",
    // children: [
    //   {
    //     label: "Job Board",
    //     subLabel: "Find your dream design job",
    //     href: "#",
    //   },
    //   {
    //     label: "Freelance Projects",
    //     subLabel: "An exclusive list for contract work",
    //     href: "#",
    //   },
    // ],
  },
  // {
  //   label: "Your Wishlist",
  //   href: "/wishlist",
  // },
  // {
  //   label: "Hire Designers",
  //   href: "#",
  // },
];
