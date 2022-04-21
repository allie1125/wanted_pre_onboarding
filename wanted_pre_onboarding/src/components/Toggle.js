import React, { useState } from "react";
import "../style.scss";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div className="toggle_container" onClick={() => setToggle(!toggle)}>
        <div className={`toggle_button ${toggle ? "left" : "right"}`}></div>
        <div className="toggle_text">기본</div>
        <div className="toggle_text">상세</div>
      </div>
      <p>{toggle ? "기본" : "상세"} 선택</p>
    </>
  );
};

export default Toggle;
