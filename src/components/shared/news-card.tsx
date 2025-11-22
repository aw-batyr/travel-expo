import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import type { FC } from "react";

interface Props {
  className?: string;
  date: string;
  description: string;
  img: string;
}

export const NewsCard: FC<Props> = ({ className, date, description, img }) => {
  return (
    <article
      className={clsx("bg-secondary flex flex-col justify-between", className)}
    >
      <div className="flex flex-col gap-3 py-10 px-5 text-white">
        <div className="flex items-center justify-between">
          <span className="text-xl font-medium">{date}</span>
          <ArrowRight className="size-4" />
        </div>
        <hr />
        <p className="p text-ellipsis">{description}</p>
      </div>

      <img src={img ?? ""} alt="" className="h-[280px] w-full object-cover" />
    </article>
  );
};
