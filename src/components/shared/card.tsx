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
        "relative z-10 flex flex-col h-full rounded-[30px] overflow-hidden bg-secondary text-background drop-shadow-sm",
        className
      )}
    >
      <img src={img} alt="" className="md:h-110 h-70 w-auto object-cover" />

      {/* контент = растягиваемый flex-контейнер */}
      <div className="flex flex-col flex-1 lg:pt-10 pt-6 lg:px-10 px-6 lg:pb-10 pb-6 gap-6">
        {/* текстовый блок */}
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

        {/* кнопка прибитая к низу */}
        <div className="mt-auto">
          <Link to={button.link ?? ""}>
            <button className="button-white w-[168px]">{button.text}</button>
          </Link>
        </div>
      </div>
    </article>
  );
};
