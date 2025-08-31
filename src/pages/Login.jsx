import React from "react";
import { useState } from "react";
import Google from "../../src/assets/Google.png";
import AuthWrapper from "../component/layout/AuthWrapper";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../utils/formValidator";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppContext } from "../hooks/useAppContext";
import { useNavigate, Link } from "react-router-dom";
import { axiosInstance } from "../../utils/axiosInstance";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

const Login = () => {
  const { login, user } = useAppContext();
  const [errorMessage, setErrorMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const redirect = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = async (data) => {
    setSubmitting(true);
    try {
      const response = await axiosInstance.post("/auth/login", { ...data });
      const { data: mydata } = response;
      if (mydata === 200) {
        console.log(mydata);
      }
      toast.success("Login Successful");
      redirect("/home");
      login(mydata.token, mydata.user);
    } catch (error) {
      console.log(error);
      setErrorMessage(error?.response?.data.message);
      toast.error("Login Failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="layout flex gap-10">
      <div className="mx-auto w-[482px] p-7">
        <Link to={"/"}>
          <div className="flex gap-3 items-center mb-10">
            <div className="bg-[#3D9970] rounded-full w-[55px] h-[55px] text-white flex items-center justify-center">
              <h1 className="text-[22px] font-bold flex text-center">BH</h1>
            </div>
            <div>
              <h1 className="text-black text-[22px] font-bold">Beta House</h1>
            </div>
          </div>
        </Link>
        <div className=" lg:w-[455px] lg:mt-25">
          <h1 className="font-semibold text-[30px] lg:text-[28px]">
            Welcome Back to BetaHouse!
          </h1>
          <p className="text-[20px] lg:text-[16px]">
            Lets get started by filling out the information below
          </p>
        </div>

        <form onSubmit={handleSubmit(handleLogin)} className="mt-10">
          <div className="flex flex-col">
            <label htmlFor="email" className="font-[500]">
              {" "}
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your Email"
              className="border border-[#DEDFE0] h-[54.3px] px-2 rounded-[5px] mt-1"
              {...register("email")}
            />
            <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
          </div>

          <div className="flex flex-col  my-3">
            <label htmlFor="password" className="font-[500]">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your Password"
              className="border border-[#DEDFE0] h-[54.3px] px-2 rounded-[5px] mt-1"
              {...register("password")}
            />
            <p className="text-red-500 text-sm mt-1">
              {errors.password?.message}
            </p>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-center mt-2">{errorMessage}</p>
          )}
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
            <button
              disabled={submitting}
              className="py-5 bg-[#3D9970] w-full rounded-[15px]"
            >
              {submitting ? (
                <ClipLoader size={20} color="#ffffff" />
              ) : (
                "Register"
              )}
            </button>
          </div>

          <div className="mt-5">
            <button className="flex justify-center gap-2 py-5 border w-full rounded-[15px]">
              <div>
                <img src={Google} alt="" />
              </div>
              <h1>Continue with Google</h1>
            </button>
            <Link to={"/register"}>
              <p className="mt-5 text-center">
                New User? <span className="text-[#3D9970]">Sign Up</span>{" "}
              </p>
            </Link>
          </div>
        </form>
      </div>

      <div className="hidden lg:block">
        <AuthWrapper />
      </div>
    </div>
  );
};

export default Login;
