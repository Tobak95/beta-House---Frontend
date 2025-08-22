import React from "react";
import { useState } from "react";
import Google from "../../src/assets/Google.png";
import AuthWrapper from "../component/layout/AuthWrapper";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { signUpSchema } from "../../utils/formValidator";
import { useNavigate, Link } from "react-router-dom";
import { axiosInstance } from "../../utils/axiosInstance";
import { toast } from "react-toastify";

const Register = () => {
  const redirect = useNavigate();

  const [Submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const handleRegister = async (data) => {
    setSubmitting(true);
    try {
      const response = await axiosInstance.post("/auth/register", { ...data });
      if (response.status === 201) {
        console.log(response.data);
        toast.success("User is Registered Successfully");
        redirect("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error("Please Try Again, Registration not successful");
      setErrorMessage(
        error?.response?.data.message || "Registration not Successful"
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="layout flex">
      <div className="mx-auto w-[482px]  lg:p-7">
        <div className="mt-5 p-4 lg:w-[455px]">
          <h1 className="w-full text-[19px] lg:text-[27px] font-semibold ">
            Join our community of home seekers and explore the possibilities
            that await.
          </h1>
          <p className="text-[] mt-3 lg:mt-0">
            Lets get started by filling out the information below
          </p>
        </div>

        <form onSubmit={handleSubmit(handleRegister)} className="mt-5 p-4">
          <div className="lg:flex items-center g:flex justify-between gap-2 lg:gap-6 lg:w-[218px] h-[81px]">
            <div className="flex  flex-col  justify-between">
              <label htmlFor="firstName" className="text-[16px] font-[500]">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter Name"
                className="p-2 border border-[#DEDFE0] rounded-[5px] mt-1"
                {...register("firstName")}
              />
              <p className="text-red-500 text-sm ">
                {errors.firstName?.message}
              </p>
            </div>
            {errorMessage && (
              <p className="text-red-500 text-center mt-2">{errorMessage}</p>
            )}

            <div className="flex flex-col  mt-3 lg:mt-0">
              <label htmlFor="lastName " className="font-[500]">
                Last name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Enter Name"
                className="p-2 border border-[#DEDFE0] rounded-[5px] mt-"
                {...register("lastName")}
              />
              <p className="text-red-500 text-sm ">
                {errors.lastName?.message}
              </p>
            </div>
          </div>

          <div className=" flex flex-col  my-3 mt-18 lg:mt-0">
            <label htmlFor="email" className="font-[500]">
              Email
            </label>
            <input
              id="email"
              type="text"
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
              type="text"
              placeholder="Enter your Password"
              className="border border-[#DEDFE0] h-[54.3px] px-2 rounded-[5px] mt-1"
              {...register("password")}
            />
            <p className="text-red-500 text-sm mt-1">
              {errors.password?.message}
            </p>
          </div>

          <div className="flex flex-col  my-3">
            <label htmlFor="confirmPassword" className="font-[500]">
              Confirm password
            </label>
            <input
              id="confirmPassword"
              type="text"
              placeholder="Confirm your Password"
              className="border border-[#DEDFE0] h-[54.3px] px-2 rounded-[5px] mt-1"
              {...register("confirmPassword")}
            />
            <p className="text-red-500 text-sm">
              {errors.confirmPassword?.message}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="">
              <input
                type="checkbox"
                id="terms&condition"
                className="lg:w-[15px] lg:h-[17px] mt-2"
              />
            </div>
            <div>
              <label htmlFor="T&C" className="">
                I agree to
                <span className="text-[#3D9970]">Terms of Service</span> and
                <span className="text-[#3D9970]"> Privacy Policies</span>
              </label>
            </div>
          </div>

          <div className="flex justify-center mt-10 lg:mt-0">
            <button className="py-5 bg-[#3D9970] w-full rounded-[15px] cursor-pointer">
              Register
            </button>
          </div>
        </form>
        <div className="mt-5">
          <button className="flex justify-center gap-2 py-5 border w-full rounded-[15px]">
            <div>
              <img src={Google} alt="" />
            </div>
            <h1>Continue with Google</h1>
          </button>

          <Link to={"/login"}>
            <p className="mt-5 text-center">
              Already have an account?{" "}
              <span className="text-[#3D9970]">Sign in</span>{" "}
            </p>
          </Link>
        </div>
      </div>
      <div className="hidden lg:block">
        <AuthWrapper />
      </div>
    </div>
  );
};

export default Register;
