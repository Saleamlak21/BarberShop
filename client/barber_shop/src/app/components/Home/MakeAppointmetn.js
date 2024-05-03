import React from "react";

const MakeAppointmetn = () => {
  return (
    <div className=" bg-[#14100c] py-12  flex flex-col items-center justify-center gap-0 md:flex-row md:justify-around">
      <div className=" text-gray-300 flex flex-col items-center text-center justify-center">
        <p className=" tracking-wide mb-4 text-sm font-bold text-gray-400">
          STAY SHARP, LOOK GOOD
        </p>
        <p className=" tracking-wider text-lg font-extrabold mb-3">
          NOT JUST A BARBERS, BUT A LIFESTYLE
        </p>
      </div>
      <button className=" mt-5 -mb-4 active:bg-slate-400 bg-gray-100 text-black rounded-ss-xl rounded-ee-xl  py-4 px-7 hover:scale-105 transition duration-2000 active:bg-slate-6  font-bold text-xl tracking-wider ">
        MAKE APPOINTMENT
      </button>
    </div>
  );
};

export default MakeAppointmetn;
