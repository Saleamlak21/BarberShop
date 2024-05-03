import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className=" py-12 pt-36 bg-slate-200 flex flex-col justify-center items-center">
        <p className="text-sm  text-[#97836c] tracking-widest font-bold">
          Contact Us
        </p>
        <h1 className=" font-extrabold tracking-wider pb-4 text-3xl ">
          Get in Touch
        </h1>
        <div className=" relative bg-white w-11/12 p-3 md:px-12 py-16 rounded-ss-3xl flex flex-col md:flex-row md:w-10/12 gap-2 rounded-ee-3xl">
          <div className=" absolute inset-2 md:px-12  flex opacity-85 ">
            <img
              className=" absolute top-0 left-0 md:left-11  h-24"
              src="/assets/icons/calendar.png"
            />
            <img
              className=" absolute h-24 bottom-2 right-0 md:right-5 "
              src="/assets/icons/booking-app.png"
            />
          </div>
          <div className=" z-10 flex flex-col gap-2 m-2 py-12">
            <p className=" font-bold text-xl tracking-wider">
              WE APPRECIATE YOUR ONLINE BOOKING
            </p>
            <p className=" text-gray-800 font-medium">
              By creating an account, Make an appointment, Track your history,
              get a reminder, and more.
            </p>
          </div>
          <div className=" flex flex-col gap-3">
            <button className="border z-10 p-3 rounded-ss-2xl rounded-ee-2xl bg-[#97836c]  font-bold active:scale-95 duration-200  tracking-widest text-white cursor-pointer">
              BOOK NOW
            </button>
            <p className=" font-bold text-sm tracking-wider">
              Phone Number:<snap className="text-lg"> 555-555-5555</snap>
            </p>
            <p className=" font-bold text-sm tracking-wider">
              Address: 1234 Main St. City, State 12345
            </p>
          </div>
        </div>
      </div>
      {/* <div className="h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6629.30786778697!2d-84.2251741!3d33.8212427!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1714682225939!5m2!1sen!2sus"
          className="w-full h-full"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
    </>
  );
};

export default ContactUs;
