import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { Rating } from "./Rating";
import { FavouriteButton } from "./FavouriteButton";
import { PriceTag } from "./PriceTag";
import { addToCart } from "../../redux/appReducer/cartAction";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import customToast from "../customToast/toast";

export const ProductCard = (props) => {
  const { product, rootProps } = props;
  const toast = useToast()
  const dispatch = useDispatch();
  const { id, title, thumbnail, price, description, rating } = product;
  const addItemsToCart = () => {
    dispatch(addToCart(product, 1)).then((_)=>{
      customToast({
        toast: toast,
        title: "Cart",
        message: "Item added to cart successfully",
        status: "success",
      });
    })
    // navigate("/cart");
  };
  return (
    <Stack spacing={{ base: "4", md: "5" }} {...rootProps}>
      <NavLink to={`/${id}`}>
        <Box position="relative">
          <AspectRatio ratio={4 / 3}>
            <Image
              src={thumbnail}
              alt={title}
              draggable="false"
              fallback={<Skeleton />}
              borderRadius={{ base: "md", md: "xl" }}
            />
          </AspectRatio>
          <FavouriteButton
            position="absolute"
            top="2"
            right="2"
            aria-label={`Add ${title} to your favourites`}
          />
        </Box>
        <Stack>
          <Stack spacing="1">
            <Text
              noOfLines={1}
              fontWeight="medium"
              color={useColorModeValue("gray.700", "gray.400")}
            >
              {title}
            </Text>
            <PriceTag price={price + 20} salePrice={price} currency="INR" />
          </Stack>
          <HStack>
            <Rating defaultValue={rating} size="sm" />
            <Text
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              12 Reviews
            </Text>
          </HStack>
        </Stack>
      </NavLink>
      <Stack align="center">
        <Button colorScheme="blue" width="full" onClick={addItemsToCart}>
          Add to cart
        </Button>
        <Link
          textDecoration="underline"
          fontWeight="medium"
          color={useColorModeValue("gray.600", "gray.400")}
        >
          Buy Now
        </Link>
      </Stack>
    </Stack>
  );
};
