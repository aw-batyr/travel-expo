import {
  HomeAttend,
  HomeBePart,
  HomeHero,
  HomeMain,
  HomeMedia,
  HomeNews,
  HomePartners,
} from "../components/sections/home";

export default function Home() {
  return (
    <div className="flex flex-col lg:gap-40 gap-20">
      <HomeHero />
      <HomeMain />
      <HomeAttend />
      <HomeBePart />
      <HomeNews />
      <HomePartners />
      <HomeMedia />
    </div>
  );
}
