"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SidebarNav from "./sidebar-nav";
import useSheetState from "@/lib/stores/global.store";

export const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { open, setOpen } = useSheetState();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Sheet
      open={open}
      onOpenChange={() => {
        setOpen(!open);
      }}
    >
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <SidebarNav className="" />
      </SheetContent>
    </Sheet>
  );
};
