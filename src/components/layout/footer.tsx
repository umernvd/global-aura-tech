import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  Globe,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#101922] text-white border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6 py-16 lg:py-20">
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <Globe className="h-8 w-8 text-blue-500 group-hover:rotate-12 transition-transform" />
              <span className="text-xl font-bold tracking-tight">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
            <div className="flex gap-4 pt-2">
              <SocialLink href={siteConfig.socials.facebook} icon={Facebook} />
              <SocialLink href={siteConfig.socials.linkedin} icon={Linkedin} />
              <SocialLink href={siteConfig.socials.twitter} icon={Twitter} />
            </div>
          </div>

          {/* Column 4: Contact Info (Redesigned for readability) */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold tracking-wide text-white">
              Contact
            </h3>
            <ul className="space-y-4">
              <ContactItem icon={MapPin} text={siteConfig.contact.address} />
              <ContactItem icon={Phone} text={siteConfig.contact.phone} />
              <ContactItem icon={Mail} text={siteConfig.contact.email} />
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-6 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper Components for Cleaner Code
function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
  return (
    <Link
      href={href}
      className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
}

function ContactItem({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <li className="flex items-start gap-3 text-slate-400 text-sm group">
      <Icon className="h-5 w-5 text-blue-500 mt-0.5 group-hover:text-blue-400" />
      <span className="group-hover:text-slate-300 transition-colors">
        {text}
      </span>
    </li>
  );
}
