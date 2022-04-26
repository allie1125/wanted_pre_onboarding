import React, { useState, useEffect } from "react";

const Dropdown = () => {
  const dropdownMenus = ["Toggle", "Tab", "Slider", "Input", "Dropdown", "Apple", "Banana", "Orange", "Cherry"];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [userInput, setUserInput] = useState({ value: "" });
  const [searchResultMenu, setSearchResultMenu] = useState([]);
  const { value } = userInput;

  useEffect(() => {
    search();
  }, [userInput]);

  const onClickDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onChangeInput = (e) => {
    const { value } = e.target;
    setUserInput({ ...userInput, value });
  };

  const search = () => {
    if (value !== "") {
      //dropdown메뉴를 순회하면서 검색문자를 포함한 메뉴배열만 리턴(대소문자 구분없이 검색)
      const result = dropdownMenus.filter((word) => word.toLowerCase().includes(value.toLowerCase()));
      setSearchResultMenu(result);
    } else {
      //검색입력값이 없거나 모두지워졌을때 검색메뉴배열 비우기
      setSearchResultMenu([]);
    }
  };

  const renderAllDropdownMenu = () => {
    //검색입력값이 없을 때 기본메뉴배열 노출
    if (value === "") {
      return dropdownMenus.map((el, i) => (
        <li
          key={i}
          onClick={() => {
            setSelectedOption(el);
            setIsDropdownOpen(!isDropdownOpen);
          }}
        >
          {el}
        </li>
      ));
    }
    return null;
  };

  const renderSearchDropdownMenu = () => {
    //검색문자를 포함하는 메뉴배열 노출
    return searchResultMenu.map((el, i) => (
      <li
        key={i}
        onClick={() => {
          setSelectedOption(el);
          setIsDropdownOpen(!isDropdownOpen);
          setUserInput({ value: "" });
        }}
      >
        {el}
      </li>
    ));
  };

  return (
    <div className="dropdown_box">
      <h2>5. Dropdown</h2>
      <ul>
        <li className="default_option" onClick={onClickDropdown}>
          {selectedOption === "" ? "과제 선택" : selectedOption}
          <span>▼</span>
        </li>
        <div className={`option_box ${isDropdownOpen ? "on" : "off"}`}>
          <li className="search_box">
            <span>🔍</span>
            <input type="text" onChange={(e) => onChangeInput(e)} placeholder="검색..." value={value} />
          </li>
          {searchResultMenu.length !== 0 ? renderSearchDropdownMenu() : renderAllDropdownMenu()}
        </div>
      </ul>
    </div>
  );
};

export default Dropdown;
