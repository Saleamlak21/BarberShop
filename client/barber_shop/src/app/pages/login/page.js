"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const page = () => {
  const [switcher, setSwitcher] = useState(false);
  return (
    <div className="  py-12 px-2 scale-100 overflow-hidden login ">
      <div className=" py-12 px-2 flex flex-col gap-1 ">
        <div className=" flex gap-2 ">
          <FaStar className=" text-[#91765a] " />
          <FaStar className=" text-[#91765a] " />
          <FaStar className=" text-[#91765a] " />
          <FaStar className=" text-[#91765a] " />
          <FaStar className=" text-[#91765a] " />
        </div>
        <p className=" text-white text-3xl font-bold  pt-3 ">
          We Are Best Barbers & Hair{" "}
        </p>
        <p className=" text-white text-3xl font-bold  ">
          Cutting Salon at ATL.
        </p>
        <div className=" my-4 flex  text-white">
          <img className=" h-16 font-bold" src="/assets/icons/razor.png" />
          <div className="flex flex-col mx-4">
            <p className=" font-bold  text-[#91765a]">APPOINTMENT</p>
            <p className=" text-2xl font-bold">855 555 5555</p>
          </div>
        </div>
      </div>
      <div class="shadow-xl rounded-md py-12 relative px-3 ">
        <div class="absolute rounded-lg inset-0 bg-gray-300 opacity-15 filter backdrop-blur-lg"></div>
        <div
          class={`shadow-md py-12 transition duration-300  ${
            !switcher ? "block" : " hidden translate-x-80"
          }  relative z-10`}
        >
          <p className=" text-3xl font-bold mb-16 mx-4 text-white ">
            Login to your account
          </p>
          <form className=" flex flex-col gap-6 items-center">
            <input
              placeholder="Email"
              type="email"
              className=" text-sm  h-12 w-11/12 px-5 border italic outline-none focus-visible:scale-100 s  "
              required
            />

            <input
              placeholder="Password"
              type="password"
              className=" text-sm  h-12 w-11/12 px-5 border italic outline-none focus-visible:scale-100 s  "
              required
            />
            <button className=" bg-[#14100c] text-white w-11/12 h-12 font-bold tracking-wider">
              Login
            </button>
          </form>
          <p className=" text-sm text-white mx-4 mt-4 mb-2">
            Don't have an account?{" "}
            <span
              className="text-[#97836c] font-bold txet-base mx-3"
              onClick={() => {
                // after 4 seconds the switcher will be set to true
                setTimeout(() => {
                  setSwitcher(true);
                }, 500);
              }}
            >
              Register
            </span>
          </p>
          <p className=" mx-4 mt-4 mb-2">
            <a className="text-[#97836c] font-bold" href="/password-reset">
              Forgot password?
            </a>
          </p>
        </div>

        {/* --------------------register--------- */}
        <div
          class={`shadow-md py-12 ${
            switcher ? "block" : " hidden"
          }  relative z-10`}
        >
          <p className=" text-3xl font-bold mb-16 mx-4 text-white ">
            Create your account
          </p>
          <form className=" flex flex-col gap-6 items-center">
            <input
              placeholder="Username"
              type="email"
              className=" text-sm  h-12 w-11/12 px-5 border italic outline-none focus-visible:scale-100 s  "
              required
            />
            <input
              placeholder="Email"
              type="email"
              className=" text-sm  h-12 w-11/12 px-5 border italic outline-none focus-visible:scale-100 s  "
              required
            />
            <div className=" w-11/12 flex gap-2">
              <input
                placeholder="First Name"
                type="text"
                className=" text-sm w-[49%]  h-12  px-5 border italic outline-none focus-visible:scale-100 s  "
                required
              />
              <input
                placeholder="Last Name"
                type="text"
                className=" text-sm w-[49%]  h-12  px-5 border italic outline-none focus-visible:scale-100 s  "
                required
              />
            </div>

            <input
              placeholder="Phone Number"
              type="text"
              className=" text-sm  h-12 w-11/12 px-5 border italic outline-none focus-visible:scale-100 s  "
              required
            />
            <input
              placeholder="Password"
              type="password"
              className=" text-sm  h-12 w-11/12 px-5 border italic outline-none focus-visible:scale-100 s  "
              required
            />
            <button className=" bg-[#14100c] text-white w-11/12 h-12 font-bold tracking-wider">
              Register
            </button>
          </form>
          <p className=" text-sm text-white mx-4 mt-4 mb-2">
            Already have an account?
            <span
              className="text-[#97836c] font-bold mx-3 text-base"
              onClick={() => {
                setTimeout(() => {
                  setSwitcher(false);
                }, 500);
              }}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
