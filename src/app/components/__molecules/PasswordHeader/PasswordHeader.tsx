"use client";
import React from "react";
import Copy from "../../Images/Copy";
import { useCopyTxt, useGeneratedPassword } from "@/app/Services/zustand";

function PasswordHeader() {
  const CopyText = useCopyTxt((state) => state.copyText);
  const setCopy = useCopyTxt((state) => state.setCopyText);
  const password = useGeneratedPassword((state) => state.password);
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        setCopy(true);
      })
      .catch((err) => {
        alert("Something is wrong." + err);
      });
  };

  if (password === "Password") {
    setCopy(false);
  }

  return (
    <>
      <div className="max-w-[540px] w-full pl-[30px] pr-[30px] h-[80px] bg-[#24232C] flex items-center justify-between max-[510px]:pl-[15px] max-[510px]:pr-[15px]">
        <h1
          className={`text-[28px] max-[510px]:text-[18px] ${
            password === "Password" ? "text-[#54535b]" : "text-[#E6E5EA]"
          } font-bold `}
        >
          {password}
        </h1>
        <div className="flex gap-[10px] items-center">
          {CopyText && (
            <h2 className="text-[18px] max-[510px]:text-[14px] text-[#A4FFAF] font-bold">
              COPIED
            </h2>
          )}
          <div onClick={copyToClipboard}>
            <Copy />
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordHeader;
