import { useState } from "react";

export const useClick = () => {
  const [isClicked, setClicked] = useState<boolean>(false);
  const click = () => setClicked((state) => !state);
  return { isClicked, click };
};
