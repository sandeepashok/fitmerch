import { TYPES } from "./types";

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
};

const reducer = (state, action) => {
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
    default:
      return state;
  }
};

// Initialising products

const setProducts = (state, { data }) => {
  return { ...state, products: data, productListCopy: data };
};

// Selecting and setting filter states

const selectProductFilter = (state, { filterType, input }) => {
  if (filterType === TYPES.SORT_BY_PRICE) {
    return sortByPrice(state, input);
  } else if (filterType === TYPES.SORT_BY_DEPARTMENT) {
    return sortByDepartment(state, input);
  } else if (filterType === TYPES.SORT_BY_CATEGORY) {
    return sortByCategory(state, input);
  } else if (filterType === TYPES.SORT_BY_BRAND) {
    return sortByBrand(state, input);
  } else if (filterType === TYPES.SORT_BY_RATING) {
    return sortByRating(state, input);
  } else if (filterType === TYPES.INCLUDE_OUT_OF_STOCK) {
    return includeOutOfStockProduct(state);
  } else {
    console.error("Enter Valid Filter Type");
  }
};

const sortByPrice = (state, order) => {
  const { filters } = state
  return { ...state, filters: { ...filters, sortByPrice: order } }
};

const sortByDepartment = (state, selectedGender) => {
  const { filters, filters: { department } } = state
  const updatedDepartment = department.includes(selectedGender)
    ? department.filter(currentDepartment => currentDepartment !== selectedGender)
    : [...department, selectedGender]
  return { ...state, filters: { ...filters, department: updatedDepartment } }
};

const sortByCategory = (state, selectedCategory) => {
  const { filters, filters: { categories: category } } = state
  const updatedCategory = category.includes(selectedCategory)
    ? category.filter(currentCategory => currentCategory !== selectedCategory)
    : [...category, selectedCategory]
  return { ...state, filters: { ...filters, categories: updatedCategory } }
};

const sortByBrand = (state, selectedBrand) => {
  const { filters, filters: { brands } } = state
  const updatedBrand = brands.includes(selectedBrand)
    ? brands.filter(currentBrand => currentBrand !== selectedBrand)
    : [...brands, selectedBrand]
  return { ...state, filters: { ...filters, brands: updatedBrand } }
};

const sortByRating = (state, selectedrating) => {
  const { filters } = state
  return { ...state, filters: { ...filters, ratings: selectedrating } }
};

const includeOutOfStockProduct = (state) => {
  const { filters, filters: { includeOutOfStock } } = state
  return { ...state, filters: { ...filters, includeOutOfStock: !includeOutOfStock } }
};

// Filtering products 

export const filtering = (state) => {
  const { productListCopy, filters: { sortByPrice, department, categories, brands, ratings, includeOutOfStock } } = state
  const productscopy = [...productListCopy];

  let filteredByDepartment =
    department.length > 0
      ? productscopy.filter((product) => department.includes(product.gender))
      : productscopy;

  let filteredByCategory =
    categories.length > 0
      ? filteredByDepartment.filter((product) => categories.includes(product.category))
      : filteredByDepartment;

  let filteredByBrand =
    brands.length > 0
      ? filteredByCategory.filter((product) => brands.includes(product.brand))
      : filteredByCategory;

  let filteredByRatings =
    ratings.length > 0
      ? filteredByBrand.filter((product) => product.rating >= ratings)
      : filteredByBrand;

  let filteredBasedOnStock = includeOutOfStock
    ? filteredByRatings.filter((product) => product.inStock)
    : filteredByRatings;

  if (sortByPrice === "asc") {
    return { ...state, products: [...filteredBasedOnStock.sort((a, b) => (a.price > b.price ? 1 : -1))] };
  } else if (sortByPrice === "dec") {
    return { ...state, products: [...filteredBasedOnStock.sort((a, b) => (a.price < b.price ? 1 : -1))] };
  } else {
    return { ...state, products: filteredBasedOnStock };
  }
};

// Clearing all the filters

const clearAllFilters = (state, { filters }) => {
  return { ...state, filters: filters };
};

// Adding products to cart

const addToCart = (state, { product, count }) => {
  const { cart } = state;
  const { itemId: id } = product;
  const isProductInCart = cart.find(product => product.itemId === id);
  let updatedCart = [];
  const productCopy = { ...product };
  const cartCopy = [...cart];
  if (isProductInCart) {
    const itemToUpdate = cartCopy.findIndex(({ itemId }) => itemId === productCopy.itemId);
    cartCopy[itemToUpdate].quantity = cartCopy[itemToUpdate].quantity + count / 2;
    updatedCart = [...cartCopy];
  } else if (!isProductInCart) {
    productCopy.quantity = count;
    updatedCart = [...cart, productCopy];
  }
  return { ...state, cart: updatedCart }
}

// Removing product from cart

const removeFromCart = (state, { id }) => {
  const { cart } = state;
  const updatedCart = cart.filter(product => product.itemId !== id);
  return { ...state, cart: updatedCart }
}

// Moving product from cart to wishlist

const moveToWishlist = (state, { product }) => {
  const { cart, wishlist } = state;
  const { itemId: id } = product;
  const updatedWishlist = wishlist.find(product => product.itemId === id) ? [...wishlist] : [...wishlist, product]
  const updatedCart = cart.filter(({ itemId }) => itemId !== product.itemId)
  return { ...state, wishlist: updatedWishlist, cart: updatedCart }
}

// Adding products to wishlist

const addToWishlist = (state, { product }) => {
  const { wishlist } = state
  return { ...state, wishlist: [...wishlist, product] }
}

// Removing product from wishlist

const removeFromWishlist = (state, { id }) => {
  const { wishlist } = state;
  const updatedWishlist = wishlist.filter(product => product.itemId !== id);
  return { ...state, wishlist: updatedWishlist }
}

// Moving product from wishlist to cart

const moveToCart = (state, { product }) => {
  const { cart, wishlist } = state;
  const { itemId: id } = product
  const updatedWishlist = wishlist.filter(({ itemId }) => itemId !== product.itemId)
  const productCopy = { ...product }
  productCopy.quantity = 1;
  const updatedCart = cart.find(product => product.itemId === id) ? [...cart] : [...cart, productCopy]
  return { ...state, wishlist: updatedWishlist, cart: updatedCart }
}


export default reducer;
