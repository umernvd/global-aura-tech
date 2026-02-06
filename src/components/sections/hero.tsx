import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-center px-4 overflow-hidden">
      {/* Blurred background */}
      <Image
        src="/images/hero-globe.jpg"
        alt="Global network background"
        fill
        priority
        className="absolute inset-0 z-0 object-cover object-center"
        style={{ filter: "blur(4px)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-700">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Empowering Global Connections through World-Class BPO Solutions
        </h1>

        <p className="text-slate-100 text-lg md:text-xl max-w-2xl leading-relaxed">
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
