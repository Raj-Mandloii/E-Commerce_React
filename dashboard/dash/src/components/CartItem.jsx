import {
  CloseButton,
  Flex,
  Link,
  Select,
  useColorModeValue,
  Text,
  Button,
} from "@chakra-ui/react";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";

const QuantitySelect = (props) => {
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue("blue.500", "blue.200")}
      {...props}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="4">5</option>
    </Select>
  );
};

export const CartItem = (props) => {
  const {
    id,
    title,
    price,
    description,
    quantity,
    thumbnail,
    image,
    onChangeQuantity,
    onClickDelete,
  } = props;

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={title}
        description={description}
        image={thumbnail}
        isGiftWrapping={true}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{ base: "none", md: "flex" }}
      >
        <Flex direction={"row"} alignItems="center" justifyItems={"center"}>
          <Button
            m="3"
            onClick={(e) => quantity != 1 && onChangeQuantity?.(-1, +id)}
          >
            -
          </Button>
          <Text m="3">x{" " + quantity}</Text>
          <Button m="3" onClick={(e) => onChangeQuantity?.(+1, +id)}>
            +
          </Button>
        </Flex>
        {/* <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value,+id);
          }}
        /> */}
        <PriceTag price={price} currency={"INR"} />
        <CloseButton
          aria-label={`Delete ${title} from cart`}
          onClick={() => onClickDelete(id)}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: "flex", md: "none" }}
      >
        <Link
          fontSize="sm"
          textDecor="underline"
          onClick={() => onClickDelete(id)}
        >
          Delete
        </Link>
        <Flex direction={"row"} alignItems="center" justifyItems={"center"}>
          <Button
            m="3"
            onClick={(e) => quantity != 1 && onChangeQuantity?.(-1, +id)}
          >
            -
          </Button>
          <Text m="3">x{" " + quantity}</Text>
          <Button m="3" onClick={(e) => onChangeQuantity?.(+1, +id)}>
            +
          </Button>
        </Flex>
        <PriceTag price={price} currency={"INR"} />
      </Flex>
    </Flex>
  );
};
