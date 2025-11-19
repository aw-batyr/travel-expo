import clsx from "clsx";
import { Link } from "react-router";

interface Props {
  className?: string;
  img: string;
  title: string;
  description: string | string[];
  button: {
    text: string;
    link?: string;
  };
}

export const Card = ({ className, img, title, description, button }: Props) => {
  return (
    <article
      className={clsx(
        "relative z-10 flex flex-col lg:gap-11 gap-5 rounded-[30px] overflow-hidden bg-secondary text-background drop-shadow-sm",
        className
      )}
    >
      <img src={img} alt="" className="md:h-110 h-70 w-auto object-cover" />

      <div className="flex flex-col justify-between gap-6 lg:px-10 px-6 lg:pb-10 pb-6">
        <div className="flex flex-col gap-5 lg:gap-6">
          <h3 className="h3">{title}</h3>
          {Array.isArray(description) ? (
            <ul className="list-disc ml-5">
              {description.map((item, i) => (
                <li key={i} className="font-light text-lg">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="p">{description}</p>
          )}
        </div>
        <Link to={button.link ?? ""}>
          <button className="button-white relative bottom-0">
            {button.text}
          </button>
        </Link>
      </div>
    </article>
  );
};
