"use client";
import React from "react";
import Copy from "../../Images/Copy";
import { useCopyTxt } from "@/app/Services/zustand";

function PasswordHeader() {
  const CopyText = useCopyTxt((state) => state.copyText);
  return (
    <>
      <div className="max-w-[540px] w-full pl-[30px] pr-[30px] h-[80px] bg-[#24232C] flex items-center justify-between">
        <h1 className="text-[28px] font-bold text-[#E6E5EA]">changalagunge</h1>
        <div className="flex gap-[10px] items-center">
          {CopyText && (
            <h2 className="text-[18px] text-[#A4FFAF] font-bold">COPIED</h2>
          )}
          <Copy />
        </div>
      </div>
    </>
  );
}

export default PasswordHeader;
