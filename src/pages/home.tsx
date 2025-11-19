import {
  HomeAttend,
  HomeBePart,
  HomeHero,
  HomeMain,
  HomeNews,
} from "../components/sections/home";

export default function Home() {
  return (
    <div className="flex flex-col lg:gap-40 gap-20 pb-20">
      <HomeHero />
      <HomeMain />
      <HomeAttend />
      <HomeBePart />
      <HomeNews />
    </div>
  );
}
