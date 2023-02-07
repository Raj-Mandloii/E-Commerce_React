import { Box } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
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

  const query = useSelector((store) => store.sortFilterReducer.query);
  const sortParam = useSelector((store) => store.sortFilterReducer.sortParam);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (featuredCollectionData.length === 0) {
      dispatch(getProduct());
      // console.log("FETCHING THE DATA",featuredCollectionData);
    }
    // console.log("THIS IS RENDERING ",featuredCollectionData,a,loading,data)
  }, []);

  const queryFilter = useMemo(() =>
    featuredCollectionData
      .filter((user) =>
        user.title.toLowerCase().includes(query.trim().toLowerCase())
      )
      .sort((a, b) =>
        sortParam === "asc"
          ? a.price > b.price
            ? 1
            : -1
          : sortParam === "desc"
          ? b.price < a.price
            ? -1
            : 1
          : 0
      )
  );
  return (
    <Box w="100%">
      {/* MOBILE SCREEN */}
      {loading ? (
        <LoadingIndicator topMargin={10} />
      ) : (
        queryFilter.map((el) => {
          return <MobileCard key={el.id} items={el} />;
        })
      )}

      {/* MEDIUM TO LARGE SCREEN */}
      <Card data={featuredCollectionData} />
    </Box>
  );
};

export default ProductList;
