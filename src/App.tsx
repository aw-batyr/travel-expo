import { Outlet } from "react-router";
import { Footer, Header } from "./components/layout";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en, ru } from "./configs/i18n";
import type { InitOptions } from "i18next";

const i18nOptions: InitOptions = {
  resources: {
    en,
    ru,
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
};

i18n.use(initReactI18next).init(i18nOptions);

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-background">
      <div className="w-full h-22 bg-transparent" />
      <Header />

      <main className="flex-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
