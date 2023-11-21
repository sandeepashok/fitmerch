import styled from "@emotion/styled"
import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"

const SummaryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Summary = styled.div`
  margin: 40px;
  width: 450px;
  height: 250px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px;
  border-radius: 5px;
`

const SummaryHeading = styled.h2`
  margin: 10px;
  padding-left: 5px;
  padding-bottom: 10px;
  text-align: start;
  color: #424242;
  font-size: 18px;
  border-bottom: 1px dotted rgb(43 42 42 / 40%);
`

const PricingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 75%;
  margin: 16px 0;
`

const Pricing = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 0 8px;
  margin: 8px 16px;
  font-size: 18px;
`

const P = styled.p`
  margin: 1px;
`

const Discount = styled.p`
  color: #1abe22;
  margin: 1px;
`

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 1px 8px;
  margin: 16px;
  font-size: larger;
  border-top: 1px dotted rgb(43 42 42 / 40%);
  border-bottom: 1px dotted rgb(43 42 42 / 40%);
  padding-top: 16px;
  padding-bottom: 16px;
`


const CartSummary = () => {

  const { state: { cart } } = useContext(StoreContext);

  const mrpArr = [0];
  const priceArr = [0];
  cart && cart.forEach(cartItem => {
    mrpArr.push(cartItem.mrp * cartItem.quantity)
    priceArr.push(cartItem.price * cartItem.quantity)
  });

  const totalMrp = mrpArr.reduce((acc, cv) => acc + cv);
  const totalPrice = priceArr.reduce((acc, cv) => acc + cv);

  return (
    <SummaryContainer>
      <Summary>
        <SummaryHeading>PRICE DETAILS</SummaryHeading>
        <PricingContainer>
          <Pricing>
            <P>Price:</P>
            <P>₹{totalMrp}</P>
          </Pricing>
          <Pricing>
            <P>Discount:</P>
            <Discount>- ₹{totalMrp - totalPrice}</Discount>
          </Pricing>
          <Total>
            <P>Total Amount:</P>
            <P>₹{totalPrice}</P>
          </Total>
        </PricingContainer>
      </Summary>
    </SummaryContainer>
  )
}

export default CartSummary