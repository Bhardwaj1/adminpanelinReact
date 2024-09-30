import React from "react";
import dairy from "../assests/images/dairy.svg";
import star from "../assests/images/Vector.svg";
import notification from "../assests/images/Notification.svg";
import timeDuration from "../assests/images/clock.svg";
import themeButton from "../assests/images/ThemeIcon.svg";
import searchIcon from "../assests/images/search.svg";
import { useState } from "react";
import { useEffect } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="flex justify-between items-center p-4 dark:bg-gray-900 text-black dark:text-white">
      <div className="flex items-center gap-4">
        <div>
          <img src={dairy} alt="Dairy" />
        </div>
        <div>
          <img src={star} alt="Faivorate" />
        </div>
        <div className="flex items-center gap-2">
          <p>Dashboards</p>
          <p>/</p>
          <p>Default</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            className="bg-[#1C1C1C1A] border rounded-md p-1"
            placeholder="Search"
          />
          <div>
            <img
              src={searchIcon}
              alt="Search"
              className="absolute inset-y-0 right-0 pr-2 h-full flex items-center"
            />
          </div>
        </div>
        {/* Dark Mode button  */}
        <div>
          <img src={themeButton} alt="Theme" onClick={toggleDarkMode} className="cursor-pointer"/>
        </div>
        <div>
          <img src={timeDuration} alt="Clock" className="cursor-pointer"/>
        </div>
        <div>
          <img src={notification} alt="Notification" className="cursor-pointer"/>
        </div>
        <div>
          <img src={dairy} alt="Dairy" className="cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
