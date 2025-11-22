import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import type { LinkType } from "../sections/home/home-main";
import { Link } from "react-router";
import { useScrollLock } from "../../hooks/use-scroll-lock";
import { useBurger } from "../../store/use-burger";
import { MenuIcon } from "lucide-react";

export const Burger = () => {
  const burger = useBurger((state) => state.isOpen);
  const setBurger = useBurger((state) => state.setIsOpen);

  useScrollLock(burger);

  const { t } = useTranslation("global");

  const nav = t("header.nav", { returnObjects: true }) as LinkType[];

  console.log(nav);

  const buttons = t("header.buttons", { returnObjects: true }) as LinkType[];

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setBurger(!burger)}
        className="flex items-center justify-center p-2 cursor-pointer size-14 hover:scale-105 transition-all duration-300"
      >
        <MenuIcon className="text-black size-full object-cover" />
      </button>

      <motion.div
        initial={{ opacity: 0, x: "100%", pointerEvents: "none" }}
        animate={burger ? { opacity: 1, x: 0, pointerEvents: "all" } : {}}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute lg:top-36 top-20 z-40 left-0 min-h-screen flex flex-col gap-10 w-full p-5 bg-background"
      >
        <nav className="flex flex-col gap-5 text-2xl pt-10">
          {nav.map((item, i) => (
            <Link key={i} to={item?.link ?? ""}>
              {item.text}
            </Link>
          ))}
        </nav>

        <Link to={buttons[0].link ?? ""}>
          <button className="button-primary">{buttons[0].text}</button>
        </Link>
      </motion.div>
    </div>
  );
};
