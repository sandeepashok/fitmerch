import styled from "@emotion/styled"
import CartCard from "../Components/cart/CartCard"
import CartSummary from "../Components/cart/CartSummary"
import { useContext } from "react"
import { StoreContext } from "../context/StoreContext"
import EmptyPage from "./EmptyPage"
import { Link } from "react-router-dom"

const PageHeading = styled.h2`
  text-align: center;
  margin-top: 32px;
  font-size: 30px;
  color: #3E4152;
`

const CartPageContainer = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 1240px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`
const BtnContainer = styled.div`
  display: flex; 
  justify-content: center;
`

const ProceedToBuy = styled(Link)`
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

const SummarySection = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  @media (max-width: 1240px) {
    width: 100%;
  }
`

const CartPage = () => {

  const { state: { cart } } = useContext(StoreContext);

  return (
    <>
      {cart.length !== 0 && <PageHeading>Your Cart</PageHeading>}
      {cart.length !== 0
        ? <CartPageContainer>
          <CartCard />
          <SummarySection>
            <CartSummary />
            <BtnContainer>
              <ProceedToBuy to="/checkout">
                Proceed to Buy
              </ProceedToBuy>
            </BtnContainer>
          </SummarySection>
        </CartPageContainer>
        : <EmptyPage />}
    </>
  )
}

export default CartPage