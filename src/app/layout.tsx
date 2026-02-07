import { Lexend, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} ${manrope.variable} font-sans antialiased bg-[#f6f7f8] text-[#111418]`}
      >
        <div className="flex min-h-screen flex-col">
          {/* Header sits at the top of every page */}
          <Navbar />
          <main className="flex-1">{children}</main>
          {/* Footer sits at the bottom of every page */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
