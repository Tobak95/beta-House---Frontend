import React from "react";
import NavIcon from "../../assets/navIcon.png";
import location from "../../assets/location.png";
import tel from "../../assets/Tel.png";
import Envelope from "../../assets/Envelope.png";

const Footer = () => {
  return (
    <footer className="bg-[#035A33] lg:h-[541px]">
      <div className="layout text-white ">
        <div className="flex flex-col lg:flex-row justify-between ">
          <div className="w-full lg:w-[373px] h-[247px] mt-28">
            <div className=" flex justify-center lg:justify-start">
              <img
                src={NavIcon}
                alt="footer img"
                className="w-[197px] h-[43px] "
              />
            </div>
            <div className="mt-5  text-center lg:text-start">
              <p className="text-[18px]  lg:text-[16px]">
                Discover, rent, and find your ideal home hassle-free with
                BetaHouse. Take control of your rental journey today!
              </p>
            </div>

            <div className="flex justify-center mt-5 lg:justify-start">
              <div className="flex items-center gap-5 text-[18px] lg:text-[16px]">
                <div>
                  <img src={location} alt="" />
                </div>
                <div>
                  <p>95 Tinubu Estate, Lekki, Lagos</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-5 lg:justify-start">
              <div className="flex items-center gap-5 text-[18px] lg:text-[16px]">
                <div>
                  <img src={tel} alt="" />
                </div>
                <div>
                  <p>+234 675 8935 675</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-5 lg:justify-start">
              <div className="flex items-center gap-5 text-[18px] lg:text-[16px]">
                <div>
                  <img src={Envelope} alt="" />
                </div>
                <div>
                  <p>support@rentbetahouse.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-28">
            <div className="text-center lg:text-start">
              <h1 className="text-[25px] lg:text-[23px] font-semibold">
                Quick Links
              </h1>
            </div>
            <div className="text-[16px] text-center my-5 lg:my-0 lg:text-start lg:text-[18px] lg:mt-5">
              <p>Homes</p>
              <p>Properties</p>
              <p>About</p>
              <p>Contact Us</p>
              <p>Blog</p>
            </div>
          </div>

          <div className="mt-10 lg:mt-28">
            <div className="text-center lg:text-start">
              <h1 className="text-[25px] lg:text-[23px] font-semibold">More</h1>
            </div>
            <div className="text-[16px] text-center my-5 lg:my-0 lg:text-start lg:text-[18px] lg:mt-5">
              <p>Agents</p>
              <p>Affordable Homes</p>
              <p>FAQ's</p>
            </div>
          </div>

          <div className="mt-10 lg:mt-28">
            <div className="text-center lg:text-start">
              <h1 className="text-[25px] lg:text-[23px] font-semibold">
                Popular Search
              </h1>
            </div>
            <div className="text-[16px] text-center my-5 lg:my-0 lg:text-start lg:text-[18px] lg:mt-5">
              <p>Apartment for Sales</p>
              <p>Apartment for Rent</p>
              <p>Bedroom Flat</p>
              <p>Bungalow</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-3 text-center mb-10 lg:mb-0 lg:text-start lg:gap-0 lg:flex-row justify-between text-[18px] lg:text-[16px] mt-10 px-20">
          <div>
            <p>Copyright 2023 Betahouse  Designed by Michael.fig</p>
          </div>
          <div>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
