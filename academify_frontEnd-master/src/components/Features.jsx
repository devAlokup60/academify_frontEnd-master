import React, { useContext, useState } from "react";
import List from "./AllTabs/List";
// import "./Feature.css";
// import circle from "../images/circle.svg";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const Features = ({ features }) => {
  // console.log(features);
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="features">
      <div
        className="flex gap-5 flex-row max-w-[1200px] ml-[25px] mt-[30px] cursor-pointer hover:text-btnBlue transition-all delay-200 "
        onClick={() => setShowAll(!showAll)}
      >
        <img src="" alt="" className="w-[30px] object-fit" />
        {/* <div className="bg-gray-300 relative max-w-[1200px] w-full px-2 rounded-md">
          <p className="text-[22px] font-poppins">Product Features</p>

          <div className="flex absolute top-[6px] right-[1rem] text-2xl">
            {showAll ? <AiOutlineDown /> : <AiOutlineUp />}
          </div>
        </div> */}
      </div>

      {/* important logic for hiding the data  */}
      <div className="cards gap-4 pt-6 mb-5">
        {showAll &&
          features.map((feature, id) => {
            return <List {...feature} key={id} />;
          })}
      </div>
    </div>
  );
};

export default Features;
