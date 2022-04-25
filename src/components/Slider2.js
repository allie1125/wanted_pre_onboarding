import React, { useState } from "react";

const Slider2 = () => {
  const [percentageValue, setPercentageValue] = useState(1);
  const percentButton = [1, 25, 50, 75, 100];
  const onChangePercentValue = (value) => {
    setPercentageValue(value);
  };
  return (
    <div className="slider_box">
      <div className="count_box">
        <span className="count">{percentageValue}</span> <span className="percent">%</span>
      </div>
      <div className="percent_line_box">
        <input
          className="line"
          type="range"
          min="1"
          max="100"
          step="1"
          value={percentageValue}
          onChange={(e) => onChangePercentValue(e.target.value)}
        ></input>
      </div>
      <div className="percent_buttons_box">
        {percentButton.map((el, index) => (
          <div key={index} onClick={() => onChangePercentValue(el)}>
            {el}%
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider2;
