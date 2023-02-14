import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import { Card } from "./Card/Card";
import MobileCard from "./MobileCard";
import { getProduct } from "../redux/appReducer/action";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import LoadingIndicator from "./LoadingIndicator";
import PaginationSection from "./Pagination/Pagination";
const ProductList = () => {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(1);
  const { loading, featuredCollectionData, error } = useSelector((store) => {
    return {
      featuredCollectionData: store.appReducer.product,
      loading: store.appReducer.loading,
      error: store.appReducer.error,
    };
  }, shallowEqual);
  const sortByCategory = useSelector(
    (store) => store.sortFilterReducer.sortByCategory
  );
  const query = useSelector((store) => store.sortFilterReducer.query);
  const sortParam = useSelector((store) => store.sortFilterReducer.sortParam);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getProduct(current));
  }, [current]);

  const queryFilter = useMemo(() =>
    featuredCollectionData
      .filter((user) =>
        user.title.toLowerCase().includes(query.trim().toLowerCase())
      )
      .filter((item) =>
        item.category
          .toLowerCase()
          .includes(sortByCategory.trim().toLowerCase())
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
      {queryFilter.length == 0 && !loading &&  (
        <Box display={"flex"} justifyContent="center" alignContent={"center"} mt="10">
          <Text fontWeight={"extrabold"}>Items related to this category not found</Text>
        </Box>
      )}
      {/* MEDIUM TO LARGE SCREEN */}
      <Card data={featuredCollectionData} />
      {!loading && queryFilter.length !== 0 && (
        <PaginationSection current={current} setCurrent={setCurrent} />
      )}
    </Box>
  );
};

export default ProductList;
