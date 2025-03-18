"use client";
import React from "react";

function HeadTxt() {
  function refreshPage() {
    window.location.reload();
  }
  return (
    <>
      <h1
        onClick={refreshPage}
        className="text-[#817D92] text-[24px] font-bold cursor-pointer"
      >
        Password Generator
      </h1>
    </>
  );
}

export default HeadTxt;
