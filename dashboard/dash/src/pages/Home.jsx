import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getProduct } from "../redux/appReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";

// import { services } from "../utils/Data";

const Home = () => {
  // const featuredCollectionData = useSelector(
  //   (store) => store.appReducer.product
  // );
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   // if (featuredCollectionData.length === 0) {
  //   dispatch(getProduct());
  //   // }
  // }, []);
  return (
    <Box>HOME</Box>
   
  );
};

export default Home;
