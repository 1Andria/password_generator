import React from "react";
import LevelColors from "../../__atoms/LevelColors/LevelColors";

function Level() {
  return (
    <>
      <div className="max-w-[476px] h-[72px] bg-[#18171F] justify-between w-full pl-[30px] pr-[30px] flex items-center max-[510px]:pr-[15px] max-[510px]:pl-[15px]">
        <h2 className="text-[18px] font-bold text-[#817D92] max-[510px]:text-[16px]">
          STRENGTH
        </h2>
        <LevelColors />
      </div>
    </>
  );
}

export default Level;
