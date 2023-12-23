"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { HelpCircle } from "lucide-react";
import { dashboardConfig } from "@/lib/configs/global.config";
import Image from "next/image";
import UncxLogo from "@/assets/logos/starknetminter/starknetMinterlogoResize.svg";
import useSheetState from "@/lib/stores/global.store";

type SidebarNavProps = {
  className: string;
};

const SidebarNav = ({ className, ...props }: SidebarNavProps) => {
  const pathname = usePathname();
  const { onClose } = useSheetState();

  const items = dashboardConfig;

  if (!items?.length) return null;

  return (
    <div className="py-2 pl-4 pr-4 md:pl-6 lg:py-2">
      <div className={cn("flex w-full flex-col gap-2", className)} {...props}>
        <Image
          src={UncxLogo}
          alt="UNCX Logo"
          className="flex self-center pb-2 grayscale-1"
          width={140}
          height={100}
        />
        {items.map((item, index) => {
          const Icon = item.icon || HelpCircle;

          return item.href ? (
            <Link
              aria-label={item.title}
              key={index}
              href={item.href}
              target={item.external ? "_blank" : ""}
              rel={item.external ? "noreferrer" : ""}
              onClick={onClose}
            >
              <span
                className={cn(
                  "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-muted hover:text-foreground",
                  pathname === item.href
                    ? "bg-muted font-medium text-foreground"
                    : "text-muted-foreground",
                  item.disabled && "pointer-events-none opacity-60"
                )}
              >
                <Icon className="w-4 h-4 mr-2" aria-hidden="true" />
                <span>{item.title}</span>
              </span>
            </Link>
          ) : (
            <span
              key={index}
              className="flex items-center w-full p-2 rounded-md cursor-not-allowed text-muted-foreground hover:underline"
            >
              {item.title}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarNav;
