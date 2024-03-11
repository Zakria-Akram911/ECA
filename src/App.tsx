import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewProduct from "./pages/NewProduct";
import { ThemeProvider } from "@emotion/react";
import theme from "./utility/theme";
import Guidelines from "./pages/Guidelines";
import PaymentOptions from "./pages/PaymentOptions";
import Banner from "./pages/Banners";
import Promotions from "./pages/Promotions";
import Orders from "./pages/Orders";
import UpdatePage from "./pages/UpdatePage/Update";
// import SignUp from "./components/Auth/SignUp";
// import Login from "./components/Auth/Login";
// import React, { useEffect, useState } from "react";
import Chat from "./pages/Chat";
import Category from "./pages/Category";

function App() {
  // const [token, setToken] = useState(window.localStorage.getItem("userToken"));

  // useEffect(() => {
  //   const storedToken = window.localStorage.getItem("userToken");
  //   if (storedToken !== token) {
  //     setToken(storedToken);
  //   }
  // }, [token]);

  // const [isLoggedIn, setIsLoggedIn] = useState(Boolean(localStorage.getItem('userToken')));

  // const handleLogin = () => {

  //   setIsLoggedIn(true);
  // };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/products" element={<Products />} />
          <Route path="/add-product" element={<NewProduct />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/payment-options" element={<PaymentOptions />} />
          <Route path="/banners" element={<Banner />} />
          <Route path="/chats" element={<Chat />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/update-page/:productId" element={<UpdatePage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
