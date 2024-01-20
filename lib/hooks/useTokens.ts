import { useEffect, useState } from "react";
import { Pagination, Token } from "../types/global.type";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../clients/supabase.client";
import {
  addLeadingZero,
  filterPagination,
  sortTokens,
} from "../helpers/global.helper";
import useTokensState from "../stores/tokens.store";

export const useTokens = (
  owner: string | undefined,
  pagination: Pagination
) => {
  const { setCount, setTokens, setInitialLoding } = useTokensState();

  const {
    isLoading,
    isError,
    data: resData,
    error,
  } = useQuery({
    queryKey: ["getTokens", owner],
    queryFn: async () => {
      const response = await supabase
        .from("tokens")
        .select("*", { count: "exact", head: false })
        .eq("owner", addLeadingZero(owner));
      const allTokens = response.data as Token[];

      return { allTokens, count: response.count || 0 };
    },
    enabled: owner !== undefined,
  });

  useEffect(() => {
    setInitialLoding(isLoading);
    if (!isLoading && resData) {
      const tokenDisplayed = resData.allTokens
        .sort((a, b) => {
          return sortTokens(a, b);
        })
        .filter((token, index) => {
          return filterPagination(index, pagination);
        });

      setTokens(tokenDisplayed);
      setCount(resData.count);
    }
  }, [resData, isLoading, pagination]);
};
