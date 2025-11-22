import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation("global");

  const socials = [
    { icon: <Instagram />, link: "" },
    { icon: <Linkedin />, link: "" },
    { icon: <Facebook />, link: "" },
    { icon: <Twitter />, link: "" },
    { icon: <Youtube />, link: "" },
  ];

  return (
    <footer className="bg-secondary text-background">
      <div className="container flex flex-col gap-10 pt-10 pb-14 text-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <img
            src="/light-logo.svg"
            className="h-auto md:w-32 w-40 object-cover"
          />

          <div className="flex items-center gap-6">
            {socials.map((item, i) => (
              <span key={i}>{item.icon}</span>
            ))}
          </div>
        </div>

        <hr />

        <p className="text-base font-normal text-center">
          ©2025 {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};
