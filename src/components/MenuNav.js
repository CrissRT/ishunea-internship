import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import "./MenuNav.css";
import arrowImage from "../images/arrow.svg";
import sunnyArrowImage from "../images/sunny-arrow.svg";
import romanian from "../images/romanian.svg";
import russian from "../images/russian.svg";
import israilean from "../images/israilean.svg";
import english from "../images/english.svg";

const MenuNav = ({ textColor = "white", title = "Placeholder", itemsDroplist = [] }) => {
  const [arrowSide, setArrowSide] = useState("down");
  const [language, setLanguage] = useState(title);
  const [items, setItemsDropList] = useState(itemsDroplist);

  const handleClick = (e) => {
    const selectedLanguage = e.target.textContent;
    const flagAndName = getFlagAndNameOfLanguage(selectedLanguage);
    if (flagAndName) {
      setLanguage(selectedLanguage);
      const updatedList = [language, ...items].filter(item => item !== selectedLanguage);
      setItemsDropList(updatedList);
    }
  };

  const handleToggle = useCallback(() => {
    setArrowSide(prevArrowSide => (prevArrowSide === "down" ? "up" : "down"));
  }, []);

  const getFlagAndNameOfLanguage = (name) => {
    switch (name.toLowerCase()) {
      case "english":
        return [english, "english"];
      case "romanian":
        return [romanian, "romanian"];
      case "russian":
        return [russian, "russian"];
      case "israilean":
        return [israilean, "israilean"];
      default:
        return null;
    }
  };

  const getColorClass = () => {
    switch (textColor) {
      case "white":
        return "white-color-svg";
      case "sunny":
        return "sunny";
      default:
        return "black";
    }
  };

  const getArrowClassNames = () => {
    const baseClass = "arrow";
    const directionClass = arrowSide === "up" ? "up" : "";
    return `${baseClass} ${directionClass} ${getColorClass()}`;
  };

  const flagAndName = getFlagAndNameOfLanguage(language);

  return (
    <div className="dropdown">
      {flagAndName && <img src={flagAndName[0]} className="flag" alt="flag" />}
      <button 
        className={`btn btn-secondary dropdown-toggle ${getColorClass() !== "white-color-svg" ? getColorClass() : "white-color-text"}`} 
        type="button" 
        data-bs-toggle="dropdown" 
        aria-expanded="false" 
        onClick={handleToggle}
      >
        {flagAndName ? flagAndName[1] : title}
        <img src={textColor === "sunny" ? sunnyArrowImage : arrowImage} className={getArrowClassNames()} alt="arrow" />
      </button>
      <ul 
        className="dropdown-menu" style={{color: "black"}}
      >
        {items.map((item, index) => (
          <li key={index} onClick={handleClick}>
            <a className="dropdown-item" href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuNav;
