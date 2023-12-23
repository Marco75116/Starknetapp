"use client";
import { ReactNode } from "react";

import { sepolia, devnet, goerli, mainnet } from "@starknet-react/chains";

import {
  StarknetConfig,
  argent,
  braavos,
  publicProvider,
  useInjectedConnectors,
  voyager,
} from "@starknet-react/core";
import { TooltipProvider } from "@/components/ui/tooltip";

export function StarknetProvider({ children }: { children: ReactNode }) {
  const { connectors } = useInjectedConnectors({
    recommended: [argent(), braavos()],
    includeRecommended: "onlyIfNoConnectors",
    order: "random",
  });

  return (
    <StarknetConfig
      chains={[mainnet]}
      provider={publicProvider()}
      connectors={connectors}
      explorer={voyager}
    >
      <TooltipProvider>{children}</TooltipProvider>
    </StarknetConfig>
  );
}
