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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function StarknetProvider({ children }: { children: ReactNode }) {
  const { connectors } = useInjectedConnectors({
    recommended: [argent(), braavos()],
    includeRecommended: "onlyIfNoConnectors",
    order: "random",
  });

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StarknetConfig
        chains={[goerli]}
        provider={publicProvider()}
        connectors={connectors}
        explorer={voyager}
      >
        <TooltipProvider>{children}</TooltipProvider>
      </StarknetConfig>
    </QueryClientProvider>
  );
}
