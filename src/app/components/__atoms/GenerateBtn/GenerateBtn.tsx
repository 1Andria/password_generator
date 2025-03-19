import React from "react";
import Arrow from "../../Images/Arrow";
import {
  useArrow,
  useCondition,
  useCopyTxt,
  useGeneratedPassword,
  usePassLength,
} from "@/app/Services/zustand";

function GenerateBtn() {
  const ChangeBtnColor = useArrow((state) => state.setArrow);
  const passLength = usePassLength((state) => state.passLength);
  const upperCase = useCondition((state) => state.upperCase);
  const lowerCase = useCondition((state) => state.lowerCase);
  const numbers = useCondition((state) => state.numbers);
  const symbols = useCondition((state) => state.symbols);
  const setCopy = useCopyTxt((state) => state.setCopyText);

  const setPassword = useGeneratedPassword((state) => state.setPassword);
  function generatePassword(
    length: number,
    isUppercase: boolean,
    isLowercase: boolean,
    isNumbers: boolean,
    isSymbols: boolean
  ) {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+[]{}|;:,.<>/?";

    let combined = "";

    if (isUppercase) {
      combined += uppercase;
    }
    if (isLowercase) {
      combined += lowercase;
    }
    if (isNumbers) {
      combined += numbers;
    }
    if (isSymbols) {
      combined += symbols;
    }

    let password = "";

    if (combined.length === 0) {
      return "Password";
    }

    for (let i = 0; i < length; i++) {
      const randomCharacterIndex = Math.floor(Math.random() * combined.length);
      const randomCharacter = combined[randomCharacterIndex];
      password += randomCharacter;
    }

    return password;
  }

  const genPassword = () => {
    const newPass = generatePassword(
      Number(passLength),
      upperCase,
      lowerCase,
      numbers,
      symbols
    );
    setPassword(newPass);
    setCopy(false);
  };

  return (
    <>
      <button
        onClick={genPassword}
        onMouseEnter={ChangeBtnColor}
        onMouseLeave={ChangeBtnColor}
        className="w-full h-[65px] bg-[#A4FFAF] hover:bg-transparent hover:border-[#A4FFAF] hover:border-[2px] items-center justify-center text-[18px] text-[#24232C] font-bold hover:text-[#A4FFAF] flex gap-[20px] max-[510px]:h-[56px]"
      >
        <h3>GENERATE</h3>
        <Arrow />
      </button>
    </>
  );
}

export default GenerateBtn;
