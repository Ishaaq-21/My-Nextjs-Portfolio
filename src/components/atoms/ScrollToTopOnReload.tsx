"use client";
import { useEffect } from "react";

const ScrollTopTopOnReload = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

export default ScrollTopTopOnReload;
