import React, { useState } from "react";
import axios from "axios";
import "./Vpurchase.css";
import { CiSquareMinus } from "react-icons/ci";

import Img1 from "../../assets/shirt/pdt1.webp";
import Img2 from "../../assets/shirt/pdt2.webp";
import Img3 from "../../assets/shirt/pdt3.jpg";
import Img4 from "../../assets/shirt/pdt4.jpg";
import Img5 from "../../assets/shirt/pdt5.jpg";
import Img6 from "../../assets/shirt/pdt6.jpg";
import Img7 from "../../assets/grocery/milk.jpg";
import Img8 from "../../assets/grocery/lassi.jpg";
import Img9 from "../../assets/grocery/muesli.avif";
import Img10 from "../../assets/grocery/oreo.webp";

// ✅ Initial product list
const initialProducts = [
  { id: 1, name: "Modern Chair", image: Img1, price: 120, offer: "10% Off", count: 0 },
  { id: 2, name: "Stylish Lamp", image: Img2, price: 80, offer: "15% Off", count: 0 },
  { id: 3, name: "Cozy Sofa", image: Img3, price: 300, offer: "20% Off", count: 0 },
  { id: 4, name: "Wooden Table", image: Img4, price: 200, offer: "5% Off", count: 0 },
  { id: 5, name: "Elegant Vase", image: Img5, price: 50, offer: "25% Off", count: 0 },
  { id: 6, name: "Luxury Bed", image: Img6, price: 500, offer: "12% Off", count: 0 },
  { id: 7, name: "Classic Clock", image: Img7, price: 90, offer: "18% Off", count: 0 },
  { id: 8, name: "Bookshelf", image: Img8, price: 150, offer: "22% Off", count: 0 },
  { id: 9, name: "Muesli", image: Img9, price: 150, offer: "22% Off", count: 0 },
  { id: 10, name: "Oreo", image: Img10, price: 150, offer: "22% Off", count: 0 },
];

const Vpurchase = () => {
  const [products, setProducts] = useState(initialProducts);

  // ✅ Increase count
  const onAdd = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, count: product.count + 1 } : product
      )
    );
  };

  // ✅ Decrease count (preventing negative values)
  const onMinus = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.count > 0 ? { ...product, count: product.count - 1 } : product
      )
    );
  };

  // ✅ Place Order Function
  const placeOrder = async () => {
    const orderItems = products.filter((product) => product.count > 0);

    if (orderItems.length === 0) {
        alert("No items in cart to place an order!");
        return;
    }

    try {
        // ✅ Fix the URL to match backend port
        const response = await axios.post("http://localhost:3000/place-order", { products: orderItems });
        alert(response.data.message);
        window.location.href = "/cart";
    } catch (error) {
        console.error("Order failed:", error);
        alert("Failed to place order. Try again.");
    }
};


  return (
    <div className="vpurchase">
      <div className="place_order">
        <h1>Final Answer? Lock It In & Place Your Order! ✅ </h1>
        <button onClick={placeOrder} className="order_btn">Place Order</button>
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">${product.price}</p>
              <p className="offer">{product.offer}</p>

              <div className="product_count">
                <div onClick={() => onAdd(product.id)} className="add-to-cart">Add</div>
                <div className="dis_count">{product.count}</div>
                <div onClick={() => onMinus(product.id)} className="dis_minus">
                  <CiSquareMinus style={{ fontSize: 30 }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vpurchase;
