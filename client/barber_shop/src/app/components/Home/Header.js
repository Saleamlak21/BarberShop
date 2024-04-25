"use client";
import React from "react";
import Link from 'next/link';

const Header = () => {
  return (
    <div className="w-full z-50 flex justify-between p-2 border-b-[0.1px] sticky top-0 bg-[#14100c]">
      <Link href='/'  className=" flex gap-2 ">
        <div>
          <img className=" h-14" src="/assets/icons/salon.png" />
        </div>
        <div className=" -ms-3">
          <p className=" font-bold text-lg mt-2 tracking-wider text-white">
            MAMUSH
          </p>
          <p className=" text-sm font-bold text-[#a8927a] tracking-wider -mt-2">
            BARBER
          </p>
        </div>
      </Link>
      <div className=" flex justify-center items-center p-2">
        <Link href="/pages/login" className=" text-lg font-bold tracking-wider text-white">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
