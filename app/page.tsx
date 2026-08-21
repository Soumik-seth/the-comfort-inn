import Hero from "./components/Hero";
import Services from "./components/Services";
import Amenities from "./components/Amenities";
import Testimonials from "./components/Testimonials";
export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <Services />
      <Amenities />
       <Testimonials />
    </main>
  
  );
}