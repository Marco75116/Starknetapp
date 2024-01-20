import { LucideIcon } from "lucide-react";

export type NavItem = {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: LucideIcon;
  label?: string;
  description?: string;
};

export type SubscriptionPlan = {
  id: "starter" | "basic" | "advanced" | "enterprise";
  name: string;
  description: string;
  features: string[];
  stripePriceId: number;
  price: number;
};

export type KeyToken = {
  appName: string;
  apiKeyToken: string;
  dateCreated: number;
};

export type Token = {
  tokenaddress: string;
  owner: string;
  name: string;
  blocknumber: number;
  timestamp: string;
  _cursor: number;
};

export type Pagination = {
  range: number;
  page: number;
};
