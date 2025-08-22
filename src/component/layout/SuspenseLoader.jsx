import React from "react";
import { RingLoader } from "react-spinners";

const SuspenseLoader = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <RingLoader />
      </div>
    </div>
  );
};

export default SuspenseLoader;
