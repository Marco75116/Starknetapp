"use client";
import AutoForm, { AutoFormSubmit } from "./ui/auto-form";
import * as z from "zod";
import stealthAbi from "../lib/constants/abis/tokenMinter.json";
import {
  useAccount,
  useContract,
  useContractWrite,
  useWaitForTransaction,
} from "@starknet-react/core";
import { useEffect, useMemo, useState } from "react";
import useProcessTxState from "@/lib/stores/trasaction.store";
import { useToast } from "./ui/use-toast";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const formSchema = z.object({
  Name: z
    .string({
      required_error: "Name is required.",
    })
    .min(1, {
      message: "Username must be at least 1 characters.",
    }),
  Symbol: z
    .string({
      required_error: "Symbol is required.",
    })
    .min(1, {
      message: "Username must be at least 1 characters.",
    }),

  TotalSupply: z.coerce
    .number({
      invalid_type_error: "Favourite number must be a number.",
    })
    .min(1, {
      message: "Favourite number must be at least 1.",
    })
    .default(100000000000000),
});

const AccountForm = () => {
  const { toast } = useToast();
  const { setIsLoading, setIsPending } = useProcessTxState();
  const { address } = useAccount();
  const { contract } = useContract({
    address:
      "0x061a4c53f11e29716e4c0bb28192fa03b74346a3cfdf08fcef43148b92679887",
    abi: stealthAbi,
  });

  const [constructor, setConstructor] = useState<String[]>([]);

  const calls = useMemo(() => {
    if (!address || !contract) return [];
    return contract.populateTransaction["deploy_contract"]!(
      "0x0027ebb0f130f7ae8628c8604446b6be191b1803692d3baf2223e4942481aa5f",
      constructor.concat([address])
    );
  }, [contract, address, constructor]);

  const { writeAsync, data, isPending, isError } = useContractWrite({
    calls,
  });

  const {
    data: receipt,
    isLoading,
    isError: isFailTx,
    isSuccess,
    error,
  } = useWaitForTransaction({
    hash: data?.transaction_hash,
    watch: true,
    retry: true,
    refetchInterval: 2000,
  });

  useEffect(() => {
    if (constructor.length === 3) {
      writeAsync();
    }
  }, [constructor]);

  useEffect(() => {
    setIsLoading(isLoading);
    setIsPending(isPending);
  }, [isLoading, isPending]);

  useEffect(() => {
    if (isSuccess) {
      toast({
        variant: "success",
        description: (
          <div className="flex flex-row items-center justify-center">
            Transaction completed successfully. &nbsp;
            <Link
              href={`https://testnet.starkscan.co/tx/${data?.transaction_hash}`}
              target="_blank"
              className="flex flex-row items-center justify-center underline"
            >
              View Tx <ArrowUpRight />
            </Link>
          </div>
        ),
      });
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isFailTx) {
      toast({
        variant: "destructive",
        description: (
          <div className="flex flex-row items-center justify-center">
            Transaction failed. &nbsp;
            <Link
              href={`https://testnet.starkscan.co/tx/${data?.transaction_hash}`}
              target="_blank"
              className="flex flex-row items-center justify-center underline"
            >
              View Tx <ArrowUpRight />
            </Link>
          </div>
        ),
      });
    }
  }, [isFailTx]);

  return (
    <AutoForm
      onSubmit={(data) => {
        setConstructor([data.TotalSupply.toString(), data.Name, data.Symbol]);
      }}
      formSchema={formSchema}
      fieldConfig={{}}
    >
      <AutoFormSubmit>Launch</AutoFormSubmit>
    </AutoForm>
  );
};

export default AccountForm;
