import React from 'react'

const Hero = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-0 mt-5 ">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-14 lg:max-w-5/6 mx-auto bg-[#D5EFE7] p-10 sm:p-12 lg:p-14 rounded-4xl ">
        <div className="flex flex-col justify-center items-center lg:items-start gap-5 lg:gap-6">
          <h2 className="text-4xl lg:text-5xl text-center lg:text-start leading-snug ">
            Smart Tech for <br className="block sm:hidden lg:block" />{" "}
            <strong>Smarter Buildings</strong>
          </h2>
          <p className="text-base lg:text-xl text-text-muted text-center lg:text-start ">
            From intercoms to networking, we future-proof your property.
          </p>
          <button className="bg-primary-muted hover:bg-primary text-base lg:text-lg font-semibold px-6 py-3 text-center rounded-md cursor-pointer transition-all duration-300 ">
            Book a Free Estimate
          </button>
        </div>
        <div className="flex flex-col justify-center">
          <img src="/assets/images/hero-img.png" alt="hero-section-img" />
        </div>
      </div>
    </div>
  );
}

export default Hero
