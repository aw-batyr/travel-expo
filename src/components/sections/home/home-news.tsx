import { useTranslation } from "react-i18next";
import { NewsCard } from "../../shared";

export const HomeNews = () => {
  const { t } = useTranslation("home");

  const { title, data, button } = t("news", { returnObjects: true }) as {
    title: string;
    data: {
      date: string;
      description: string;
    }[];
    button: string;
  };

  const images = [
    "https://orient.tm/_next/image?url=https%3A%2F%2Fcdn.orient.tm%2Fstorage%2Fapp%2Fmedia%2Forient%2F11%2F14112025-turkmenistan-uzbekistan-vizit.jpg&w=1920&q=75",
    "https://orient.tm/_next/image?url=https%3A%2F%2Fcdn.orient.tm%2Fstorage%2Fapp%2Fmedia%2Fru%2F2025%2F11%2F11112025%20%D0%BF%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BF%D0%B8%D0%B0%D0%BD%D0%B8%D1%81%D1%82%20%D0%92%D0%BE%D0%B9%D1%86%D0%B5%D1%85%20%D0%B2%D0%B0%D0%BB%D0%B5%D1%87%D0%B5%D0%BA%20%D0%B2%20%D0%90%D1%88%D1%85%D0%B0%D0%B1%D0%B0%D0%B4%D0%B5.jpeg&w=1920&q=75",
    "https://orient.tm/_next/image?url=https%3A%2F%2Fcdn.orient.tm%2Fstorage%2Fapp%2Fmedia%2Forient%2F11%2F09112025-gruzovoj-poezd-iz-rossii-v-iran-cherez-kazahstan-turkmenistan.jpg&w=1920&q=75",
  ];

  return (
    <section className="relative z-10 flex flex-col md:gap-20 gap-10 container">
      <h2 className="h2 text-center">{title}</h2>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {data.map((item, i) => (
          <NewsCard key={i} {...item} img={images[i]} />
        ))}
      </div>

      <button className="button-secondary w-fit mx-auto">{button}</button>
    </section>
  );
};
