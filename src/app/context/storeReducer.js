import { TYPES } from "./actionTypes";
import { addToCart, addToWishlist, clearAllFilters, clearCart, filtering, moveToCart, moveToWishlist, removeFromCart, removeFromWishlist, selectProductFilter, setMobileFilterVisiblity, setProducts } from "./actions";

export const initialState = {
  products: [],
  productListCopy: [],
  wishlist: [],
  cart: [],
  filters: {
    sortByPrice: "",
    department: [],
    categories: [],
    brands: [],
    ratings: 0,
    includeOutOfStock: false,
  },
  booleanStates: {
    productCardHoverState: false,
    isMobileFilterVisible: false,
    isPaymentSuccessModalOpen: false,
  },
  formStates: {
    name: '',
    phoneNumber: '',
    billingAddress: '',
    shippingAddress: '',
    cardNumber: '',
    cardExpiryDate: '',
    cvv: '',
  },
  paymentErrorStates: {
    cardNumber: '',
    cardExpiryDate: '',
    cvv: '',
  }
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPES.SET_PRODUCTS:
      return setProducts(state, payload);
    case TYPES.SELECT_PRODUCT_FILTER:
      return selectProductFilter(state, payload);
    case TYPES.ON_INITIALISATION:
      return filtering(state);
    case TYPES.CLEAR_ALL:
      return clearAllFilters(state, initialState);
    case TYPES.ADD_TO_CART:
      return addToCart(state, payload);
    case TYPES.REMOVE_FROM_CART:
      return removeFromCart(state, payload);
    case TYPES.MOVE_TO_WISHLIST:
      return moveToWishlist(state, payload);
    case TYPES.ADD_TO_WISHLIST:
      return addToWishlist(state, payload);
    case TYPES.REMOVE_FROM_WISHLIST:
      return removeFromWishlist(state, payload);
    case TYPES.MOVE_TO_CART:
      return moveToCart(state, payload);
    case TYPES.CLEAR_CART:
      return clearCart(state)
    case TYPES.SET_MOBILE_FILTER_VISIBLITY:
      return setMobileFilterVisiblity(state)
    default:
      return state;
  }
};

export default productReducer;
