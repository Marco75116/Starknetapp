"use client";
import { useAccount } from "@starknet-react/core";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const CheckConnected = () => {
  const { isConnected } = useAccount();
  const router = useRouter();
  useEffect(() => {
    isConnected ? router.push("/overview") : router.push("/sign-in");
  }, [isConnected]);

  return <div></div>;
};

export default CheckConnected;
