import React from "react";
import { IoIosCut } from "react-icons/io";

const AboutUs = () => {
  return (
    <div className=" mt-32 p-3">
      <div>
        <div className="text-container">
          <div>
            <p className=" text-[#97836c] tracking-wider text-lg  font-bold ">
              SINCE 2012
            </p>
            <p className=" text-3xl  my-2 font-extrabold tracking-wider">
              Mamush Barber Shop
            </p>
            <p className=" py-2 font-sans text-gray-500  text-[15px] text-base">
              We are a full-service barbershop that offers a wide range of
              services to help you look and feel your best. Our team of
              professional barbers are dedicated to providing you with the best
              service possible. We are committed to providing you with a unique
              and memorable experience.
            </p>
            <p className=" py-2 font-sans text-gray-500  text-[15px] text-base">
              Our barbers are skilled in the latest trends and styles, and are
              dedicated to providing you with the best service possible. We are
              committed to providing you with a unique and memorable experience.
            </p>
          </div>
        </div>
        <div className="image_container flex gap-4 mt-5">
          <div className=" h-[400px] flex justify-center items-end ">
            <img
              style={{ height: 300 }}
              src="/assets/home/salah-regouane-rM_ev_MroKA-unsplash.jpg"
            />
          </div>
          <div className=" h-[400px]">
            <img
              style={{ height: 300 }}
              src="/assets/home/juan-carlos-pavon-jQ7Fh1q97AU-unsplash.jpg"
            />
          </div>
        </div>
        <div className=" my-32 flex flex-col gap-9 ">
          {/* -- */}
          <div className=" flex gap-6">
            <div className=" flex items-center justify-center align-middle">
              <img  className=" font-bold  " src="/assets/icons/salon.png" />
            </div>
            <div className=" flex flex-col gap-3">
              <p className=" font-extrabold text-2xl">Cuts</p>
              <p className=" text-gray-600 text-sm">
              Haircut and styling tailored to the client's preferences, using various cutting techniques and tools for a personalized look.
              </p>
            </div>
          </div>
          {/* -- */}
          <div className=" flex gap-6">
            <div className=" flex items-center justify-center align-middle">
              <img  className=" font-bold  " src="/assets/icons/clipper.png" />
            </div>
            <div className=" flex flex-col gap-3">
              <p className=" font-extrabold text-2xl">Fades</p>
              <p className=" text-gray-600 text-sm">
              Specialized haircutting technique creating a smooth transition from shorter to longer hair, offering modern and stylish fades customized to the client's style.
              </p>
            </div>
          </div>
          {/* -- */}
          <div className=" flex gap-6">
            <div className=" flex items-center justify-center align-middle">
              <img  className=" font-bold  " src="/assets/icons/razor.png" />
            </div>
            <div className=" flex flex-col gap-3">
              <p className=" font-extrabold text-2xl">Shaves</p>
              <p className=" text-gray-600 text-sm">
              Precise and comfortable shaving experience using traditional razors, providing a close and smooth shave or beard trim for a polished appearance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
