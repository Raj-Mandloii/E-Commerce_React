import { Box, useRadio } from "@chakra-ui/react";

export default function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="0px"
        borderRadius="lg"
        boxShadow="xs"
        fontSize={"xs"}
        _checked={{
          bg: "blue.500",
          color: "white",
          borderColor: "blue.600",
        }}
        
        px={0}
        py={2}
      >
        {props.children}
      </Box>
    </Box>
  );
}
