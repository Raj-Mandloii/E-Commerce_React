import { Box } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { ProductGrid } from "./ProductGrid";
import { useSelector } from "react-redux";
import { useMemo } from "react";
export const Card = ({ data }) => {
  const query = useSelector((store) => store.sortFilterReducer.query);
  const queryFilter = useMemo(() =>
    data.filter((user) =>
      user.title.toLowerCase().includes(query.trim().toLowerCase())
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
