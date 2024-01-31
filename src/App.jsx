import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Navbar from "./app/Components/navbar/Navbar";
import CartPage from "./app/Pages/CartPage";
import CheckoutPage from "./app/Pages/CheckoutPage";
import HomePage from "./app/Pages/HomePage";
import { ListingPage } from "./app/Pages/ListingPage";
import NotFoundPage from "./app/Pages/NotFoundPage";
import WishlistPage from "./app/Pages/WishlistPage";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { fetchProducts } from "./app/context/actions";
import { TYPES } from "./app/context/actionTypes";

function App() {
  const dispatch = useDispatch();

  const filters = useSelector(state => state.filters)

  const baseURL = `https://fitmerch-api.onrender.com`;

  useEffect(() => {
    dispatch(fetchProducts(baseURL))
  }, [baseURL, dispatch]);
  useEffect(() => {
    dispatch({
      type: TYPES.ON_INITIALISATION
    })
  }, [filters, dispatch])
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<ListingPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="wishlist" element={<WishlistPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
