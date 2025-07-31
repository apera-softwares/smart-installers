import React from 'react';

const OfferItem = () => {
  return (
    <div className="px-6 py-8 border border-[#E3E8EF] rounded-2xl">
      <div className="flex items-center justify-center mb-6">
        <span className=" flex justify-center items-center bg-[#F9F9F9] p-3 border border-gray-300 rounded-lg">

        </span>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-bold text-center mb-2">
          Access Control & Intercoms
        </h3>
        <p className="text-center text-text-muted mb-6">
          Wired or wireless intercom systems with secure app-based access.
        </p>
        <button className="font-semibold underline">View Details</button>
      </div>
    </div>
  );
}

export default OfferItem
