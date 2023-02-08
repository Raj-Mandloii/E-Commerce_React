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
  Avatar,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { FiUser } from "react-icons/fi";

import { NavLink, useLocation } from "react-router-dom";
import WebLogo from "../assets/logo.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchedQuery } from "../redux/appReducer/sortFilterAction";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const query = useSelector((store) => store.sortFilterReducer.query);
  const handleSearch = (q) => {
    dispatch(searchedQuery(q));
  };
  const { token } = useSelector((store) => {
    return {
      token: store.authReducer.token,
    };
  });
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  useEffect(() => {}, [token, pathname]);

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
          ml="2"
          justify={{ base: "center", md: "start" }}
          //  border="1px solid red"
        >
          <NavLink to="/" replace={true}>
            <Text
              display={{ base: "none", md: "flex" }}
              bgGradient="linear-gradient(to bottom, #0066ff 0%, #cc66ff 100%)"
              bgClip="text"
              fontSize="2xl"
              fontWeight="extrabold"
            >
              {"<E-SHOP/>"}
            </Text>
          </NavLink>
          {/* <NavLink to="/">
            <Image
              display={{ base: "none", md: "flex" }}
              w={["10", "8", "12"]}
              src={WebLogo}
            />
          </NavLink> */}

          {pathname === "/" && (
            <Flex
              display={{ base: "flex", md: "none" }}
              justifyContent={"center"}
              bg={useColorModeValue("#232F3E", "gray.800")}
            >
              <Stack spacing={4} py="0" flex>
                <InputGroup>
                  <Input
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
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
          )}
        </Flex>
        <Flex display={{ base: "none", md: "flex" }} ml={10}>
          <DesktopNav cartItems={cartItems} currentPath={pathname} />
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
              ml="4"
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
                color="gray.500"
                variant={"outline"}
                fontSize={"xs"}
                fontWeight={600}
                mr="4"
                mt="1"
                ml="4"
              >
                Sign in
              </Button>
            </NavLink>
          )}
        </Stack>
      </Flex>

      {pathname === "/" && (
        <Flex
          display={{ base: "none", md: "flex" }}
          justifyContent={"center"}
          bg={useColorModeValue("#232F3E", "gray.800")}
        >
          <Stack spacing={4} py="2" w={["80%", "60%", "60%"]} flex>
            <InputGroup>
              <Input
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
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
      )}

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = ({ cartItems, pathname }) => {
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
              >
                <Box mt="4" display={"flex"} position={"relative"}>
                  <Image
                    display={{ base: "none", md: "flex" }}
                    w={["10", "4", "8"]}
                    src={WebLogo}
                    mr="4"
                  />
                  <Text position={"absolute"} right="3" top="-3">
                    {cartItems.length}
                  </Text>
                </Box>
                {/* {navItem.label} */}
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
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
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
          ml="2"
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        <Text
          borderRadius={"50"}
          bgColor={"blue.300"}
          fontWeight={600}
          mr="2"
          px={2}
          color={useColorModeValue("white", "gray.200")}
        >
          {cartItems.length}
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
