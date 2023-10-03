"use client"
import React, {useState, useEffect} from "react";
import { BsMoon, BsMoonFill } from "react-icons/bs";

const Navbar = () => {
       const [darkMode, setDarkMode] = useState(false);

       useEffect(() => {
         if (darkMode) {
           document.documentElement.classList.add("dark");
         } else {
           document.documentElement.classList.remove("dark");
         }
       }, [darkMode]);

     const toggleDarkMode = () => {
       setDarkMode((prevMode) => !prevMode);
     };
  return (
    <nav className="w-full dark:text-LightText text-DarkText h-[70px] shadow-md dark:bg-white bg-DarkElem">
      <div className="flex justify-between items-center w-[90%] mx-auto h-full ">
        <h4 className="font-extrabold  text-lg md:text-xl ">
          Where in the world?
        </h4>

        <button onClick={toggleDarkMode} className="border-none">
          {!darkMode ? (
            <span className="flex gap-2 items-center">
              <BsMoonFill /> Light Mode
            </span>
          ) : (
            <span className="flex gap-2 items-center">
              <BsMoon />
              Dark Mode
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
