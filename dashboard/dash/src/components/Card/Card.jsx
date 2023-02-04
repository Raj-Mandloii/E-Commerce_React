import { Box } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";
import { ProductGrid } from "./ProductGrid";
import LoadingIndicator from "../LoadingIndicator";
import { NavLink } from "react-router-dom";

export const Card = ({ data, loading, error }) => (
  <Box
    display={{ base: "none", md: "flex" }}
    maxW="7xl"
    mx="auto"
    px={{ base: "4", md: "8", lg: "12" }}
    py={{ base: "6", md: "8", lg: "12" }}
  >
    <ProductGrid>
      {data.map((product) => (
        // <NavLink to={`/${product.id}`}>
          <ProductCard key={product.id} product={product} />
        // </NavLink>
      ))}
    </ProductGrid>
  </Box>
);
