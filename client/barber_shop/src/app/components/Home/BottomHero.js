import React from "react";

const BottomHero = () => {
  return (
    <div className=" bg-[#14100c] p-2 pt-32 pb-32 flex flex-col gap-9">
      <div>
        <img src="/assets/home/StockSnap_O6KYUCUFY4.jpg" />
      </div>
      <div className="flex flex-col gap-2">
        <p className=" text-[#97836c] font-bold tracking-widest text-sm ">10 YEAR OF EXPERIENCE</p>
        <p className="text-white font-bold text-2xl tracking-wider "> Making People Look Awesome since 2014 </p>
        <p className=" text-gray-400 font-light text-sm ">
          We are a full-service barbershop that offers a wide range of services
          to help you look and feel your best. Our team of professional barbers
          are dedicated to providing you with the best service possible. We are
          committed to providing you with a unique and memorable experience.
        </p>
        <div className=" flex mt-6 gap-6 items-center">
           <img className=" text-gray-400 font-thin w-20" src="/assets/icons/signature.png"/>
           <div>
            <p className=" text-gray-400 font-medium text-sm tracking-widest">Barber, Founder</p>
            <p className=" text-[#97836c] text-sm font-medium tracking-widest">John Doe</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHero;
