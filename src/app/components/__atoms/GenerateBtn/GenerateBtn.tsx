import React from "react";
import Arrow from "../../Images/Arrow";
import { useArrow } from "@/app/Services/zustand";

function GenerateBtn() {
  const ChangeBtnColor = useArrow((state) => state.setArrow);
  return (
    <>
      <button
        onMouseEnter={ChangeBtnColor}
        onMouseLeave={ChangeBtnColor}
        className="w-full h-[65px] bg-[#A4FFAF] hover:bg-transparent hover:border-[#A4FFAF] hover:border-[2px] items-center justify-center text-[18px] text-[#24232C] font-bold hover:text-[#A4FFAF] flex gap-[20px]"
      >
        <h3>GENERATE</h3>
        <Arrow />
      </button>
    </>
  );
}

export default GenerateBtn;
