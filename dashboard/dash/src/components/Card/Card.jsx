import { Box } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { ProductGrid } from "./ProductGrid";
import { useSelector } from "react-redux";
import { useMemo } from "react";
export const Card = ({ data }) => {
  const query = useSelector((store) => store.sortFilterReducer.query);
  const sortParam = useSelector((store) => store.sortFilterReducer.sortParam);
  const sortByCategory = useSelector(
    (store) => store.sortFilterReducer.sortByCategory
  );

  const queryFilter = useMemo(() =>
    data
      .filter((item) =>
        item.title.toLowerCase().includes(query.trim().toLowerCase())
      )
      .filter((item) =>
        item.category.toLowerCase().includes(sortByCategory.trim().toLowerCase())
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
    <Box
      display={{ base: "none", md: "flex" }}
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <ProductGrid>
        {queryFilter.map((product) => (
          // <NavLink to={`/${product.id}`}>
          <ProductCard key={product.id} product={product} />
          // </NavLink>
        ))}
      </ProductGrid>
    </Box>
  );
};
