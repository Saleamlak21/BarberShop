import React from "react";

const Card = ({ image, title, discription }) => {
  return (
    <div className=" relative rounded-lg my-3 mx-2 bg-[#fff] border-[0.2px] shadow-lg border-gray-300  text-white group   md:hover:scale-105 duration-300 transition ">
      <div className=" absolute inset-1 opacity-20  flex justify-end items-end  ">
        <img className=" h-32 md:h-40 md:group-hover:scale-125 duration-300 bg-slate-50" src="/assets/icons/hairdress.png" />
      </div>
      <div className=" z-10  p-6 md:p-10 flex flex-col gap-2 md:gap-4 ">
        <div className=" flex items-center gap-4">
          <img
            className=" border border-gray-300  bg-slate-200 rounded-full p-1 h-12"
            src="/assets/icons/hairdress.png"
          />
          <p className=" text-black text-xl font-bold  tracking-wider ">
            Moustache Trim
          </p>
        </div>
        <div>
          <p className=" text-sm font-medium text-gray-500 tracking-wider">
            Moustache Trim Lorem vulputate massa ons amet ravida haretra nuam
            the drana miss uctus enec accumsan aliquam sit sapien.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
