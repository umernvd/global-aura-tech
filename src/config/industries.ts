import {
  Smartphone,
  Stethoscope,
  Car,
  Truck,
  Share2,
  CreditCard,
} from "lucide-react";

export const industries = [
  {
    slug: "telecom",
    title: "Telecom",
    icon: Smartphone,
    description:
      "Next-gen customer support, billing inquiries, and technical troubleshooting at scale.",
    image: "/images/telecom-bg.jpg", // Make sure to add dummy images to public/images folder later
  },
  {
    slug: "ride-hailing",
    title: "Ride Hailing",
    icon: Car,
    description:
      "Real-time driver dispatch support, rider safety monitoring, and dispute resolution.",
    image: "/images/ride-hailing-bg.jpg",
  },
  {
    slug: "logistics",
    title: "Logistics",
    icon: Truck,
    description:
      "Order management, fleet coordination, and seamless logistics tracking support.",
    image: "/images/logistics-bg.jpg",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    icon: Stethoscope,
    description:
      "HIPAA-compliant scheduling, patient intake processing, and telemedicine support.",
    image: "/images/healthcare-bg.jpg",
  },
  {
    slug: "social-media",
    title: "Social Media",
    icon: Share2,
    description:
      "Content moderation, community engagement management, and brand protection.",
    image: "/images/social-bg.jpg",
  },
  {
    slug: "fintech",
    title: "Fintech",
    icon: CreditCard,
    description:
      "Fraud detection, KYC verification, and secure transaction monitoring.",
    image: "/images/fintech-bg.jpg",
  },
];
