import { create } from "zustand";
import { Pagination, Token } from "../types/global.type";

interface tokensSearchParametersState {
  pagination: Pagination;
  setPagination: (pagination: Pagination) => void;
}

const useSearchParametersState = create<tokensSearchParametersState>((set) => ({
  pagination: {
    page: 0,
    range: 5,
  },
  setPagination: (pagination: Pagination) => set({ pagination: pagination }),
}));

export default useSearchParametersState;
