import React from "react";

const MakeAppointmetn = () => {
  return (
    <div className=" bg-[#14100c] py-12  flex flex-col items-center justify-center gap-4">
      <div className=" text-gray-300 flex flex-col items-center text-center justify-center">
        <p className=" tracking-wide mb-4 text-sm font-bold text-gray-400">
          STAY SHARP, LOOK GOOD
        </p>
        <p className=" tracking-wider text-lg font-extrabold mb-3">
        NOT JUST A BARBERS, BUT A LIFESTYLE
        </p>
        <button className=" mt-5 -mb-4 bg-gray-300 text-black  py-4 px-7 hover:scale-105 transition duration-200 active:bg-slate-400  font-bold text-xl tracking-wider ">
          MAKE APPOINTMENT
        </button>
      </div>
    </div>
  );
};

export default MakeAppointmetn;
