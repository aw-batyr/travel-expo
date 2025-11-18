import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { LangMenu } from "../shared";

export const Header = () => {
  const { t } = useTranslation("global");

  const nav = t("header.nav", { returnObjects: true }) as {
    text: string;
    link: string;
  }[];

  console.log(nav);

  const buttons = t("header.buttons", { returnObjects: true }) as typeof nav;

  return (
    <header className="fixed z-30 left-0 top-0 right-0 h-22 bg-background drop-shadow-sm">
      <div className="max-w-435 mx-auto flex items-center justify-between px-6 py-4">
        <div className="h-14 w-auto">
          <img src="/logo.svg" alt="" />
        </div>

        <div className="flex items-center gap-12 ">
          <nav>
            <ul className="flex items-center gap-6">
              {nav.map((item) => (
                <li key={item.text} className="cursor-pointer">
                  <Link to={item.link}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </nav>

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
