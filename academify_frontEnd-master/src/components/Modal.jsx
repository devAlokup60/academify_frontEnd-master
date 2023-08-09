import React, { useState } from "react";
import "./Modal.css";
import { submitFormData } from "../modules/submitFormData";
const Modal = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "Demo",
    phone_number: "",
    email: "",
    organisation_name: "",
    state: "",
  });
  const submitButtonHandler = async (event) => {
    event.preventDefault();
    await submitFormData(formData, "Sales");
  };
  const handleFormChange = (event) => {
    console.log("hello")
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="main-content  border border-[#06159a] w-[830px] h-[540px] relative mt-[20px] mb-[20px] rounded-3xl flex flex-col justify-center items-center">
      <div className="flex flex-col items-center">
        <p className="text-black font-poppins text-[32px] font-semibold">
          Fills Now
        </p>
        <p className="text-black font-poppins ">
          Fill out this form, and we will forward your information to the hiring
          manager!
        </p>
      </div>

      {/* <div className="overlay"></div> */}
      <div className="w-[700px] h-[400px] rounded-3xl form-shadow main-form">
        <form onSubmit={submitButtonHandler}>
          <div className="specific">
            <label>Full name</label>
            <input type="text" placeholder="name" name="firstname" id="name" onChange={handleFormChange} value={formData.first_name}/>
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder="Email" name="email" id="email" onChange={handleFormChange} value={formData.email} />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="text"
              placeholder="Phone nUmber"
              name="phone_number "
              id="phone"
              onChange={handleFormChange} value={formData.phone_number}
            />
          </div>
          <div>
            <label>Institution name</label>
            <input
              type="text"
              placeholder="Institution Name"
              name="organisation_name"
              id="institution"
              onChange={handleFormChange} value={formData.organisation_name}
            />
          </div>
          <div className="bg-[#CACBD6] w-[95%] h-[2px] flex justify-center items-center mx-auto line"></div>
          <div className="btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
// bg-white border border-black font-poppins w-[1000px] h-[800px] flex justify-center items-center relative mx-auto my-[40px]
