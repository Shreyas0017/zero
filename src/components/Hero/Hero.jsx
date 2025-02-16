import React from "react";
import Image1 from "../../assets/shoppingcart.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Smart shopping, less wastage, more savings!",
    description: "Get high-quality near-expiry products at unbeatable prices while reducing waste.",
  },
  {
    id: 2,
    img: Image2,
    title: "Great Deals on Near-Expiry Products – Same Quality, Better Prices",
    description: "Enjoy your favorite products at up to 70% off without compromising on quality.",
  },
  {
    id: 3,
    img: Image3,
    title: "Sustainable Shopping Starts Here!",
    description: "Shop consciously and contribute to a greener, waste-free world.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* Background pattern */}
<div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* Hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id} className="px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                {/* Text content */}
                <div className="flex flex-col justify-center gap-4 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-4xl sm:text-6xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-lg"
                  >
                    {data.description}
                  </p>
                  <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-6 rounded-full text-lg"
                    >
                      Order Now
                    </button>
                  </div>
                </div>

                {/* Image section */}
                <div className="order-1 sm:order-2 flex justify-center">
                  <div data-aos="zoom-in" data-aos-once="true" className="relative z-10">
                    <img
                      src={data.img}
                      alt={data.title}
                      loading="lazy"
                      className="w-[280px] sm:w-[400px] lg:w-[500px] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
