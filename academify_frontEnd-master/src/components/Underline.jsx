import React from "react";

const Underline = (props) => {
  return (
    <div className="flex justify-center ">
      <div
        className="absolute bottom-1 flex justify-center items-center mx-auto w-[40px] text-center h-1 bg-btnBlue group-hover:block
              transition-all duration-200"
      ></div>
    </div>
  );
};

export default Underline;
