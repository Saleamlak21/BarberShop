import Card from "@/app/utils/Card";
import React from "react";

const OurService = () => {
  return (
    <div className="   flex flex-col gap-2 items-center bg-[#dfe5eb] pt-36 pb-20">
      <p className="text-sm  text-[#97836c] tracking-widest font-bold">WHAT WE'RE OFFERING</p>
      <p className=" font-extrabold tracking-wider pb-4 text-3xl ">Barber Services </p>
      <div className=" grid md:grid-cols-2 gap-2 md:w-10/12">
        <Card />
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
