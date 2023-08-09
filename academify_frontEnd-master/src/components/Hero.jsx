import React, { useState } from "react";
import hero from "../components/images/hero.svg";
import { AiOutlineClose } from "react-icons/ai";
import "./Hero.css";
import logo from "../components/images/logo.svg";

const Hero = () => {
  return (
    <div className="parent" id="home">
      <div className="w-full max-w-[90%] flex flex-col lg:flex-row justify-between items-center mx-auto main-contents md:pt-5 sm:pt-8">
        {/* left part */}
        <div className="text-center lg:text-left space-y-3 left-part lg:w-[50%]">
          <p className="font-poppins font-semibold text-sm lg:text-base text-black mt-8 lg:mt-16">
            SAY GOOD BYE TO <span className="text-red-600">PAPERWORKS !</span>
          </p>
          <p className="font-poppins font-semibold text-xl lg:text-4xl text-black mt-2 lg:mt-3">
            <span className="text-btnBlue">Empowering</span> Educational
            Institutes with Cutting-Edge{" "}
            <span className="text-red-600">SaaS</span> Tools!
          </p>
          <p className="font-poppins text-sm lg:text-base leading-7 pt-4 lg:pt-6 text-textGray opacity-70 tracking-tight z-[-1] para">
            Transform the way you manage academic activities with our innovative
            Software-as-a-Service (SaaS) solutions. We understand the unique
            challenges faced by educational institutes and have developed
            powerful tools to streamline administrative tasks, enhance
            communication, and foster collaboration across all branches.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center pt-6 lg:pt-10 left-btn">
            <a href="#sales_form" className="w-full md:w-auto">
              <button
                className="py-2 md:py-3 px-6 md:px-14 font-poppins bg-btnBlue text-white btn-shadow border-lightBlue border
              rounded-3xl text-sm md:text-md hover:bg-blue-800 font-bold"
              >
                Pre-Register
              </button>
            </a>
            <p className="text-textGray usersCount">
              <span className="text-green-600 font-bold">100+</span> Users
              already registered
            </p>
          </div>
        </div>
        {/* right part */}
        <img
          src={hero}
          alt=""
          className="w-full max-w-[580px] mt-10 lg:mt-0 right-part lg:w-[50%]"
        ></img>
      </div>
    </div>
  );
};

export default Hero;

