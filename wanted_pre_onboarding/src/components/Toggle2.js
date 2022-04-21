import React, { useState } from "react";
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
        <div className={`toggle_text ${toggle ? "gray" : "black"}`}>기본</div>
        <div className={`toggle_text ${toggle ? "black" : "gray"}`}>상세</div>
      </div>
      <p>{toggle ? "상세" : "기본"} 선택</p>
    </>
  );
};

export default Toggle;
