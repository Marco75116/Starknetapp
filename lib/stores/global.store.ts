import { create } from "zustand";

interface SheetState {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  setOpen: (value: boolean) => void;
}

const useSheetState = create<SheetState>((set) => ({
  open: false,
  onOpen: () => set({ open: true }),
  onClose: () => set({ open: false }),
  setOpen: (value: boolean) => set({ open: value }),
}));

export default useSheetState;
