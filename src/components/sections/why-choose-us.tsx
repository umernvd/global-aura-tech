import Image from "next/image";
import { Headset, ShieldCheck, Users } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          {/* Left Text Side */}
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="mb-4 font-display text-3xl font-bold leading-tight text-primary md:text-5xl">
                Why Choose Global Aura-tech?
              </h2>
              <p className="text-lg text-gray-500">
                Partner with a leader in global technology services. We combine
                cutting-edge infrastructure with human expertise.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Headset,
                  title: "24/7 Multilingual Support",
                  desc: "Expert support available around the clock in over 30 languages.",
                },
                {
                  icon: ShieldCheck,
                  title: "99.9% Uptime Guarantee",
                  desc: "Enterprise-grade redundant infrastructure ensuring business continuity.",
                },
                {
                  icon: Users,
                  title: "Scalable Agile Teams",
                  desc: "Flexible staffing solutions that grow instantly with your business needs.",
                },
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-bold text-[#111418]">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Side */}
          <div className="relative flex-1">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/office-meeting.jpg" // Make sure you have this image
                alt="Office Team"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 hidden max-w-50 rounded-xl border border-gray-100 bg-white p-6 shadow-xl md:block">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-primary h-8 w-8" />
                <span className="font-display text-3xl font-bold text-primary">
                  10+
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-gray-500">
                Years of Excellence in Global Operations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
