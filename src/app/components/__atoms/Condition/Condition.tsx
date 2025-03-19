import React from "react";
import Checked from "../../Images/Checked";

type ConditionType = {
  txt: string;
  isChecked: boolean;
  change: () => void;
};

function Condition({ txt, isChecked, change }: ConditionType) {
  return (
    <>
      <div
        onClick={change}
        className="flex w-auto gap-[24px] max-[400px]:gap-[12px] items-center cursor-pointer"
      >
        <div
          className={`w-[20px] h-[20px] ${
            isChecked ? "" : "border-[2px]"
          } flex justify-center ${
            isChecked ? "bg-[#A4FFAF]" : ""
          } items-center`}
        >
          <Checked isChecked={isChecked} />
        </div>
        <h2 className="text-[18px] font-bold text-[#E6E5EA]">{txt}</h2>
      </div>
    </>
  );
}

export default Condition;
