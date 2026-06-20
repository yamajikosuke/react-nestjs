import { useState } from "react";
export const useClick = () => {
    const [isClicked, setClicked] = useState(false);
    const click = () => setClicked((state) => !state);
    return { isClicked, click };
};
