import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export interface Item {
  title: string;
  description: string;
}

export interface Link {
  text: string;
  link: string;
}

export const HomeMain = () => {
  const { t } = useTranslation("home");

  const data = t("about", { returnObjects: true }) as {
    stats: Item[];
    title: string;
    button: Link;
    description: string;
  };

  return (
    <section className="container flex flex-col gap-20 py-20">
      <div className="flex items-center justify-between gap-16">
        {data.stats.map((item, i) => (
          <article
            key={item.description}
            className="flex flex-[0_0_23%] items-center gap-5"
          >
            <img src={`/icons/stats/${i + 1}.svg`} alt="" />
            <div>
              <h3 className="text-2xl">{item.title}</h3>
              <p className="text-base font-light">{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="relative h-[442px] w-full overflow-hidden">
        <img src="/home/main-bg.jpg" alt="" className="absolute top-0 left-0" />

        <div className="relative bg-white/75 top-1/2 left-10 p-10 -translate-y-1/2 w-[45%]">
          <h2 className="text-4xl leading-[130%] text-on-background mb-5">
            {data.title}
          </h2>
          <Link to={data.button.link}>
            <button className="button-primary">{data.button.text}</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
