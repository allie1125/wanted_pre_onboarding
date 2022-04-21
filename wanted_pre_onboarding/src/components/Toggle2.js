import React, { useState, useEffect } from "react";
import "../style.scss";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  const changeToggleStatus = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="toggle_box" onClick={changeToggleStatus}>
        <div className={`toggle_button ${toggle ? "right" : "left"}`}></div>
        <div className="toggle_text">기본</div>
        <div className="toggle_text">상세</div>
      </div>
      <p>{toggle ? "기본" : "상세"} 선택</p>
    </>
  );
};

export default Toggle;
