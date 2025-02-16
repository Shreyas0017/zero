import React from "react";
import Img1 from "../../assets/shirt/pdt1.webp";
import Img2 from "../../assets/shirt/pdt2.webp";
import Img3 from "../../assets/shirt/pdt3.jpg";
import Img4 from "../../assets/shirt/pdt4.jpg";
import Img5 from '../../assets/shirt/pdt5.jpg';
import Img6  from '../../assets/shirt/pdt6.jpg';
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Cadbury Fruit and Nuts",
    description:
      "Indulge in the perfect combination of smooth Cadbury chocolate, crunchy nuts, and fruity goodness in every bite. A delicious treat for chocolate lovers!",
  },
  {
    id: 2,
    img: Img2,
    title: "Kinder Joy - Harry Potter Edition",
    description:
      "Unlock the magic with Kinder Joy's Harry Potter Edition! Enjoy a delicious treat and collect exclusive, enchanting surprises from the wizarding world.",
  },
  {
    id: 3,
    img: Img3,
    title: "Ferrero Rocher",
    description:
      "Experience the luxury of Ferrero Rocher—crisp wafers, creamy chocolate, and a whole hazelnut, all wrapped in gold! A premium treat that’s perfect for indulging or gifting.",
  },
  {
    id: 4,
    img: Img4,
    title: "Doritos Nachos",
    description:
      "Get your crunch on with Doritos Nachos! The perfect snack for any occasion, packed with bold and cheesy flavors. A deliciously addictive treat.",
  },
  {
    id: 5,
    img: Img5,
    title: "Amul Fresh Cream",
    description:
      "Amul Fresh Cream is the perfect ingredient for your desserts, curries, or beverages. Rich, creamy, and versatile—bring out the best flavors in every dish.",
  },
  {
    id: 6,
    img: Img6,
    title: "Buy 2 Get 1 Free Protein Bars",
    description:
      "Stock up on healthy snacks with our Buy 2 Get 1 Free Protein Bars offer! Packed with high-quality protein, these bars are perfect for fueling your day.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  const handleOrderNow = ()=>{
    window.location.href = '/viewpdts'
  }
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Discover our top-rated products, loved for their quality, taste, and value. These are customer favorites and sure to delight you!
          </p>
        </div>
        {/* Body section */}
        <div
          style={{ margin: "20px 0px" }}
          className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 gap-16 md:gap-30 place-items-center"
        >
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl  bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[400px]"
            >
              {/* image section */}
              <div className="h-[100px] ">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center hover:bg-black/80">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderNow}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
