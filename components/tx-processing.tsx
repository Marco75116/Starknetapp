"use client";
import React from "react";
import { Badge } from "./ui/badge";
import useProcessTxState from "@/lib/stores/trasaction.store";
import { Loader2 } from "lucide-react";

const TxProcessing = () => {
  const { isLoading, isPending } = useProcessTxState();

  if (isPending) {
    return (
      <Badge className="m-1">
        Send Trasaction &nbsp;<div className="animate-bounce">...</div>
      </Badge>
    );
  }
  if (isLoading) {
    return (
      <Badge className="m-1">
        Pending trasaction &nbsp; <Loader2 className="animate-spin" />
      </Badge>
    );
  }
};

export default TxProcessing;
