


import React from 'react'
import './Vnav.css'
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

import { IoMdArrowDropdown } from "react-icons/io";



const Vnav = () => {
    return (
        <div className='vnav'>
            <div className="vicon font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={Logo} alt="Logo" className="w-20" />
                Shopsy

            </div>
            <div className="v_delivery">
                <h1 style={{ fontWeight: 600, width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>Delivery in 8 min  <IoMdArrowDropdown style={{ margin: "0px  10px" }} /></h1>
                <div style={{width:"100%"}} className="add">
                <p>James Anderson
                    456 Maple Avenue
                    Apt 12B
                    Los Angeles, CA 90015
                    United States</p>

                </div>
                

            </div>
            <div className="v_sbox">
                <div className="v_sbox_inside" style={{ padding: "10px" }}>
                    <input type='text' placeholder='Search for Items'></input>
                    <IoMdSearch style={{ fontSize: "22px" }} />



                </div>


            </div>
            <div className="v_cart">
                <button className='btn btn-outline-success'>Log Out</button>
            <FaShoppingCart style={{color:"green",fontSize:"27px"}} />


            </div>

        </div>
    )
}

export default Vnav
