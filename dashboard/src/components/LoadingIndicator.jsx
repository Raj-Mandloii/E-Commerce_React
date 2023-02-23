import { CircularProgress, Box, Text, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const LoadingIndicator = ({ topMargin }) => {
  const [visible, setVisible] = useState(false);
  let id;
  const moreWait = () => {
    id = setTimeout(() => {
      setVisible(!visible);
    }, 3000);
  };
  useEffect(() => {
    moreWait();
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <Flex
      direction={"column"}
      alignItems="center"
      mt={topMargin}
      justifyContent={"center"}
    >
      <CircularProgress isIndeterminate color="blue.300" mt="10" />
      {visible && (
        <Text
          fontSize={["8", "12", "16"]}
          textAlign={"center"}
          fontWeight={"bold"}
          mt="6"
        >
          {" "}
          😅 On the way, Please hold on.
        </Text>
      )}
    </Flex>
  );
};

export default LoadingIndicator;
