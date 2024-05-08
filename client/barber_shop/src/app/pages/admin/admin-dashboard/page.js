"use client";
import React from "react";
import withAuth from "../../../utils/withAuth";
// import card
import Card from "../../../utils/Card";
import { MdOutlineDashboard } from "react-icons/md";
import { PiUsersThree } from "react-icons/pi";
import { FaRegCalendarPlus } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa6";
import { TbBlade } from "react-icons/tb";

const Page = () => {
  return (
    <div className=" bg-slate-200">
      <div className=" w-11/12  pt-12   m-auto flex gap-10">
        <div className=" w-1/2 flex gap-5 py-5  flex-col  ">
          <div className=" bg-slate-50 pt-3 pb-1 text-xl font-bold tracking-wider text-[#a8927a] rounded-e-2xl px-3 gap-4 py-2 flex">
            <TbBlade className=" w-8 h-8 " />
            Barber Shop
          </div>
          <ul className=" flex flex-col  w-full   rounded-e-2xl ">
            <li className="rounded-se-2xl flex gap-7 border-b px-7 align-end items-center pb-3 pt-4 group bg-slate-50  hover:bg-slate- transition hover:md:translate-x-7 hover:bg-blue-200 hover:border-1 font-bold text-sm tracking-widest duration-[1500ms]  hover:border-l-4 hover:border-l-blue-600 cursor-pointer w-full ">
              <MdOutlineDashboard className=" h-7 w-7 group-hover:scale-110 duration-300 " />
              <span>Dashboard</span>
            </li>
            <li className="flex gap-7 border-b px-7 align-end items-center pb-3 pt-4 group bg-slate-50  hover:bg-slate- transition hover:md:translate-x-7 hover:bg-blue-200 hover:border-1 font-bold text-sm tracking-widest duration-[1500ms]  hover:border-l-4 hover:border-l-blue-600 cursor-pointer ">
              <PiUsersThree className=" h-7 w-7" />
              <span>Users</span>
            </li>
            <li className="flex gap-7 border-b px-7 align-end items-center pb-3 pt-4 group bg-slate-50  hover:bg-slate- transition hover:md:translate-x-7 hover:bg-blue-200 hover:border-1 font-bold text-sm tracking-widest duration-[1500ms]  hover:border-l-4 hover:border-l-blue-600 cursor-pointer ">
              <FaRegCalendarAlt className=" h-7 w-7" />
              <span>Appointments</span>
            </li>
            <li className="flex gap-7 border-b px-7 align-end items-center pb-3 pt-4 group bg-slate-50  hover:bg-slate- transition hover:md:translate-x-7 hover:bg-blue-200 hover:border-1 font-bold text-sm tracking-widest duration-[1500ms]  hover:border-l-4 hover:border-l-blue-600 cursor-pointer ">
              <FaRegCalendarPlus className=" h-7 w-7" />

              <span>Services</span>
            </li>
            <li className="flex gap-7 border-b px-7 align-end items-center pb-3 pt-4 group bg-slate-50  hover:bg-slate- transition hover:md:translate-x-7 hover:bg-blue-200 hover:border-1 font-bold text-sm tracking-widest duration-[1500ms]  hover:border-l-4 hover:border-l-blue-600 cursor-pointer ">
              <GrServices className=" h-7 w-7" />
              <span>Reviews</span>
            </li>
            <li className="flex gap-7 border-b px-7 align-end items-center pb-3 pt-4 group bg-slate-50  hover:bg-slate- transition hover:md:translate-x-7 hover:bg-blue-200 hover:border-1 font-bold text-sm tracking-widest duration-[1500ms]  hover:border-l-4 hover:border-l-blue-600 cursor-pointer ">
              <GrServices className=" h-7 w-7" />
              <span>Barbers</span>
            </li>
            <li className="flex gap-7 border-b px-7 align-end items-center pb-3 pt-4 group bg-slate-50  hover:bg-slate- transition hover:md:translate-x-7 hover:bg-blue-200 hover:border-1 font-bold text-sm tracking-widest duration-[1500ms]  hover:border-l-4 hover:border-l-blue-600 cursor-pointer ">
              <FaRegUser className=" h-7 w-7" />
              <span>Settings</span>
            </li>
            <li className="flex gap-7 border-b px-7 align-end items-center pb-3 pt-4 group bg-slate-50  hover:bg-slate- transition hover:md:translate-x-7 hover:bg-blue-200 hover:border-1 font-bold text-sm tracking-widest duration-[1500ms]  hover:border-l-4 hover:border-l-blue-600 rounded-ee-2xl cursor-pointer ">
              <FaRegCalendarAlt className=" h-7 w-7" />
              <span>Settings</span>
            </li>
          </ul>
        </div>

        <div className=" py-5 px-10  ">
        <div className="flex items-end align-bottom justify-start ">
          <h1 className=" relative text-4xl align-bottom justify-center items-center tracking-wider font-extrabold  ">Dashboard <span className=" w-24   absolute h-2 border-b-4  ms-3 bg-red-500 bottom-0 rounded-sm   "></span></h1>
        </div>
          <div className=" w-3/4 grid grid-cols-2">
            <Card />
            <Card />
            <Card />
            <Card />
            {/* <Card />
            <Card /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
