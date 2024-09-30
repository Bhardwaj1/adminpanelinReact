import React from "react";
import positiveGrowth from "../assests/images/positiveGrowth.svg";
import negativeGrowth from "../assests/images/NegativeGrowth.svg";
import { useState } from "react";

const SmallCard = ({
  cardHeader,
  amount,
  growth,
  bgColor,
  positiveNegativeGrowth,
  handleOpen
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
    className={`p-8 rounded-2xl ${bgColor} border dark:${bgColor} dark:text-black `}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    onClick={handleOpen}
  >
    <div className="text-lg font-semibold mb-4">{cardHeader}</div>
    
    {/* Toggle between amount and growth on hover */}
    <div className="flex items-center justify-between mt-2">
      {!isHovered ? (
        // Show amount if not hovered
        <div className="text-2xl font-bold">{amount}</div>
      ) : (
        // Show growth and image if hovered
        <div className="text-sm flex items-center justify-center">
          {growth}
          {positiveNegativeGrowth ? (
            <img src={positiveGrowth} alt="Positive" className="ml-2" />
          ) : (
            <img src={negativeGrowth} alt="Negative" className="ml-2" />
          )}
        </div>
      )}
      
      {/* Swap amount and growth section on hover */}
      {isHovered ? (
        // Show amount in place of growth when hovered
        <div className="text-2xl font-bold">{amount}</div>
      ) : (
        // Show growth and image in place of amount when not hovered
        <div className="text-sm flex items-center justify-center">
          {growth}
          {positiveNegativeGrowth ? (
            <img src={positiveGrowth} alt="Positive" className="ml-2" />
          ) : (
            <img src={negativeGrowth} alt="Negative" className="ml-2" />
          )}
        </div>
      )}
    </div>
  </div>
  );
};

export default SmallCard;
