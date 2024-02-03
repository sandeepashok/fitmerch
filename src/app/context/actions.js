// Initialising products

import axios from "axios";
import { TYPES } from "./actionTypes";

export const fetchProducts = (baseURL) => {
  return async (dispatch) => {
    try {
      const productsJSON = await axios.get(`${baseURL}/products`);
      dispatch({
        type: TYPES.SET_PRODUCTS,
        payload: { data: productsJSON.data },
      })
    } catch (error) {
      console.error(error)
    }
  }
}

export const setProducts = (state, { data }) => {
  return { ...state, products: data, productListCopy: data };
};

// Selecting and setting filter states

export const selectProductFilter = (state, { filterType, input }) => {
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

export const sortByPrice = (state, order) => {
  const { filters } = state
  return { ...state, filters: { ...filters, sortByPrice: order } }
};

export const sortByDepartment = (state, selectedGender) => {
  const { filters, filters: { department } } = state
  const updatedDepartment = department.includes(selectedGender)
    ? department.filter(currentDepartment => currentDepartment !== selectedGender)
    : [...department, selectedGender]
  return { ...state, filters: { ...filters, department: updatedDepartment } }
};

export const sortByCategory = (state, selectedCategory) => {
  const { filters, filters: { categories: category } } = state
  const updatedCategory = category.includes(selectedCategory)
    ? category.filter(currentCategory => currentCategory !== selectedCategory)
    : [...category, selectedCategory]
  return { ...state, filters: { ...filters, categories: updatedCategory } }
};

export const sortByBrand = (state, selectedBrand) => {
  const { filters, filters: { brands } } = state
  const updatedBrand = brands.includes(selectedBrand)
    ? brands.filter(currentBrand => currentBrand !== selectedBrand)
    : [...brands, selectedBrand]
  return { ...state, filters: { ...filters, brands: updatedBrand } }
};

export const sortByRating = (state, selectedrating) => {
  const { filters } = state
  return { ...state, filters: { ...filters, ratings: selectedrating } }
};

export const includeOutOfStockProduct = (state) => {
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

export const clearAllFilters = (state, { filters }) => {
  return { ...state, filters: filters };
};

// Adding products to cart

export const addToCart = (state, { product, count }) => {
  const { cart } = state;
  const { itemId: id } = product;
  const isProductInCart = cart.find(product => product.itemId === id);
  let updatedCart = [];
  const productCopy = { ...product };
  const cartCopy = [...cart];
  if (isProductInCart) {
    const itemToUpdate = cartCopy.findIndex(({ itemId }) => itemId === productCopy.itemId);
    cartCopy[itemToUpdate].quantity = cartCopy[itemToUpdate].quantity + count;
    updatedCart = [...cartCopy];
  } else if (!isProductInCart) {
    productCopy.quantity = count;
    updatedCart = [...cart, productCopy];
  }
  return { ...state, cart: updatedCart }
}

// Removing product from cart

export const removeFromCart = (state, { id }) => {
  const { cart } = state;
  const updatedCart = cart.filter(product => product.itemId !== id);
  return { ...state, cart: updatedCart }
}

// Moving product from cart to wishlist

export const moveToWishlist = (state, { product }) => {
  const { cart, wishlist } = state;
  const { itemId: id } = product;
  const updatedWishlist = wishlist.find(product => product.itemId === id) ? [...wishlist] : [...wishlist, product]
  const updatedCart = cart.filter(({ itemId }) => itemId !== product.itemId)
  return { ...state, wishlist: updatedWishlist, cart: updatedCart }
}

// Adding products to wishlist

export const addToWishlist = (state, { product }) => {
  const { wishlist } = state
  return { ...state, wishlist: [...wishlist, product] }
}

// Removing product from wishlist

export const removeFromWishlist = (state, { id }) => {
  const { wishlist } = state;
  const updatedWishlist = wishlist.filter(product => product.itemId !== id);
  return { ...state, wishlist: updatedWishlist }
}

// Moving product from wishlist to cart

export const moveToCart = (state, { product }) => {
  const { cart, wishlist } = state;
  const { itemId: id } = product
  const updatedWishlist = wishlist.filter(({ itemId }) => itemId !== product.itemId)
  const productCopy = { ...product }
  productCopy.quantity = 1;
  const updatedCart = cart.find(product => product.itemId === id) ? [...cart] : [...cart, productCopy]
  return { ...state, wishlist: updatedWishlist, cart: updatedCart }
}

// Emptying the cart

export const clearCart = (state) => {
  return { ...state, cart: [] }
}

// Boolean state related functions

export const setMobileFilterVisiblity = (state) => {
  const { booleanStates } = state
  return { ...state, booleanStates: { ...booleanStates, isMobileFilterVisible: !booleanStates.isMobileFilterVisible } }
}

// Form state and error message related functions