"use client";
import HeaderPage from "@/components/componentsPages/HeaderPage";
import React, { useState } from "react";
import moment from "moment";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Copy, Eye, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { copyToClipboard, toMilli } from "@/lib/helpers/global.helper";
import { KeyToken } from "@/lib/types/global.type";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DialogeCreateKey from "./DialogeCreateKey";

const ApiKeysPage = () => {
  const { toast } = useToast();
  const [mockApiKeys, setMockApiKeys] = useState<KeyToken[]>([
    {
      appName: "uncxAdmin",
      apiKeyToken: "TZ58J9TSPERVDDTRHQSRF1IAAEUAVPEUK4",
      dateCreated: Date.now() - 15 * 84600 * 1000,
    },
  ]);

  return (
    <div className="space-y-6">
      <HeaderPage
        title="API Keys"
        desc="Create an API-Key Token which you can then use with all your API requests."
      />
      <div className="lg:w-[70%] space-y-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle></CardTitle>
            <DialogeCreateKey
              setMockApiKeys={setMockApiKeys}
              disable={mockApiKeys.length > 2}
            />
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>
                {mockApiKeys.length} key added (out of 3 max limit)
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">App Name</TableHead>
                  <TableHead>API Key Token</TableHead>
                  <TableHead> Date Created</TableHead>
                  <TableHead> API Statistics</TableHead>
                  <TableHead className="text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockApiKeys.map((keyInfos: KeyToken) => {
                  const date = moment(keyInfos.dateCreated).format(
                    "YYYY-MM-DD"
                  );
                  const boolDisplay =
                    moment().valueOf() - keyInfos.dateCreated <
                    toMilli(86400 * 5);
                  const relativeTime = moment(date).fromNow();
                  const dateCreatedCell = boolDisplay ? relativeTime : date;
                  return (
                    <>
                      <TableRow>
                        <TableCell className="font-medium">
                          {keyInfos.appName}
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-row items-center gap-2">
                            <span>{keyInfos.apiKeyToken}</span>
                            <Tooltip>
                              <TooltipTrigger>
                                <Copy
                                  className="cursor-pointer hover:text-uncx-grad-green-a"
                                  onClick={() => {
                                    copyToClipboard(keyInfos.apiKeyToken)
                                      .then(() => {
                                        toast({
                                          variant: "success",
                                          description: "Wallet address copied.",
                                        });
                                      })
                                      .catch(() => {
                                        toast({
                                          variant: "destructive",
                                          description:
                                            "Error while copying address.",
                                        });
                                      });
                                  }}
                                />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Copy Api Key</p>
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        </TableCell>
                        <TableCell>{dateCreatedCell}</TableCell>
                        <TableCell>
                          <Button variant={"outline"} className="space-x-1">
                            <span>View</span> <Eye />
                          </Button>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant={"destructive"}
                            onClick={() => {
                              setMockApiKeys((prev) =>
                                prev.filter(
                                  (key) => key.appName !== keyInfos.appName
                                )
                              );
                            }}
                          >
                            <Trash2 />
                          </Button>
                        </TableCell>
                      </TableRow>
                    </>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ApiKeysPage;
