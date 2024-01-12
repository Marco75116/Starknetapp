import { create } from "zustand";

interface ProcessTxState {
  isPending: boolean;
  isLoading: boolean;
  setIsPending: (value: boolean) => void;
  setIsLoading: (value: boolean) => void;
}

const useProcessTxState = create<ProcessTxState>((set) => ({
  isPending: false,
  isLoading: false,
  setIsLoading: (value: boolean) => set({ isLoading: value }),
  setIsPending: (value: boolean) => set({ isPending: value }),
}));

export default useProcessTxState;
