"use client";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAccount, useBalance, useDisconnect } from "@starknet-react/core";
import { ArrowUpRight, Copy, Wallet2 } from "lucide-react";
import { useToast } from "./ui/use-toast";
import { copyToClipboard } from "@/lib/helpers/global.helper";
import Link from "next/link";
import { Label } from "./ui/label";

export function ProfilSheet() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  const addressFormatted = address?.slice(0, 6) + "..." + address?.slice(-4);
  const { toast } = useToast();
  const { isLoading, isError, error, data } = useBalance({
    address,
    watch: true,
  });

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          {addressFormatted} <Wallet2 className="ml-2" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Wallet</SheetTitle>
        </SheetHeader>

        <div className="grid gap-4 py-4">
          <div className="grid justify-center font-semibold">
            <div className="flex flex-row gap-2">
              {addressFormatted}
              <Copy
                className="cursor-pointer hover:opacity-70"
                onClick={() => {
                  copyToClipboard(address)
                    .then(() => {
                      toast({
                        variant: "success",
                        description: "Wallet address copied.",
                      });
                    })
                    .catch(() => {
                      toast({
                        variant: "destructive",
                        description: "Error while copying address.",
                      });
                    });
                }}
              />
              <Link
                href={`https://testnet.starkscan.co/`}
                target="_blank"
                className="cursor-pointer hover:opacity-70"
              >
                <ArrowUpRight />
              </Link>
            </div>
          </div>

          <div className="grid justify-center">
            {data?.formatted} {data?.symbol}
          </div>

          <div className="grid items-center justify-center grid-cols-3 mt-3 ">
            <Label htmlFor="name" className="col-span-2 text-left ">
              Funds you wallet in ETH
            </Label>
            <Button
              variant="secondary"
              className="col-span-1 hover:bg-primary hover:text-primary-foreground"
            >
              BUY
            </Button>
          </div>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button onClick={() => disconnect()}>Disconnect</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
