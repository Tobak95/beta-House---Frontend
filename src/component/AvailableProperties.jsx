import React, { useEffect } from "react";
import filterButton from "../../src/assets/filterButton.png";
import dropDownArrow from "../../src/assets/dropDownArrow.png";
// import { allProperties } from "../../data";
import ArrowLink from "../../src/assets/ArrowLink.png";
import BathTub from "../../src/assets/BathTub.png";
import Bed from "../../src/assets/Bed.png";
import ChainImage from "../../src/assets/ChainImage.png";
import FrameImg from "../../src/assets/FrameImg.png";
import LikeButton from "../../src/assets/LikeButton.png";
import LocationImg from "../../src/assets/LocationImg.png";
import Naira from "../../src/assets/Naira.png";
import Share from "../../src/assets/Share.png";
import VideoImage from "../../src/assets/VideoImage.png";
import { useState } from "react";
import Pagination from "./Pagination";
import { axiosInstance } from "../../utils/axiosInstance";

const AvailableProperties = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [allProperties, setAllProperties] = useState([]);
  // const [loading, setIsloading] = useState(false);
  // const [properties, setProperties] = useState([]);
  const itemsPerPage = 9;
  const getAllProperties = async () => {
    try {
      const response = await axiosInstance.get("/property/allproperty");
      const { data } = response;
      const property = data.properties || data || [];
      console.log(data);
      setAllProperties(property);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProperties();
  }, []);

  // calculate what to show
  const totalItems = allProperties.length;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allProperties.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="layout">
      <div className="flex flex-col justify-center items-center  gap-2 p-3 lg:flex-row lg:justify-between  lg:mt-5 font-[outfit]">
        <div className="flex gap-3 justify-between items-center">
          <div>
            <img src={filterButton} alt="just to filter" />
          </div>
          <p className="text-[20px] lg:text-[21px]">
            Showing {currentItems.length} of {totalItems}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <h1 className="text-[18px] lg:text-[21px]">Sort by:</h1>
          </div>
          <div className="flex gap-2 items-center">
            <h1 className="text-[18px] lg:text-[23px]">Default</h1>
            <img src={dropDownArrow} alt="" className="w-[27px] h-[27px] " />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center lg:justify-between  ">
        {currentItems.map((properties, index) => {
          return (
            <div key={index} className="w-[396px] font-[outfit] my-4">
              <div className="relative">
                <img
                  src={properties.house}
                  alt="houses available"
                  className="object-cover h-[297.24px] w-[396.32px] rounded-t-[10px]"
                />

                <div className="w-[96.49px] h-[36.19px] bg-[#3D9970] rounded-[2.89px] text-white flex items-center justify-center absolute top-4 left-3">
                  <p className=" text-[13px] font-[500] text-center text-white">
                    {properties.featuredTag}
                  </p>
                </div>

                <div className="w-[96.49px] h-[36.19px] bg-[#D3D3D3B2] rounded-[2.89px] text-white  flex items-center justify-center absolute top-4 right-3 ">
                  <p className=" text-[13px] font-[500] text-center text-white">
                    {properties.salesTag}
                  </p>
                </div>

                <div className="w-[182.43px] h-[59.73px] flex justify-evenly gap- absolute -right-0 bottom-0 ">
                  <div>
                    <img
                      src={ChainImage}
                      alt="..."
                      className="w-[41px] h-[41px] "
                    />
                  </div>

                  <div>
                    <img
                      src={VideoImage}
                      alt="...."
                      className="w-[41px] h-[41px] "
                    />
                  </div>

                  <div>
                    <img
                      src={FrameImg}
                      alt="..."
                      className="w-[41px] h-[41px] "
                    />
                  </div>
                </div>
              </div>
              <div className="h-[248px] px-3 border border-[#DDD8D8] rounded-b-[10px]">
                <div className="w-[290px] h-[98px]">
                  <div>
                    <h1 className="font-semibold mt-3">{properties.title}</h1>
                  </div>

                  <div className="flex gap-3 items-center mt-2">
                    <img
                      src={LocationImg}
                      alt=""
                      className="w-[9.86px] h-[17.23px] "
                    />
                    <p>{properties.location}</p>
                  </div>

                  <div className="flex justify-between mt-3">
                    <div className="flex items-center gap-2  ">
                      <img
                        src={Bed}
                        alt="icon of a Bed"
                        className="w-[19.99px] h-[16px] "
                      />
                      <p className="text-[16px]">{properties.bedrooms}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <img
                        src={BathTub}
                        alt="icon of a bathtub"
                        className="w-[21px] h-[19.3px]"
                      />
                      <p>{properties.bathrooms}</p>
                    </div>
                  </div>

                  <hr className="mt-10  border border-[#DDD8D8] ml-8" />
                </div>
                <div className="flex flex-row justify-between items-center mt-13 ">
                  <div className="flex items-center ">
                    <img
                      src={Naira}
                      alt="currency icon"
                      className="w-[16px] h-[18px]"
                    />
                    <h1 className="text-[22px] font-semibold ">
                      {properties.price}/Year
                    </h1>
                  </div>
                  <div>
                    <img
                      src={ArrowLink}
                      alt="..."
                      className="w-[18.38px] h-[18.38px]"
                    />
                  </div>
                  <div>
                    <img
                      src={Share}
                      alt=""
                      className="w-[14.38px] h-[14.38px] mt-1"
                    />
                  </div>
                  <div>
                    <img
                      src={LikeButton}
                      alt=""
                      className="w-[14.38px] h-[14.38px] mt-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        totalItems={allProperties.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default AvailableProperties;
