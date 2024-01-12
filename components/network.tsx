"use client";
import React, { useMemo } from "react";
import { Badge } from "./ui/badge";
import { useNetwork } from "@starknet-react/core";

const NetworkBadge = () => {
  const { chain } = useNetwork();
  const isGoerli = useMemo(() => {
    return chain.network === "goerli";
  }, [chain]);
  return (
    <Badge className="m-1" variant={isGoerli ? "default" : "destructive"}>
      {isGoerli ? chain.network : "You are on the wrong network."}
    </Badge>
  );
};

export default NetworkBadge;
