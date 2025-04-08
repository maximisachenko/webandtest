import { Directions } from "@/components/sections/directions";
import { Hero } from "@/components/sections/hero";
import { Team } from "@/components/sections/team";


export default function Home() {
  return (
    <div className="z-0">
      <Hero />
      <Directions />
      <Team />
    </div>
  );
}
