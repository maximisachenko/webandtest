import { Cases, Directions, Hero, Reviews, Team } from "@/components/sections";



export default function Home() {
  return (
    <div>
      <Hero />
      <Directions />
      <Team />
      <Cases />
      <Reviews />
    </div>
  );
}
