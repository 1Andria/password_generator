import { useArrow } from "@/app/Services/zustand";
import React from "react";

function Arrow() {
  const arrow = useArrow((state) => state.arrow);
  return (
    <>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.10547 12L11.1054 6.00002L5.10547 0L3.84045 1.26501L7.68094 5.10547L0 5.10547V6.8946L7.68094 6.8946L3.84045 10.735L5.10547 12Z"
          fill={arrow ? "#A4FFAF" : "#24232C"}
        />
      </svg>
    </>
  );
}

export default Arrow;
