import { KeyRound, Receipt, Settings, User2, User2Icon } from "lucide-react";
import { NavItem } from "../types/global.type";

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
