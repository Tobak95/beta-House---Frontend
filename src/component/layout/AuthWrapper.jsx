import React from "react";
import RegisterBg from "../../assets/RegisterBg.jpg"
import NavIcon from "../../assets/navIcon.png"

const AuthWrapper = () => {
  return (
    <div className=" lg:max-w-[779px] h-[800px] rounded-[12px] relative">
      <img
        src={RegisterBg}
        alt="AuthWrapper"
        className="object-cover rounded-[12px] h-[100%] w-[100%]"
      />

      <div className="absolute top-10 left-7">
        <img src={NavIcon} alt="" />
      </div>
    </div>
  );
};

export default AuthWrapper;
