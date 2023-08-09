import React from "react";
import contactBg from "../components/images/contactBg.svg";
import "./Contact.css";
import { BsArrowRight, BsCheckLg, BsPause } from "react-icons/bs";
import {submitFormData} from '../modules/submitFormData'
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone_number:'',
    email:'',
    organisation_name:'',
    state:'',
    mode:''
  });
  const state = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Union Territories",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman & Diu",
    "Delhi",
    "Jammu & Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ];
  const mode=["Sales", "Pre-Registration"]
  const submitButtonHandler=async (event)=>{
    event.preventDefault();
    await submitFormData(formData)
  }
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="w-[100%] flex lg:flex-col justify-between items-center mx-auto contact-card mb-[30px]" id="sales_form">
      <div className="text-center text-[24px] tracking-tight text-textGray opacity-70 mx-auto  mt-[50px] max-w-[80%] mb-[4rem]">
        <p className=" pb-8">
          Our team is happy to answer your questions. Please fill out the
          form and we’ll get in touch with you as soon as possible.
        </p>
      </div>
      <div className="pt-2 relative flex w-[100%] justify-between items-center mx-auto bg-btnBlue pb-[2rem]">
        <div className="w-[600px] h-[620px] bg-white border rounded-md form-shadow flex relative ml-[4rem] mt-[-3rem]">
          <form className="" onSubmit={submitButtonHandler}>
            <div className="flex gap-[70px] mt-[10px] mx-auto justify-between items-center">
              <label htmlFor="fName">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                name='first_name'
                onChange={handleFormChange}
                value={formData.firstName}
                required='true'
                className="w-[350px] h-[40px] px-3 outline-outlineColor caret-outlineColor border border-textGray rounded-md text-outlineColor"
              />
            </div>
            <div className="flex gap-[70px] mt-[27px] px-8 mx-auto justify-between items-center">
              <label htmlFor="lName">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name='last_name'
                required='true'
                onChange={handleFormChange}
                value={formData.lastname}
                className="w-[350px] h-[40px] px-3 outline-outlineColor caret-outlineColor border border-textGray rounded-md text-outlineColor"
              />
            </div>
            <div className="flex gap-8 mt-[27px] px-8 mx-auto justify-between items-center">
              <label htmlFor="org">Insitution name</label>
              <input
                type="text"
                placeholder="Institution Name"
                name='organisation_name'
                onChange={handleFormChange}
                required='true'
                value={formData.orgName}
                className="w-[350px] h-[40px] px-3 outline-outlineColor caret-outlineColor border border-textGray rounded-md text-outlineColor"
              />
            </div>
            <div className="flex gap-[108px] mt-[27px] px-8 mx-auto justify-between items-center">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Email"
                name='email'
                onChange={handleFormChange}
                required='true'
                value={formData.email}
                className="w-[350px] h-[40px] px-3 outline-outlineColor caret-outlineColor border border-textGray rounded-md text-outlineColor"
              />
            </div>
            <div className="flex gap-[108px] mt-[27px] px-8 mx-auto justify-between items-center">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                placeholder="Mobile Number"
                name='phone_number'
                onChange={handleFormChange}
                required='true'
                value={formData.phone}
                className="w-[350px] h-[40px] px-3 outline-outlineColor caret-outlineColor border border-textGray rounded-md text-outlineColor"
              />
            </div>
            <div className="flex gap-[110px] mt-[27px] px-8 mx-auto justify-between items-center relative select">
              <label htmlFor="state">State</label>
              <div className="flex w-[350px] h-[40px] bg-gray-600 justify-between items-center  mt-0 border border-textGray rounded text-outlineColor">
                <select
                  name="state"
                  id="standard-select"
                  className="w-[100%] h-[100%] select text-outlineColor"
                  value={formData.state}
                  required='true'
                  onChange={handleFormChange}
                >
                  <option value={''} className="text-outlineColor">
                    Select State
                  </option>
                  {state.map((item, index) => {
                    return (
                      <option
                        value={item}
                        key={index}
                        className="text-outlineColor"
                      >
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="flex gap-[110px] mt-[27px] px-8 mx-auto justify-between items-center relative select">
              <label htmlFor="state">Mode</label>
              <div className="flex w-[350px] h-[40px] bg-gray-600 justify-between items-center  mt-0 border border-textGray rounded text-outlineColor">
                <select
                  name="mode"
                  id="standard-select"
                  className="w-[100%] h-[100%] select text-outlineColor"
                  value={formData.mode}
                  onChange={handleFormChange}
                  required='true'
                >
                  <option value={''} className="text-outlineColor">
                    Select Enquiry Mode
                  </option>
                  {mode.map((item, index) => {
                    return (
                      <option
                        value={item}
                        key={index}
                        className="text-outlineColor"
                      >
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="flex absolute bottom-[10px] right-[50px]">
              <button
                className="py-3 px-[125px] font-poppins bg-btnBlue text-white btn-shadow border-lightBlue border
              rounded-3xl text-md  hover:bg-blue-800 font-bold" type="submit"
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>
        <div className="absolute right-[3rem] top-[4rem] max-w-[45%] text-white text-[20px] flex justify-center items-center text-center opacity-90">
          <p>
            Whether you are a big institute or Small Institute let’s Make it
            Smart with Integrating most advances AI integrated Saas Tool
          </p>
        </div>
        <div className="flex flex-col absolute right-[6rem] top-[14rem] gap-4 max-w-[45%] text-white text-[20px] opacity-90">
          <div className="flex flex-row items-center gap-4 ">
            <BsArrowRight />
            <p>Learn more about Academify</p>
          </div>
          <div className="flex flex-row items-center gap-4  ">
            <BsArrowRight />
            <p>Get a custom Plan as per your Requirements</p>
          </div>
          <div className="flex flex-row items-center gap-4  ">
            <BsArrowRight />
            <p>Schedule a demo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
