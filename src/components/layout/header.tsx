import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { LangMenu } from "../shared";
import { Burger } from "./";

export const Header = () => {
  const { t } = useTranslation("global");

  const nav = t("header.nav", { returnObjects: true }) as {
    text: string;
    link: string;
  }[];

  console.log(nav);

  const buttons = t("header.buttons", { returnObjects: true }) as typeof nav;

  return (
    <header className="fixed z-50 left-0 top-0 right-0 h-24 bg-background drop-shadow-sm">
      <div className="max-w-435 mx-auto flex items-center justify-between px-4 py-4">
        <div className="xl:h-15 h-10 w-auto flex items-center justify-center overflow-hidden">
          <img src="/logo.svg" alt="" className="size-full object-cover" />
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
    </header>
  );
};
