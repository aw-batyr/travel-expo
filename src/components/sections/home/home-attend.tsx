import { useTranslation } from "react-i18next";
import { Card } from "../../shared";

export interface CardType {
  title: string;
  description: string | string[];
  button: {
    text: string;
    link?: string;
  };
}

export const HomeAttend = () => {
  const { t } = useTranslation("home");

  const data = t("attend", { returnObjects: true }) as {
    title: string;
    cards: CardType[];
  };

  return (
    <section className="container flex flex-col gap-10">
      <h2 className="h2 text-center">{data.title}</h2>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
        {data.cards.map((item, i) => (
          <Card key={i} img="/home/card-img.png" {...item} />
        ))}
      </div>
    </section>
  );
};
