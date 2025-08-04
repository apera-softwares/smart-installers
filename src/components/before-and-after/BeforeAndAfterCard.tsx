"use cleint";
import React, { useState } from "react";

interface Data {
  id: string;
  title: string;
  totalCost: string;
  address: string;
  description: string;
  installations: {
    lable: string;
    value: string;
  }[];
  media: {
    beforeImgUrl: string;
    afterImgUrl: string;
  };
}
interface BeforeAndAfterCardProps {
  data: Data;
  onClickViewDetails: () => void;
}

const BeforeAndAfterCard: React.FC<BeforeAndAfterCardProps> = ({
  data,
  onClickViewDetails,
}) => {
  return (
    <div className="w-full bg-[#F9FAFB] rounded-2xl lg:rounded-[20px] p-5 sm:p-6  space-y-6  border border-[#D0D5DD] lg:border-none ">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6  ">
        <div className="relative w-full h-full rounded-lg">
          <span className=" absolute top-5 sm:top-6 left-5 sm:left-8 w-24 bg-white text-base sm:text-lg text-center font-medium px-5 py-2 sm:py-2.5 rounded-full">
            Before
          </span>
          <img
            src={`${data.media.beforeImgUrl}`}
            alt=""
            className="w-full h-full object-center object-cover rounded-lg"
          />
        </div>
        <div className="relative w-full h-full rounded-lg">
          <span className="absolute top-5 sm:top-6 left-5 sm:left-8 w-24 bg-white text-base sm:text-lg text-center font-medium px-5 py-2 sm:py-2.5 rounded-full">
            After
          </span>
          <img
            src={`${data.media.afterImgUrl}`}
            alt=""
            className="w-full h-full object-center object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        <div className="w-full flex flex-col items-start">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
            {data.title || ""}
          </h2>
          <p className=" text-[#767A82] text-base lg:text-lg">{data.address}</p>
          <button
            onClick={onClickViewDetails}
            className=" hidden lg:inline-block bg-primary-muted px-6 py-3 mt-5 font-medium text-center rounded-lg cursor-pointer "
          >
            View Detail
          </button>
        </div>
        <div className="w-full">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
            Installation
          </h2>
          <div className="w-full flex items-center flex-wrap gap-8">
            {data && data.installations.length > 0 ? (
              data.installations.map((item, index: number) => (
                <div key={index} className="">
                  <p className=" mb-2 text-[#556171]">{item.lable}</p>
                  <p className="text-lg lg:text-xl font-semibold">
                    {item.value}
                  </p>
                </div>
              ))
            ) : (
              <div className="">
                <p className=" mb-2 text-[#556171]">No Installation</p>
                <p className="text-lg lg:text-xl font-semibold"></p>
              </div>
            )}
          </div>
          <button
            onClick={onClickViewDetails}
            className=" lg:hidden bg-primary-muted px-6 py-3 mt-6 font-medium text-center rounded-lg cursor-pointer "
          >
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeforeAndAfterCard;
