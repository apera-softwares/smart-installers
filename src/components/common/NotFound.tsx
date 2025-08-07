import React from "react";

interface NotFoundProps {
  message: string;
}
const NotFound: React.FC<NotFoundProps> = ({ message }) => {
  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-3 text-lg py-5 text-center font-bold shadow border border-gray-100 rounded-lg text-[#758599]">
      {message}
    </div>
  );
};

export default NotFound;
