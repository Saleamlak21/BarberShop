'use client'
import React from 'react'
import withAuth from "../../utils/withAuth";

const page = () => {
  return (
    <div>
      <h2>Customer</h2>
    </div>
  )
}

export default withAuth.withAuth(page);
