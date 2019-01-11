import React from "react";
import "../components/Products.css";

const Product = props => {
  return (
    <div className="product" key={props.id}>
      <div className="productPictureArea">
        <img className="productPicture" src={props.picture} alt="1" />
      </div>

      <div>{`product name: ${props.name}`} </div>

      <div>{`price: ${props.price} euro`}</div>
    </div>
  );
};

export default Product;
