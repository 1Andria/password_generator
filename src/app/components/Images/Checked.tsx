import React from "react";
type CheckType = {
  isChecked?: boolean;
};

function Checked({ isChecked }: CheckType) {
  return (
    <>
      <svg
        width="15"
        height="13"
        viewBox="0 0 15 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 6.60659L5.39341 10L13.3934 2"
          stroke={isChecked ? "#18171F" : "none"}
          strokeWidth="3"
        />
      </svg>
    </>
  );
}

export default Checked;
