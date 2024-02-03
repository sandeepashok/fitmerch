import styled from "@emotion/styled";
import { FaStar, FaTrash } from "react-icons/fa";
import { TYPES } from '../../context/actionTypes';
import { useDispatch, useSelector } from "react-redux";

const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    margin: 40px;
    width: 60%;
  `

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
    @media (max-width: 830px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `
const ProductImageContainer = styled.div`
    padding: 8px;
    display: flex;
`

const Image = styled.img`
    height: 230px;
    width: 190px;
    border-radius: 5px;
    border: 0.2px solid #7b7b7b0d;
`

const ProductdetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px;
    width: 350px;
    @media (max-width: 830px) {
      width: 280px;
    }
`

const ProductBrand = styled.div`
    color: rgba(49, 49, 49, 0.6431372549019608);
    font-size: 12px;
    font-weight: bold;
    padding: 10px 20px;
    @media (max-width: 830px) {
      text-align: center;
    }
`

const ProductTitle = styled.div`
    color: #424242;
    font-weight: bold;
    font-size: 20px;
    padding: 10px 20px 0px 20px;
    @media (max-width: 830px) {
      text-align: center;
    }
`

const ProductDescription = styled.div`
    color: #313131b5;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 20px 2.5px 20px;
    @media (max-width: 830px) {
      text-align: center;
    }
`

const ReviewCountSection = styled.div`
    display: flex;
    justify-content: flex-start;
    @media (max-width: 830px) {
      justify-content: center;
    }
`

const ProductRreviewContainer = styled.div`
    display: flex;
    background-color: #8d898921;
    font-size: 11px;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 4px;
    width: 40px;
    margin: 5px 20px 5px 20px;
`

const ProductRating = styled.div`
    padding: 5px;
    padding-right: 1.5px;
`

const ReviewStar = styled(FaStar)`
    color: #ff3f6c;
    padding: 5px 5px 5px 1.5px;
`

const ProductDiscountSection = styled.div`
    display: flex;
    justify-content: flex-start;
    @media (max-width: 830px) {
      justify-content: center;
    }
`

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
`

const ProductPrice = styled.div`
    font-weight: bold;
    margin: 5px 20px 0px 20px;
    @media (max-width: 830px) {
      text-align: center;
    }
`

const ProductMrp = styled.div`
    font-size: 12px;
    display: flex;
    margin: 0px 20px 5px 20px;
    @media (max-width: 830px) {
      justify-content: center;
    }
`

const Span = styled.div`
    text-decoration: ${({ strike }) => strike ? "line-through" : ""};
`

const ProductCTAContainer = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const MoveToWishlist = styled.button`
  background-color: white;
  color: #823fbd;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  margin: 8px;
  &:hover {
    background-color: #823fbd;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 4px;
    padding: 4px;
`

const CounterGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 10px;
`

const CounterBtn = styled.button`
  height: 27px;
  width: 27px;
  background-color: white;
  color: #FF3F6C;
  font-size: larger;
  border-radius: 50%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px;
  cursor: pointer;
  border: 0.1px solid #FF3F6C;
  &:hover {
    background-color: #FF3F6C;
    border: 0.1px solid white;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`

const DisabledCounterBtn = styled.button`
    height: 27px;
    width: 27px;
    background-color: white;
    color: grey;
    font-size: larger;
    border-radius: 50%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px;
    cursor: pointer;
    border: 0.1px solid grey;
`

const CountDisplay = styled.div`
  margin: 5px;
  padding: 5px 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px;
  border-radius: 5px;
  border: 0.2px;
  color: #823FBD;
  font-weight: bold;
`


const RemoveFromCart = styled.button`
  height: 27px;
  width: 45px;
  background-color: white;
  color: #FF3F6C;
  font-size: 14px;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px;
  cursor: pointer;
  &:hover {
    background-color: #FF3F6C;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`

const TrashIcon = styled(FaTrash)``

const CartCard = () => {

  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const dec = (product) => {
    dispatch({
      type: TYPES.ADD_TO_CART,
      payload: { product: product, count: -1 }
    })
  };
  const inc = (product) => {
    dispatch({
      type: TYPES.ADD_TO_CART,
      payload: { product: product, count: 1 }
    })
  };

  return (
    <CartContainer>
      {
        cart.map((product) => {
          const { imageURL, title, description, price, discount, brand, rating, mrp, itemId, quantity } =
            product;
          return (
            <Card key={itemId}>
              <ProductImageContainer>
                <Image src={imageURL} />
              </ProductImageContainer>
              <ProductdetailContainer>

                <ProductTitle>{title}</ProductTitle>
                <ProductDescription>{description}</ProductDescription>
                <ProductBrand>By {brand}</ProductBrand>

                <ReviewCountSection>
                  <ProductRreviewContainer>
                    <ProductRating>{rating}</ProductRating>
                    <ReviewStar />
                  </ProductRreviewContainer>
                </ReviewCountSection >

                <ProductDiscountSection>
                  <ProductDiscount>{discount}% off</ProductDiscount>
                </ProductDiscountSection>

                <ProductPrice>₹{price * quantity}</ProductPrice>
                <ProductMrp><Span>M.R.P: ₹</Span><Span strike={true}>{mrp * quantity}</Span></ProductMrp>

              </ProductdetailContainer>
              <ProductCTAContainer>
                <MoveToWishlist onClick={() => {
                  dispatch({
                    type: TYPES.MOVE_TO_WISHLIST,
                    payload: { product: product }
                  })
                }}>
                  Move to wishlist
                </MoveToWishlist>
                <ButtonGroup>
                  <CounterGroup>
                    {quantity === 1 ? <DisabledCounterBtn>&#8722;</DisabledCounterBtn> : <CounterBtn disabled={quantity === 1} onClick={() => dec(product)}>&#8722;</CounterBtn>}
                    <CountDisplay>{quantity}</CountDisplay>
                    <CounterBtn onClick={() => inc(product)}>&#43;</CounterBtn>
                  </CounterGroup>
                  <RemoveFromCart onClick={() => {
                    dispatch({
                      type: TYPES.REMOVE_FROM_CART,
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
    </CartContainer>
  )
}

export default CartCard