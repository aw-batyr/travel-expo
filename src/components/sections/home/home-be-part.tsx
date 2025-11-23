import { useTranslation } from "react-i18next";
import { Card } from "../../shared";
import type { CardType } from "./home-attend";

export const HomeBePart = () => {
  const { t } = useTranslation("home");

  const data = t("be-part", { returnObjects: true }) as {
    title: string;
    cards: CardType[];
  };

  const images = ["/home/be-part/1.jpg", "/home/be-part/2.jpg"];

  return (
    <section className="container flex flex-col gap-10">
      <h2 className="h2 text-center">{data.title}</h2>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {data.cards.map((item, i) => (
          <Card key={i} img={images[i]} {...item} />
        ))}
      </div>
    </section>
  );
};
