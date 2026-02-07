import Link from "next/link";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata = {
  title: "Contact Us | Global Aura-tech",
  description: "Get in touch with our global support team.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f6f7f8] dark:bg-slate-950 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <nav className="flex mb-8 text-sm font-medium text-slate-500"></nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4 leading-tight">
                Let's build the future together.
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Connect with our experts to discuss your business needs. Our
                global support team is ready to help you scale efficiently.
              </p>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-4">
              <ContactCard
                icon={Mail}
                title="Email Us"
                subtitle="Our team typically replies within 2 hours."
                action="info@auratechglobal.com"
                href="mailto:info@auratechglobal.com"
              />

              {/* Dual Phone Numbers */}
              <div className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary dark:bg-primary/20 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    Phone Support
                  </h3>
                  <p className="text-sm text-slate-500 mb-2">
                    Mon-Fri from 9am to 6pm.
                  </p>

                  {/* US Number */}
                  <a
                    href="tel:+13512109217"
                    className="text-primary font-semibold hover:underline flex items-center gap-2"
                  >
                    <span className="text-slate-400 text-xs uppercase tracking-wide font-bold">
                      USA:
                    </span>
                    +1 351-210-9217
                  </a>

                  {/* Pakistan Number */}
                  <a
                    href="tel:+923156183440"
                    className="text-primary font-semibold hover:underline flex items-center gap-2 mt-1"
                  >
                    <span className="text-slate-400 text-xs uppercase tracking-wide font-bold">
                      PAK:
                    </span>
                    +92 315-618-3440
                  </a>
                </div>
              </div>
            </div>

            {/* Offices Section */}
            <div className="mt-4">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Globe className="h-5 w-5 text-slate-400" />
                Our Offices
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* US Address */}
                <OfficeCard
                  city="Newport Beach (HQ)"
                  address="20271 SW Acacia St. Suite 234, Newport Beach, CA 92660, USA"
                  image="/images/map-us.jpg"
                />

                {/* Pakistan Address */}
                <OfficeCard
                  city="Lahore (Operations)"
                  address="4th Floor, 36 MB Main Boulevard, Phase 6 DHA, Lahore, Punjab 54920, Pakistan"
                  image="/images/map-pk.jpg"
                />
              </div>
            </div>
          </div>

          {/* Right Column: The Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function ContactCard({ icon: Icon, title, subtitle, action, href }: any) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary dark:bg-primary/20 shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-bold text-slate-900 dark:text-white">{title}</h3>
        <p className="text-sm text-slate-500 mb-1">{subtitle}</p>
        <a href={href} className="text-primary font-semibold hover:underline">
          {action}
        </a>
      </div>
    </div>
  );
}

function OfficeCard({ city, address, image }: any) {
  return (
    <div className="h-full flex flex-col rounded-xl overflow-hidden bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 shadow-sm group">
      {/* Map Placeholder Area */}
      <div className="h-20 w-full bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-slate-400/50 text-xs font-medium uppercase tracking-widest">
          View on Map
        </div>
      </div>
      <div className="p-5 flex-1">
        <h4 className="font-bold text-slate-900 dark:text-white mb-2">
          {city}
        </h4>
        <p className="text-sm text-slate-500 leading-relaxed">{address}</p>
      </div>
    </div>
  );
}
