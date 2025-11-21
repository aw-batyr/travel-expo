import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const HomeMedia = () => {
  const { t } = useTranslation("home");

  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    slidesToScroll: 2,
  });

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    // scrollSnapList(): number[]
    setScrollSnaps(emblaApi.scrollSnapList());

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-secondary md:pt-20 pt-10">
      <div className="container flex flex-col gap-10">
        <h2 className="h2 text-center text-white">{t("media.title")}</h2>

        <div
          className="relative z-10 flex flex-col justify-center overflow-hidden  pb-14"
          ref={emblaRef}
        >
          <div className="flex items-center gap-5.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex-[0_0_392px] h-70">
                <img
                  src="/home/card-img.png"
                  alt=""
                  className="size-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center h-10 gap-3 z-20 mt-4">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={clsx(
                  "w-3 h-3 rounded-full transition-all cursor-pointer",
                  selectedIndex === i ? "dot-active" : "dot"
                )}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <button className="button-white w-fit px-12!">
              {t("media.button")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
