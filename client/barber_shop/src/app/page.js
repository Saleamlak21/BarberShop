"use client";
// import hero component
import Header from "./components/Home/Header";
import Hero from "./components/Home/Hero";
import AboutUs from "./components/Home/AboutUs";
import BottomHero from "./components/Home/BottomHero";
import OurService from "./components/Home/OurService";
import MakeAppointmetn from "./components/Home/MakeAppointmetn";
import Pricing from "./components/Home/Pricing";
import ContactUs from "./components/Home/ContactUs";
import Testemonial from "./components/Home/Testemonial";
import { useEffect } from "react";
import smoothScrollIntoView from 'smooth-scroll-into-view-if-needed';
// import customerService from "../../services/customer.service";


// useEffect(() => {
//     // 'use strict'
//     const fetchCustomers = async () => {
//       try {
//         const customers = await customerService.getCustomers();
//         if (customers.status === 200) {
//           setUsersData(customers.data);
//         }
//       } catch (error) {
//         console.error("Error fetching customers:", error);
//       }
//     };
//     fetchCustomers();
//   }, []);
//     console.log(usersData);


export default function Home() {

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        smoothScrollIntoView(element, { behavior: 'smooth'});
      }
    }
  }, []);

  return (
    <main className=" relative">
      <search id="hero">
        <Hero />
      </search>
      <search id="about">
        <AboutUs />
      </search>
      <search id="bottomHero">
        <BottomHero />
      </search>
      <search id="services">
        <OurService />
      </search>
      <search id="MakeAppointmetn">
        <MakeAppointmetn />
      </search>
      <search id="Pricing">
        <Pricing />
      </search>
      <search id="Testemonial">
        <Testemonial />
      </search>
      <search id="contact">
        <ContactUs />
      </search>
    </main>
  );
}
