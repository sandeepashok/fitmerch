import styled from '@emotion/styled'
import { useContext, useState } from 'react'
import { FaHeart, FaStar } from 'react-icons/fa'
import { StoreContext } from '../../context/StoreContext'
import { TYPES } from '../../context/types'
import { Link } from 'react-router-dom'

const CardContainer = styled.div`
  width: 300px;
  height: fit-content;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  margin: 20px;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: all 0.3s ease;
  }
`

const WishlistProductImageAndRatingsContainer = styled.div`
  position: relative;
  width: 260px;
  height: 312px;
  padding: 20px;
`

const WishlistBtn = styled(FaHeart)`
  font-size: 20px;
  color: ${({ isactive }) => isactive ? '#FF5656' : '#a9a9a9'};
  position: absolute;
  top: 30px;
  right: 30px;
`

const CTA = styled.button`
  background-color: ${({ isactive }) => isactive ? '#823fbd' : '#d6d6d6'};
  color: white;
  font-size: ${({ isactive }) => isactive ? '18px' : '16px'};
  padding: ${({ isactive }) => isactive ? '10px 15px' : '12px 15px'};
  border-radius: 10px;
  cursor: ${({ isactive }) => isactive ? 'pointer' : 'default'};
  &:hover {
    background-color: ${({ isactive }) => isactive ? '#6c349d' : ''};
  }
`

const ProductCardInfoSec = styled.div`
  background-color: ${({ isactive }) => isactive ? 'white' : ''};
  border-radius: ${({ isactive }) => isactive ? '2px' : ''};
  transform: ${({ isactive }) => isactive ? 'translateY(-3.5rem)' : ''};
  transition: ${({ isactive }) => isactive ? 'all 0.35s ease' : ''};
  position: ${({ isactive }) => isactive ? 'relative' : ''};
`

const ProductImage = styled.img`
  width: 260px;
  height: 312px;
  border: 0.2px solid #7b7b7b0d;
  border-radius: 5px;
`

const ProductRreviewContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: 30px;
  left: 30px;
  background-color: hsla(0, 0%, 100%, 0.8);
  font-size: 11px;
  border-radius: 2px;
`

const ProductRating = styled.div`
  padding: 5px;
  padding-right: 1.5px;
`

const ReviewStar = styled(FaStar)`
  color: #ff3f6c;
  padding: 4.5px 5px 5px 1.5px;
`

const ProductReviewCount = styled.div`
  padding: 5px;
  border-left: 1px solid #00000021;
`

const ProductTitleAndBrand = styled.div``

const ProductBrand = styled.div`
  color: rgba(49, 49, 49, 0.6431372549019608);
  font-size: 14px;
  font-weight: bold;
  padding: 10px 20px 2.5px 20px;
`

const ProductTitle = styled.div`
  color: #424242;
  font-weight: bold;
  font-size: 20px;
  padding: 2.5px 20px 10px 20px;
`

const ProductPricingAndCTA = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5px 20px 20px 20px;
`

const ProductPricing = styled.div`
  display: flex;
  align-items: center;
  color: #2b2a2a;
`

const ProductSellingPrice = styled.div`
  font-weight: bold;
  font-size: 24px;
  padding: 0 5px 0 0;
`

const ProductDiscount = styled.div`
  font-size: small;
  font-weight: bold;
  color: #823fbd;
  padding: 0 5px 0 0;
`

const DiscountOnHover = styled.h3`
  font-weight: bold;
  color: #6c349d;
  position: absolute;
  bottom: -57px;
  padding: 15px 0;
  background-color: #00000017;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 10px 10px;
`

const LinkBtn = styled(Link)`
background-color: #FF3F6C;
color: white;
font-size: 18px;
padding: 10px 15px;
border-radius: 10px;
cursor: pointer;
text-decoration: none;
&:hover {
  background-color: #f73d68;
}
`

const Span = styled.span``

export const Card = ({ product }) => {
  const { imageURL, title, price, discount, brand, rating, reviews, inStock, itemId } =
    product

  const { state: { cart, wishlist }, dispatch } = useContext(StoreContext)

  const [cardHoverState, setCardHoverState] = useState(false)

  const AddEffectToProductTitleAndBrand = () => setCardHoverState(true)

  const RemoveEffectToProductTitleAndBrand = () => setCardHoverState(false)

  const isInWishlist = (id) => wishlist.find(({ itemId }) => itemId === id)
  const isInCart = (id) => cart.find(({ itemId }) => itemId === id)

  const handleWishlist = () => {
    dispatch({
      type: !isInWishlist(itemId) ? TYPES.ADD_TO_WISHLIST : TYPES.REMOVE_FROM_WISHLIST,
      payload: !isInWishlist(itemId) ? { product } : { id: itemId }
    })
  }

  return (
    <CardContainer
      onMouseEnter={AddEffectToProductTitleAndBrand}
      onMouseLeave={RemoveEffectToProductTitleAndBrand}
    >
      <WishlistProductImageAndRatingsContainer>
        <WishlistBtn isactive={isInWishlist(itemId)} onClick={handleWishlist} />
        <ProductImage src={imageURL} alt={title} />
        <ProductRreviewContainer>
          <ProductRating>{rating}</ProductRating>
          <ReviewStar />
          <ProductReviewCount>{reviews}</ProductReviewCount>
        </ProductRreviewContainer>
      </WishlistProductImageAndRatingsContainer>
      <ProductCardInfoSec isactive={cardHoverState}>
        <ProductTitleAndBrand>
          <ProductBrand>{brand}</ProductBrand>
          <ProductTitle>{title}</ProductTitle>
        </ProductTitleAndBrand>
        <ProductPricingAndCTA>
          <ProductPricing>
            <ProductSellingPrice>₹{price}</ProductSellingPrice>
            {cardHoverState
              ? (
                <></>
              )
              : (
                <ProductDiscount>{`(${discount}% off)`}</ProductDiscount>
              )}
          </ProductPricing>
          {
            !isInCart(itemId)
              ? <CTA isactive={inStock} disabled={!inStock} onClick={() => {
                dispatch({
                  type: TYPES.ADD_TO_CART,
                  payload: { product: product, count: 1 }
                })
              }}>
                {inStock ? 'Add to Cart' : 'Out of Stock'}
              </CTA>
              : <LinkBtn to="/cart" >Go to Cart</LinkBtn>
          }
        </ProductPricingAndCTA>
        {cardHoverState && (
          <DiscountOnHover>
            {inStock
              ? (
                <Span>{`🎉 ${discount}% off on this product 🎉`}</Span>
              )
              : (
                <Span>Product Unavailable</Span>
              )}
          </DiscountOnHover>
        )}
      </ProductCardInfoSec>
    </CardContainer>
  )
}
