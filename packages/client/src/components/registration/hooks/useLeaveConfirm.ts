import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useLeaveConfirm = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/registration/complete") return;

    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };

    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [location.pathname]);
};
