"use client";

import Link from "next/link";
import { Menu, Globe } from "lucide-react"; // Icons
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-[#101922] dark:border-gray-800">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-2">
          <Globe className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Global Aura-tech
          </span>
        </Link>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors dark:text-slate-300"
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Request a Quote
          </Button>
        </nav>

        {/* Mobile Navigation (Hamburger Menu) */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium hover:text-blue-600"
                >
                  {link.name}
                </Link>
              ))}
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Request a Quote
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
