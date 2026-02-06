import Link from "next/link";
import { industries } from "@/config/industries";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function IndustryGrid() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-[#15202b]">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
            Industries We Serve
          </h2>
          <p className="max-w-175 text-slate-500 md:text-xl dark:text-slate-400">
            Specialized solutions tailored for high-demand sectors.
          </p>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group block h-full"
            >
              <Card className="h-full overflow-hidden border-slate-200 dark:border-slate-800 transition-all duration-300 hover:shadow-lg hover:border-blue-500/50 dark:bg-[#1a2632]">
                {/* Image Placeholder area */}
                <div className="h-48 bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
                  {/* In a real app, use <Image /> here. For now, a colored div with hover effect */}
                  <div className="absolute inset-0 bg-slate-300 dark:bg-slate-700 group-hover:scale-105 transition-transform duration-500" />
                </div>

                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                      <industry.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                      {industry.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
