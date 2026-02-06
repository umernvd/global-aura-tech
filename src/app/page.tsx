import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { IndustryGrid } from "@/components/sections/industry-grid";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <IndustryGrid />
      {/* You can add Footer here later */}
    </main>
  );
}
