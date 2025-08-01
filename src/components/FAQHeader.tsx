import React from 'react'

const FAQHeader = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center lg:items-end gap-6 lg:gap-24 mb-6 lg:mb-7 ">
      <div className="flex flex-col items-center lg:items-start">
        <p className="text-center lg:text-start font-medium mb-2 ">
          Ask Questions
        </p>
        <h2 className="text-center lg:text-start text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2.5">
          Frequently Asked Question
        </h2>
        <p className="text-center lg:text-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div className="">
        <button className="flext items-center justify-center flex-nowrap bg-primary-muted hover:bg-primary text-nowrap text-center px-8 py-4 rounded-full  transition-colors duration-300 cursor-pointer  ">
          View More
        </button>
      </div>
    </div>
  );
}

export default FAQHeader
