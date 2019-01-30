import Carousel from "react-bootstrap/Carousel";
var React = require("react");
const DemoCarousel = props => {
  return (
    <Carousel>
      {props.lastItems.map(item => {
        return (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={item.picture}
              alt="First slide"
            />
            <Carousel.Caption>
              <p>{item.name}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default DemoCarousel;
