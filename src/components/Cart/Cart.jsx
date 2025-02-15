import React, { useEffect, useState } from 'react';
import './Cart.css';
import { IoMdExit } from "react-icons/io";
import { FaShoppingCart, FaCreditCard, FaGoogleWallet } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { RiPaypalLine } from "react-icons/ri";
import axios from 'axios';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    // Fetch items from backend
    const fetchItems = async () => {
        try {
            const res = await axios.get('http://localhost:3000/fetch');
            setCartItems(res.data);
        } catch (error) {
            console.error("Error fetching items:", error.message);
        }
    };

    useEffect(() => {
        setInterval(()=>{
            fetchItems();

        },1500)
        
    }, []);

    // Remove an item from cart
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    // Calculate total amount
    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.count, 0).toFixed(2);
    };
    const onDelete =async (id)=>{
        try{
            await axios.delete(`http://localhost:3000/delete/${id}`).then((res)=>{
                alert("Product removed")
            })

        }catch(error){
            console.log(error)
        }


    }
    const onExit = ()=>{
        window.location.href = '/viewpdts'
    }
    

    return (
        <div className='cart'>
            <div className="cart_nav">
                <div className="cart_icon">
                    <FaShoppingCart style={{ fontSize: 28 }} />
                    <h2 style={{ fontSize: 18, marginLeft: 10 }}>My Cart</h2>
                </div>
                <div className="cart_right">
                    <div className="cart_icon" onClick={() => setCartItems([])}>
                        <h2 style={{ fontSize: 14, marginRight: 10 }}>Remove All</h2>
                    </div>
                    <div onClick={onExit} className="cart_exit">
                        <h2  style={{ fontSize: 14, marginRight: 10 }}>Exit</h2>
                        <IoMdExit style={{ fontSize: 26 }} />
                    </div>
                </div>
            </div>

            <div className="cart_content">
                <div className="cart_left">
                    <div className="cart_left_head">
                        <h2 style={{ fontWeight: 600 }}>Products Selected :</h2>
                    </div>
                    {cartItems.length === 0 ? (
                        <p>No items in cart</p>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className="cart_item">
                                <img style={{ height: 60 }} src={item.image} alt={item.name} />
                                <h4 style={{ marginLeft: 20, fontWeight: 700, fontSize: 20 }}>{item.name}</h4>
                                <p style={{ margin: "0px 15px" }}>${item.price} x {item.count}</p>
                                <FiTrash2 style={{ color: "red", cursor: "pointer", margin: "0px 15px" }} onClick={() => onDelete(item._id)} />
                            </div>
                        ))
                    )}
                </div>

                <div className="cart_right">
                    <div className="payment-container">
                        <h2 className="payment-title">Payment Summary</h2>
                        <div className="payment-info">
                            <p className="total-label">Total Amount:</p>
                            <h3 className="total-amount">${calculateTotal()}</h3>
                        </div>
                        <div className="payment-options">
                            <button className="payment-btn credit-card">
                                <FaCreditCard className="icon" /> Pay with Credit Card
                            </button>
                            <button className="payment-btn paypal">
                                <RiPaypalLine className='icon'/> Pay with PayPal
                            </button>
                            <button className="payment-btn google-pay">
                                <FaGoogleWallet className="icon" /> Pay with Google Pay
                            </button>
                        </div>
                        <button className="checkout-btn" onClick={() => alert(`Payment of $${calculateTotal()} Successful!`)}>Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
