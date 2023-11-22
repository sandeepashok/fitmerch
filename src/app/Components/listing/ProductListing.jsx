import React, { useContext } from "react";
import { Card } from "./Card";
import styled from "@emotion/styled";
import { StoreContext } from "../../context/StoreContext";
import EmptyPage from "../../Pages/EmptyPage";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { TYPES } from "../../context/types";

const ListingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
  justify-content: center;
  width: 100%;
  @media (max-width: 670px) {
    display: ${({ isactive }) => isactive ? "none" : "flex"};
  }
`;

const Container = styled.div`
 display: flex;
 flex-direction: column;
`

const Listing = styled.div`
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
  justify-content: center;
  width: 100%
`

const PageHeading = styled.h2`
  text-align: center;
  margin: 24px 32px 16px 32px;
  font-size: 30px;
  color: #3E4152;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`
const FilterButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  background-color: #FFFFFF;
`

const FilterButton = styled.button`
  display: flex;
  margin: 8px 32px;
  background-color: white;
  color: #823fbd;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px;
  font-size: 16px;
  font-weight: bold;
  padding: 2px 15px;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: #823fbd;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  @media (min-width: 670px) {
    display: none;
  }
`
const Filtericon = styled(HiAdjustmentsHorizontal)`
  margin: 1px;
  color: #FF406D;
  &:hover {
    color: white;
  }
`
const FilterText = styled.span`
  margin: 1px;
`

const ProductListing = () => {
  const { state: { products, booleanStates: { isMobileFilterVisible } }, dispatch } = useContext(StoreContext);
  return (
    <ListingContainer isactive={isMobileFilterVisible}>
      {products.length !== 0
        ? <Container>
          <PageHeading>Fitness Gear Galore</PageHeading>
          <FilterButtonContainer>
            <FilterButton onClick={() => dispatch({ type: TYPES.SET_MOBILE_FILTER_VISIBLITY })} ><FilterText>Filters</FilterText> <Filtericon /></FilterButton>
          </FilterButtonContainer>
          <Listing>
            {products.map((product) => {
              return <Card key={product.itemId} product={product} />;
            })}
          </Listing>
        </Container>
        : <EmptyPage />}
    </ListingContainer>
  );
};

export default ProductListing;
