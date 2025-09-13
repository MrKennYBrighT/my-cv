import { create } from "zustand";

export const useNavStore = create((set) => ({
  activeSection: "home",
  setActiveSection: (section) => set({ activeSection: section }),
}));
