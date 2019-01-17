import React from "react";
import "./cart.css";

const Cart = props => (
  <div>
    <h1>KOSZYK</h1>
    {props.cart.map(product => {
      return (
        <div className="cartComponent" key={product.id}>
          <div className="cartContainer">
            <div className="cartImageArea">
              <img
                className="cartProductImage"
                src={product.picture}
                alt={`product${product.id}`}
              />
            </div>
            <div className="cartProductDescriptions">
              <div>
                <p className="cartProductTitle">{product.name}</p>
                <p className="cartProductText">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  nec est id nisi sodales ultrices in bibendum dui.
                </p>
              </div>
              <div className="cartProductBuyingArea">
                <p className="cartProduct cartProduct--grey">{`$${parseFloat(
                  product.price
                ).toFixed(2)}`}</p>
                <span className="cartProduct cartProductClick">-</span>
                <p className="cartProduct">1</p>
                <span className="cartProduct cartProductClick">+</span>
                <p className="cartProduct">szt</p>
                <span
                  className="cartDelProductButton"
                  onClick={() => props.delProduct(props.product.id)}
                >
                  usuń produkt
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    })}
    <div className="cartFinishArea">
      <p className="cartProduct cartProduct--grey">kod rabatowy</p>
      <p className="cartProduct">
        TOTAL:
        {` $${parseFloat(
          props.cart.reduce(function(previousValue, currentValue) {
            return previousValue + currentValue.price;
          }, 0)
        ).toFixed(2)} `}
      </p>
      <button className="buttonBuy">Zapłać</button>
    </div>
  </div>
);

export default Cart;
