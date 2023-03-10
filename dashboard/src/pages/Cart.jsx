import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { CartItem } from "../components/Cart/CartItem";
import { CartOrderSummary } from "../components/Cart/CartOrderSummary";
import {
  changeQuantity,
  removedFromCart,
} from "../redux/appReducer/cartAction";

export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  let totalPrice = cartItems.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  const onChangeQuantity = (newQuantity, itemId) => {
    dispatch(changeQuantity(newQuantity, itemId));
  };

  const onClickDelete = (id) => {
    dispatch(removedFromCart(id));
  };

  return (
    <Box
      minH="70vh"
      maxW={{ base: "3xl", lg: "7xl" }}
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <Stack
        direction={{ base: "column", lg: "row" }}
        align={{ lg: "flex-start" }}
        spacing={{ base: "8", md: "16" }}
      >
        <Stack spacing={{ base: "8", md: "10" }} flex="2">
          {cartItems.length !== 0 && (
            <Heading fontSize="2xl" fontWeight="extrabold">
              Shopping Cart ({cartItems.length})
            </Heading>
          )}
          {cartItems.length === 0 && (
            <Box h="40vh" textAlign={"center"}>
              <Heading py="10" fontSize="2xl" fontWeight="extrabold">
                Cart is Empty
              </Heading>
              {/* <FaCartPlus /> */}
              <NavLink to="/">
                <Button variant={"link"} color={mode("#3182CE", "blue.200")}>
                  Start Shopping and Add Items to Cart
                </Button>
              </NavLink>
            </Box>
          )}
          <Stack spacing="6">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                onChangeQuantity={onChangeQuantity}
                onClickDelete={onClickDelete}
              />
            ))}
          </Stack>
        </Stack>

        {cartItems.length !== 0 && (
          <Flex direction="column" align="center" flex="1">
            <CartOrderSummary finalPrice={totalPrice} />
            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <NavLink to="/">
                <Button variant={"link"} color={mode("#3182CE", "blue.200")}>
                  Continue shopping
                </Button>
              </NavLink>
            </HStack>
          </Flex>
        )}
      </Stack>
    </Box>
  );
};
