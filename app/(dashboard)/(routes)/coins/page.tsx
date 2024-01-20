import HeaderPage from "@/components/componentsPages/HeaderPage";
import AccountForm from "@/components/form-account";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import React from "react";
import TableCoins from "./tableCoins/TableCoins";

const CoinPage = () => {
  return (
    <div>
      <HeaderPage title="Coin" desc="Configure & Launch your cryptocurrency." />
      <div className="lg:w-[50%] mb-6">
        <Card>
          <CardContent className="pb-0">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className="border-b-0 ">
                <AccordionTrigger>
                  <span className="flex flex-row gap-2">
                    Create <Plus />
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <AccountForm />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Separator className="my-2" />

        <TableCoins />
      </div>
    </div>
  );
};

export default CoinPage;
