import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Skeleton,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdLocalShipping } from "react-icons/md";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../redux/appReducer/action";
import { Carousel } from "react-responsive-carousel";
import  "react-responsive-carousel/lib/styles/carousel.min.css";
import LoadingIndicator from "./LoadingIndicator";
import { addToCart } from "../redux/appReducer/cartAction";
// Carousel is using this style internally ^_^

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [currentItem, setCurrentItem] = useState({});
  const { loading, featuredCollectionData, error } = useSelector((store) => {
    return {
      featuredCollectionData: store.appReducer.product,
      loading: store.appReducer.loading,
      error: store.appReducer.error,
    };
  }, shallowEqual);

  useEffect(() => {
    if (featuredCollectionData.length === 0) {
      dispatch(getProduct());
    }
  }, []);

  useEffect(() => {
    if (id) {
      const currentItem = featuredCollectionData.find((el) => el.id == id);
      // console.log("Current", currentItem);
      currentItem && setCurrentItem(currentItem);
    }
  }, [id, featuredCollectionData]);

  const addItemsToCart = () => {
    dispatch(addToCart(currentItem, 1));
    // navigate("/cart");
  };

  return loading ? (
    <Box mb="10">
      <LoadingIndicator topMargin={10} />
    </Box>
  ) : (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Carousel autoPlay infiniteLoop showThumbs={false}>
            <Image
              rounded={"md"}
              alt={currentItem.title}
              src={currentItem.thumbnail}
              fit={"cover"}
              align={"center"}
              fallback={<Skeleton />}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
            <Image
              rounded={"md"}
              fallback={<Skeleton />}
              alt={"product image"}
              src={currentItem.image}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Carousel>
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {currentItem.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              ₹ {currentItem.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                {currentItem.description}
              </Text>
              <Text fontSize={"lg"}>{currentItem.description}</Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Features
              </Text>

              <SimpleGrid
                columns={{ base: 1, md: 2 }}
                spacing={10}
                fontWeight="bold"
              >
                <List spacing={2}>
                  <ListItem> Type : {currentItem.category}</ListItem>
                  <ListItem>Brand : {currentItem.brand}</ListItem>{" "}
                </List>
                <List spacing={2}>
                  <ListItem>Category : {currentItem.category}</ListItem>
                  <ListItem>Availablity : In Stock</ListItem>
                  {/* <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem> */}
                </List>
              </SimpleGrid>
            </Box>
            {/* <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Between lugs:
                  </Text>{" "}
                  20 mm
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Bracelet:
                  </Text>{" "}
                  leather strap
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Case:
                  </Text>{" "}
                  Steel
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Case diameter:
                  </Text>{" "}
                  42 mm
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Dial color:
                  </Text>{" "}
                  Black
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Crystal:
                  </Text>{" "}
                  Domed, scratch‑resistant sapphire crystal with anti‑reflective
                  treatment inside
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Water resistance:
                  </Text>{" "}
                  5 bar (50 metres / 167 feet){" "}
                </ListItem>
              </List>
            </Box> */}
          </Stack>
          <Flex
            w="100%"
            direction={{ base: "column", md: "row", sm: "column" }}
            gap={5}
            align={["none", "center"]}
            justifyContent="space-evenly"
            fontWeight="bold"
          >
            <Button
              fontSize={"xs"}
              bg={useColorModeValue("blue.300", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              onClick={addItemsToCart}
            >
              Add to cart
            </Button>
            <Button
              fontSize={"xs"}
              bg={useColorModeValue("blue.300", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
            >
              Buy It Now
            </Button>
          </Flex>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
