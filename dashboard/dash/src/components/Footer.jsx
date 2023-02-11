import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { NavLink } from "react-router-dom";



const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      // _hover={{
      //   bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      // }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("#232F3E", "gray.900")}
      color={useColorModeValue("white", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <NavLink to="/" replace={true}>
                <Text
                  // display={{ base: "none", md: "flex" }}
                  bgGradient="linear-gradient(to bottom, #0066ff 0%, #cc66ff 100%)"
                  bgClip="text"
                  fontSize="2xl"
                  fontWeight="extrabold"
                >
                  {"<E-SHOP/>"}
                </Text>
              </NavLink>
              {/* <Logo color={useColorModeValue("gray.700", "white")} /> */}
            </Box>
            <Text fontSize={"sm"}>© 2023 All rights reserved</Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton
                label={"GitHub"}
                href={"https://github.com/Raj-Mandloii/"}
              >
                <FaGithub />
              </SocialButton>
              <SocialButton
                label={"LinkedIn"}
                href={"https://www.linkedin.com/in/raj-mandloi/"}
              >
                <FaLinkedin />
              </SocialButton>
              <SocialButton
                label={"Twitter"}
                href={"https://twitter.com/_raj_mandloi"}
              >
                <FaTwitter />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Contact us</Link>
            <Link href={"#"}>Pricing</Link>
            <Link href={"#"}>Testimonials</Link>
          </Stack>
          <Stack display={{ base: "none", md: "flex" }} align={"flex-start"}>
            <ListHeader>Support</ListHeader>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Legal</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Satus</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                autoFocus=""
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={useColorModeValue("green.400", "green.800")}
                color={useColorModeValue("white", "gray.800")}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
