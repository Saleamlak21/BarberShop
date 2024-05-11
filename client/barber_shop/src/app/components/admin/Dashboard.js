import React from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className=" py-10 px-5 flex flex-col gap-5 bg-slate-100 w-full">
      {/* first row */}
      <div className=" flex gap-3 ">
        <div className=" bg-white justify-between flex px-6 pt-4 gap-3  rounded-2xl shadow-lg flex-grow ">
          <div className=" flex flex-col  ">
            <p className=" text-2xl text-gray-700 my-3  font-bold  tracking-wider">
              Congratulations{" "}
              <span className="font-bold text-black text-3xl">John!</span>
            </p>
            <p className=" opacity-75 text-sm font-bold">
              You have <span className=" opacity-100 font-bold">10</span> new
              appointments today.
            </p>
            <p className=" opacity-70 font-medium text-sm mt-1">
              Check your new badge in the profile section.
            </p>
            <button className=" my-5 border w-1/2 py-2 rounded-lg font-bold tracking-wider text-white bg-[#a054ff]">
              <span>View Profile</span>
            </button>
          </div>
          <div>
            <img
              className=" h-52"
              src="/assets/icons/coffeeman.png"
              alt="A man with coffee"
            ></img>
          </div>
        </div>
        <div className=" hidden lg:flex relative shadow-lg  bg-white  flex-grow-0 rounded-2xl flex-col justify-center  ">
          <div className=" absolute opacity-60 bottom-3 right-3">
            <img className=" h-20 w-32" src="/assets/icons/growth.png" />
          </div>
          <p className=" mx-7 -mt-5 text-lg font-bold opacity-75">
            Total Customers
          </p>

          <p className="text-2xl font-bold mt-3 mx-7">
            155 <span></span>
          </p>
          <p className=" mx-7  text-sm italic font-bold opacity-55">
            Registerd
          </p>
        </div>
      </div>
      {/* second row */}
      <div className="  flex-col grid md:grid-cols-2 lg:grid-cols-3   relative gap-3 md:justify-center items-center w-full">
        {/* ---- */}
        <div className=" lg:hidden  relative shadow-lg w-auto py-12 bg-white flex   rounded-2xl flex-col justify-center  ">
          <div className=" absolute opacity-60 bottom-3 right-3">
            <img className=" h-20 w-32" src="/assets/icons/growth.png" />
          </div>
          <p className=" mx-7 mt-5 text-lg font-bold opacity-75">
          Total Customers
          </p>

          <p className="text-2xl font-bold mt-3 mx-7">
            150 <span></span>
          </p>
          <p className=" mx-7  text-sm italic font-bold opacity-55">
          Registerd
          </p>
        </div>
        {/* ----- */}
        <div className=" relative shadow-lg w-auto py-12 bg-white flex   rounded-2xl flex-col justify-center  ">
          <div className=" absolute opacity-60 bottom-3 right-3">
            <img className=" h-20 w-32" src="/assets/icons/appointment.png" />
          </div>
          <p className=" mx-7 mt-5 text-lg font-bold opacity-75">
            Total Appointments
          </p>

          <p className="text-2xl font-bold mt-3 mx-7">
            450 <span></span>
          </p>
          <p className=" mx-7  text-sm italic font-bold opacity-55">
            Completed
          </p>
        </div>
        {/* ---- */}
        <div className=" relative py-12 shadow-lg  w-auto bg-white flex  rounded-2xl flex-col justify-center  ">
          <div className=" absolute opacity-60 bottom-3 right-3">
            <img className=" h-20 w-32" src="/assets/icons/svg.png" />
          </div>
          <p className=" mx-7 mt-5 text-lg font-bold opacity-75">
            Total Revenue
          </p>

          <p className="text-2xl font-bold mt-3 mx-7">
            $10,500 <span></span>
          </p>
          <p className=" mx-7  text-sm italic font-bold opacity-55">Earned</p>
        </div>
        {/* ---- */}
        <div className=" relative py-12 w-auto shadow-lg  bg-white flex  rounded-2xl flex-col justify-center  ">
          <div className=" absolute opacity-60 bottom-3 right-3">
            <img className=" h-20 w-32" src="/assets/icons/cancelled.png" />
          </div>
          <p className=" mx-7 mt-5 text-lg font-bold opacity-75">
            Total Cancelled
          </p>

          <p className="text-2xl font-bold mt-3 mx-7">
            30 <span></span>
          </p>
          <p className=" mx-7  text-sm italic font-bold opacity-55">
            Appointments
          </p>
        </div>
      </div>
      {/* third row */}
      <div className=" bg-white">
        {/* // display recent appointments table  */}
        <div className=" flex flex-col gap-5 p-4">
          <div className=" flex justify-between items-center">
            <p className=" relative text-2xl font-bold">Recent Appointments<span className=" absolute w-16 h-[3px] bottom-2 ms-2 rounded-lg bg-red-500"></span></p>
            <button className=" border-2 border-[#a054ff] px-3 py-1 rounded-lg font-bold text-[#a054ff]">
              View All
            </button>
          </div>
          <div className=" overflow-x-auto">
            <table className=" w-full">
              <thead>
                <tr className=" text-left border-b">
                  <th className=" px-3 py-2">Name</th>
                  <th className=" px-3 py-2">Date</th>
                  <th className=" px-3 py-2">Time</th>
                  <th className=" px-3 py-2">Status</th>
                  <th>
                    <MdOutlineAddBox className=" h-6 w-6" />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className=" border-b">
                  <td className=" px-3 flex gap-2  text-sm py-2">
                    <div className=" rounded-full border h-10 w-10 flex justify-center items-center font-bold ">
                      AB
                    </div>
                    <div className=" flex flex-col justify-center ">
                      <p className=" font-bold">John Doe</p>
                      <p className=" text-xs">555-555-5555</p>
                    </div>
                  </td>
                  <td className=" px-3 py-2 text-sm text-gray-600">
                    12/12/2021
                  </td>
                  <td className=" px-3 py-2 text-sm text-gray-600">12:00 PM</td>
                  <td className=" px-3 py-2 text-green-700 font-bold text-sm">
                    Completed
                  </td>
                  <td className="  py-2">
                    <HiOutlineDotsHorizontal className=" h-6 w-6" />
                  </td>
                </tr>
                <tr className=" border-b">
                  <td className=" px-3 flex gap-2  text-sm py-2">
                    <div className=" rounded-full border h-10 w-10 flex justify-center items-center font-bold ">
                      AB
                    </div>
                    <div className=" flex flex-col justify-center ">
                      <p className=" font-bold">John Doe</p>
                      <p className=" text-xs">555-555-5555</p>
                    </div>
                  </td>
                  <td className=" px-3 py-2 text-sm text-gray-600">
                    12/12/2021
                  </td>
                  <td className=" px-3 py-2 text-sm text-gray-600">12:00 PM</td>
                  <td className=" px-3 py-2 text-green-700 font-bold text-sm">
                    Completed
                  </td>
                  <td className="  py-2">
                    <HiOutlineDotsHorizontal className=" h-6 w-6" />
                  </td>
                </tr>
                <tr className=" border-b">
                  <td className=" px-3 flex gap-2  text-sm py-2">
                    <div className=" rounded-full border h-10 w-10 flex justify-center items-center font-bold ">
                      AB
                    </div>
                    <div className=" flex flex-col justify-center ">
                      <p className=" font-bold">John Doe</p>
                      <p className=" text-xs">555-555-5555</p>
                    </div>
                  </td>
                  <td className=" px-3 py-2 text-sm text-gray-600">
                    12/12/2021
                  </td>
                  <td className=" px-3 py-2 text-sm text-gray-600">12:00 PM</td>
                  <td className=" px-3 py-2 text-green-700 font-bold text-sm">
                    Completed
                  </td>
                  <td className="  py-2">
                    <HiOutlineDotsHorizontal className=" h-6 w-6" />
                  </td>
                </tr>
                <tr className=" border-b">
                  <td className=" px-3 flex gap-2  text-sm py-2">
                    <div className=" rounded-full border h-10 w-10 flex justify-center items-center font-bold ">
                      AB
                    </div>
                    <div className=" flex flex-col justify-center ">
                      <p className=" font-bold">John Doe</p>
                      <p className=" text-xs">555-555-5555</p>
                    </div>
                  </td>
                  <td className=" px-3 py-2 text-sm text-gray-600">
                    12/12/2021
                  </td>
                  <td className=" px-3 py-2 text-sm text-gray-600">12:00 PM</td>
                  <td className=" px-3 py-2 text-green-700 font-bold text-sm">
                    Completed
                  </td>
                  <td className="  py-2">
                    <HiOutlineDotsHorizontal className=" h-6 w-6" />
                  </td>
                </tr>
                <tr className=" border-b">
                  <td className=" px-3 flex gap-2  text-sm py-2">
                    <div className=" rounded-full border h-10 w-10 flex justify-center items-center font-bold ">
                      AB
                    </div>
                    <div className=" flex flex-col justify-center ">
                      <p className=" font-bold">John Doe</p>
                      <p className=" text-xs">555-555-5555</p>
                    </div>
                  </td>
                  <td className=" px-3 py-2 text-sm text-gray-600">
                    12/12/2021
                  </td>
                  <td className=" px-3 py-2 text-sm text-gray-600">12:00 PM</td>
                  <td className=" px-3 py-2 text-green-700 font-bold text-sm">
                    Completed
                  </td>
                  <td className="  py-2">
                    <HiOutlineDotsHorizontal className=" h-6 w-6" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
