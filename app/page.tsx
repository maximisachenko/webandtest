import { Directions, Cases, Reviews, Blog, AboutUs, Hero } from "@/components/sections";

export default function Home() {
  return (
    <div>
      <Hero />
      <Directions />
      <Cases />
      <AboutUs />
      <Reviews />
      <Blog />
    </div>
  );
}
