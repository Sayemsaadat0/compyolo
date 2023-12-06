import { count } from "console";
import { create } from "zustand";

type CountStorre = {
  count: number;
  setTen: () => void;
};

export const useCountStore = create<CountStorre>()((set) => ({
  count: 5,
  setTen: (state) => set(() => ({ count: count.state + 1 })),
}));
