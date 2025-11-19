import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import type { CardType } from "./home-attend";

export const HomeEnquire = () => {
  const { t } = useTranslation("home");

  const data = t("enquire", { returnObjects: true }) as CardType;

  return (
    <section className=" container">
      <div className="h-100 relative  overflow-hidden">
        <img
          src="/home/require.jpg"
          className="absolute top-0 left-0 size-full object-cover"
        />

        <div className="absolute size-300 top-0 -right-100 bg-white/55 rotate-35 backdrop-blur-xl" />

        <div className="absolute flex flex-col gap-4 right-10 top-1/2 -translate-y-1/2 w-[40%]">
          <h2 className="h3">{data.title}</h2>
          <p className="p">{data.description}</p>

          <Link to={data.button.link ?? ""}>
            <button className="button-white after:bg-secondary! text-secondary!">
              {data.button.text}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
