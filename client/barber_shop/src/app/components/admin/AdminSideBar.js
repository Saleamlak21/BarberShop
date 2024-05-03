import React from "react";
import Header from "@/app/components/Home/Header";
import OurService from "@/app/components/Home/OurService";
import Card from "@/app/utils/Card";
import Link from "next/link";

const AdminSideBar = () => {
  return (
    <div>
       <div className="w-full bg-[#91765a]  pt-2">
          <ul className=" flex flex-col gap-2 text-white ">
            <Link href="/pages/admin/admin-dashboard">
              {" "}
              <li className="border-b-[0.1px] px-2 py-1 font-medium tracking-wider">
                Dashboard
              </li>
            </Link>

            <Link href="/">
              <li className="border-b-[0.5px]  px-2 py-1 font-medium tracking-wider">
                Appointments
              </li>
            </Link>
            <Link href="/pages/admin/admin-appointments">
                <li className="border-b-[0.5px]  px-2 py-1 font-medium tracking-wider">
                    New Appointment
                </li>
            </Link>
            <Link href="/pages/admin/admin-services">
              <li className="border-b-[0.5px]  px-2 py-1 font-medium tracking-wider">
                Services
              </li>
            </Link>
            <Link href="/pages/admin/admin-barbers">
              <li className="border-b-[0.5px]  px-2 py-1 font-medium tracking-wider">
                Barbers
              </li>
            </Link>
            <Link href="/pages/admin/customers">
              <li className="border-b-[0.5px]  px-2 py-1 font-medium tracking-wider">
                Customers
              </li>
            </Link>

          </ul>
        </div>
    </div>
  )
}

export default AdminSideBar
