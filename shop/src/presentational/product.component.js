import React from "react";
import "./products.css";

const Product = props => {
  return (
    <div className="product" key={props.id}>
      <div className="productPictureArea">
        <img className="productPicture" src={props.picture} alt="1" />
      </div>
      <div className="productTextArea">
        <div className="productName">{props.name} </div>

        <div className="productPrice">{`$${parseFloat(props.price).toFixed(
          2
        )}`}</div>
      </div>
    </div>
  );
};

export default Product;
