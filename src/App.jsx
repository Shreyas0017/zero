import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import pages/components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products1 from "./components/Products/Products1";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import ViewProducts from "./components/ViewProducts/ViewProducts";
import Cart from "./components/Cart/Cart";
import GoogleAuth from "./components/Auth/GoogleAuth";
import Chatbot from "./components/Chatbot/Chatbot";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  const [chatopen,setChatopen] = useState(false)
  const togglechat = ()=>{
    setChatopen(!chatopen)
  }

  const myRouter = createBrowserRouter([
    { path: "/", element: <GoogleAuth setUser={setUser} /> }, // Pass setUser here
    {
      path: "/zero",
      element: user ? (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
          <Navbar />
          <Hero />
          <Products1 />
          <TopProducts />
          <Banner />
          <Subscribe />
          <Chatbot closeChat={togglechat}/>
          <Footer />
        </div>
      ) : (
        <GoogleAuth setUser={setUser} />
      ),
    },
    { path: "/viewpdts", element: <ViewProducts /> },
    { path: "/cart", element: <Cart /> },
  ]);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <RouterProvider router={myRouter} />
      <Popup />
    </div>
  );
};

export default App;
