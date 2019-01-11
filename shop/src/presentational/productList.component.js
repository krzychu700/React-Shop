import React from "react";
import Product from "./product.component";
import "../App.css";

const ProductList = props => (
  <div>
    {props.item.map(item => {
      return (
        <Product
          key={item.id}
          name={item.name}
          price={item.price}
          picture={item.picture}
        />
      );
    })}
  </div>
);

export default ProductList;
