"use client";
import React, { useState, ReactNode } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface FAQItemProps {
  title: string;
  content: ReactNode;
}
const FAQItem: React.FC<FAQItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full">
      <div
        className={`w-full flex items-start justify-between gap-5  p-4 sm:p-5 border border-[#D5EFE7] ${
          isOpen
            ? "bg-gradient-to-r from-[#5FA28F40] to-[#FEFBF4]"
            : "bg-[#F1FAF7] shadow-[0px_16px_14px_-7px_rgba(0,0,0,0.10)] "
        }    rounded-xl lg:rounded-2xl cursor-pointer transition-colors duration-300 `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2
          className={`text-base lg:text-lg font-bold  transition-all duration-300`}
        >
          {title}
        </h2>
        <span className="mt-1">
          <IoIosArrowDown
            className={` text-xl  ${
              isOpen ? " rotate-180 " : " text-text-base rotate-0"
            } transition-all duration-500 `}
          />
        </span>
      </div>
      <div className="">{isOpen && <div className="p-5">{content}</div>}</div>
    </div>
  );
};

export default FAQItem;
