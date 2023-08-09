import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import sliderData from "./sliderData";
import Slider from "./components/Slider";
import Attention from "./components/Attention";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FooterSection from "./components/FooterSection";
import Tabs from "./components/TabComponents/Tabs";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  return (
    <div className="main-app">
      <Navbar />

      <Hero />

      <div className="text-center pt-16 ">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">
          Our Best <span className="text-red-600"> Features </span>
        </h1>

        <div className="bg-violet-400 h-[4px] w-[100px] md:w-[150px] mt-1 mx-auto"></div>
      </div>
      <Tabs />
      <Attention />
      <div className="text-center pt-4 mt-[50px] feature-title">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">
          Why Choose <span className="text-red-600"> Us ?</span>
        </h1>

        <div className="bg-violet-400 h-[4px] w-20 md:w-24 lg:w-28 mt-2 mx-auto underline"></div>
      </div>
      <Slider sliderData={sliderData} />

      <div className="text-center mt-[40px] contact-heading ">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">
          Book A Enquiry Call  <span className="text-red-600"> Now </span>
        </h1>

        <div className="bg-violet-400 h-[4px] w-[150px] md:w-[200px] lg:w-[250px] mt-1 mx-auto underline"></div>
      </div>
      <Contact />

      <Footer />

      <FooterSection />

    </div>
  );
}

export default App;

