import TestimonialCard from "./TestimonialCard";
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";
import "../sass/components/Slider.scss";
import { useState } from "react";

const Slider = ({ content }) => {
  const [sliderPostion, setSliderPosition] = useState(0);

  const handleLeftClick = () => {
    setSliderPosition((prev) => (prev <= 0 ? content.length - 1 : prev - 1));
  };
  const handleRightClick = () => {
    setSliderPosition((prev) => (prev >= content.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider">
      <div className="arrow" onClick={handleLeftClick}>
        <img src={arrowLeft} />
      </div>
      <div className="slides-container">
        {content.map((item, index) => (
          <div
            key={index}
            className="slide"
            style={{ translate: `${-100 * sliderPostion}%` }}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="arrow" onClick={handleRightClick}>
        <img src={arrowRight} />
      </div>
    </div>
  );
};

export default Slider;
