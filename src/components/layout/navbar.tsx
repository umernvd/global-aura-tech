"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "About", href: "/about" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between px-4 md:px-6">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-10 w-10 overflow-hidden rounded-md">
            <Image
              src="/images/logo.jpeg"
              alt="Global Aura-tech"
              fill
              className="object-contain"
            />
          </div>
          {/* Always Primary Color */}
          <span className="text-xl font-bold tracking-tight text-primary">
            Global Auratech
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-primary/80 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-white font-bold shadow-md transition-transform hover:scale-105"
          >
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </nav>

        {/* Mobile Nav Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white">
            <div className="grid gap-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold text-primary hover:text-primary/80 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold"
              >
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
