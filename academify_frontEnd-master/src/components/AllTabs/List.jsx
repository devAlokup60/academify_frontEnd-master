import React, { useState } from "react";
import dotTag from "../images/dotTag.svg";
import "./List.css";
import contactBg from "../images/contactBg.svg";

const List = ({ id, title, info, tag, url }) => {
  // console.log(url);
  // console.log(info);

  const [readmore, setReadMore] = useState(false);
  const desc = readmore ? info : `${info.substring(0, 130)}...`;

  const [hidden, setHidden] = useState(true);

  function readmoreHandler() {
    setReadMore(!readmore);
  }
  return (
    <div className="feat-card">
      <div
        className={`flex-col gap-1 w-[390px] h-[22.8em] pb-[10px] mb-6 form-shadow rounded-xl relative single-card`}
      >
        <img
          src={url}
          className="w-[250px] h-[250px] object-fit justify-center items-center mx-auto"
        />
        <div className="flex justify-center items-center mx-auto rounded-3xl px-2 text-center  text-[12px] font-poppins text-medium text-[#065309] max-w-[160px] mb-2 tag">
          <img src={dotTag} className="mr-1" /> {<span>{tag}</span>}
        </div>

        <div className="w-[275px] h-[0.3px] bg-[#525466] opacity-50 mx-auto"></div>

        <p className="mx-auto text-[14px] px-4 text-[#FF1F41] font-poppins font-medium text-center ">
          {`- ${title} -`}
        </p>

        <p className="flex flex-col px-4 text-center mx-auto text-[14px] text-[#6C7995] font-poppins">
          {desc}
          <div
            className="text-[#407BFF] flex justify-end mr-[20px] pb-[5px] cursor-pointer hover:text-[#244a9b] transition-all delay-200"
            onClick={readmoreHandler}
          >
            {readmore ? "show less" : "read more"}
          </div>
        </p>
        {/* <div className="absolute bottom-0">
          <img
            src={contactBg}
            className="w-[500px] h-[40px] object-cover opacity-90"
          />
        </div> */}
      </div>
    </div>
  );
};

export default List;
