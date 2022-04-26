import React, { useState } from "react";
import "../style.scss";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  const changeToggleStatus = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <h2>1. Toggle</h2>
      <div className="toggle_box" onClick={changeToggleStatus}>
        <div className={`toggle_button ${toggle ? "right" : "left"}`}></div>
        <div className={`toggle_text ${toggle ? "gray" : "black"}`}>기본</div>
        <div className={`toggle_text ${toggle ? "black" : "gray"}`}>상세</div>
      </div>
    </>
  );
};

export default Toggle;
