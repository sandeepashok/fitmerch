import styled from "@emotion/styled"
import { GiSurprised } from "react-icons/gi"
import { Link } from "react-router-dom"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  min-width: 100vw;
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
  margin-left: 32px;
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

const Emote = styled(GiSurprised)`
  color: #FF406D;
  margin: -5px 2px;
  font-size: 32px;
`

const NotFoundPage = () => {
  return (
    <Container>
      <PlaceHolderImg src="https://res.cloudinary.com/dkavbodkk/image/upload/v1696834834/empty%20cart%20and%20wishlist/ckeskyjrw9bsihirytqw.svg" />
      <Text>404 Page Not Found<Emote /></Text>
      <ShopNow to="/shop">Shop Now</ShopNow>
    </Container>
  )
}

export default NotFoundPage