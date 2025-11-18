import { useTranslation } from "react-i18next";
import { Marquee } from "../../shared/marquee";
import { Link } from "react-router";
import clsx from "clsx";

export const HomeHero = () => {
  const { t } = useTranslation("home");

  const data = t("hero", {
    returnObjects: true,
  }) as {
    title: string;
    description: string;
    moveText: string;
    buttons: {
      text: string;
      link: string;
    }[];
  };

  return (
    <section>
      <div className="h-150 w-full relative">
        <img
          src="/hero.webp"
          alt=""
          className="absolute top-0 left-0 size-full object-cover"
        />

        <div className="container relative top-10 left-0">
          <div className="w-220 p-10 bg-white">
            <h1 className="h1 mb-3 text-black">{data.title}</h1>

            <p className="p">{data.description}</p>

            <div className=" relative z-10 flex items-center gap-4 mt-10">
              {data.buttons.map((item, i) => (
                <button key={i} className={clsx("button-secondary")}>
                  <Link to={item.link} key={item.text}>
                    {item.text}
                  </Link>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-10 bg-primary select-none py-4 text-white whitespace-nowrap text-2xl overflow-hidden">
        <Marquee>
          <span>{data.moveText}</span>
          <span>{data.moveText}</span>
        </Marquee>
      </div>
    </section>
  );
};
