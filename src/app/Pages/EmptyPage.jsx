import styled from '@emotion/styled'
import { Link, useLocation } from 'react-router-dom'
import { BsCartDashFill, BsHeartbreakFill } from 'react-icons/bs'
import { GiSurprised } from 'react-icons/gi'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  min-width: 100vw;
`
const NoProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const PlaceHolderImg = styled.img`
  height: 350px;
  width: 350px;
  @media (max-width: 730px) {
    height: 250px;
    width: 250px;
  }
`
const Text = styled.h1`
  font-family: "Open Sans",sans-serif;
  font-size: 24px;
  color: #7538ab;
`

const ShopNow = styled(Link)`
  background-color: white;
  color: #FF406D;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  margin: 32px;
  &:hover {
    background-color: #FF406D;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`

const WishlistEmote = styled(BsHeartbreakFill)`
  color: #FF406D;
  margin: -8px 4px;
  font-size: 26px;
`
const CartEmote = styled(BsCartDashFill)`
  color: #FF406D;
  margin: -6px 4px;
  font-size: 28px;
`

const NoProductsEmote = styled(GiSurprised)`
  color: #FF406D;
  margin: -5px 2px;
  font-size: 32px;
`

const EmptyPage = () => {
  const location = useLocation();
  if (location.pathname === "/wishlist") {
    return <Container>
      <PlaceHolderImg src="https://res.cloudinary.com/dkavbodkk/image/upload/v1696833043/empty%20cart%20and%20wishlist/jrqsvoy6fhewhojmclbf.svg" />
      <Text>Your Wishlist is Empty<WishlistEmote /></Text>
      <ShopNow to="/shop">Shop Now</ShopNow>
    </Container>
  } else if (location.pathname === "/cart") {
    return <Container>
      <PlaceHolderImg src="https://res.cloudinary.com/dkavbodkk/image/upload/v1696531372/empty%20cart%20and%20wishlist/tpiuyzfl19bycxt7k5fn.svg" />
      <Text>Your Cart is Empty<CartEmote /></Text>
      <ShopNow to="/shop">Shop Now</ShopNow>
    </Container>
  } else if (location.pathname === "/shop") {
    return <NoProductsContainer>
      <PlaceHolderImg src="https://res.cloudinary.com/dkavbodkk/image/upload/v1697175899/empty%20cart%20and%20wishlist/undraw_happy_music_g6wc_ecimey.svg" />
      <Text>No Products Found<NoProductsEmote /></Text>
    </NoProductsContainer>
  }
}

export default EmptyPage