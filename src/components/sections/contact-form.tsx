"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Company is required"),
  email: z.email("Invalid email address"),
  industry: z.string().min(1, "Please select an industry"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  services: z.array(z.string()).optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data: FormData) {
    setIsSubmitting(true);
    // Simulate API call (Replace this with real EmailJS later)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    alert("Message sent!");
    setIsSubmitting(false);
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-xl dark:border-gray-800 dark:bg-gray-900 md:p-10">
      {/* Decorative Blob */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10">
        <div className="mb-8">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary dark:bg-primary/30">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/75 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            Now Accepting New Projects
          </span>
          <h2 className="text-2xl font-bold text-primary dark:text-white">
            Request a Quote
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Fill out the form below and our team will get back to you with a
            custom proposal.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Row 1 */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Full Name
              </label>
              <Input {...register("name")} />
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Company Name
              </label>
              <Input {...register("company")} />
              {errors.company && (
                <p className="text-xs text-red-500">{errors.company.message}</p>
              )}
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Work Email
              </label>
              <Input {...register("email")} type="email" />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Industry
              </label>
              <select
                {...register("industry")}
                className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-gray-800 dark:bg-gray-950"
              >
                <option value="">Select an industry...</option>
                <option value="fintech">Fintech</option>
                <option value="healthcare">Healthcare</option>
                <option value="logistics">Logistics</option>
                <option value="telecom">Telecom</option>
              </select>
              {errors.industry && (
                <p className="text-xs text-red-500">
                  {errors.industry.message}
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Message
            </label>
            <Textarea
              {...register("message")}
              placeholder="Tell us about your project..."
              className="min-h-30"
            />
            {errors.message && (
              <p className="text-xs text-red-500">{errors.message.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
              </>
            ) : (
              "Send Request"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
