import styled from "@emotion/styled";
import Filtering from "../Components/listing/Filtering";
import ProductListing from "../Components/listing/ProductListing";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
`;
export const ListingPage = () => {
  return (
    <Wrapper>
      <Filtering />
      <ProductListing />
    </Wrapper>
  );
};
