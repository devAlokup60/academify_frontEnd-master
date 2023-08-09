import React from "react";
import "./TabContent.css";

const TabContent = ({ id, activeTab, children }) => {
  return activeTab === id ? <div className="tab">{children}</div> : null;
};

export default TabContent;
