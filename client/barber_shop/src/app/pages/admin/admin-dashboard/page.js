"use client";
import React from "react";
import AdminSideBar from "@/app/components/admin/AdminSideBar";
import Dashboard from "@/app/components/admin/Dashboard";

const Page = () => {
  return (
    <div className="">
      <div className=" flex">
        
        <AdminSideBar className=" hidden md:flex"  />
        <Dashboard />

      </div>
    </div>
  );
};

export default Page;
