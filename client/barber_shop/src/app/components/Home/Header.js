"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
  const [topZero, setTopZero] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // after 1000ms setTopZero to false
        setTimeout(() => {
          setTopZero(false);
        }, 500);
      } else {
        // after 1000ms setTopZero to true
        setTimeout(() => {
          setTopZero(true);
        }, 500);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(topZero);

  return (
    <>
      <div
        className={`w-full   z-[999] flex justify-center p-2 py-4 sticky top-0 transition duration-[1200ms]   bg-${
          topZero === true ? "none" : "black"
        } `}
      >
        <div className="w-full md:w-10/12 z-50 flex justify-between p-2 py-4 sticky top-0 ">
          <Link href="/" className=" flex gap-2 ">
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
          <div className=" md:flex justify-center items-center p-2">
            <ul className="hidden  md:flex justify-center items-center gap-3">
              <li className="mx-2">
                <Link href="/#hero">
                  <p className="text-white">Home</p>
                </Link>
              </li>
              <li className="mx-2">
                <Link href="/#about">
                  <p className="text-white">About</p>
                </Link>
              </li>
              <li className="mx-2">
                <Link href="/#services">
                  <p className="text-white">Services</p>
                </Link>
              </li>
              <li className="mx-2">
                <Link href="/#Pricing">
                  <p className="text-white">Pricing</p>
                </Link>
              </li>
              <li className="mx-2">
                <Link href="/#contact">
                  <p className="text-white">Contact</p>
                </Link>
              </li>
              <li>
                <Link href="/pages/login">
                  <button className="border p-2 rounded-ss-2xl rounded-ee-2xl bg-[#97836c]  font-bold active:scale-95 duration-200  tracking-widest text-white cursor-pointer active:bg-[#f3ba7a]">
                    Log In
                  </button>
                </Link>
              </li>
            </ul>

            <div
              onClick={() => setShow(!show)}
              className={` ${
                show === false ? "flex" : "hidden"
              } md:hidden flex flex-col  gap-2 justify-center cursor-pointer`}
            >
              <div className=" border-b-4 rounded-lg border-[#a8927a]  w-10  "></div>
              <div className=" border-b-4 rounded-lg border-[#a8927a]  w-7  "></div>
              <div className=" border-b-4 rounded-lg border-[#a8927a]  w-10  "></div>
            </div>

            <div
              onClick={() => setShow(!show)}
              className={` flex justify-center items-center p-4 ${
                show === true ? "flex" : "hidden"
              } relative flex flex-col gap-3`}
            >
              <div className=" absolute border-b-4 rounded-lg border-[#a8927a]  w-10 rotate-45  "></div>
              <div className=" absolute border-b-4 rounded-lg border-[#a8927a]  w-10  -rotate-45 "></div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile bar */}
      <div
        className={` sticky top-0 left-0 z-50 -mt-32 duration-1000 transition  flex md:hidden ${
          show === false ? " -translate-y-[450px]" : "translate-y-0"
        }  `}
      >
        <div className=" absolute top-0 flex text-black  flex-col   px-3 z-50  left-0 w-full  h-[450px] opacity-90  md:hidden justify-center items-center gap-3">
          <div className=" absolute inset-0 bg-black opacity-75"></div>
          <ul className=" text-center w-full text-white z-10 flex flex-col gap-3 mt-32 font-medium text-xl p-4 ">
            <li
              onClick={() => setShow(false)}
              className="mx-2  border-gray-500 pb-1  border-b-[0.2px] "
            >
              <Link href="/#hero">
                <p className="">Home</p>
              </Link>
            </li>
            <li className="mx-2  border-gray-500 pb-1  border-b-[0.2px] ">
              <Link onClick={() => setShow(false)} href="/#about">
                <p className="">About</p>
              </Link>
            </li>
            <li className="mx-2  border-gray-500 pb-1  border-b-[0.2px]">
              <Link onClick={() => setShow(false)} href="/#services">
                <p className="">Services</p>
              </Link>
            </li>
            <li className="mx-2  border-gray-500 pb-1  border-b-[0.2px] ">
              <Link onClick={() => setShow(false)} href="/#Pricing">
                <p className="">Pricing</p>
              </Link>
            </li>
            <li className="mx-2 border-gray-500 pb-1  border-b-[0.2px]">
              <Link onClick={() => setShow(false)} href="/#contact">
                <p className="">Contact</p>
              </Link>
            </li>
            <li>
              <Link onClick={() => setShow(false)} href="/pages/login">
                <button className="border p-2 rounded-ss-2xl rounded-ee-2xl bg-[#97836c]  font-bold active:scale-95 duration-200  tracking-widest  cursor-pointer active:bg-[#f3ba7a]">
                  Log In
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
