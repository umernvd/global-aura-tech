import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full min-h-dvh flex items-center px-4 overflow-hidden pt-24 pb-12 bg-white">
      {/* 1. RESPONSIVE VIDEO BACKGROUND */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover object-[75%_center] md:object-center w-full h-full"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Mobile readability gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-white/80 via-transparent to-transparent md:hidden" />
      </div>

      {/* 2. ADAPTIVE CONTENT CONTAINER */}
      <div className="container mx-auto relative z-10">
        <div
          className="max-w-4xl flex flex-col gap-6 animate-in fade-in zoom-in duration-700 
          items-center text-center
          md:items-start md:text-left
        "
        >
          {/* Headline: Responsive Text Sizing */}
          <h1
            className="font-extrabold tracking-tight text-primary leading-[1.1]
            text-4xl
            sm:text-5xl
            md:text-6xl lg:text-7xl
          "
          >
            Empowering Global <br className="hidden md:block" />
            Connections With
            <br className="hidden md:block" />
            <span className="text-blue-500"> Precision & Empathy</span>
          </h1>

          {/* Description: Responsive Width */}
          <p
            className="text-slate-600 font-medium leading-relaxed
            text-base max-w-sm
            md:text-xl md:max-w-2xl
          "
          >
            Streamlining operations for the world's leading brands in Telecom,
            Logistics, and Healthcare with AI-driven support.
          </p>

          {/* Buttons: Adaptive Alignment */}
          <div
            className="flex flex-wrap gap-4 mt-4
            justify-center
            md:justify-start
          "
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-base md:text-lg h-12 md:h-14 px-8 rounded-full shadow-lg transition-transform hover:-translate-y-1"
            >
              <Link href="/services">Explore Services</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-primary/20 text-primary hover:bg-primary/5 bg-white/50 backdrop-blur-sm text-base md:text-lg h-12 md:h-14 px-8 rounded-full transition-transform hover:-translate-y-1"
            >
              <Link href="/contact">Partner With Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
