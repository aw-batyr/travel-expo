// import { useTranslation } from "react-i18next";
// import type { LinkType } from "../sections/home/home-main";
// import { Link } from "react-router";
// import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

// export const Footer = () => {
//   const { t } = useTranslation("global");

//   const data = t("footer", { returnObjects: true }) as {
//     block1: {
//       title: string;
//       data: string[];
//     };
//     block2: {
//       title: string;
//       data: string[];
//     };
//     block3: {
//       title: string;
//       data: LinkType[];
//     };

//     terms: LinkType[];
//   };

//   const socials = [
//     { icon: <Instagram fill="" />, link: "" },
//     { icon: <Linkedin />, link: "" },
//     { icon: <Facebook />, link: "" },
//     { icon: <Twitter />, link: "" },
//     { icon: <Youtube />, link: "" },
//   ];

//   return (
//     <footer className="bg-secondary text-white">
//       <div className="container flex flex-col gap-10 pt-10 pb-14 text-sm">
//         <div className="flex justify-between">
//           <div className="flex flex-col gap-8 flex-[0_0_20%]">
//             <h3>{data.block1.title}</h3>

//             <ul>
//               {data.block1.data.map((item) => (
//                 <li key={item}>{item}</li>
//               ))}
//             </ul>
//           </div>

//           <div className="flex flex-col gap-8 flex-[0_0_40%]">
//             <h3>{data.block1.title}</h3>

//             <ul className="flex flex-col gap-3">
//               {data.block2.data.map((item) => (
//                 <li
//                   dangerouslySetInnerHTML={{ __html: item ?? "" }}
//                   key={item}
//                 />
//               ))}
//             </ul>
//           </div>

//           <div className="flex flex-col gap-8 flex-[0_0_20%]">
//             <h3>{data.block1.title}</h3>

//             <ul className="flex flex-col gap-1">
//               {data.block3.data.map((item) => (
//                 <Link to={item.link ?? ""}>
//                   <li key={item.text}>{item.text}</li>
//                 </Link>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <hr className="border-4" />

//         <div className="flex items-center justify-center gap-4">
//           {socials.map((item, i) => (
//             <Link
//               key={i}
//               to={item.link ?? ""}
//               className="flex items-center justify-center p-1.5 size-9 border-4 rounded-xl"
//             >
//               {item.icon}
//             </Link>
//           ))}
//         </div>

//         <ul className="flex items-center gap-4">
//           {data.terms.map((item) => (
//             <Link to={item.link ?? ""}>{item.text}</Link>
//           ))}
//         </ul>

//         <p className="font-light text-center mt-8">Exhibition Website by ASP</p>
//       </div>
//     </footer>
//   );
// };

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export const Footer = () => {
  const socials = [
    { icon: <Instagram fill="" />, link: "" },
    { icon: <Linkedin />, link: "" },
    { icon: <Facebook />, link: "" },
    { icon: <Twitter />, link: "" },
    { icon: <Youtube />, link: "" },
  ];

  return (
    <footer className="bg-secondary text-background">
      <div className="container flex flex-col gap-10 pt-10 pb-14 text-sm">
        <div className="flex justify-between">
          <img src="/light-logo.svg" />

          <div className="flex items-center gap-6">
            {socials.map((item, i) => (
              <div key={i} className="">
                {item.icon}
              </div>
            ))}
          </div>
        </div>

        <hr />

        <p className="text-base font-normal text-center">
          ©2025 Все права защищены
        </p>
      </div>
    </footer>
  );
};
