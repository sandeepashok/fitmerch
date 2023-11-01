import styled from "@emotion/styled";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { v4 as uniqueId } from "uuid";
import { TYPES } from "../../context/types";

const FilterContainer = styled.div`
  height: 100%;
  min-width: 285px;
  width: 320px;
  margin: 8px 4px 4px;
  padding: 8px;
  border-right: 1px solid hsla(0,0%,50.2%,.3215686274509804);
  font-family: inherit;
  display: block
`;

const FilterHeadAndClearSection = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid hsla(0,0%,50.2%,.3215686274509804);
  padding: 4px;
  margin-bottom: 8px;
`;

const FilterHeading = styled.h2`
  color: #313131;
`;

const FilterSubHeading = styled.b`
  text-decoration: none;
  list-style: none;
  font-size: 17px;
  font-weight: 700;
  color: #131313;
  margin: 12px;
`;

const ClearAllBtn = styled.button`
  background-color: transparent;
  margin: 8px;
  font-weight: 700;
  color: #ff5656;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: #e14a4a;
  }
`;

const SortBySection = styled.div`
  margin: 12px;
`;

const DepartmentSection = styled.div`
  margin: 12px;
`;

const CategorySection = styled.div`
  margin: 12px;
`;

const BrandSection = styled.div`
  margin: 12px;
`;

const RatingsSection = styled.div`
  margin: 12px;
`;

const IncludeOutOfStock = styled.div`
  margin: 12px;
`;

const Filter = styled.div`
  margin: 4px 2px;
`;

const FilterSelector = styled.input`
  margin: 4px 2px 0px 16px;
  cursor: pointer;
`;

const FilterName = styled.label`
  cursor: pointer;
  margin: 4px 16px 0px 2px;
`;

const Div = styled.div`
  margin: 2px;
`;

const Hr = styled.hr`
  margin: 12px 8px;
  border: none;
  border-bottom: 1px solid hsla(0,0%,50.2%,.3215686274509804);
