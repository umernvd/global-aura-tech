import {
  MessageSquare,
  Mic,
  Mail,
  TrendingUp,
  Clock,
  Globe,
  Phone,
  Heart,
  Zap,
  List,
  Filter,
  BarChart,
} from "lucide-react";

export const services = [
  {
    id: "chat-support",
    title: "Chat Support",
    subtitle: "Real-time Assistance",
    description:
      "Provide real-time assistance to your customers with our responsive chat support. We ensure instant gratification and problem resolution, reducing bounce rates and increasing customer satisfaction scores.",
    icon: MessageSquare,
    features: [
      {
        title: "24/7 Availability",
        desc: "Always online for your global customers, no matter the timezone.",
        icon: Clock,
      },
      {
        title: "Multi-language",
        desc: "Fluent support in over 30 languages to connect with every user.",
        icon: Globe,
      },
    ],
  },
  {
    id: "voice-support",
    title: "Voice Support",
    subtitle: "Human Touch",
    description:
      "Deliver a human touch with our professional voice support agents. We prioritize empathy and efficiency in every call, ensuring that complex issues are handled with care and precision.",
    icon: Mic,
    features: [
      {
        title: "High Resolution Rates",
        desc: "First-call resolution focus to respect your customers' time.",
        icon: Phone,
      },
      {
        title: "Empathetic Agents",
        desc: "Staff trained deeply in emotional intelligence and active listening.",
        icon: Heart,
      },
    ],
  },
  {
    id: "email-support",
    title: "Email Support",
    subtitle: "Detailed Care",
    description:
      "Handle complex queries with detailed, structured email responses. Perfect for technical issues, detailed documentation, or customers who prefer asynchronous communication.",
    icon: Mail,
    features: [
      {
        title: "Fast Turnaround",
        desc: "Responses within agreed SLAs to keep workflows moving.",
        icon: Zap,
      },
      {
        title: "Structured Responses",
        desc: "Clear, concise, and formatted communication.",
        icon: List,
      },
    ],
  },
  {
    id: "sales-support",
    title: "Sales Support",
    subtitle: "Growth Engine",
    description:
      "Drive revenue growth with our dedicated sales support teams. From cold calling to closing, we provide the talent and strategy to scale your business operations effectively.",
    icon: TrendingUp,
    features: [
      {
        title: "Lead Qualification",
        desc: "We filter prospects so your team closes more deals.",
        icon: Filter,
      },
      {
        title: "High Conversion",
        desc: "Proven sales scripts and objection handling techniques.",
        icon: BarChart,
      },
    ],
  },
];
