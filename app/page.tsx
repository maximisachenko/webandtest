import { Directions, Cases, Reviews, Blog, AboutUs, Hero } from "@/components/sections";

export default function Home() {
  return (
    <div className='pt-20'>
      <Hero />
      <Directions />
      <Cases />
      <AboutUs />
      <Reviews />
      <Blog />
    </div>
  );
}

