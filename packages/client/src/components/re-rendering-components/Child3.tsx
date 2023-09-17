import { memo } from "react";

const style = {
  height: "50px",
  backgroundColor: "lightgray",
};

export const Child3 = memo(() => {
  console.log("Child3 レンダリング");
  return (
    <div>
      <p style={style}>Child3</p>
    </div>
  );
});
