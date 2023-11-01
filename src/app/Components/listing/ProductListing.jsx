import React, { useContext } from "react";
import { Card } from "./Card";
import styled from "@emotion/styled";
import { StoreContext } from "../../context/StoreContext";
import EmptyPage from "../../Pages/EmptyPage";

const ListingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
  justify-content: center;
  width: 100%
`;

const ProductListing = () => {
  const { state: { products } } = useContext(StoreContext);
  return (

    <ListingContainer>
      {products.length !== 0
        ? products.map((product) => {
          return <Card key={product.itemId} product={product} />;
        })
        : <EmptyPage />}
    </ListingContainer>

  );
};

export default ProductListing;
