"use client";
import React from "react";
import NumLengthInp from "../../__atoms/NumLengthInp/NumLengthInp";
import { useCondition, usePassLength } from "@/app/Services/zustand";
import Condition from "../../__atoms/Condition/Condition";
import Level from "../Level/Level";
import GenerateBtn from "../../__atoms/GenerateBtn/GenerateBtn";

function Generator() {
  const PassLenght = usePassLength((state) => state.passLength);
  const upperCase = useCondition((state) => state.upperCase);
  const lowerCase = useCondition((state) => state.lowerCase);
  const numbers = useCondition((state) => state.numbers);
  const symbols = useCondition((state) => state.symbols);
  const ToUpperCase = useCondition((state) => state.setUpperCase);
  const ToLowerCase = useCondition((state) => state.setLowerCase);
  const ToNumbers = useCondition((state) => state.setNumber);
  const ToSymbols = useCondition((state) => state.setSymbols);

  return (
    <>
      <div className="max-w-[540px] w-full h-[528px] bg-[#24232C] flex flex-col justify-between pl-[30px] pr-[30px] pt-[34px] pb-[32px]">
        <div className="flex justify-between items-center">
          <h3 className="text-[#E6E5EA] text-[18px] font-bold">
            Character Length
          </h3>
          <h3 className="text-[32px] text-[#A4FFAF] text-bold">{PassLenght}</h3>
        </div>
        <NumLengthInp />
        <div className="flex flex-col gap-[20px]">
          <Condition
            isChecked={upperCase}
            change={ToUpperCase}
            txt="Include Uppercase Letters"
          />
          <Condition
            isChecked={lowerCase}
            change={ToLowerCase}
            txt="Include Lowercase Letters"
          />
          <Condition
            isChecked={numbers}
            change={ToNumbers}
            txt="Include Numbers"
          />
          <Condition
            isChecked={symbols}
            change={ToSymbols}
            txt="Include Symbols"
          />
        </div>
        <Level />
        <GenerateBtn />
      </div>
    </>
  );
}

export default Generator;
