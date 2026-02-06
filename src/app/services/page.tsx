import { services } from "@/config/services";
import { ServiceRow } from "@/components/sections/service-row";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Services | Global Aura-tech",
  description:
    "Explore our premium BPO solutions including Chat, Voice, Email, and Sales support.",
};

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-background">
      <Navbar />

      {/* Page Hero */}
      <section className="relative flex min-h-[100px] flex-col items-center justify-center overflow-hidden bg-slate-900 px-4 py-24 text-center">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900" />

        <div className="relative z-10 max-w-1xl space-y-6">
          <h1 className="text-2xl font-black tracking-tight text-white md:text-6xl">
            Our Premium Services
          </h1>
          <p className="text-xl text-slate-300">
            Comprehensive BPO solutions tailored to scale your business with
            quality, efficiency, and empathy.
          </p>
        </div>
      </section>

      {/* Services List Loop */}
      <div className="flex flex-col">
        {services.map((service, index) => (
          <ServiceRow
            key={service.id}
            service={service}
            // The Zig-Zag Logic:
            // Index 0 (Chat) = False (Left)
            // Index 1 (Voice) = True (Right)
            // Index 2 (Email) = False (Left)
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
      <Footer/>
    </main>
  );
}
