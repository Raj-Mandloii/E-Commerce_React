import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Pagination from "@choc-ui/paginator";
const PaginationSection = ({current, setCurrent}) => {
  
  return (
    <Flex
      w="full"
      alignItems="center"
      justifyContent="center"
      my="6"
      mt="16"
    >
      <Pagination
        defaultCurrent={1}
        total={20}
        paginationProps={{ display: "flex" }}
        current={current}
        activeStyles={{ color: "white", backgroundColor: "blue.600" }}
        onChange={(page) => setCurrent(page)}
      />
    </Flex>
  );
};

export default PaginationSection;
