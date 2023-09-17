import React from "react";

export const ClickDisplay: React.FC<{
  isClicked: boolean;
  click: () => void;
}> = ({ isClicked, click }) => {
  return (
    <>
      <button onClick={click}>Click</button>
      {isClicked ? (
        <span>クリックされました</span>
      ) : (
        <span>クリックされていません</span>
      )}
    </>
  );
};
