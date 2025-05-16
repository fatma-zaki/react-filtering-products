import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-category">{product.category}</p>
        <p className="card-price">{product.price} EGP</p>
        <button className="card-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;