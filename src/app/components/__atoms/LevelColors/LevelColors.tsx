import { useCondition } from "@/app/Services/zustand";
import React from "react";

function LevelColors() {
  const upperCase = useCondition((state) => state.upperCase);
  const lowerCase = useCondition((state) => state.lowerCase);
  const numbers = useCondition((state) => state.numbers);
  const symbols = useCondition((state) => state.symbols);

  const trueDef = [upperCase, lowerCase, numbers, symbols].filter(
    Boolean
  ).length;

  let strengthText = "";
  let colors = ["border-[2px]", "border-[2px]", "border-[2px]", "border-[2px]"];

  if (trueDef === 1) {
    strengthText = "Too Weak!";
    colors = [
      "bg-[#F64A4A] border-none",
      "border-[2px]",
      "border-[2px]",
      "border-[2px]",
    ];
  } else if (trueDef === 2) {
    colors = [
      "bg-[#FB7C58] border-none",
      "bg-[#FB7C58] border-none",
      "border-[2px]",
      "border-[2px]",
    ];
    strengthText = "Weak";
  } else if (trueDef === 3) {
    colors = [
      "bg-[#F8CD65] border-none",
      "bg-[#F8CD65] border-none",
      "bg-[#F8CD65] border-none",
      "border-[2px]",
    ];
    strengthText = "Medium";
  } else if (trueDef === 4) {
    strengthText = "Strong";
    colors = [
      "bg-[#A4FFAF] border-none",
      "bg-[#A4FFAF] border-none",
      "bg-[#A4FFAF] border-none",
      "bg-[#A4FFAF] border-none",
    ];
  } else {
    colors = ["border-[2px]", "border-[2px]", "border-[2px]", "border-[2px]"];
  }

  return (
    <>
      <div className="flex items-center gap-[15px]">
        <h2 className="text-[#E6E5EA] text-[24px] font-bold max-[510px]:text-[16px]">
          {strengthText}
        </h2>
        <div className="flex gap-[8px]">
          {colors.map((color, index) => (
            <div key={index} className={`w-[10px] h-[28px]  ${color}`}></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LevelColors;
