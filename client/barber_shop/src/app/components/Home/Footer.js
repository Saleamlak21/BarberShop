"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="  px-3 py-12 text-white bg-black">
      <div className=" md:m-auto  flex md:w-10/12 items-center gap-4 justify-between  border-b border-gray-500">
        <Link href="/" className=" flex flex-shrink-0 gap-2 ">
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
        <p className=" w-full  text-gray-300 text-xs md:text-base mb-1">
          We appreciate your business and look forward to serving you again
          soon.
        </p>
      </div>
      <div className=" m-auto flex md:w-10/12 gap-6 py-9 border-b border-gray-500">
        <div className=" w-1/3 md:w-1/4 ">
          <p className=" text-lg font-bold   mb-3 ">
            Barber Shop
          </p>
          <ul className="  flex flex-col gap-1 text-gray-300 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className=" flex flex-col justify-center md:w-full gap-6 md:flex-row">
          <div className="h-[150px]  md:h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6629.30786778697!2d-84.2251741!3d33.8212427!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1714682225939!5m2!1sen!2sus"
              className="w-full h-full"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className=" flex flex-col gap-3">
            <p className="  text-sm ">
              Phone Number:<snap className="text-xs"> 555-555-5555</snap>
            </p>
            <p className="  text-sm ">
              Address: 1234 Main St. City, State 12345
            </p>
          </div>
        </div>
      </div>
      <div className=" text-gray-500 m-auto md:w-10/12 flex flex-col gap-3 justify-between md:items-center md:flex-row ">
        <p className=" text-sm text-gray-500 pt-4">
          &copy; 2024 Mamush Barber. All rights reserved.
        </p>
        <p className="text-xs mdtext-sm">
            Developed by <a href="https://saleamlakendrias.com/" className="text-[#97836c] cursor-pointer z-10 text-sm md:text-base font-bold ">SaleamlakE</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
