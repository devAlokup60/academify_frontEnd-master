import React from "react";
import "./Card.css";




const Card = ({ sliderData }) => {
  return (
    <div className="w-full max-w-[1300px] max-h-[420px] lg:max-h-[none] flex flex-col-reverse lg:flex-row justify-between items-center mx-auto bg-btnBlue rounded-md hover:opacity-80 cursor-pointer relative">

      {/* Left part (Text) */}
      <div className="lg:w-7/12 space-y-3 p-5 md:p-10 w-full">
        <p className="font-poppins font-medium text-lg md:text-xl lg:text-2xl leading-[1.2] text-white">
          {sliderData.title}
        </p>
        <p className="font-poppins text-sm md:text-base lg:text-lg leading-7 pt-3 md:pt-5 text-white opacity-70 tracking-tight">
          {sliderData.desc}
        </p>
      </div>

      {/* Image for medium and small screens */}
      <div className="lg:hidden w-full relative">
        <div className="object-cover w-full h-[300px] md:h-[420px]">
          <img
            className="object-cover w-full h-full"
            src={sliderData.url}
            loading="lazy"
            alt=""
          />
        </div>
      </div>

      {/* Right part (Image) */}
      <div className="lg:w-5/12 relative hidden lg:flex img-shadow lg:mr-[-5px]">
        <div className="object-cover w-full h-[300px] md:h-[420px]">
          <img
            className="object-cover w-full h-full"
            src={sliderData.url}
            loading="lazy"
            alt=""
          />
        </div>
      </div>

    </div>
  );
};

export default Card;















// {
//   sliderData.map((slider) => {
//     return (
//       <div className="space-y-4 p-10 w-12/12 caraousel-cards absolute overflow-hidden flex justify-between">
//         <div className="flex flex-col max-w-[8/12] gap-5">
//           <p className="font-poppins font-medium text-[28px] leading-[1.2] text-white">
//             {slider.title}
//           </p>
//           <p className="font-poppins text-[15px] leading-7 pt-5 text-white opacity-70 tracking-tight">
//             {slider.desc}
//           </p>
//         </div>

//         <div className="absolute flex right-[0px] z-[10] img-shadow top-[20px] card-overlay  overflow-hidden">
//           <img
//             className="object-cover min-w-[340px] max-h-[351px] z-[1000] "
//             src={slider.url}
//             loading="lazy"
//           />
//         </div>
//       </div>
//     );
//   });
// }
