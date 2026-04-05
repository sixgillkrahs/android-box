import Compatibility from "./sections/Compatibility";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import Specs from "./sections/Specs";
import Testimonials from "./sections/Testimonials";

const HomeModule = () => {
  return (
    <main className="flex-1">
      <Hero />
      <Compatibility />
      <Specs />
      <Features />
      <Testimonials />
      <Pricing />
    </main>
  );
};

export default HomeModule;
