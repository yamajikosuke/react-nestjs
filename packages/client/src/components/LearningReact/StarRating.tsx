import React from "react";
import { Star } from "./Star";
import { useColors } from "./useColor";

export const StarRating: React.FC<{
  id: string;
  selectedStars: number;
}> = ({ id, selectedStars }) => {
  const { rateColor } = useColors();

  const createArray = (length: number): number[] => {
    return [...Array(length)];
  };

  return (
    <>
      {createArray(5).map((_, i) => {
        return (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => rateColor(id, i + 1)}
          />
        );
      })}
    </>
  );
};
