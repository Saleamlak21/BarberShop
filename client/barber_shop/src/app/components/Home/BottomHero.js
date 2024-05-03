import React from "react";

const BottomHero = () => {
  return (
    <div className=" group bg-[#000000]  p-2 pt-24 md:pt-12 pb-24 flex flex-col justify-center items-center gap-9">
      <div className="md:w-10/12 flex flex-col md:flex-row gap-6">
        <div className=" md:group-hover:scale-105 duration-[1500ms] transition relative h-[400px] w-full rounded-s-2xl  md:w-1/2  bottom-hero">
         <div className=" absolute inset-0 bg-black opacity-35 group-hover:opacity-0  duration-1000 transition "></div>
        </div>
        <div className="flex flex-col gap-2 md:w-1/2">
          <p className=" text-[#97836c] font-bold tracking-widest text-sm ">
            10 YEAR OF EXPERIENCE
          </p>
          <p className="text-white font-bold text-2xl tracking-wider ">
            {" "}
            Making People Look Awesome since 2014{" "}
          </p>
          <p className=" text-gray-400 font-light text-sm ">
            We are a full-service barbershop that offers a wide range of
            services to help you look and feel your best. Our team of
            professional barbers are dedicated to providing you with the best
            service possible. We are committed to providing you with a unique
            and memorable experience.
          </p>
          <div className=" flex mt-6 gap-6 items-center">
            <img
              className=" text-gray-400 font-thin w-20"
              src="/assets/icons/signature.png"
            />
            <div>
              <p className=" text-gray-400 font-medium text-sm tracking-widest">
                Barber, Founder
              </p>
              <p className=" text-[#97836c] text-sm font-medium tracking-widest">
                John Doe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHero;
