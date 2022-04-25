import React, { useState, useEffect, useRef } from "react";

const Slider = () => {
  const [width, setWidth] = useState(0);
  const [xPosition, setXPosition] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);
  const elementRef = useRef(null);
  useEffect(() => {
    setWidth(elementRef.current.clientWidth);
    // setRect(elementRef.current.offsetTop);
  }, []); //empty dependency array so it only runs once at render
  useEffect(() => {
    console.log("width?", width);
    // console.log("rect?", rect);
  }, [width]);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    console.log("window.innerWidth", window.innerWidth);
  }, [window.innerWidth]);

  const handleResize = () => {
    setInnerWidth(window.innerWidth);
    console.log(`브라우저 화면사이즈:${window.innerWidth}`);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onClickPercentageBar = (e) => {
    const { pageX } = e;
    setXPosition(pageX);
  };
  return (
    <div className="slider_box">
      <div className="count_box">
        <span className="count">{xPosition > 0 ? Math.ceil(xPosition - (innerWidth - 117) / 2) : ""}</span> <span className="percent">%</span>
      </div>
      <div className="percent_line_box">
        <div ref={elementRef} className="line" onMouseMove={(e) => onClickPercentageBar(e)}></div>
      </div>
    </div>
  );
};

export default Slider;
