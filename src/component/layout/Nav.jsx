import React from "react";
import navIcon from "../../../src/assets/navIcon.png";
import { links } from "../../../data";
import { IoCloseSharp } from "react-icons/io5";

const Nav = () => {
  return (
    <nav
      className=" bg-[#1D293F1F] -mt-160 md:-mt-130 lg:-mt-105 w-full px-3
     mb-5 "
    >
      <div className="layout ">
        <div className="flex justify-between lg:flex items-center lg:justify-between h-[121px]">
          <div>
            <img src={navIcon} alt="betaHouse" />
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
            <button className="p-[10px] border border-[#F5F5F5] border-2px rounded-[8px] w-[104px] h-[61px] text-[20px]">
              Sign in
            </button>

            <button className="p-[10px] border border-2px rounded-[8px] w-[104px] h-[61px] bg-[#3D9970] text-[20px]">
              Login
            </button>
          </div>
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn m-1">
              <IoCloseSharp />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-[#3d9970] rounded-box z-1 w-70 p-2 shadow-sm"
            >
              <li>
                <div className="flex flex-col items-center text-[20px] w-full justify-between px-5 text-[#F5F5F5] font-medium my-3 ">
                  {links.map((link, index) => {
                    return (
                      <a key={index} href={link.to}>
                        {link.title}
                      </a>
                    );
                  })}
                </div>
              </li>
              <li>
                <div className="flex  flex-col items-center justify-between gap-[10px] text-white">
                  <button className="p-[10px] border border-[#F5F5F5] border-2px rounded-[8px] w-[104px] h-[61px] text-[20px]">
                    Sign in
                  </button>

                  <button className="p-[10px] border border-2px rounded-[8px] w-[104px] h-[61px] bg-[#3D9970] text-[20px]">
                    Login
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
