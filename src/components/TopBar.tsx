import React from "react";
import {
  TopBarClock,
  TopBarMail,
  TopBarFacebook,
  TopBarInstagram,
  TopBarUnknown,
} from "@/icons";
const TopBar = () => {
  return (
    <div className="w-full  bg-[#125671] text-white">
      <div className="w-full lg:w-5/6 mx-auto  px-4 sm:px-6 lg:px-0 flex items-center justify-between py-4">
        <div className="flex items-center gap-5">
          <p className="text-sm ">
            <span className="font-bold">Working Hour : </span>
            08:00am to 09:00pm
          </p>
          <div className="w-[1px] h-3 bg-white"></div>
          <p className="">
            <span className="font-bold">Email :</span> info@domainname.com
          </p>
        </div>
        <div className="flex items-center gap-5">
          <div className=""></div>
          <div className="w-[1px] h-4 bg-white"></div>
          <p className="">
            <span className="font-bold">Contact :</span> +123 (456) 789
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
