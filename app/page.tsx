import { AboutUs, Cases, ContactForm, Directions, Hero, Reviews, Team } from "@/components/sections";
import { Chatbot } from "@/components/ui";



export default function Home() {
  return (
    <div>
      <Hero />
      <Directions />
      <Team />
      <Cases />
      <Reviews />
      <AboutUs />
      <ContactForm />
    </div>
  );
}
