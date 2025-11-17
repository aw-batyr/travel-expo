import {
  HomeAttend,
  HomeEnquire,
  HomeHero,
  HomeMain,
} from "../components/sections/home";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeMain />
      <HomeAttend />
      <HomeEnquire />
    </div>
  );
}
