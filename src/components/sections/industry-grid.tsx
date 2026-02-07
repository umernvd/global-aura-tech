import Link from "next/link";
import Image from "next/image";
import { industries } from "@/config/industries";

export function IndustryGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="mb-4 font-display text-3xl font-bold text-primary md:text-4xl">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-500">
            Specialized solutions tailored for high-demand sectors.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group block"
            >
              <div className="overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md border border-gray-100">
                {/* Image Section */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={industry.image} // Ensure this path exists in your config file!
                    alt={industry.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-primary">
                    <industry.icon className="h-5 w-5" />
                    <h3 className="font-display text-lg font-bold text-[#111418]">
                      {industry.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {industry.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
