import { Lexend, Manrope } from "next/font/google";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 2. Add variables to body */}
      <body
        className={`${lexend.variable} ${manrope.variable} font-sans antialiased bg-[#f6f7f8] text-[#111418]`}
      >
        {children}
      </body>
    </html>
  );
}