`;

const Filtering = () => {
  const { state: { filters: { sortByPrice, department, categories, brands, ratings, includeOutOfStock }, productListCopy }, dispatch } = useContext(StoreContext);
  const availableCategories = [];
  const availableBrands = [];
  const customerRatings = [
    { 1: "1 Star & above" },
    { 2: "2 Stars & above" },
    { 3: "3 Stars & above" },
    { 4: "4 Stars & above" },
    { 5: "5 Stars" },
  ];

  productListCopy.forEach(({ category, brand }) => {
    if (!availableCategories.includes(category)) {
      availableCategories.push(category);
    }
    if (!availableBrands.includes(brand)) {
      availableBrands.push(brand);
    }
  });

  return (
    <FilterContainer>
      <FilterHeadAndClearSection>
        <FilterHeading>Filters</FilterHeading>
        <ClearAllBtn onClick={() => dispatch({ type: TYPES.CLEAR_ALL })}>Clear All</ClearAllBtn>
      </FilterHeadAndClearSection>
      <SortBySection>
        <FilterSubHeading>Sort By</FilterSubHeading>
        <Filter>
          <FilterSelector
            type="radio"
            id="lowtohigh"
            name="sort"
            value="Price low to high"
            checked={sortByPrice.includes("asc")}
            onChange={() =>
              dispatch({
                type: TYPES.SELECT_PRODUCT_FILTER,
                payload: {
                  filterType: TYPES.SORT_BY_PRICE,
                  input: "asc",
                },
              })
            }
          />
          <FilterName htmlFor="lowtohigh">Price low to high</FilterName>
        </Filter>
        <Filter>
          <FilterSelector
            type="radio"
            id="hightolow"
            name="sort"
            value="Price high to low"
            checked={sortByPrice.includes("dec")}
            onChange={() =>
              dispatch({
                type: TYPES.SELECT_PRODUCT_FILTER,
                payload: {
                  filterType: TYPES.SORT_BY_PRICE,
                  input: "dec",
                },
              })
            }
          />
          <FilterName htmlFor="hightolow">Price high to low</FilterName>
        </Filter>
      </SortBySection>
      <Hr />
      <DepartmentSection>
        <FilterSubHeading>Department</FilterSubHeading>
        <Filter>
          <FilterSelector
            type="checkbox"
            id="womens"
            name="department"
            value="Women's"
            checked={department.includes("women")}
            onChange={() =>
              dispatch({
                type: TYPES.SELECT_PRODUCT_FILTER,
                payload: {
                  filterType: TYPES.SORT_BY_DEPARTMENT,
                  input: "women",
                },
              })
            }
          />
          <FilterName htmlFor="womens">Women's</FilterName>
        </Filter>
        <Filter>
          <FilterSelector
            type="checkbox"
            id="mens"
            name="department"
            value="Men's"
            checked={department.includes("men")}
            onChange={() =>
              dispatch({
                type: TYPES.SELECT_PRODUCT_FILTER,
                payload: {
                  filterType: TYPES.SORT_BY_DEPARTMENT,
                  input: "men",
                },
              })
            }
          />
          <FilterName htmlFor="mens">Men's</FilterName>
        </Filter>
      </DepartmentSection>
      <Hr />
      <CategorySection>
        <FilterSubHeading>Categories</FilterSubHeading>
        {availableCategories.map((category) => {
          return (
            <Div key={uniqueId()}>
              <Filter>
                <FilterSelector
                  type="checkbox"
                  id={category}
                  name="category"
                  value={category}
                  checked={categories.includes(category)}
                  onChange={() =>
                    dispatch({
                      type: TYPES.SELECT_PRODUCT_FILTER,
                      payload: {
                        filterType: TYPES.SORT_BY_CATEGORY,
                        input: category,
                      },
                    })
                  }
                />
                <FilterName htmlFor={category}>{category}</FilterName>
              </Filter>
            </Div>
          );
        })}
      </CategorySection>
      <Hr />
      <BrandSection>
        <FilterSubHeading>Brands</FilterSubHeading>
        {availableBrands.map((brand) => {
          return (
            <Div key={uniqueId()}>
              <Filter>
                <FilterSelector
                  type="checkbox"
                  id={brand}
                  name="brand"
                  value={brand}
                  checked={brands.includes(brand)}
                  onChange={() =>
                    dispatch({
                      type: TYPES.SELECT_PRODUCT_FILTER,
                      payload: {
                        filterType: TYPES.SORT_BY_BRAND,
                        input: brand,
                      },
                    })
                  }
                />
                <FilterName htmlFor={brand}>{brand}</FilterName>
              </Filter>
            </Div>
          );
        })}
      </BrandSection>
      <Hr />
      <RatingsSection>
        <FilterSubHeading>Customer Ratings</FilterSubHeading>
        {customerRatings.map((ratingType, index) => {
          return (
            <Div key={uniqueId()}>
              <Filter>
                <FilterSelector
                  type="checkbox"
                  id={Object.values(ratingType)[0]}
                  name="ratings"
                  value={Object.values(ratingType)[0]}
                  checked={ratings === (Object.keys(ratingType)[0])}
                  onChange={() =>
                    dispatch({
                      type: TYPES.SELECT_PRODUCT_FILTER,
                      payload: {
                        filterType: TYPES.SORT_BY_RATING,
                        input: Object.keys(ratingType)[0],
                      },
                    })
                  }
                />
                <FilterName htmlFor={Object.values(ratingType)[0]}>{Object.values(ratingType)[0]}</FilterName>
              </Filter>
            </Div>
          );
        })}
      </RatingsSection>
      <Hr />
      <IncludeOutOfStock>
        <Filter>
          <FilterSelector
            type="checkbox"
            id="include-out-of-stock"
            name="include-out-of-stock"
            value="Include out of stock"
            checked={!includeOutOfStock}
            onChange={() =>
              dispatch({
                type: TYPES.SELECT_PRODUCT_FILTER,
                payload: {
                  filterType: TYPES.INCLUDE_OUT_OF_STOCK
                },
              })
            }
          />
          <FilterName htmlFor="include-out-of-stock">
            Include out of stock
          </FilterName>
        </Filter>
      </IncludeOutOfStock>
      <Hr />
    </FilterContainer>
  );
};

export default Filtering;
