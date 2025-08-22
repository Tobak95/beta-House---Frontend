import React from "react";
import { discoverPopularProperties } from "../../data";
import WhiteNaira from "../../src/assets/WhiteNaira.png";
import WhiteLocation from "../../src/assets/WhiteLocation.png";
import ArrowLeft from "../../src/assets/ArrowLeft.png";
import ArrowRight from "../../src/assets/ArrowRight.png";
import pageRight from "../../src/assets/pageRight.png";
import pageLeft from "../../src/assets/pageLeft.png";

const DiscoverProperties = () => {
  return (
    <div className="layout">
      <div>
        <h1 className="text-[40px] lg:text-[50px] font-[600] text-center mt-5 font-[outfit]">
          Discover Our Popular Properties
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-2">
        {discoverPopularProperties.map((properties, index) => {
          return (
            <div key={index} className="layout w-[290px] mt-5">
              <div className="relative">
                <img
                  src={properties.img}
                  alt=""
                  className="w-full object-cover h-[412px] rounded-[7px]"
                />
                <div>
                  {index === 0 && (
                    <img
                      src={ArrowLeft}
                      alt=""
                      className="w-[54px] h-[54px] absolute bottom-45 -left-7 hidden lg:block"
                    />
                  )}
                  {index === 3 && (
                    <img
                      src={ArrowRight}
                      alt=""
                      className="w-[54px] h-[54px] absolute bottom-45 -right-7 hidden lg lg:block  "
                    />
                  )}
                </div>
                <div className="bg-[#4A4A4C33] h-[142px] rounded-b-[4.5px] p-3  text-[#FFFFFF] absolute bottom-0 w-full font-[outfit] overflow-y">
                  <h1 className="text-[18px] font-[600]">{properties.title}</h1>
                  <div className="flex items-center mt-2">
                    <img
                      src={WhiteNaira}
                      alt=""
                      className="w-[16px] h-[18px] "
                    />
                    <p className="text-[18px] font-[600]">{properties.price}</p>
                  </div>

                  <div className="flex gap-3 mt-2 text-[14px] font-[400]">
                    <p>{properties.bed}</p>
                    <p>{properties.bath}</p>
                    <p>{properties.sqm}</p>
                  </div>

                  <div className="flex gap-2 items-center mt-1">
                    <img
                      src={WhiteLocation}
                      alt=""
                      className="w-[9.76px] h-[17.06px]"
                    />
                    <p>{properties.location}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DiscoverProperties;
