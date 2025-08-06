"use client";
import React, { useState } from "react";
import { ourProjectTabs } from "@/data/ourProjects";

const OurProjects = () => {
  const [activeTabId, setActiveTabId] = useState<string>(ourProjectTabs[0].id);
  const activeTab = ourProjectTabs.find((tab) => tab.id === activeTabId);

  return (
    <div className="w-full">
      <div className="w-full lg:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-0 py-20 ">
        {/* heading */}
        <div className="w-full flex flex-col items-center justify-center gap-1.5 mb-11">
          <span className="font-medium text-center">Our Projects</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
            What Our Projects
          </h2>
        </div>
        {/* tabs with tab content */}
        <div className="w-full">
          <div className="w-full flex justify-center">
            <div className="grow lg:grow-0 flex flex-col lg:flex-row  lg:justify-center  border border-[#05588E29] rounded-lg overflow-hidden mb-11">
              {ourProjectTabs.map((tabItem) => (
                <button
                  key={tabItem.id}
                  onClick={() => setActiveTabId(tabItem.id)}
                  className={`text-base lg:text-lg font-medium px-6 py-4 lg:py-5 ${
                    activeTabId === tabItem.id
                      ? "text-[#1F1F1F] bg-primary-muted font-semibold border-primary-muted"
                      : " text-[#758599] border-[#05588E29] "
                  }  border cursor-pointer transition-all duration-500 `}
                >
                  {`${tabItem.label}`}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full">{activeTab?.content}</div>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
