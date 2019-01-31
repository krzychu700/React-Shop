import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "./productList.css";
import { Link } from "react-router-dom";

const DemoCarousel = props => {
  return (
    <Carousel interval={2000}>
      {props.lastItems.map(item => {
        return (
          <Carousel.Item key={item.id}>
            <Link className="link" to={"/product/" + item.id}>
              <img
                className="d-block w-100"
                src={item.picture}
                alt="First slide"
              />
              <Carousel.Caption>
                <p>{item.name}</p>
                <p className="productPrice">
                  {`$${parseFloat(item.price).toFixed(2)}`}
                </p>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default DemoCarousel;
