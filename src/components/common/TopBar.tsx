"use client";
import React from "react";
import Link from "next/link";
import {
  TopBarClock,
  TopBarFacebook,
  TopBarMail,
  TopBarInstagram,
  TopBarUnknown,
} from "@/icons";
const TopBar = () => {
  return (
    <div className="w-full  bg-[#125671] text-white">
      <div className="w-full lg:w-5/6 mx-auto  px-4 sm:px-6 lg:px-0 flex items-center justify-center lg:justify-between gap-6 py-4">
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center flex-nowrap gap-1 sm:gap-5">
          <div className="flex items-center flex-nowrap text-nowrap gap-2">
            <TopBarClock />
            <span className="text-sm ">
              <strong>Working Hour: </strong>
              08:00am to 09:00pm
            </span>
          </div>
          <div className="hidden sm:block h-3 w-[1px] bg-white"></div>
          <p className="flex items-center gap-2 text-nowrap">
            <TopBarMail />{" "}
            <span className="">
              <strong>Email:</strong> inquires@smartinstallersny.com
            </span>
          </p>
        </div>
        <div className="hidden lg:flex items-center flex-nowrap gap-5">
          <div className="flex items-center gap-5">
            <Link href={"/"} className="shrink-0">
              <TopBarInstagram />
            </Link>
            <Link href={"/"} className="shrink-0">
              <TopBarFacebook />
            </Link>
            <Link href={"/"} className="shrink-0">
              <TopBarUnknown />
            </Link>
          </div>
          |
          <p className=" text-nowrap">
            <strong>Contact:</strong> +1(917)516-9986
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
