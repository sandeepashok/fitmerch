import React, { useContext } from 'react'
import styled from "@emotion/styled";
import { StoreContext } from "../../context/StoreContext";
import { FaStar, FaTrash, FaCartArrowDown } from "react-icons/fa";
import { TYPES } from '../../context/types';
import { Link } from 'react-router-dom';
import EmptyPage from '../../Pages/EmptyPage';

const PageHeading = styled.h2`
  text-align: center;
  margin: 32px;
  font-size: 30px;
  color: #3E4152;
`

const WishlistContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    margin: 40px;
  `;

const Card = styled.div`
    display: flex;
    justify-content: space-between;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px;
    border-radius: 5px;
    margin: 8px;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      transition: all 0.3s ease;
    }
  `
const ProductImageContainer = styled.div`
    padding: 8px;
    display: flex;
  `;

const Image = styled.img`
    height: 230px;
    width: 190px;
    border-radius: 5px;
    border: 0.2px solid #7b7b7b0d;
  `;

const ProductdetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px;
    width: 350px;
  `
const ProductBrand = styled.div`
    color: rgba(49, 49, 49, 0.6431372549019608);
    font-size: 12px;
    font-weight: bold;
    padding: 10px 20px;
  `;

const ProductTitle = styled.div`
    color: #424242;
    font-weight: bold;
    font-size: 20px;
    padding: 10px 20px 0px 20px;
  `;

const ProductDescription = styled.div`
    color: #313131b5;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 20px 2.5px 20px;
  `;

const ProductRreviewContainer = styled.div`
    display: flex;
    background-color: #8d898921;
    font-size: 11px;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 4px;
    width: 40px;
    margin: 5px 20px 5px 20px;
  `;

const ProductRating = styled.div`
    padding: 5px;
    padding-right: 1.5px;
  `;

const ReviewStar = styled(FaStar)`
    color: #ff3f6c;
    padding: 5px 5px 5px 1.5px;
  `;

const ProductDiscount = styled.div`
    background-color: #823FBD;
    color: white;
    font-size: 12px;
    font-weight: bold;
    padding: 6px 4px;
    width: 50px;
    text-align: center;
    border-radius: 5px;
    margin: 5px 20px 5px 20px;
  `;
const ProductPrice = styled.div`
    font-weight: bold;
    margin: 5px 20px 0px 20px;
  `

const ProductMrp = styled.div`
    font-size: 12px;
    display: flex;
    margin: 0px 20px 5px 20px;
  `

const Span = styled.div`
    text-decoration: ${({ strike }) => strike ? "line-through" : "none"};
  `

const ProductCTAContainer = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `

const MoveTocart = styled.button`
  background-color: ${({ inStock }) => inStock ? "white" : "#d6d6d6"};
  color: ${({ inStock }) => inStock ? "#823fbd" : "white"};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  margin: 8px;
  &:hover {
    background-color: ${({ inStock }) => inStock ? "#823fbd" : ""};
    color: ${({ inStock }) => inStock ? "white" : ""};
    box-shadow: ${({ inStock }) => inStock ? "rgba(0, 0, 0, 0.35) 0px 5px 15px" : ""};
  }
`;

const ViewInCart = styled(Link)`
  background-color: white;
  color: #823fbd;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  margin: 8px;
  text-decoration: none;
  &:hover {
    background-color: #823fbd;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 4px;
    padding: 4px;
  `;

const AddToCart = styled.button`
  background-color: ${({ inStock }) => inStock ? "white" : "#d6d6d6"};
  color: ${({ inStock }) => inStock ? "#FF3F6C" : "white"};
  font-size: 14px;
  padding: 5px 15px;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px;
  cursor: pointer;
  &:hover {
    background-color: ${({ inStock }) => inStock ? "#FF3F6C" : ""};
    color: ${({ inStock }) => inStock ? "white" : ""};
    box-shadow: ${({ inStock }) => inStock ? "rgba(0, 0, 0, 0.35) 0px 5px 15px" : ""};
  }`;

const RemoveFromCart = styled.button`
  background-color: white;
  color: #FF3F6C;
  font-size: 14px;
  padding: 5px 15px;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px;
  cursor: pointer;
  &:hover {
    background-color: #FF3F6C;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  `;

const WishlistCard = () => {

  const TrashIcon = styled(FaTrash)``;

  const CartIcon = styled(FaCartArrowDown)``;

  const { state: { wishlist, cart }, dispatch } = useContext(StoreContext);

  return (
    <>
      <PageHeading>Your Wishlist</PageHeading>
      {wishlist.length !== 0
        ? <WishlistContainer>
          {
            wishlist.map((product) => {
              const { imageURL, title, description, price, discount, brand, rating, mrp, itemId, inStock } =
                product;
              const isProductInCart = cart.find(product => product.itemId === itemId);
              return (
                <Card key={itemId}>
                  <ProductImageContainer>
                    <Image src={imageURL} />
                  </ProductImageContainer>
                  <ProductdetailContainer>

                    <ProductTitle>{title}</ProductTitle>
                    <ProductDescription>{description}</ProductDescription>
                    <ProductBrand>By {brand}</ProductBrand>

                    <ProductRreviewContainer>
                      <ProductRating>{rating}</ProductRating>
                      <ReviewStar />
                    </ProductRreviewContainer>

                    <ProductDiscount>{discount}% off</ProductDiscount>
                    <ProductPrice>₹{price}</ProductPrice>
                    <ProductMrp><Span>M.R.P: ₹</Span><Span strike={true}>{mrp}</Span></ProductMrp>

                  </ProductdetailContainer>
                  <ProductCTAContainer>
                    {!isProductInCart
                      ? <MoveTocart onClick={() => {
                        dispatch({
                          type: TYPES.MOVE_TO_CART,
                          payload: { product: product }
                        })
                      }} disabled={!inStock} inStock={inStock} >
                        {inStock ? "Move To Cart" : "unavailable"}
                      </MoveTocart>
                      : <ViewInCart to="/cart">View In Cart</ViewInCart>
                    }
                    <ButtonGroup>
                      <AddToCart onClick={() => {
                        dispatch({
                          type: TYPES.ADD_TO_CART,
                          payload: { product: product, count: 1 }
                        })
                      }} disabled={!inStock && isProductInCart} inStock={inStock && !isProductInCart}>
                        <CartIcon />
                      </AddToCart>
                      <RemoveFromCart onClick={() => {
                        dispatch({
                          type: TYPES.REMOVE_FROM_WISHLIST,
                          payload: { id: itemId }
                        })
                      }}>
                        <TrashIcon />
                      </RemoveFromCart>
                    </ButtonGroup>
                  </ProductCTAContainer>
                </Card>
              );
            })
          }
        </WishlistContainer>
        : <EmptyPage />
      }
    </>
  )
}

export default WishlistCard