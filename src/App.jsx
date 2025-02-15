import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import pages/components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products1 from "./components/Products/Products1";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import ViewProducts from './components/ViewProducts/ViewProducts';
import Cart from "./components/Cart/Cart";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        <Hero />
        <Products1 />
        <TopProducts  />
        <Banner />
        <Subscribe />
        <Footer />
      </div>
    ),
  },
  {
    path: "/viewpdts",
    element: <ViewProducts />, // Only render the ViewProducts component here
  },
  {
    path:"/cart", element:<Cart/>

  }
]);

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <RouterProvider router={myRouter} />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
