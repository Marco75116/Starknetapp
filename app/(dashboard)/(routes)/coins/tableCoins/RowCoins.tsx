"use client";
import { TableCell, TableRow } from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { copyToClipboard, toMilli } from "@/lib/helpers/global.helper";
import { Token } from "@/lib/types/global.type";
import { Copy } from "lucide-react";
import moment from "moment";
import React, { useMemo } from "react";

type RowCoinsProps = {
  token: Token;
};

const RowCoins = ({ token }: RowCoinsProps) => {
  const { toast } = useToast();

  const timeStampCell = useMemo(() => {
    const timestamp = Date.parse(token.timestamp);

    const date = moment(timestamp).format("YYYY-MM-DD");
    const boolDisplay = moment().valueOf() - timestamp < toMilli(86400 * 5);
    const relativeTime = moment(date).fromNow();

    return boolDisplay ? relativeTime : date;
  }, [token]);

  const tokenAddressCell = useMemo(() => {
    const address = token.tokenaddress;
    const addressFormatted = address?.slice(0, 6) + "..." + address?.slice(-4);

    return (
      <span className="flex flex-row gap-2">
        {addressFormatted}
        <Copy
          className="cursor-pointer hover:text-uncx-grad-green-a"
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
      </span>
    );
  }, [token]);

  return (
    <TableRow>
      <TableCell>{timeStampCell}</TableCell>
      <TableCell>{token.name}</TableCell>
      <TableCell>{tokenAddressCell}</TableCell>
    </TableRow>
  );
};

export default RowCoins;
