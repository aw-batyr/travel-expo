import { useTranslation } from "react-i18next";
import { Card } from "../../shared";
import type { CardType } from "./home-attend";

export const HomeBePart = () => {
  const { t } = useTranslation("home");

  const data = t("be-part", { returnObjects: true }) as {
    title: string;
    cards: CardType[];
  };

  return (
    <section className="container flex flex-col gap-10 py-20">
      <h2 className="h2 text-center">{data.title}</h2>

      <div className="grid grid-cols-2 gap-6">
        {data.cards.map((item, i) => (
          <Card key={i} img="/home/card-img.png" {...item} />
        ))}
      </div>
    </section>
  );
};
