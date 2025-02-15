import React from "react";
import Img1 from "../../assets/grocery/lassi.jpg";
import Img2 from "../../assets/grocery/milk.jpg";
import Img3 from "../../assets/grocery/muesli.avif";
import Img4 from "../../assets/grocery/oreo.webp";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Lassi",
    rating: 5.0,
    color: "Expiry by 22/04/25",
    offer: "50% off on original price ",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Milk",
    rating: 4.5,
    color: "Expiry by 22/04/25",
    offer: "50% off on original price ",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Muesli",
    rating: 4.7,
    color: "Expiry by 22/04/25",
    offer: "50% off on original price ",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Expiry by 22/04/25",
    offer: "50% off on original price ",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Oreo",
    rating: 4.5,
    color: "Expiry by 22/04/25",
    offer: "50% off on original price ",
    aosDelay: "800",
  },
];

const Products1 = () => {

  // Function to handle the view all products button click and navigate to the viewpdts page
  const handleClick = () => {
    window.location.href = '/viewpdts'; // Use window.location.href to navigate
  };

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Best Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Grocery Items
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Shop smart and save big with our near-expiry items. Top-quality goods at a fraction of the price!
          </p>
        </div>

        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <p className="text-sm text-gray-600">{data.offer}</p>

                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View all button */}
          <div className="flex justify-center">
            <button
              onClick={handleClick} style={{backgroundColor:"orange"}}// Handle button click
              className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md"
            >
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products1;
