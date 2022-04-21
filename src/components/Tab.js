import React, { useState } from "react";
import "../style.scss";

const Tab = () => {
  const tabMenu = [
    { idx: 0, tabName: "potato", kor: "감자" },
    { idx: 1, tabName: "sweet_potato", kor: "고구마" },
    { idx: 2, tabName: "curry_rice", kor: "카레라이스" },
  ];
  const [activeTab, setActiveTab] = useState("potato");
  const changeTabMenu = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="tab_box">
      <div className="tabs">
        {tabMenu.map(({ idx, tabName, kor }) => (
          <div key={idx} className={`tab_text ${tabName === activeTab ? "bold" : ""}`} onClick={() => changeTabMenu(tabName)}>
            {kor}
          </div>
        ))}
      </div>
      <div className="bottom_bar">
        <div className={`inner_bar ${activeTab}`}></div>
      </div>
    </div>
  );
};

export default Tab;
