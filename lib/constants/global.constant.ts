import { Lock, PiggyBank, Coins } from "lucide-react";

export const tools = [
  {
    label: "Create Coins",
    icon: Coins,
    color: "text-pink-700",
    href: "/coins",
    desc: "Embark on your DeFi adventure by minting your own cryptocurrency tokens. Unleash your creativity and take control of your digital assets.",
  },
  {
    label: "Locker",
    icon: Lock,
    href: "/locker",
    color: "text-violet-500",
    desc: "Secure your DeFi assets with confidence. Lock your LP token to make it reliable for investors.",
  },
  {
    label: "Stake",
    icon: PiggyBank,
    color: "text-pink-700",
    href: "/stake",
    desc: " Establish a staking pool that allows your currency holders to earn rewards, thereby helping to maintain and stabilize its value.",
  },
];
