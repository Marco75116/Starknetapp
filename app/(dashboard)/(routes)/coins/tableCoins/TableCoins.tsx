"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { useAccount } from "@starknet-react/core";
import RowCoins from "./RowCoins";
import FooterTable from "./FooterTable";
import useSearchParametersState from "@/lib/stores/tokensSearchParameters.store";
import useTokensState from "@/lib/stores/tokens.store";
import { useTokens } from "@/lib/hooks/useTokens";

const TableCoins = () => {
  const { address } = useAccount();

  const { tokens, inititalLoding } = useTokensState();
  const { pagination } = useSearchParametersState();

  useTokens(address, pagination);

  return (
    <Card>
      <CardHeader>
        <CardTitle>List Coins</CardTitle>
        <CardDescription>Manage your coins</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date Creation</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Address</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {!inititalLoding &&
              (tokens.length !== 0 ? (
                tokens.map((token, i) => {
                  return <RowCoins key={i} token={token} />;
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <FooterTable />
      </CardContent>
    </Card>
  );
};

export default TableCoins;
