import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { PiUsersThree } from "react-icons/pi";
import { FaRegCalendarPlus } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineRateReview } from "react-icons/md";
import { TbBlade } from "react-icons/tb";
import Header from "@/app/components/Home/Header";
import OurService from "@/app/components/Home/OurService";
import Card from "@/app/utils/Card";
import Link from "next/link";

const AdminSideBar = () => {
  return (
    <div className=" w-72 bg-[#101924]">
      <div className="  pt-2">
        <div className=" flex gap-5 py-5  flex-col  text-gray-300 ">
          <ul className=" flex flex-col  w-full   rounded-e-2xl ">
            <li className="rounded-se-2xl flex gap-4 border-b  border-gray-500 px-7 align-end items-center pb-3 pt-4 group hover:bg-slate- transition  hover:border-1 text-xs tracking-widest duration-[1500ms]  hover:border-l-2 hover:border-l-blue-200 cursor-pointer w-full ">
              <MdOutlineDashboard className=" h-5 w-5 group-hover:scale-110 duration-300 " />
              <span>Dashboard</span>
            </li>
            <li className="flex gap-4 border-b border-gray-500  px-7 align-end items-center pb-3 pt-4 group hover:bg-slate- transition  hover:border-1 text-xs tracking-widest duration-[1500ms]  hover:border-l-2 hover:border-l-blue-200 cursor-pointer ">
              <PiUsersThree className=" h-5 w-5" />
              <span>Users</span>
            </li>
            <li className="flex gap-4 border-b border-gray-500  px-7 align-end items-center pb-3 pt-4 group hover:bg-slate- transition  hover:border-1 text-xs tracking-widest duration-[1500ms]  hover:border-l-2 hover:border-l-blue-200 cursor-pointer ">
              <FaRegCalendarAlt className=" h-5 w-5" />
              <span>Appointments</span>
            </li>
            <li className="flex gap-4 border-b border-gray-500  px-7 align-end items-center pb-3 pt-4 group hover:bg-slate- transition  hover:border-1 text-xs tracking-widest duration-[1500ms]  hover:border-l-2 hover:border-l-blue-200 cursor-pointer ">
              <FaRegCalendarPlus className=" h-5 w-5" />

              <span>New Appointment</span>
            </li>
            <li className="flex gap-4 border-b border-gray-500  px-7 align-end items-center pb-3 pt-4 group hover:bg-slate- transition  hover:border-1 text-xs tracking-widest duration-[1500ms]  hover:border-l-2 hover:border-l-blue-200 cursor-pointer ">
            <GrServices className=" h-5 w-5" />

              <span>Services</span>
            </li>
            <li className="flex gap-4 border-b border-gray-500  px-7 align-end items-center pb-3 pt-4 group hover:bg-slate- transition  hover:border-1 text-xs tracking-widest duration-[1500ms]  hover:border-l-2 hover:border-l-blue-200 cursor-pointer ">
              < MdOutlineRateReview  className=" h-5 w-5" />
              <span>Reviews</span>
            </li>
            <li className="flex gap-4 border-b border-gray-500  px-7 align-end items-center pb-3 pt-4 group hover:bg-slate- transition  hover:border-1 text-xs tracking-widest duration-[1500ms]  hover:border-l-2 hover:border-l-blue-200 cursor-pointer ">
              <FaRegUser  className=" h-5 w-5" />
              <span>Barbers</span>
            </li>
            <li className="flex gap-4 border-b border-gray-500  px-7 align-end items-center pb-3 pt-4 group hover:bg-slate- transition  hover:border-1 text-xs tracking-widest duration-[1500ms]  hover:border-l-2 hover:border-l-blue-200 cursor-pointer ">
              <GrServices  className=" h-5 w-5" />
              <span>Settings</span>
            </li>
            {/* <li className="flex gap-4 border-b border-gray-500  px-7 align-end items-center pb-3 pt-4 group hover:bg-slate- transition  hover:border-1 text-xs tracking-widest duration-[1500ms]  hover:border-l-2 hover:border-l-blue-200 rounded-ee-2xl cursor-pointer ">
              <FaRegCalendarAlt className=" h-5 w-5" />
              <span>Settings</span>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;
