import Card from "@/app/utils/Card";
import React from "react";

const OurService = () => {
  return (
    <div className="  bg-[#f5eee7] flex flex-col gap-2 items-center pt-32 pb-20">
      <p className="text-sm  text-[#97836c] tracking-widest font-bold">WHAT WE'RE OFFERING</p>
      <p className=" font-extrabold tracking-wider pb-4 text-3xl ">Barber Services </p>
      <div className=" flex flex-col gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default OurService;
