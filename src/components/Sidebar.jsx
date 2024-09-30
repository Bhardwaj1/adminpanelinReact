import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import profilepic from "../assests/images/ByeWind.svg"; // Assuming this path is correct
import defaults from "../assests/images/ChartPieSlice.svg";
import eccomerceBag from "../assests/images/ShoppingBagOpen.svg";
import projects from "../assests/images/FolderNotch.svg";
import onlineCourses from "../assests/images/courses.svg";
import userProfilePic from "../assests/images/UserProfile.svg";
import chat from "../assests/images/ChatsTeardrop.svg";
import groupPic from "../assests/images/UsersThree.svg";
import account from "../assests/images/account.svg";
import blog from "../assests/images/blog.svg";

const Sidebar = () => {
  const [showEcommerce, setShowEcommerce] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showOnlineCourses, setShowOnlineCourses] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [showAccount,setShowAccount]=useState(false);
  const [showCorporate,setShowCorporate]=useState(false);
  const [showBlog,setShowBlog]=useState(false);
  const [showSocial,setShowSocial]=useState(false);

  
  const toggleEcommerce = () => setShowEcommerce(!showEcommerce);
  const toggleProjects = () => setShowProjects(!showProjects);
  const toggleOnlineCourses = () => setShowOnlineCourses(!showOnlineCourses);
  const toggleUserProfile = () => setShowUserProfile(!showUserProfile);
  const toggleAccount=()=>setShowAccount(!showAccount);
  const toggleCorporate=()=>setShowCorporate(!showCorporate);
  const toggleBlog=()=>setShowBlog(!showBlog);
  const toggleSocial = () => setShowSocial(!showSocial);

  return (
    <div className="w-64 h-screen bg-gray-100 fixed top-0 left-0 z-10 flex flex-col gap-6">
      {/* Header */}
      <div className="text-center py-6 flex items-center gap-8 p-6">
        <img src={profilepic} alt="Profile Pic" className="w-10" />
        <p className="text-xl font-semibold">ByeWind</p>
      </div>
      <div className="flex  justify-between px-8 ">
        <p className="text-xl text-[#1C1C1C66]">Favorites</p>
        <p className="text-xl text-[#1C1C1C33]">Recently</p>
      </div>
      <div className="px-8">
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-gray-400 mr-2"></span>{" "}
            {/* Custom gray bullet */}
            <span>Overview</span>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-gray-400 mr-2"></span>{" "}
            {/* Custom gray bullet */}
            <span>Projects</span>
          </li>
        </ul>
      </div>
      <div className="space-y-4 px-4">
        <button className="flex items-center w-full px-3 py-2 text-gray-700 hover:bg-gray-200 rounded-md cursor-pointer">
          <p className="text-xl text-[#1C1C1C66]">Dashboards</p>
        </button>
        <div>
          <ul className="space-y-4 px-4">
            <li>
              <button className="flex items-center gap-4">
                <img src={defaults} alt="Icon" />
                <NavLink
                  to="/"
                >
                  Default
                </NavLink>
              </button>
            </li>
            <li>
              <button
                className="flex items-center gap-4"
                onClick={toggleEcommerce}
              >
                {" "}
                <span className="ml-auto">
                  {showEcommerce ? <FaChevronDown /> : <FaChevronRight />}
                </span>
                <img src={eccomerceBag} alt="Icon" />
                <NavLink
                  to="/"
                  className="block py-1"
                >
                  eCommerce
                </NavLink>
              </button>
            </li>
            <li>
              <button
                className="flex items-center gap-4"
                onClick={toggleProjects}
              >
                <span className="ml-auto">
                  {showProjects ? <FaChevronDown /> : <FaChevronRight />}
                </span>
                <img src={projects} alt="Icon" />
                <NavLink
                  to="/"
                  className="block py-1"
                >
                  Projects
                </NavLink>
              </button>
            </li>
            <li>
              <button
                className="flex items-center gap-4"
                onClick={toggleOnlineCourses}
              >
                <span className="ml-auto">
                  {showOnlineCourses ? <FaChevronDown /> : <FaChevronRight />}
                </span>
                <img src={onlineCourses} alt="Icon" />
                <NavLink
                  to="/"
                  className="block py-1"
                >
                  Online Courses
                </NavLink>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-4 px-4">
        <button className="flex items-center w-full px-3 py-2 text-gray-700 hover:bg-gray-200 rounded-md cursor-pointer">
          <p className="text-xl text-[#1C1C1C66]">Pages</p>
        </button>
        <ul className="space-y-4 px-4">
          {/* Dashboards */}
          <li>
            <button
              className="flex items-center gap-4"
              onClick={toggleUserProfile}
            >
              <span className="ml-auto">
                {showUserProfile ? <FaChevronDown /> : <FaChevronRight />}
              </span>
              <img src={userProfilePic} alt="Icon" />
              <NavLink
                to="/"
                className="block py-1"
              >
                User Profile
              </NavLink>
            </button>

            {showUserProfile && (
              <ul className="pl-8 space-y-2 ml-4 pt-2">
                <li className="flex items-center gap-4">
                  <NavLink
                    to="/"
                  >
                    Overview
                  </NavLink>
                </li>
                <li className="flex items-center gap-4">
                  <NavLink
                    to="/"
                    className="block py-1"
                  >
                    Projects
                  </NavLink>
                </li>
                <li className="flex items-center gap-4">
                  <NavLink
                    to="/"
                    className="block py-1"
                  >
                    Campaigns
                  </NavLink>
                </li>
                <li className="flex items-center gap-4">
                  <NavLink
                    to="/"
                    className="block py-1"
                  >
                    Documents
                  </NavLink>
                </li>
                <li className="flex items-center gap-4">
                  <NavLink
                    to="/"
                    className="block py-1"
                  >
                    Followers
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button
              className="flex items-center gap-4"
              onClick={toggleAccount}
            >
              <span className="ml-auto">
                {showAccount ? <FaChevronDown /> : <FaChevronRight />}
              </span>
              <img src={account} alt="Icon" />
              <NavLink
                to="/"
                className="block py-1"
              >
                Account
              </NavLink>
            </button>
          </li>
          <li>
            <button
              className="flex items-center gap-4"
              onClick={toggleCorporate}
            >
              <span className="ml-auto">
                {showCorporate ? <FaChevronDown /> : <FaChevronRight />}
              </span>
              <img src={groupPic} alt="Icon" />
              <NavLink
                to="/"
                className="block py-1"
              >
                Corporate
              </NavLink>
            </button>
          </li>
          <li>
            <button
              className="flex items-center gap-4"
              onClick={toggleBlog}
            >
              <span className="ml-auto">
                {showBlog ? <FaChevronDown /> : <FaChevronRight />}
              </span>
              <img src={blog} alt="Icon" />
              <NavLink
                to="/"
                className="block py-1"
              >
                Blog
              </NavLink>
            </button>
          </li>
          <li>
            <button
              className="flex items-center gap-4"
              onClick={toggleSocial}
            >
              <span className="ml-auto">
                {showSocial ? <FaChevronDown /> : <FaChevronRight />}
              </span>
              <img src={chat} alt="Icon" />
              <NavLink
                to="/"
                className="block py-1"
              >
                Social
              </NavLink>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
