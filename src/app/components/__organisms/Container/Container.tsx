import React from "react";
import PasswordHeader from "../../__molecules/PasswordHeader/PasswordHeader";
import Generator from "../../__molecules/Generator/Generator";

function Container() {
  return (
    <>
      <div className="w-full h-screen bg-[#131219] flex flex-col gap-[24px] items-center justify-center">
        <h1 className="text-[#817D92] text-[24px] font-bold">
          Password Generator
        </h1>
        <PasswordHeader />
        <Generator />
      </div>
    </>
  );
}

export default Container;
