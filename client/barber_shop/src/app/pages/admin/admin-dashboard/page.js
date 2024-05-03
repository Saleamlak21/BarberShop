import React from "react";
import Header from "@/app/components/Home/Header";
import OurService from "@/app/components/Home/OurService";
import Card from "@/app/utils/Card";
import Link from "next/link";
import AdminSideBar from "../../../components/admin/AdminSideBar";

const page = () => {
  return (

      <div className=" bg-[#f5eee7] h-svh">
        {/* <AdminSideBar/>/
        <div>
          <OurService />
        </div> */}
        <div className=" flex flex-col gap-0 justify-center items-center p-6 ">
            <p className=" text-2xl font-bold tracking-wide text-[#14100c] ">Dashboard</p>
            <p className=" tracking-wider font-medium">Analytics Overview</p>

            <div className=" bg-white text-[#14100c] w-full rounded-xl flex p-5 justify-center items-center gap-3">
                <div className=" text-5xl">a</div>
                <div>
                    <p>Users</p>
                    <p>1,000</p>
                </div>
            </div>
        </div>
      </div>

  );
};

export default page;
