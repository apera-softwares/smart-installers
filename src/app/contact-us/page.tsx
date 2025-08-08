"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

import ContactUsBanner from "@/components/contact-us/ContactUsBanner";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}
interface Errors {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const Page = () => {
  const pageBannerProps = {
    imageUrl: "/assets/images/projects-page-banner.png",
    heading: "Contact Us",
    buttonText: "Our Projects",
  };
  const BASE_LABEL_CLASS = "block text-sm font-medium text-gray-800 mb-1";
  const BASE_INPUT_CLASS =
    "block w-full px-3 py-2 outline-none border border-gray-400  focus:ring-1 ring-primary  rounded-sm transition-all duration-300";
  const BASE_ERROR_CLASS = "text-sm text-red-500 ";
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateFormData()) return;
  };

  const validateFormData = () => {
    let isValidFormData = true;
    const tempErrors = { ...errors };
    // Validate firstname
    if (formData.firstName.trim() === "") {
      tempErrors.firstName = "First name is required";
      isValidFormData = false;
    } else {
      tempErrors.firstName = "";
    }

    // Validate lastname
    if (formData.lastName.trim() === "") {
      tempErrors.lastName = "Last name is required";
      isValidFormData = false;
    } else {
      tempErrors.lastName = "";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() === "") {
      tempErrors.email = "Email is required";
      isValidFormData = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Enter a valid email address";
      isValidFormData = false;
    } else {
      tempErrors.email = "";
    }

    // validate phone
    if (formData.phone.trim() === "") {
      tempErrors.phone = "Phone number is required";
      isValidFormData = false;
    } else if (formData.phone.trim().length < 10) {
      tempErrors.phone = "Phone number must be  10 digits";
      isValidFormData = false;
    } else if (formData.phone.trim().length > 10) {
      tempErrors.phone = "Phone number must be 10 digits";
      isValidFormData = false;
    } else {
      tempErrors.phone = "";
    }

    // Validate message
    if (formData.message.trim() === "") {
      tempErrors.message = "Message is required";
      isValidFormData = false;
    } else {
      tempErrors.message = "";
    }
    setErrors(tempErrors);
    return isValidFormData;
  };

  return (
    <div className="w-full">
      <ContactUsBanner
        imageUrl={pageBannerProps.imageUrl}
        heading={pageBannerProps.heading}
      />
      <div className="w-full lg:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-0 py-20 ">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div className="w-full">
            <div className="mb-8">
              <h2 className="text-3xl text-center lg:text-start font-bold mb-5">
                Get In Touch
              </h2>
              <p className="text-center lg:text-start">
                {`  Got a question? We're here to help! Fill out the form, email us,
                or give us a call.`}
              </p>
            </div>
            <div className="w-full flex flex-col items-center md:flex-row lg:flex-col justify-center lg:justify-stretch lg:items-start flex-wrap gap-3 lg:gap-4 pb-6 mb-6 border-b border-gray-200">
              <div className=" w-60 flex flex-col md:flex-row  items-center  flex-nowrap gap-3">
                <span className="w-12 h-12 flex items-center justify-center p-2 rounded-full bg-primary text-white">
                  <FiPhoneCall className="text-lg shrink-0 mt-0.5" />
                </span>
                <div className="flex flex-col items-center md:items-start">
                  <span className="font-semibold">Phone Number</span>
                  <span className="text-sm text-nowrap">(+23)897-556-009</span>
                </div>
              </div>
              <div className=" w-60 flex flex-col md:flex-row  items-center  flex-nowrap gap-3 ">
                <span className="w-12 h-12 flex items-center justify-center p-2 rounded-full bg-primary text-white">
                  <FiMail className="text-lg shrink-0 mt-0.5" />
                </span>

                <div className="flex flex-col items-center md:items-start">
                  <span className="font-semibold">Email</span>
                  <span className="text-sm text-nowrap">smartex@example</span>
                </div>
              </div>
              <div className="  w-60 flex flex-col md:flex-row  items-center  flex-nowrap gap-3   ">
                <span className="w-12 h-12 flex items-center justify-center p-2 rounded-full bg-primary text-white">
                  <GrLocation className="text-lg shrink-0  mt-0.5" />
                </span>

                <div className="flex flex-col items-center md:items-start">
                  <span className="font-semibold">Address</span>
                  <span className="text-sm text-nowrap">
                    {`Gianyar ST. 1190 DPS, Bali`}
                  </span>
                </div>
              </div>
            </div>
            <div className="">
              <h2 className="text-lg text-center lg:text-start font-bold  mb-4">
                Follow Us
              </h2>
              <div className="flex items-center justify-center lg:justify-start gap-4 ">
                <Link
                  href={"/"}
                  className="w-9 h-9 flex items-center justify-center rounded-full text-white bg-primary"
                >
                  <FaFacebookF className="shrink-0" />
                </Link>
                <Link
                  href={"/"}
                  className="w-9 h-9 flex items-center justify-center rounded-full text-white bg-primary"
                >
                  <FaTwitter className="shrink-0" />
                </Link>
                <Link
                  href={"/"}
                  className="w-9 h-9 flex items-center justify-center rounded-full text-white bg-primary"
                >
                  <FaYoutube className="shrink-0" />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full  bg-primary-muted/20 p-6 rounded-xl ">
            <div className="">
              <form onSubmit={handleSubmit} className=" space-y-3">
                <div className="w-full grid grid-cols-2 gap-4">
                  <div className="w-full">
                    <label
                      htmlFor="firstName"
                      className={`${BASE_LABEL_CLASS}`}
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      placeholder=""
                      className={`${BASE_INPUT_CLASS} `}
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    <span className={`${BASE_ERROR_CLASS}`}>
                      {errors.firstName || ""}
                    </span>
                  </div>
                  <div className="w-full">
                    <label htmlFor="lastName" className={`${BASE_LABEL_CLASS}`}>
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      placeholder=""
                      className={`${BASE_INPUT_CLASS}`}
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                    <span className={`${BASE_ERROR_CLASS}`}>
                      {errors.lastName}
                    </span>
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="email" className={`${BASE_LABEL_CLASS}`}>
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder=""
                    className={`${BASE_INPUT_CLASS}`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <span className={`${BASE_ERROR_CLASS}`}>
                    {errors.email || ""}
                  </span>
                </div>
                <div className="w-full">
                  <label htmlFor="phone" className={`${BASE_LABEL_CLASS}`}>
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    className={`${BASE_INPUT_CLASS}`}
                    value={formData.phone}
                    onChange={(e) => {
                      const value = e.target.value;
                      // Allow only digits
                      if (/^\d{0,10}$/.test(value)) {
                        handleChange(e);
                      }
                    }}
                  />
                  <span className={`${BASE_ERROR_CLASS}`}>{errors.phone}</span>
                </div>
                <div className="w-full">
                  <label htmlFor="message" className={`${BASE_LABEL_CLASS}`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={` h-20 ${BASE_INPUT_CLASS}`}
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <span className={`${BASE_ERROR_CLASS}`}>
                    {errors.message || ""}
                  </span>
                </div>
                <div className="flex items-center justify-center lg:justify-end">
                  <button
                    type="submit"
                    className="  bg-primary-muted px-6 py-3 mt-6 font-medium text-center rounded-lg cursor-pointer "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
