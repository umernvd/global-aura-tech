import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ServiceProps {
  service: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    icon: LucideIcon;
    features: {
      title: string;
      desc: string;
      icon: LucideIcon;
    }[];
  };
  isReversed: boolean;
}

export function ServiceRow({ service, isReversed }: ServiceProps) {
  return (
    <section
      id={service.id}
      className={cn(
        "py-20 lg:py-28 border-b border-gray-100 transition-colors",
        isReversed
          ? "bg-slate-50 dark:bg-slate-900/50"
          : "bg-white dark:bg-background",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "flex flex-col gap-12 lg:items-center",
            // Layout Logic: If reversed (odd numbers), put text on right, features on left
            isReversed ? "lg:flex-row-reverse" : "lg:flex-row",
          )}
        >
          {/* Text Side */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-bold uppercase tracking-wider text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <service.icon className="h-4 w-4" />
                {service.subtitle}
              </div>

              <h2 className="text-3xl font-black leading-tight text-slate-900 dark:text-white md:text-4xl lg:text-5xl">
                {service.title}
              </h2>

              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 md:text-xl">
                {service.description}
              </p>
            </div>

            <Button
              size="lg"
              className="h-12 rounded-lg bg-blue-600 px-8 text-base font-bold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-700"
            >
              Get Started with {service.title.split(" ")[0]}
            </Button>
          </div>

          {/* Feature Cards Side (Minimalist Design) */}
          <div className="flex-1">
            <div className="grid gap-6 sm:grid-cols-2">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:bg-slate-800 dark:ring-slate-700"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-slate-700 dark:text-blue-400">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
