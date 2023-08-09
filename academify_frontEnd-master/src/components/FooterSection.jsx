import React from "react";
import footerBg from "../components/images/footerBg.svg";
import logo from "../components/images/logo.svg";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <footer className="bg-btnBlue shadow mt-6">
      <div className="w-full max-w-screen-xl p-4 md:py-8 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img src={logo} className="h-8 mr-3" alt="" />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023
          <a href="academify.in" className="hover:underline">
            Academify
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default FooterSection;
