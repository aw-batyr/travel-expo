import { useTranslation } from "react-i18next";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const HomePartners = () => {
  const { t } = useTranslation("home");
  const title = t("partners.title");

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const btnClassName = "cursor-pointer p-3 size-14";

  return (
    <section className="container flex flex-col gap-10">
      <h2 className="text-3xl text-center">{title}</h2>

      <div
        ref={emblaRef}
        className="flex items-center justify-center gap-5 overflow-hidden"
      >
        <button onClick={() => emblaApi?.scrollPrev()} className={btnClassName}>
          <ChevronLeft className="size-full" />
        </button>

        <div className="flex items-center justify-center gap-5">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center flex-[0_0_200px] h-45 p-5 bg-white"
            >
              <img src={`/partners/${i + 1}.png`} alt="" />
            </div>
          ))}
        </div>

        <button onClick={() => emblaApi?.scrollNext()} className={btnClassName}>
          <ChevronRight className="size-full" />
        </button>
      </div>
    </section>
  );
};
