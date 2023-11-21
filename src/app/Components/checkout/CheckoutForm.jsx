import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { StoreContext } from '../../context/StoreContext';
import { Link } from 'react-router-dom';
import { TYPES } from '../../context/types';

const FormContainer = styled.div`
  width: 100%;
  margin: 32px;
  display: flex;
  justify-content: flex-end;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const Input = styled.input`
  width: 95%;
  padding: 15px;
  margin: 15px;
  box-sizing: border-box;
  background-color: #f2f2f2;
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Button = styled.button`
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
`;

const LinkButton = styled(Link)`
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

const CalendarInput = styled(DatePicker)`
  width: 95%;
  padding: 15px;
  margin: 15px;
  box-sizing: border-box;
  background-color: #f2f2f2;
  border-radius: 5px;
`;

const AddressSection = styled.div`
`;

const DisplayDataSection = styled.div`
  margin: 20px 0;
  width: 95%;
`;

const DisplayData = styled.div`
  background-color: #f2f2f2;
  padding: 15px;
  border-radius: 5px;
  margin: 15px;
`;

const DataItem = styled.p`
  margin: 15px;
  font-size: 16px;
  strong {
    font-weight: bold;
  }
`;

const ErrorText = styled.p`
  color: red;
  margin: 5px 0;
`;

const ModalContainer = styled.div`
  display: ${({ isactive }) => isactive ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  background-color: #191919f7;
  min-height: 100%;
  min-width: 100%;
  position: fixed;
  top:0;
  left: 0;
  z-index: 99;
`

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #FFFFFF;
  color: black;
  font-weight: bold;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  width: 250px;
  height: 200px;
`
const SuccessImg = styled.div`
  display: flex;
  justify-content: center;
`

const CheckoutForm = () => {

  const { state: { cart }, dispatch } = useContext(StoreContext);

  const priceArr = [0];
  cart && cart.forEach(cartItem => {
    priceArr.push(cartItem.price * cartItem.quantity)
  });

  const totalPrice = priceArr.reduce((acc, cv) => acc + cv);

  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    billingAddress: '',
    shippingAddress: '',
    cardNumber: '',
    cardExpiryDate: '',
    cvv: '',
  });

  const [paymentErrors, setPaymentErrors] = useState({
    cardNumber: '',
    cardExpiryDate: '',
    cvv: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen)

  // Handle form field changes
  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
    setPaymentErrors({ ...paymentErrors, [name]: '' });
  };

  const validatePaymentFields = () => {
    let isValid = true;
    const { cardNumber, cardExpiryDate, cvv } = formData;
    const expirationDate = new Date(cardExpiryDate);

    if (!cardNumber || cardNumber.length < 16) {
      setPaymentErrors({ ...paymentErrors, cardNumber: 'Please enter a valid card number' });
      isValid = false;
    }

    if (!cardExpiryDate || expirationDate < new Date()) {
      setPaymentErrors({ ...paymentErrors, cardExpiryDate: 'Please enter a valid expiry date' });
      isValid = false;
    }

    if (!cvv || cvv.length < 3) {
      setPaymentErrors({ ...paymentErrors, cvv: 'Please enter a valid CVV' });
      isValid = false;
    }

    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validatePaymentFields()) {
      setIsModalOpen(true)
    } else {
      console.log('Form validation failed. Please check the payment details.');
    }
  };

  const onSuccess = () => {
    setIsModalOpen(false);
    dispatch({
      type: TYPES.CLEAR_CART
    })
  };

  return (
    <>
      {/* Payment Success Modal */}
      <ModalContainer isactive={isModalOpen}>
        <Modal>
          <SuccessImg>
            <svg width="85px" height="85px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="48" height="48" fill="white" fill-opacity="0.01"></rect> <path d="M24 4L29.2533 7.83204L35.7557 7.81966L37.7533 14.0077L43.0211 17.8197L41 24L43.0211 30.1803L37.7533 33.9923L35.7557 40.1803L29.2533 40.168L24 44L18.7467 40.168L12.2443 40.1803L10.2467 33.9923L4.97887 30.1803L7 24L4.97887 17.8197L10.2467 14.0077L12.2443 7.81966L18.7467 7.83204L24 4Z" fill="#FF406D" stroke="#823FBD" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17 24L22 29L32 19" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </SuccessImg>
          <p>Payment Successful!</p>
          <div>
            <LinkButton to="/" onClick={onSuccess}>Okay</LinkButton>
          </div>
        </Modal>
      </ModalContainer>

      {/* Form */}
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <h2>Add Address:</h2>
          {/* Name */}
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="Full Name"
            required
          />

          {/* Phone Number */}
          <Input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
            placeholder="Phone Number"
            required
          />

          {/* Shipping Address */}
          <AddressSection>
            <Input
              as="textarea"
              name="shippingAddress"
              value={formData.shippingAddress}
              onChange={(e) => handleInputChange('shippingAddress', e.target.value)}
              placeholder="Shipping Address"
              required
            />
          </AddressSection>

          {/* Display Form Data */}
          <DisplayDataSection>
            <h2>Entered Form Data:</h2>
            <DisplayData>
              <DataItem>
                <strong>Name:</strong> {formData.name}
              </DataItem>
              <DataItem>
                <strong>Phone Number:</strong> {formData.phoneNumber}
              </DataItem>
              <DataItem>
                <strong>Shipping Address:</strong> {formData.shippingAddress}
              </DataItem>
            </DisplayData>
          </DisplayDataSection>

          <h2>Payment:</h2>
          {/* Card Number */}
          <Input
            type="number"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={(e) => {
              if (e.target.value.length < 17) {
                handleInputChange('cardNumber', e.target.value)
              }
            }}
            placeholder="Enter Card Number"
            required
          />
          <ErrorText>{paymentErrors.cardNumber}</ErrorText>

          {/* Card Expiry Date */}
          <CalendarInput
            selected={formData.cardExpiryDate}
            onChange={(date) => handleInputChange('cardExpiryDate', date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            placeholderText="Select Card Expiry Date"
            required
          />
          <ErrorText>{paymentErrors.cardExpiryDate}</ErrorText>

          {/* CVV */}
          <Input
            type="number"
            name="cvv"
            value={formData.cvv}
            onChange={(e) => {
              if (e.target.value.length < 4) {
                handleInputChange('cvv', e.target.value)
              }
            }}
            placeholder="CVV"
            required
          />
          <ErrorText>{paymentErrors.cvv}</ErrorText>

          {/* Submit Button */}
          <ButtonContainer>
            <Button type="submit">Pay ₹{totalPrice}</Button>
          </ButtonContainer>
        </Form>

      </FormContainer>
    </>
  );
};

export default CheckoutForm;
