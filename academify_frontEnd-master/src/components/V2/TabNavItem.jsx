import React from "react";
import "./TabNavItem.css";

const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };
  return (
    <div className="flex justify-center text-center items-center nav ">
      <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
        {title}
      </li>
    </div>
  );
};

export default TabNavItem;
