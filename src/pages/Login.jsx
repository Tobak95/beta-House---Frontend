import React from "react";
import Google from "../../src/assets/Google.png";
import AuthWrapper from "../component/layout/AuthWrapper";

const Login = () => {
  return (
    <div className="layout flex gap-10">
      <div className="w-[482px] p-7">
        <div className="w-[455px] mt-25">
          <h1 className="font-semibold text-[28px]">
            Welcome Back to BetaHouse!
          </h1>
          <p className="text-[16px]">
            Lets get started by filling out the information below
          </p>
        </div>

        <form className="mt-10">
          <div className="flex flex-col">
            <label htmlFor="email" className="font-[500]">
              {" "}
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

          <div className="flex justify-between">
            <button className="flex flex-row items-center gap-1 my-3">
              <div className="">
                <input
                  type="checkbox"
                  id="terms&condition"
                  className="w-[15px] h-[17px] mt-2"
                />
              </div>
              <div>
                <label htmlFor="T&C">Remember Me</label>
              </div>
            </button>

            <div className="my-3">
              <p className="text-[#EC5E5E]">forgot Password</p>
            </div>
          </div>

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
              New User? <span className="text-[#3D9970]">Sign Up</span>{" "}
            </p>
          </div>
        </form>
      </div>

      <div>
        <AuthWrapper />
      </div>
    </div>
  );
};

export default Login;
