import React from "react";
import List from "../AllTabs/List";
import "../AllTabs/AiFeature.css";

const AiFeatures = ({ aiFeatures }) => {
  return (
    <div className=" flex w-[95%] flex-wrap justify-center mx-auto mt-[30px] ai_feature-head">
      {/* important logic for hiding the data/// flex max-w-[33.33%] */}
      <div className="flex flex-1 flex-wrap mx-auto justify-center gap-6">
        {aiFeatures.map((aiFeature, id) => {
          return <List {...aiFeature} key={id} />;
        })}
      </div>
    </div>
  );
};

export default AiFeatures;
