import "./App.css";
import Navbar from "./app/Components/navbar/Navbar";
import CartPage from "./app/Pages/CartPage";
import HomePage from "./app/Pages/HomePage";
import { ListingPage } from "./app/Pages/ListingPage";
import NotFoundPage from "./app/Pages/NotFoundPage";
import WishlistPage from "./app/Pages/WishlistPage";
import StoreContextProvider from "./app/context/StoreContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <StoreContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop" element={<ListingPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="checkout" element="" />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </StoreContextProvider>
    </div>
  );
}

export default App;
