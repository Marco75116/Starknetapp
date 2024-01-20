import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useTokensState from "@/lib/stores/tokens.store";
import useSearchParametersState from "@/lib/stores/tokensSearchParameters.store";
import React from "react";

type FooterTableProps = {};

const FooterTable = ({}: FooterTableProps) => {
  const { pagination, setPagination } = useSearchParametersState();
  const { count } = useTokensState();

  return (
    <div className="flex items-center justify-end py-4 space-x-2">
      <div className="flex items-center space-x-2">
        <p className="text-sm font-medium">Rows per page</p>
        <Select
          value={`${pagination.range}`}
          onValueChange={(value) => {
            setPagination({ page: 0, range: Number(value) });
          }}
        >
          <SelectTrigger className="h-8 w-[70px]">
            <SelectValue placeholder={pagination.range} />
          </SelectTrigger>
          <SelectContent side="top">
            {[5, 10, 20, 50].map((pageSize) => (
              <SelectItem key={pageSize} value={`${pageSize}`}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex w-[100px] items-center justify-center text-sm font-medium">
        Page {count ? pagination.page / pagination.range + 1 : 0} of{" "}
        {Math.ceil(count / pagination.range)}
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => {
          setPagination({
            ...pagination,
            page: pagination.page - pagination.range,
          });
        }}
        disabled={pagination.page === 0}
      >
        Previous
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => {
          setPagination({
            ...pagination,
            page: pagination.page + pagination.range,
          });
        }}
        disabled={pagination.page + pagination.range >= count}
      >
        Next
      </Button>
    </div>
  );
};

export default FooterTable;
