import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import Marquee from "react-fast-marquee";
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
      <div className="md:h-150 h-170 w-full relative">
        <img
          src="/hero.webp"
          alt=""
          className="absolute top-0 left-0 size-full object-cover"
        />

        <div className="container relative top-1/2 -translate-y-1/2 left-0">
          <div className="flex flex-col lg:w-[720px] lg:min-h-[470px] h-fit w-full p-5 lg:p-10 bg-white/75">
            <div className="flex-1">
              <h1 className="h1 mb-3 text-black">{data.title}</h1>

              <p className="p">{data.description}</p>
            </div>
            <div className="relative z-10 flex items-center gap-4 mt-10">
              {data.buttons.map((item, i) => (
                <button key={i} className={clsx("button-secondary w-[206px]")}>
                  <Link to={item.link} key={item.text}>
                    {item.text}
                  </Link>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <Marquee
          loop={100}
          className="flex gap-4 items-center bg-primary select-none py-1.5 text-white whitespace-nowrap text-[26px]"
        >
          <div className="flex items-center gap-10">
            <span>{data.moveText}</span>
            <span>{data.moveText}</span>
            <span>{data.moveText}</span>
            <span>{data.moveText}</span>
            <span>{data.moveText}</span>
            <span>{data.moveText}</span>
            <span>{data.moveText}</span>
            <span>{data.moveText}</span>
          </div>
        </Marquee>
      </div>
    </section>
  );
};
