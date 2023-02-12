import { CircularProgress,Box } from "@chakra-ui/react";
import React from "react";

const LoadingIndicator = ({topMargin}) => {
  return (
    <Box display={"flex"} mt={topMargin} justifyContent={"center"} >
      <CircularProgress isIndeterminate color="blue.300" mt="10" />
    </Box>
  );
};

export default LoadingIndicator;
