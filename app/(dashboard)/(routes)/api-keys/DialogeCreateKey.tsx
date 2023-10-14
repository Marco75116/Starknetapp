import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { KeyToken } from "@/lib/types/global.type";
import { v4 as uuidv4 } from "uuid";

type DialogeCreateKeyProps = {
  setMockApiKeys: Function;
  disable: boolean;
};

const DialogeCreateKey = ({
  setMockApiKeys,
  disable,
}: DialogeCreateKeyProps) => {
  const [appName, setAppName] = useState<string>("");
  return (
    <AlertDialog>
      <AlertDialogTrigger disabled={disable}>
        <Button>
          <Plus /> Add
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Create a new Api Key</AlertDialogTitle>
        </AlertDialogHeader>
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-2">
          <Label className="text-lg">App Name</Label>
          <Input
            placeholder="Uncx"
            onChange={(e) => {
              setAppName(e.target.value);
            }}
          />
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={appName === ""}
            onClick={() => {
              setMockApiKeys((prev: KeyToken[]) => {
                return prev.concat({
                  appName: appName,
                  apiKeyToken: uuidv4(),
                  dateCreated: Date.now(),
                });
              });
              setAppName("");
            }}
          >
            Create
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DialogeCreateKey;
