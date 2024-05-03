"use client";
import React, { useEffect, useState } from "react";
// import { useClient } from "use-client"; // Import useClient hook
import customerService from "../../../services/customer.service";
import Header from "../../../components/Home/Header";
// add icons from react-icons
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import AdminSideBar from "@/app/components/admin/AdminSideBar";

const page = () => {
  // const client = useClient();
  const [usersData, setUsersData] = useState([]);

    const [customers, setCustomers] = useState([]);
    const [renderedCustomers, setRenderedCustomers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // 'use strict'
    const fetchCustomers = async () => {
      try {
        const customers = await customerService.getCustomers();
        if (customers.status === 200) {
          setUsersData(customers.data);
        }
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };
    fetchCustomers();
  }, []);
  //   console.log(usersData);

 //handle pagination
    const handlePagination = (direction) => {
        if (direction === "first") {
          setRenderedCustomers(usersData.slice(0, 10));
          setCurrentPage(1);
        } else if (direction === "previous") {
          const startIndex = Math.max((currentPage - 2) * 10, 0);
          setRenderedCustomers(usersData.slice(startIndex, startIndex + 10));
          setCurrentPage(currentPage - 1);
        } else if (direction === "next") {
          const startIndex = currentPage * 10;
          if (startIndex < usersData.length) {
            setRenderedCustomers(usersData.slice(startIndex, startIndex + 10));
            setCurrentPage(currentPage + 1);
          }
        } else if (direction === "last") {
          const startIndex = Math.floor((usersData.length - 1) / 10) * 10;
          setRenderedCustomers(usersData.slice(startIndex, startIndex + 10));
          setCurrentPage(Math.ceil(usersData.length / 10));
        }
      };
  return (
    <div className=" bg-slate-100 h-svh ">
        {/* <AdminSideBar /> */}
      <div className="mx-3 my-10  ">
        <div className=" mb-5">
          <h1 className="text-2xl font-bold relative">
            Customers
            <span className=" absolute bottom-0 mb-2 mx-3 w-14 h-[2px] bg-black border-b border-black" />
          </h1>
        </div>

        {/* search bar */}
        <div className=" my-3 ">
          <input
            type="text"
            placeholder="Search a customers ..."
            className="w-full h-9 border border-gray-300 text-sm italic  px-3"
          />
        </div>

        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className="text-sm font-normal">
              <th scope="col" className="border p-1 text-center m-auto">
                ID
              </th>
              <th scope="col" className="border">
                User Name
              </th>
              <th scope="col" className="border hidden md:block">
                First Name
              </th>
              <th scope="col" className="border hidden md:block">
                Last Name
              </th>
              <th scope="col" className="border hidden md:block">
                Email
              </th>
              <th scope="col" className="border">
                Phone
              </th>
              <th scope="col" className="border">
                Edit
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {renderedCustomers &&
              renderedCustomers.map((user) => (
                <tr key={user.user_id}>
                  <td className="border py-1 px-3 text-sm font-medium border-b">
                    {user.user_id}
                  </td>
                  <td className="border py-1 px-3 text-sm font-bold border-b">
                    {user.user_name}
                  </td>
                  <td className="border hidden md:flex">
                    {user.user_first_name}
                  </td>
                  <td className="border hidden md:flex">
                    {user.user_last_name}
                  </td>
                  <td className="border hidden md:flex">{user.user_email}</td>
                  <td className="border py-1 px-3 text-sm font-medium border-b">
                    {user.user_phone_number}
                  </td>
                  <td className=" flex-1 flex py-2 justify-evenly px-3 text-sm font-medium ">
                    <FaEdit className="text-blue-600 cursor-pointer" />
                    <FaTrash className="text-red-500 cursor-pointer" />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <div className="d-flex w-full justify-content-center my-4">
            <button
              className=" w-1/4 btn border border-black px-5 py-1"
              onClick={() => handlePagination("first")}
            >
              First
            </button>
            <button
              className=" w-1/4 btn border border-black rounded-0 px-5 py-1"
              onClick={() => handlePagination("previous")}
            >
              Previous
            </button>
            <button
              className=" w-1/4 btn border border-black rounded-0 px-5 py-1"
              onClick={() => handlePagination("next")}
              style={{ backgroundColor: `rgb(8, 19, 54)`, color: `white` }}
            >
              Next
            </button>
            <button
              className=" w-1/4 btn border border-black rounded-0 px-5 py-1"
              onClick={() => handlePagination("last")}
              style={{ backgroundColor: `rgb(8, 19, 54)`, color: `white` }}
            >
              Last
            </button>
          </div>
      </div>
    </div>
  );
};

export default page;
