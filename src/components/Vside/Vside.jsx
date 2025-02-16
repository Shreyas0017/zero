import React from 'react';
import './Vside.css';
import Img1  from '../../assets/shirt/pdt1.webp'
import Img2 from  '../../assets/shirt/pdt2.webp'
import Img3 from '../../assets/shirt/pdt3.jpg'
import Img4 from '../../assets/shirt/pdt4.jpg'
import Img5 from '../../assets/shirt/pdt5.jpg'
import Img6 from '../../assets/shirt/pdt6.jpg'
import Img7 from '../../assets/grocery/milk.jpg'
import Img8 from '../../assets/grocery/lassi.jpg'





const products = [
  {
    id: 1,
    name: "Cadubury Fruits and Nut",
    image: Img1,
    price: "$120",
  },
  {
    id: 2,
    name: "Kinderjoy - Harry Potter Version",
    image: Img2,
    price: "$80",
  },
  {
    id: 3,
    name: "Fererro Rocher",
    image: Img3,
    price: "$300",
  },
  {
    id: 4,
    name: "Doritos",
    image: Img4,
    price: "$200",
  },
  {
    id: 5,
    name: "Amul Fresh Cream",
    image: Img5,
    price: "$120",
  },
  {
    id: 6,
    name: "Yogar bar - protein bars",
    image:  Img6,
    price: "$80",
  },
  {
    id: 7,
    name: "Milk",
    image: Img7,
    price: "$300",
  },
  {
    id: 8,
    name: "Lassi",
    image: Img8,
    price: "$200",
  }
];

const Vside = () => {
  return (
    <div className='vside'>
        <div style={{fontWeight:600}} className="vside_head">
            <h1>Products Available</h1>
        </div>
      <div className='product-row'>
        {products.map((product) => (
          <div key={product.id} id='product-card'>
            <img src={product.image} alt={product.name} className='product-image' />
            <div style={{marginLeft:"30px"}} className='product-info'>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vside;
