import styled from "@emotion/styled"
import CheckoutForm from "../Components/checkout/CheckoutForm";
import CartSummary from "../Components/cart/CartSummary"

const CheckoutContainer = styled.div`
`;

const CheckoutSummaryContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px;
  border-radius: 10px;
  margin: 32px;
`;

const SummaryContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const PlaceOrder = styled.h1`
  color: #444444;
  text-align: center;
  margin: 16px;
`;

const CheckoutPage = () => {
  return (
    <CheckoutContainer>
      <PlaceOrder>Place Order</PlaceOrder>
      <CheckoutSummaryContainer>
        <CheckoutForm />
        <SummaryContainer>
          <CartSummary />
        </SummaryContainer>
      </CheckoutSummaryContainer>
    </CheckoutContainer>
  )
}

export default CheckoutPage