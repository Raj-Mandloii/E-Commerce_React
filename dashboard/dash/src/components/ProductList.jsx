import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Card } from "./Card/Card";
import MobileCard from "./MobileCard";
import { getProduct } from "../redux/appReducer/action";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import LoadingIndicator from "./LoadingIndicator";
const ProductList = () => {
  const dispatch = useDispatch();
  const { loading, featuredCollectionData, error } = useSelector((store) => {
    return {
      featuredCollectionData: store.appReducer.product,
      loading: store.appReducer.loading,
      error: store.appReducer.error,
    };
  }, shallowEqual);

  const a = useSelector((store) => store.sortFilterReducer.query);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (featuredCollectionData.length === 0) {
      dispatch(getProduct());
      // console.log("FETCHING THE DATA",featuredCollectionData);
    }
    // console.log("THIS IS RENDERING ",featuredCollectionData,a,loading,data)
  }, []);

  return (
    <Box w="100%">
      {/* {!loading && (
       <LoadingIndicator  topMargin={10}/>
      )} */}
      {/* MOBILE SCREEN */}
      {loading ? (
        <LoadingIndicator topMargin={10} />
      ) : (
        featuredCollectionData
          .filter((user) =>
            user.title.toLowerCase().includes(a.trim().toLowerCase())
          )
          .map((el) => {
            return <MobileCard key={el.id} items={el} />;
          })
      )}

      {/* MEDIUM TO LARGE SCREEN */}
      <Card data={featuredCollectionData} loading={loading} error={error} />
    </Box>
  );
};

export default ProductList;
