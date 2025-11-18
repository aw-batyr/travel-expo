import {
  HomeAttend,
  HomeBePart,
  HomeEnquire,
  HomeHero,
  HomeMain,
  HomeNews,
} from "../components/sections/home";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeMain />
      <HomeAttend />
      <HomeEnquire />
      <HomeBePart />
      <HomeNews />
    </div>
  );
}
