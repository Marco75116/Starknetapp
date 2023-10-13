import { KeyRound, Receipt, Settings, User2, User2Icon } from "lucide-react";
import { NavItem, SubscriptionPlan } from "../types/global.type";

export const dashboardConfig: NavItem[] = [
  {
    title: "Overview",
    href: "/overview",
    icon: User2Icon,
  },
  {
    title: "Account",
    href: "/account",
    icon: User2Icon,
  },
  {
    title: "Api Keys",
    href: "/api-keys",
    icon: KeyRound,
  },
  {
    title: "Billing",
    href: "/billing",
    icon: Receipt,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export const storeSubscriptionPlans: SubscriptionPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Kickstart Your Projet",
    features: [
      "5 call/second limit",
      "Up to 10,000 API calls/day",
      "All existing community endpoints",
      "Basics Analytics",
      "Community support",
    ],
    stripePriceId: 0,
    price: 0,
  },
  {
    id: "basic",
    name: "Basic",
    description: "Ideal for development projects.",
    features: [
      "10 calls/second limit",
      "Up to 20,000 API calls/day",
      "All existing community endpoints",
      "Basics Analytics",
      "Escalated support",
    ],
    stripePriceId: 10,
    price: 10,
  },
  {
    id: "advanced",
    name: "Advanced",
    description: "Scale Your Projet",
    features: [
      "20 calls/second limit",
      "Up to 100,000 API calls/day",
      "All existing community endpoints",
      "Advanced Analytics",
      "Escalated support",
    ],
    stripePriceId: 30,
    price: 30,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Crafted for High-Volume Applications",
    features: [
      "Custom calls/second limit",
      "Custom API calls/day",
      "All existing community endpoints",
      "Advanced Analytics",
      "Escalated support",
    ],
    stripePriceId: 0,
    price: 0,
  },
];
