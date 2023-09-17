import React from "react";
import { FaStar } from "react-icons/fa";

export const Star: React.FC<{
  selected: boolean;
  onSelect: () => void;
}> = ({ selected, onSelect }) => {
  return (
    <>
      <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
    </>
  );
};
