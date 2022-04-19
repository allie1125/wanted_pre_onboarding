import React, { useEffect, useState } from "react";
import "../style.scss"

const Toggle = () => {
    const [toggle,setToggle] = useState(false)
    
    return (
    <div className="toggle_container">
      <div onClick={()=>setToggle(!toggle)} className={toggle?"on":""}>기본</div>
      <div onClick={()=>setToggle(!toggle)} className={!toggle?"on":""}>상세</div>
    </div>
  );
};

export default Toggle;
