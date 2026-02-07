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
        {/* Breadcrumb */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-primary dark:text-white mb-4 leading-tight">
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
                action="contact@auratech.global"
                href="mailto:contact@auratech.global"
              />
              <ContactCard
                icon={Phone}
                title="Phone Support"
                subtitle="Mon-Fri from 8am to 5pm PST."
                action="+1 (800) 555-0199"
                href="tel:+18005550199"
              />
            </div>

            {/* Offices Section */}
            <div className="mt-4">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Globe className="h-5 w-5 text-slate-400" />
                Our Offices
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <OfficeCard
                  city="San Francisco (HQ)"
                  address="450 Howard St, Suite 500"
                  region="CA 94105"
                  // Replace with real image path later
                  image="/images/map-sf.jpg"
                />
                <OfficeCard
                  city="London (EMEA)"
                  address="10 York Rd"
                  region="London SE1 7ND, UK"
                  image="/images/map-london.jpg"
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

// --- Helper Components (Internal) ---

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

function OfficeCard({ city, address, region, image }: any) {
  return (
    <div className="rounded-xl overflow-hidden bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 shadow-sm group">
      {/* Map Placeholder */}
      <div className="h-24 w-full bg-slate-200 dark:bg-slate-800 relative">
        {/* <Image src={image} fill className="object-cover opacity-80 group-hover:opacity-100" /> */}
        <div className="absolute inset-0 flex items-center justify-center text-slate-400 text-xs">
          Map Image
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-bold text-slate-900 dark:text-white">{city}</h4>
        <p className="text-sm text-slate-500 mt-1">
          {address}
          <br />
          {region}
        </p>
      </div>
    </div>
  );
}
