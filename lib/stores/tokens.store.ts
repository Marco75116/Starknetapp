import { create } from "zustand";
import { Token } from "../types/global.type";

interface tokensState {
  count: number;
  setCount: (value: number) => void;
  tokens: Token[];
  setTokens: (tokens: Token[]) => void;
  inititalLoding: boolean;
  setInitialLoding: (value: boolean) => void;
}

const useTokensState = create<tokensState>((set) => ({
  count: 0,
  setCount: (value: number) => set({ count: value }),
  tokens: [],
  setTokens: (tokens: Token[]) => set({ tokens: tokens }),
  inititalLoding: false,
  setInitialLoding: (value: boolean) => set({ inititalLoding: value }),
}));

export default useTokensState;
