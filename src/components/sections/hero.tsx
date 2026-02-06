import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full min-h-150 flex items-center justify-center text-center px-4 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        // Replace with your actual image path or remove style to use bg-slate-900 only
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-700">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Empowering Global Connections through{" "}
          <span className="text-blue-500">World-Class BPO Solutions</span>
        </h1>

        <p className="text-slate-200 text-lg md:text-xl max-w-2xl leading-relaxed">
          Streamlining operations for the world's leading brands in Telecom,
          Logistics, and Healthcare with precision and empathy.
        </p>

        <div className="flex flex-wrap gap-4 mt-6">
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white border-0 text-base h-12 px-8"
          >
            <Link href="/services">Explore Services</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-white border-white hover:bg-white/10 text-base h-12 px-8 bg-transparent"
          >
            <Link href="/contact">Partner With Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
