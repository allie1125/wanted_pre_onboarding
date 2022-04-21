import React from "react";

const Dropdown = () => {
  const dropdownMenus = ["Toggle", "Tab", "Slider", "Input", "Dropdown"];
  return (
    <div className="dropdown_box">
      <select>
        {dropdownMenus.map((el) => (
          <option value={el}>{el}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
