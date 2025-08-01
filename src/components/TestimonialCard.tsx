import React from "react";
import Rating from "./Rating";

interface Testimonial {
  id: string;
  rating: number;
  review: string;
  user: {
    firstName: string;
    lastName: string;
    profession:string;
    profileImgSrc: string;
  };
}
interface TestimonialProps {
  data: Testimonial;
}
const TestimonialCard: React.FC<TestimonialProps> = ({ data }) => {
  return (
    <div className="w-full max-w-md mx-auto  p-6 lg:p-8 border border-[#55617124] rounded-4xl">
      <div className="h-44 mb-7 pb-6 space-y-5 border-b border-[#55617124]">
        <Rating rating={data.rating} />
        <p className="text-base ">
          {data.review}
        </p>
      </div>
      <div className=" h-14 flex items-center gap-7">
        <div className="">
          <img
            src={data.user.profileImgSrc}
            alt=""
            className=" w-14 h-14 rounded-full object-center object-cover"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-base lg:text-lg font-semibold truncate ">{`${data.user.firstName} ${data.user.lastName}`}</p>
          <p className="text-text-muted truncate ">{data.user.profession}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
