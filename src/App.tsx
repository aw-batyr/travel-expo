import { Outlet } from "react-router";
import { Footer, Header } from "./components/layout";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, ru, tm } from "./configs/i18n";
import type { InitOptions } from "i18next";
import { useLang } from "./store/use-lang";
import { useEffect } from "react";

const i18nOptions: InitOptions = {
  resources: {
    en,
    ru,
    tm,
  },
  lng: "ru", // дефолтный язык
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
};

i18n.use(initReactI18next).init(i18nOptions);

function App() {
  const value = useLang((state) => state.locale.value);

  useEffect(() => {
    if (value && i18n.language !== value) {
      i18n.changeLanguage(value);
    }
  }, [value]);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-background">
      <div className="w-full h-24 bg-transparent" />
      <Header />

      <main className="flex-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
