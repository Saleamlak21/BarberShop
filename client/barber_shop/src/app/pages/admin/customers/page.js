"use client";
import React, { useEffect, useState } from "react";
import customerService from "../../../services/customer.service";

const page = () => {
  const [usersData, setUsersData] = useState();
  useEffect(() => {
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
console.log(usersData)
  return (
    <div>
      {/* {usersData &&
        usersData.map((user) => {
          return (
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>
          );
        })} */}
    </div>
  );
};

export default page;
