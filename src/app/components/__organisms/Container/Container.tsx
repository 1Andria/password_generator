import React from "react";
import PasswordHeader from "../../__molecules/PasswordHeader/PasswordHeader";
import Generator from "../../__molecules/Generator/Generator";
import HeadTxt from "../../__atoms/HeadTxt/HeadTxt";

function Container() {
  return (
    <>
      <div className="w-full h-screen bg-[#131219] flex flex-col gap-[24px] items-center justify-center pl-[5px] pr-[5px]">
        <HeadTxt />
        <PasswordHeader />
        <Generator />
      </div>
    </>
  );
}

export default Container;
