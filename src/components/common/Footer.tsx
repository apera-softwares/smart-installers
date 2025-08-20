"use client";
import Link from "next/link";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { FooterFacebook, FooterTwitter, FooterYoutube } from "@/icons";

const Footer = () => {
  return (
    <footer className="w-full px-2 sm:px-3 lg:px-4  pb-5">
      <div className="w-full bg-[#125671] rounded-3xl lg:rounded-4xl">
        <div className="w-full lg:max-w-5/6 px-4 sm:px-6 lg:px-0 mx-auto py-10 sm:py-12 lg:py-14">
          <div className="flex justify-between flex-col gap-12 lg:gap-20 lg:flex-row pb-10  mb-5">
            <div className="flex flex-col items-center lg:items-start">
              <Link href={"/"} className="mb-5">
                <img
                  src="/assets/images/logo-footer.png"
                  alt="Smart Installers Logo"
                />
              </Link>
              {/* <p className=" text-white text-center lg:text-left hidden lg:block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec.
              </p> */}
            </div>
            <div className="flex flex-col md:flex-row gap-14 md:gap-20 lg:gap-14 mx-auto ">
              <div className="hidden lg:block">
                <h4 className="text-xl font-bold text-white mb-6 text-whie text-center lg:text-left text-nowrap">
                  Quick Link
                </h4>
                <ul className="grid gap-3 text-center lg:text-left">
                  <li>
                    <Link
                      href={"/about-us"}
                      className="text-sm text-nowrap  text-white hover:text-primary transition-colors duration-300 cursor-pointer"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/services"}
                      className="text-sm  text-nowrap text-white hover:text-primary transition-colors duration-300 cursor-pointer"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/projects"}
                      className="text-sm  text-nowrap text-white hover:text-primary transition-colors duration-300 cursor-pointer"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/contact-us"}
                      className="text-sm text-nowrap text-white hover:text-primary transition-colors duration-300 cursor-pointer"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="hidden lg:block">
                <h4 className="text-xl text-white font-bold mb-6 text-whie text-center lg:text-left text-nowrap">
                  Support
                </h4>
                <ul className="grid gap-3 text-center lg:text-left">
                  <li>
                    <Link
                      href={"/privacy-policy"}
                      className="text-sm text-nowrap  text-white hover:text-primary transition-colors duration-300 cursor-pointer"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/terms-and-conditions"}
                      className="text-sm text-nowrap  text-white hover:text-primary transition-colors duration-300 cursor-pointer"
                    >
                      Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/faqs"}
                      className="text-sm text-nowrap  text-white hover:text-primary transition-colors duration-300 cursor-pointer"
                    >
                      {`FAQ’S`}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/not-found"}
                      className="text-sm text-nowrap text-white hover:text-primary transition-colors duration-300 cursor-pointer"
                    >
                      Error 404
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <h4 className="text-xl text-white font-bold mb-6 text-whie text-center lg:text-left text-nowrap">
                  Contact Us
                </h4>
                <ul className="grid gap-3 text-center lg:text-left">
                  <li>
                    <div className="flex items-center justify-center md:justify-start flex-nowrap gap-1.5 text-white">
                      <FiPhoneCall className="text-lg shrink-0 mt-0.5" />
                      <span className="text-sm text-nowrap">
                        +1(917)516-9986
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center justify-center md:justify-start flex-nowrap gap-1.5 text-white">
                      <FiMail className="text-lg shrink-0 mt-0.5" />
                      <span className="text-sm text-nowrap">
                        inquires@smartinstallersny.com
                      </span>
                    </div>
                  </li>
                  {/* <li>
                    <div className="flex items-center justify-center md:justify-start flex-nowrap gap-1.5 text-white">
                      <GrLocation className="text-lg shrink-0  mt-0.5" />
                      <span className="text-sm text-nowrap">
                        {`Gianyar ST. 1190 DPS, Bali`}
                      </span>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className=" pt-5 pb-3 border-t border-white/20">
            <div className="flex items-center justify-center flex-col md:flex-row md:justify-between gap-6">
              <span className="text-bas text-center md:text-start text-white">
                Copyright © 2025 Smartinstaller | Powered by Smartinstaller
              </span>
              <div className="flex items-center gap-1.5  sm:justify-center ">
                <Link
                  href={"/"}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white"
                >
                  <FooterFacebook className="shrink-0" />
                </Link>
                <Link
                  href={"/"}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white"
                >
                  <FooterTwitter className="shrink-0" />
                </Link>
                <Link
                  href={"/"}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white"
                >
                  <FooterYoutube className="shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
