"use client";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

interface RatingProps {
  rating: number;
}

const Rating = ({ rating }: RatingProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75; // between .25 and .74 shows half
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={`full-${index}`} className={`text-yellow-500 text-xl`} />
      ))}

      {hasHalfStar && (
        <FaStarHalfAlt key="half" className={`text-yellow-500 text-xl`} />
      )}

      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar
          key={`empty-${index}`}
          className={`text-yellow-500 text-xl`}
        />
      ))}
    </div>
  );
};

export default Rating;
