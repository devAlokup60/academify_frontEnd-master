import React from "react";
import chatEmoj from "../components/images/chatemoji.svg";
import chatSupport from "../components/images/chatSupport.svg";
import call from "../components/images/call.svg";
import "./Contact.css";
import "./footerCard.css";

const FooterCard = ({ imageSrc, title, description, contactInfo }) => {
  return (
    <div className="border box-card border-gray-300 rounded-md w-full md:w-[320px] lg:w-[300px] h-[18rem] pb-[1.5rem] mt-4 md:mt-0  flex flex-col justify-between form-shadow">
      <div className="p-5">
        <img src={imageSrc} alt={title} className="mx-auto" />
      </div>
      <div className="px-5 flex flex-col p-5">
        <p className="pb-2 font-bold text-base md:text-lg lg:text-xl xl:text-2xl">{title}</p>
        <p className="text-gray-600 pb-2 text-sm md:text-base lg:text-lg xl:text-xl">{description}</p>
        <p className="underline font-semibold text-sm md:text-base lg:text-lg xl:text-xl">{contactInfo}</p>
      </div>
    </div>
  );
};



const Footer = () => {
  return (
    <div className="w-full justify-between items-center mx-auto relative footer-card" id="contact">
      <div className="text-center text-4xl font-medium mt-10 footer-heading">
        <p>
          Contact Our Friendly <span className="text-red-600"> Team</span>
        </p>
      </div>
      <div className="bg-violet-400 h-1 w-20 mt-1 mx-auto underline"></div>
      <div className="text-center text-2xl tracking-tight text-gray-700 font-medium mt-4 footer-para">
        <p>Let us know how we can help.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-x-40 gap-y-4">
        <FooterCard
          imageSrc={chatEmoj}
          title="Chat to Sales"
          description="Speak to our friendly team"
          contactInfo="chat@academify.in"
        />
        <FooterCard
          imageSrc={chatSupport}
          title="Chat to Support"
          description="We’re here to help"
          contactInfo="support@academify.in"
        />
        <FooterCard
          imageSrc={call}
          title="Call us"
          description="Mon-Fri 10am to 7pm (IST)"
          contactInfo="+91 9334045003"
        />
      </div>
    </div>
  );
};

export default Footer;





