import clsx from "clsx";
import { Link } from "react-router";

interface Props {
  className?: string;
  img: string;
  title: string;
  description: string;
  button: {
    text: string;
    link?: string;
  };
}

export const Card = ({ className, img, title, description, button }: Props) => {
  return (
    <article
      className={clsx(
        "relative z-10 flex flex-col gap-11 rounded-[30px] overflow-hidden bg-secondary text-background drop-shadow-sm",
        className
      )}
    >
      <img src={img} alt="" className="h-110 w-auto object-cover" />

      <div className="flex flex-col gap-5 px-10">
        <h3 className="h3">{title}</h3>
        <p className="p">{description}</p>
      </div>

      <Link to={button.link ?? ""} className="px-10 pb-10">
        <button className="button-white">{button.text}</button>
      </Link>
    </article>
  );
};
