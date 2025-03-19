"use client";
import { CircularProgress } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <div
      id="loading-overlay"
      className="flex gap-5 w-full h-200 items-center justify-center bg-gray-100"
    >
      <CircularProgress size={20}/>

      <span className=" text-xl text-gray-900 font-bold">Loading...</span>
    </div>
  );
};

export default Loading;
