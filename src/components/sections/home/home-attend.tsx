import { useTranslation } from "react-i18next";
import { Card } from "../../shared";

export const HomeAttend = () => {
  const { t } = useTranslation("home");

  const data = t("attend", { returnObjects: true }) as {
    title: string;
  };

  return (
    <section className="container flex flex-col gap-20 py-20">
      <h2 className="h2 text-center">{data.title}</h2>

      <div className="grid grid-cols-2 gap-x-6 gap-y-32">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card
            img="/home/card-img.png"
            title="Travel Agencies & Tour Operators"
            description="Discover exclusive Silk Road routes, Avaza beach packages, and partner with local operators to create unique Central Asian itineraries for your clients."
            button="Get my ticket"
            key={i}
          />
        ))}
      </div>
    </section>
  );
};
