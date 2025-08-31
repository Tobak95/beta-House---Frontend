import React from "react";

const UserAvatar = ({ firstName, lastName }) => {
  const getInitials = (firstName, lastName) => {
    if (!(firstName && lastName)) return "";
    if (firstName && lastName) {
      `${firstName[0]}&{lastName[0]}`.toUpperCase();
      return firstName[0].toUpperCase() + lastName[0].toUpperCase();
    }
  };
  return (
    <div className="w-[35px] h-[35px] lg:w-[48px] lg:h-[48px] flex items-center justify-center bg-black lg:bg-[#3D9970] text-white rounded-full font-bold text-lg">
      {getInitials(firstName, lastName)}
    </div>
  );
};

export default UserAvatar;
