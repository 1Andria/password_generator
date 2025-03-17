import { create } from "zustand";

type PassLengthType = {
  passLength: number;
  setPassLength: (value: number) => void;
};

export const usePassLength = create<PassLengthType>((set) => ({
  passLength: 8,
  setPassLength: (value: number) => set({ passLength: value }),
}));

type ConditionType = {
  upperCase: boolean;
  lowerCase: boolean;
  numbers: boolean;
  symbols: boolean;
  setUpperCase: () => void;
  setLowerCase: () => void;
  setNumber: () => void;
  setSymbols: () => void;
};

export const useCondition = create<ConditionType>((set) => ({
  upperCase: false,
  lowerCase: false,
  numbers: false,
  symbols: false,
  setUpperCase: () => set((state) => ({ upperCase: !state.upperCase })),
  setLowerCase: () => set((state) => ({ lowerCase: !state.lowerCase })),
  setNumber: () => set((state) => ({ numbers: !state.numbers })),
  setSymbols: () => set((state) => ({ symbols: !state.symbols })),
}));

type ArrowType = {
  arrow: boolean;
  setArrow: () => void;
};

export const useArrow = create<ArrowType>((set) => ({
  arrow: false,
  setArrow: () => set((state) => ({ arrow: !state.arrow })),
}));

type CopyType = {
  copy: boolean;
  setCopy: () => void;
};

export const useCopy = create<CopyType>((set) => ({
  copy: false,
  setCopy: () => set((state) => ({ copy: !state.copy })),
}));

type CopyTypeText = {
  copyText: boolean;
  setCopyText: () => void;
};

export const useCopyTxt = create<CopyTypeText>((set) => ({
  copyText: false,
  setCopyText: () => set((state) => ({ copyText: !state.copyText })),
}));
