import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export interface Item {
  title: string;
  description: string;
}

export interface LinkType {
  text: string;
  link?: string;
}

export const HomeMain = () => {
  const { t } = useTranslation("home");

  const data = t("about", { returnObjects: true }) as {
    stats: Item[];
    title: string;
    button: LinkType;
    description: string;
  };

  return (
    <section className="container flex flex-col gap-20 ">
      <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-5 sm:gap-10 xl:gap-16">
        {data.stats.map((item, i) => (
          <article
            key={item.description}
            className="flex flex-[0_0_23%] items-center gap-5"
          >
            <img src={`/icons/stats/${i + 1}.svg`} alt="" />
            <div>
              <h3 className="text-2xl">{item.title}</h3>
              <p className="sm:text-base text-sm font-light">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="relative min-h-[442px] w-full overflow-hidden">
        <img
          src="/home/main-bg.jpg"
          alt=""
          className="absolute top-0 left-0 size-full object-cover"
        />

        <div className="relative z-10 bg-white top-10 lg:top-16 left-10 p-10 w-[80%] md:w-[45%]">
          <h2 className="lg:text-4xl text-2xl leading-[130%] text-on-background mb-5">
            {data.title}
          </h2>
          <Link to={data.button.link ?? ""}>
            <button className="button-primary">{data.button.text}</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
