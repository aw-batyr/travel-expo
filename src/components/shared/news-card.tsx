import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import type { FC } from "react";

interface Props {
  className?: string;
  date: string;
  description: string;
}

export const NewsCard: FC<Props> = ({ className, date, description }) => {
  return (
    <article className={clsx("bg-secondary", className)}>
      <div className="flex flex-col gap-3 py-10 px-5 text-white">
        <div className="flex items-center justify-between">
          <span className="text-xl font-medium">{date}</span>
          <ArrowRight />
        </div>
        <hr />
        <p className="p">{description}</p>
      </div>

      <img
        src="/home/card-img.png"
        alt=""
        className="h-[280px] w-full object-cover"
      />
    </article>
  );
};
