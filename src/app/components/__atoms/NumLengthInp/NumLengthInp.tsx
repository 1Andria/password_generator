"use client";
import { usePassLength } from "@/app/Services/zustand";
import React from "react";

function NumLengthInp() {
  const PassLenght = usePassLength((state) => state.passLength);
  const setPassLenght = usePassLength((state) => state.setPassLength);

  return (
    <>
      <input
        type="range"
        min={8}
        max={22}
        value={PassLenght}
        onChange={(e) => setPassLenght(Number(e.target.value))}
        className="w-full h-[28px]"
      />
    </>
  );
}

export default NumLengthInp;
