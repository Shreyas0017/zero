import React, { useEffect, useState } from "react";
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

const initialProducts = [
  { id: 1, name: "Cadbury Nut and Fruits", image: Img1, price: 120, offer: "10% Off", count: 0, date: "10/01/25" },
  { id: 2, name: "Protein Bars", image: Img6, price: 500, offer: "12% Off", count: 0, date: "25/01/25" },
  { id: 3, name: "Kinderjoy - Harry Potter Edition", image: Img2, price: 80, offer: "15% Off", count: 0, date: "15/02/25" },
  { id: 4, name: "Milk", image: Img7, price: 90, offer: "18% Off", count: 0, date: "28/02/25" },
  { id: 5, name: "Fererro Rocher", image: Img3, price: 300, offer: "20% Off", count: 0, date: "05/03/25" },
  { id: 6, name: "Lassi", image: Img8, price: 150, offer: "22% Off", count: 0, date: "20/03/25" },
  { id: 7, name: "Doritos", image: Img4, price: 200, offer: "5% Off", count: 0, date: "10/04/25" },
  { id: 8, name: "Muesli", image: Img9, price: 250, offer: "22% Off", count: 0, date: "25/04/25" },
  { id: 9, name: "Amul Fresh Cream", image: Img5, price: 50, offer: "25% Off", count: 0, date: "15/05/25" },
  { id: 10, name: "Oreo", image: Img10, price: 150, offer: "22% Off", count: 0, date: "30/05/25" },
];

const Vpurchase = () => {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);

  // Delete all previous orders before placing a new one
  const deleteAll = async () => {
    try {
      await axios.delete("http://localhost:3000/deleteall");
      console.log("Previous orders deleted successfully.");
    } catch (error) {
      console.error("Error deleting previous orders:", error.message);
      alert("Failed to clear previous orders. Try again.");
    }
  };

  const placeOrder = async () => {
    const orderItems = filteredProducts.filter((product) => product.count > 0);
    if (orderItems.length === 0) {
      alert("No items in cart to place an order!");
      return;
    }

    try {
      // Step 1: Delete previous orders
      await deleteAll();

      // Step 2: Place the new order
      const response = await axios.post("http://localhost:3000/place-order", { products: orderItems });
      alert(response.data.message);
      window.location.href = "/cart";
    } catch (error) {
      console.error("Order failed:", error);
      alert("Failed to place order. Try again.");
    }
  };

  const onAdd = (id) => {
    setFilteredProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, count: product.count + 1 } : product
      )
    );
  };

  const onMinus = (id) => {
    setFilteredProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.count > 0 ? { ...product, count: product.count - 1 } : product
      )
    );
  };

  const filter = (months) => {
    const currentDate = new Date();
    const targetDate = new Date();
    targetDate.setMonth(currentDate.getMonth() - months);
    
    const filtered = initialProducts.filter((product) => {
      const [day, month, year] = product.date.split("/").map(Number);
      const productDate = new Date(`20${year}`, month - 1, day);
      return productDate >= targetDate;
    });
    setFilteredProducts(filtered);
  };

  // Delete previous orders on component mount
  useEffect(() => {
    deleteAll();
  }, []);

  return (
    <div className="vpurchase">
      <div className="place_order">
        <h1>Final Answer? Lock It In & Place Your Order! ✅ </h1>
        <button onClick={placeOrder} className="order_btn">Place Order</button>
        <div className="dropdown">
          <button style={{ marginLeft: 30 }} className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown">
            Filter
          </button>
          <ul className="dropdown-menu">
            {[5, 4, 3, 2, 1].map((month) => (
              <li key={month}>
                <a className="dropdown-item" href="#" onClick={(e) => { e.preventDefault(); filter(month); }}>
                  Best of {month} Month{month > 1 ? "s" : ""}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
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
