import React, { useState } from "react";
import List from "../AllTabs/List";
import "../AllTabs/Feature.css";

const Features = ({ features }) => {
  return (
    <div className=" flex w-[95%] flex-wrap justify-between mx-auto mt-[30px] relative feature-head">
      {/* important logic for hiding the data/// flex max-w-[33.33%] */}
      <div className="flex flex-1 flex-wrap mx-auto justify-center gap-6 feature-tab">
        {features.map((feature, id) => {
          return <List {...feature} key={id} />;
        })}
      </div>
    </div>
  );
};

export default Features;
