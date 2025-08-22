import React from "react";
import Nav from "./layout/Nav";
import { useState } from "react";
import countPlus from "../../src/assets/countPlus.png";
import countMinus from "../../src/assets/countMinus.png";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [count, setCount] = useState(0);
  return (
    <div className="hero w-full lg:max-h-[680px] bg-[#666666]  ">
      <Nav />
      <div className="layout mt-[70px] ">
        <div className="w-full flex lg:h-[217px] ">
          <div className="mx-auto w-[320px] md:w-[560px]  text-center lg:w-[784px] lg:text-center text-[#ffffff]">
            <h1 className="text-[35px] mt-10 lg:text-[68px] font-bold lg:mt-5">
              Browse Our Properties
            </h1>
            <p className="w-full text-[19px] text-center   mt-3 lg:text-[26px] lg:mt-10">
              Find your perfect home among our curated properties. Start
              browsing now!
            </p>
          </div>
        </div>

        <div className="bg-[#FFFFFF33] w-[320px] md:w-[590px] mx-auto lg:w-full mb-[30px] lg:h-[135px] py-6 px-5 lg:mt-10">
          <form className="flex flex-col w-full   lg:flex-row justify-between items-center mx-auto bg-[#FFFFFF] lg:h-[89px] rounded-[10px] px-">
            <div className="flex flex-col border-b my-3 text-center lg:border-b-0 lg:border-r px-7">
              <label
                htmlFor="location"
                className="text-[20px]  lg:text-[16px] font-bold"
              >
                LOCATION
              </label>
              <input
                type="text"
                id="location"
                placeholder="eg.gbagada"
                className="w-full outline-none text-center mb-2"
              />
            </div>

            <div className="border-b my-2 text-center lg:border-b-0 lg:border-r px-4">
              <label
                htmlFor="Property Types"
                className="text-[16px] font-bold  "
              >
                PROPERTY TYPE
              </label>

              <p className="mb-3">eg. Duplex, Bedroom Flat</p>
              {/* <select id="Apartment Types" className="w-full">
                <option value="">Apartment Types</option>
                <option value="Duplex">Duplex</option>
                <option value="Bedroom">Bedroom</option>
                <option value="Flat">Flat</option>
              </select> */}
            </div>

            <div className="my-3">
              <label htmlFor="Bedroom" className="text-[16px] font-bold">
                BEDROOM
              </label>
              <div className="flex justify-between gap-[2px] mt-2">
                <button>
                  <img
                    src={countMinus}
                    alt="minus"
                    className="h-[21px] w-[21px]"
                  />
                </button>

                <span>{count}</span>

                <button>
                  <img
                    src={countPlus}
                    alt="plus"
                    className="h-[21px] w-[21px]"
                  />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center h-full w-[250px] md:w-[520px] rounded-lg lg:rounded-none  lg:w-[297.3898620605469px]  bg-[#3D9970] lg:rounded-tr-[10px] lg:rounded-br-[10px] my-4">
              <button className="">
                <h1 className="text-[20px] text-white p-1 ">Find Property</h1>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
