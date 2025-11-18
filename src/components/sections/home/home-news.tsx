import { useTranslation } from "react-i18next";
import { NewsCard } from "../../shared";

export const HomeNews = () => {
  const { t } = useTranslation("home");

  const { title, data } = t("news", { returnObjects: true }) as {
    title: string;
    data: {
      date: string;
      description: string;
    }[];
  };

  return (
    <section className="relative z-10 flex flex-col gap-20 container py-20">
      <h2 className="h2 text-center">{title}</h2>

      <div className="grid grid-cols-3 gap-6">
        {data.map((item, i) => (
          <NewsCard key={i} {...item} />
        ))}
      </div>

      <button className="button-secondary w-fit mx-auto">See more</button>
    </section>
  );
};
