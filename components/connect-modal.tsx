"use client";
import React from "react";

import { useConnect, Connector } from "@starknet-react/core";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ConnectModal() {
  const { connect, connectors } = useConnect();
  return (
    <div className="flex justify-center w-full">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default">Connect Wallet</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>Choose a Wallet</DialogHeader>
          <div className="flex flex-col gap-4">
            {connectors.map((connector: Connector) => (
              <Button
                key={connector.id}
                onClick={() => connect({ connector })}
                disabled={!connector.available()}
              >
                {connector.icon.dark && (
                  <Image
                    src={connector.icon.dark}
                    className="mr-2 "
                    height={20}
                    width={20}
                    alt="logo wallet"
                  />
                )}
                {connector.name}
              </Button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
