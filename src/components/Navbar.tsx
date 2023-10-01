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
    
    const handleDarkMode = () => {
        setDarkMode(!darkMode)
    }
  return (
    <nav className="w-full text-LightText dark:text-DarkText h-[70px] shadow-md bg-white dark:bg-DarkElem">
      <div className="flex justify-between items-center w-[90%] mx-auto h-full ">
        <h4 className="font-extrabold text-xl">Where in the world?</h4>

        <button onClick={handleDarkMode} className="flex items-center gap-2">
          {darkMode ? <BsMoonFill /> : <BsMoon />}
          Dark Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
