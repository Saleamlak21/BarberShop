"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import customerService from "../../services/customer.service";

const Page = () => {
  // Initialize trades as an empty array
  const [trades, setTrades] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const customers = await customerService.getCustomers();
        if (customers.status === 200) {
          setTrades(customers.data);
        } else {
          console.error("Failed to fetch customers:", customers.status);
        }
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };
    fetchCustomers();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form); // This contains all fields, including the file

    try {
      const response = await customerService.postTradeImage(formData);
      if (response.status === 200) {
        console.log("Trade image posted successfully");
      }
    } catch (error) {
      console.error("Error posting trade image:", error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#0ab2d0] to-[#010101]">
      <div className="mx-3">
        {/* -------- */}
        <div className="mb-5">
          <h1 className="text-3xl font-bold italic pt-5 relative">
            TRADES
            <span className="absolute bottom-0 mb-2 mx-3 w-14 h-[2px] bg-black border-b border-black" />
          </h1>
          {/* Form for uploading trade images */}
          <div>
            <form
              encType="multipart/form-data"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <input
                  type="file"
                  className="form-control-file"
                  name="uploaded_file"
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Number of speakers"
                  name="nspeakers"
                />
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>

        

        
        </div>
        {/* -------- */}

        // inside here
      </div>
    </div>
  );
};

export default Page;
