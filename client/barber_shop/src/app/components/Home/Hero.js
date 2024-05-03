import React from "react";

const Hero = () => {
  return (
    <main className="hero_main md:-mt-32 relative">
        <div className=" absolute inset-0 bg-black opacity-60"> </div>
      <div className=" z-10">

        <div className=" bg-none text-gray-300">
          <p className=" tracking-widest font-bold -mt-10 mb-5 text-gray-400">STAY SHARP, LOOK GOOD</p>
          <p className=" tracking-widest text-4xl font-extrabold my-2">NOT JUST A BARBERS, </p>
          <p className=" tracking-widest text-4xl font-extrabold mb-3">BUT A LIFESTYLE</p>
          <p className="  my-3 mt-5  text-gray-400">EAST PONCE DELONE AVE, ATL. APPOINTMENT: 404 436 5233</p>
          <button className=" mt-5 rounded-ss-xl rounded-ee-lg -mb-4 bg-gray-300 text-black  py-4 px-7 md:hover:scale-105 transition duration-200 active:scale-95 active:bg-slate-400  font-bold text-xl tracking-wider ">MAKE APPOINTMENT</button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
