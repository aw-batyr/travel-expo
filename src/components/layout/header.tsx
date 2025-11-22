import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { LangMenu } from "../shared";
import { Burger } from "./";
import { Mail, MapPin, Phone } from "lucide-react";

export const Header = () => {
  const { t } = useTranslation("global");

  const nav = t("header.nav", { returnObjects: true }) as {
    text: string;
    link: string;
  }[];

  console.log(nav);

  const buttons = t("header.buttons", { returnObjects: true }) as typeof nav;

  return (
    <header className="fixed z-50 left-0 top-0 right-0 drop-shadow-sm">
      <div className="h-12 md:flex hidden bg-secondary text-white! items-center">
        <div className="container flex items-center justify-between text-xs font-normal">
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="text-white" />
              Ашхабад, Туркменистан
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone />
              +993(62) 00-62-00
            </div>
            <div className="flex items-center gap-2">
              <Mail />
              contact@turkmenexpo.com
            </div>
          </div>
        </div>
      </div>

      <div className="h-24 bg-background relative z-10">
        <div className="max-w-435 mx-auto flex items-center justify-between px-4 py-4">
          <div className="xl:h-15 h-10 w-auto flex items-center justify-center overflow-hidden">
            <img src="/logo.svg" alt="" className="size-full object-contain" />
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <LangMenu />
            <Burger />
          </div>

          <div className="hidden lg:flex items-center 2xl:gap-12 gap-3">
            <nav>
              <ul className="flex items-center gap-6">
                {nav.map((item) => (
                  <li key={item.text} className="cursor-pointer">
                    <Link to={item.link}>{item.text}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="h-5 w-px bg-black/20" />

            <LangMenu />

            <div className="flex items-center gap-6">
              {buttons.map((item, i) => (
                <Link key={item.text} to={item.link}>
                  <button
                    className={clsx(
                      i !== 0 ? "button-secondary" : "button-primary"
                    )}
                  >
                    {item.text}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
