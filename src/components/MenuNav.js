import React, { useState, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  // Check if any item in the dropdown is active
  const isAnyItemActive = items.some(item => location.pathname === item.link);

  // Determine button text color based on active state
  const buttonTextColor = isAnyItemActive ? 'nav-link-active' : undefined;


  const handleClick = (e) => {
    const selectedLanguage = e.target.textContent;
    const flagAndName = getFlagAndNameOfLanguage(selectedLanguage);
    if (flagAndName) {
      setLanguage(selectedLanguage);
      const updatedList = [language, ...items].filter(item => item !== selectedLanguage);
      setItemsDropList(updatedList);
    }
    handleToggle();
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

  const getTextColorClass = () => {
    let colorText = textColor;
    switch (colorText) {
      case "white":
        colorText = "text-white";
        break;
      case "sunny":
        colorText = "sunny";
        break;
      default:
        colorText = "black";
        break;
    }
    if (Boolean(buttonTextColor)) {
      colorText = "sunny"
    }
    return colorText;
  };

  const getArrowClassNames = () => {
    const getArrowColor = () => {
      let colorArrow = textColor;
      if (colorArrow === "white") return "white-color-svg"
    }

    const baseClass = "arrow";
    const directionClass = arrowSide === "up" ? "up" : "";
    return `${baseClass} ${directionClass} ${Boolean(buttonTextColor) === false && getArrowColor()}`;
  };

  const flagAndName = getFlagAndNameOfLanguage(language);

  if (flagAndName !== null) {
    return(
      <div className="dropdown">
        <img src={flagAndName[0]} className="flag" alt="flag" />
        <button 
          className={`btn btn-secondary dropdown-toggle ${getTextColorClass() !== "text-white" ? getTextColorClass() : "text-white"}`} 
          type="button" 
          data-bs-toggle="dropdown" 
          aria-expanded="false" 
          onClick={handleToggle}
        >
          {flagAndName[1]}
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
    )
  }

  // If no flag and name is found for the given language, show the default
  return (
    <div className="dropdown">
      <button 
        className={`btn btn-secondary dropdown-toggle ${getTextColorClass()} ${buttonTextColor}`} 
        type="button" 
        data-bs-toggle="dropdown" 
        aria-expanded="false" 
        onClick={handleToggle}
      >
        {title}
        <img src={textColor === "sunny" || buttonTextColor === "nav-link-active" ? sunnyArrowImage : arrowImage} className={getArrowClassNames()} alt="arrow" />
      </button>
      <ul 
        className="dropdown-menu" style={{color: "black"}}
      >
        {items.map((item, index) => (
            <li key={index} onClick={handleClick}>
              <NavLink className="dropdown-item" to={item.link}>{item.name}</NavLink>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default MenuNav;
