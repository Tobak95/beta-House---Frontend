import React, { useState } from "react";
import navIcon from "../../../src/assets/navIcon.png";
import { links } from "../../../data";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../hooks/useAppContext";
import micheal from "../../../src/assets/Micheal.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import UserAvatar from "../../component/UserAvatar";

const Nav = () => {

  const { logout, user } = useAppContext();
  const redirect = useNavigate();

  const handleLogout = () => {
    logout();
    redirect("/login");
  };

  return (
    <nav
      className=" bg-[#1D293F1F] -mt-160 md:-mt-130 lg:-mt-105 w-full px-3
     mb-5 "
    >
      <div className="layout ">
        <div className="flex justify-between lg:flex items-center lg:justify-between h-[121px]">
          <div>
            <img src={navIcon} alt="betaHouse" className="w-[150px]" />
          </div>

          <div className="hidden lg:flex items-center text-[20px] w-full lg:w-[600px] justify-between px-5 text-[#F5F5F5] font-medium ">
            {links.map((link, index) => {
              return (
                <a key={index} href={link.to}>
                  {link.title}
                </a>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center justify-between gap-[10px] text-white">
            <div className="lg:text-white">
              <UserAvatar firstName={user.firstName} lastName={user.lastName} />
            </div>
            <div className=" lg:text-white">
              <p className="">
                {user.firstName} {user.lastName}
              </p>
            </div>

            <div className=" dropdown dropdown-end">
              <div tabIndex={0} role="button" className="cursor-pointer">
                <div className="w-10 ">
                  {" "}
                  <MdOutlineKeyboardArrowDown />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-[#ffffff] rounded-box z-1 mt-7 w-30 p-2shadow text-center font-bold flex items-center"
              >
                <li className="text-black">
                  <button onClick={handleLogout}>
                    <a>Logout</a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="dropdown dropdown-end  lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-black text-white"
            >
              <GiHamburgerMenu />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-[#3d9970] rounded-box z-1 w-70 p-2 shadow-sm mr-9 mt-3"
            >
              <li className="flex flex-col items-center text-[20px] w-full justify-between px-5 text-[#F5F5F5] font-medium my-3 ">
                {links.map((link, index) => {
                  return (
                    <a key={index} href={link.to}>
                      {link.title}
                    </a>
                  );
                })}
              </li>
              <div className="flex  flex-col items-center justify-between gap-[10px]">
                <div className="lg:text-white">
                  <UserAvatar
                    firstName={user.firstName}
                    lastName={user.lastName}
                  />
                </div>

                <div>
                  <li className="text-black ">
                    <button
                      onClick={handleLogout}
                      className="text-black bg-white font-bold p-4"
                    >
                      Logout
                    </button>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
