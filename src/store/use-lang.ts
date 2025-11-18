import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Locale {
  value: string;
  text: string;
}

interface Store {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export const useLang = create<Store>()(
  persist(
    (set) => ({
      locale: {
        value: "en",
        text: "En",
      },
      setLocale: (locale) => set({ locale }),
    }),

    {
      name: "lang-storage",
    }
  )
);
