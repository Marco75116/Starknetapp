"use client";
import AutoForm, { AutoFormSubmit } from "./ui/auto-form";
import * as z from "zod";
import stealthAbi from "../lib/constants/abis/tokenMinter.json";
import {
  useAccount,
  useContract,
  useContractWrite,
  useNetwork,
} from "@starknet-react/core";
import { useEffect, useMemo, useState } from "react";

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
  const { address } = useAccount();
  const { chain } = useNetwork();
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

  const { writeAsync, data, isPending } = useContractWrite({
    calls,
  });

  useEffect(() => {
    if (constructor.length === 3) {
      writeAsync();
    }
  }, [constructor]);

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
