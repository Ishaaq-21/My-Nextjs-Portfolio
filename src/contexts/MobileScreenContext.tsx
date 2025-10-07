"use client";
import React, { createContext, useEffect, useState } from "react";

export const MobileScreenContext = createContext(false);

const MobileScreenContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mobileScreen, setMobileScreen] = useState(true);
  useEffect(() => {
    if (window.innerWidth <= 768) setMobileScreen(true);
    else setMobileScreen(false);
  }, []);
  return (
    <MobileScreenContext.Provider value={mobileScreen}>
      {children}
    </MobileScreenContext.Provider>
  );
};

export default MobileScreenContextProvider;
