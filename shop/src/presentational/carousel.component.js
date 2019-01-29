import "./carousel.css";
var React = require("react");
var Carousel = require("react-responsive-carousel").Carousel;

const DemoCarousel = props => {
  return (
    <Carousel
      autoPlay={true}
      showArrows={true}
      interval={3000}
      stopOnHover={true}
      infiniteLoop={true}
      className="sliderArea"
    >
      {props.lastItems.map(item => {
        return (
          <div key={item.id}>
            <img src={item.picture} />
            <p className="legend">{item.name}</p>
          </div>
        );
      })}
    </Carousel>
  );
};

export default DemoCarousel;
