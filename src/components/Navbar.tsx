"use client"
import React, {useState, useEffect} from "react";
import { BsMoon, BsMoonFill } from "react-icons/bs";

const Navbar = () => {
     const [darkMode, setDarkMode] = useState(false);

     useEffect(() => {
       const isDarkMode = localStorage.getItem("darkMode") === "true";
       setDarkMode(isDarkMode);
     }, []);

     useEffect(() => {
       document.documentElement.classList.toggle("dark", darkMode);
       localStorage.setItem("darkMode", darkMode);
     }, [darkMode]);

     const toggleDarkMode = () => {
       setDarkMode((prevMode) => !prevMode);
     };
  return (
    <nav className="w-full text-LightText dark:text-DarkText h-[70px] shadow-md bg-white dark:bg-DarkElem">
      <div className="flex justify-between items-center w-[90%] mx-auto h-full ">
        <h4 className="font-extrabold  text-lg md:text-xl ">Where in the world?</h4>

        <button onClick={toggleDarkMode} className="flex items-center gap-2">
          {darkMode ? <BsMoonFill /> : <BsMoon />}
          Dark Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
