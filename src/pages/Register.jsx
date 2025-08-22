import React from "react";
import Google from "../../src/assets/Google.png";
import AuthWrapper from "../component/layout/AuthWrapper"

const Register = () => {
  return (
    <div className="layout flex">
      <div className="max-w-[482px]  p-2">
        <div className="w-[455px]">
          <h1 className="font-semibold text-[27px]  ">
            Join our community of home <br /> seekers and explore the
            possibilities that await.
          </h1>
          <p>Lets get started by filling out the information below</p>
        </div>

        <form className="mt-5 p-4">
          <div className="flex justify-between gap-10 w-[218px] h-[81px]">
            <div>
              <label htmlFor="first-Name" className="text-[16px] font-[500]">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="p-2 border border-[#DEDFE0] rounded-[5px] mt-1"
              />
            </div>

            <div>
              <label htmlFor="first-Name " className="font-[500]">
                Last name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="p-2 border border-[#DEDFE0] rounded-[5px] mt-1"
              />
            </div>
          </div>

          <div className="flex flex-col  my-3">
            <label htmlFor="Email" className="font-[500]">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter your Email"
              className="border border-[#DEDFE0] h-[54.3px] px-2 rounded-[5px] mt-1"
            />
          </div>

          <div className="flex flex-col  my-3">
            <label htmlFor="password" className="font-[500]">
              Password
            </label>
            <input
              type="text"
              placeholder="Enter your Password"
              className="border border-[#DEDFE0] h-[54.3px] px-2 rounded-[5px] mt-1"
            />
          </div>

          <div className="flex flex-col  my-3">
            <label htmlFor="password" className="font-[500]">
              Confirm password
            </label>
            <input
              type="text"
              placeholder="Confirm your Password"
              className="border border-[#DEDFE0] h-[54.3px] px-2 rounded-[5px] mt-1"
            />
          </div>

          <button className="flex flex-row items-center gap-1 my-3">
            <div className="">
              <input
                type="checkbox"
                id="terms&condition"
                className="w-[15px] h-[17px] mt-2"
              />
            </div>
            <div>
              <label htmlFor="T&C">
                I agree to{" "}
                <span className="text-[#3D9970]">Terms of Service</span> and
                <span className="text-[#3D9970]"> Privacy Policies</span>
              </label>
            </div>
          </button>

          <div className="flex justify-center">
            <button className="py-5 bg-[#3D9970] w-full rounded-[15px]">
              Sign up
            </button>
          </div>

          <div className="mt-5">
            <button className="flex justify-center gap-2 py-5 border w-full rounded-[15px]">
              <div>
                <img src={Google} alt="" /> 
              </div>
              <h1>Continue with Google</h1>
            </button>

            <p className="mt-5 text-center">
              Already have an account? <span className="text-[#3D9970]">Sign in</span>{" "}
            </p>
          </div>
        </form>
      </div>
    <AuthWrapper/>
    </div>
  );
};

export default Register;
