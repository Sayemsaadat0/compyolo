import { create } from "zustand";

type Store = {
  count: number;
  setTen: (numb: any) => void;
  removeTen: (numb: any) => void;
  multipleTen: (numb: any) => void;
};

export const useStore = create<Store>()((set) => ({
  count: 10,
  setTen: (numb) => set((state: any) => ({ count: state.count + numb })),
  removeTen: (numb) => set((state: any) => ({ count: state.count - numb })),
  multipleTen: (numb) => set((state: any) => ({ count: state.count * numb })),
}));
