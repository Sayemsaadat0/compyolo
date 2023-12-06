import { create } from "zustand";

type Store = {
  count: number;
  setTen: (numb: any) => void;
  removeTen: (numb: any) => void;
};

export const useStore = create<Store>()((set) => ({
  count: 1,
  setTen: (numb) => set((state: any) => ({ count: state.count + numb })),
  removeTen: (numb) => set((state: any) => ({ count: state.count - numb })),
}));
