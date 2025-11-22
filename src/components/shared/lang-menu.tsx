import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useState, type FC } from "react";
import { useLang } from "../../store/use-lang";
import { motion } from "motion/react";

interface Props {
  className?: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const langs = [
  {
    text: "En",
    value: "en",
  },
  {
    text: "Ru",
    value: "ru",
  },
  {
    text: "Tm",
    value: "tm",
  },
];

export const LangMenu: FC<Props> = ({ className }) => {
  const [active, setActive] = useState(false);
  const locale = useLang((state) => state.locale);
  const setLocale = useLang((state) => state.setLocale);

  return (
    <div className={clsx("relative w-13", className)}>
      <div
        onClick={() => setActive((prev) => !prev)}
        className={clsx("flex items-center gap-2 cursor-pointer")}
      >
        {locale.text}
        <ChevronDown
          className={clsx("transition-all size-4", active && "rotate-180")}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10, pointerEvents: "none" }}
        animate={active ? { opacity: 100, y: 0, pointerEvents: "auto" } : {}}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="absolute top-6 right-0 z-50 flex flex-col gap-2 bg-white text-secondary py-2 w-16 text-left rounded-lg"
      >
        {langs
          .filter((item) => item.value !== locale.value)
          .map((item) => (
            <div
              key={item.value}
              onClick={() => {
                setLocale(item);
                setActive((prev) => !prev);
              }}
              className="cursor-pointer px-5"
            >
              {item.text}
            </div>
          ))}
      </motion.div>
    </div>
  );
};
