import { Hero } from "@/components/sections/hero";
import { IndustryGrid } from "@/components/sections/industry-grid";
import { WhyChooseUs } from "@/components/sections/why-choose-us";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <IndustryGrid />
      <WhyChooseUs />
    </main>
  );
}
