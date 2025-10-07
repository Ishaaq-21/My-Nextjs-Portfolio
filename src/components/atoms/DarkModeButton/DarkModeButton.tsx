"use client";
import { useState, useEffect } from "react";

import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // default to dark mode
  const [isMounted, setIsMounted] = useState(false); // to track if component is mounted

  // Only run in the browser
  useEffect(() => {
    setIsMounted(true);

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      // Default to dark if no theme saved
      setIsDarkMode(true);
      localStorage.setItem("theme", "dark");
    }
  }, []);

  // Apply the theme whenever it changes
  useEffect(() => {
    if (!isMounted) return; // prevent running on first SSR render

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode, isMounted]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  if (!isMounted) return null; // prevent hydration mismatch

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="absolute md:relative left-1/2 md:left-auto md:-translate-x-1/2 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:scale-110 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-target"
    >
      <SunIcon
        className={`absolute transition-all duration-500 ease-in-out text-yellow-500 w-full ${
          isDarkMode
            ? "opacity-100 scale-100 rotate-0"
            : "opacity-0 scale-50 -rotate-90"
        }`}
      />
      <MoonIcon
        className={`absolute transition-all duration-500 ease-in-out text-yellow-500 w-full ${
          isDarkMode
            ? "opacity-0 scale-50 rotate-90"
            : "opacity-100 scale-100 rotate-0"
        }`}
      />
    </button>
  );
};

export default DarkModeToggle;
