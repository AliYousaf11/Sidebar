import React, { useState } from "react";
import "./Index.css";

const Carousel = ({ slides }) => {
  const [position, setPosition] = useState(0);

  const PreArrow = () => {
    const current = position === 0;
    const NewPosition = current ? slides.length - 1 : position - 1;
    setPosition(NewPosition);
  };

  const NextArrow = () => {
    const current = position === slides.length - 1;
    const NewPosition = current ? 0 : position + 1;
    setPosition(NewPosition);
  };

  return (
    <div className="Content">
      <div
        className="Carousel"
        style={{ backgroundImage: `url(${slides[position].url})` }}
      >
        <div>
          <button onClick={PreArrow} className="Btn_pre">
            <i className="fas fa-angles-left"></i>
          </button>
          <button onClick={NextArrow} className="Btn_next">
            <i className="fas fa-angles-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
