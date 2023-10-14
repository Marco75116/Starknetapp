"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

const DeletionCard = () => {
  const [disable, setDisable] = useState<boolean>(true);

  return (
    <Card className={`${!disable && "border-destructive"}`}>
      <CardHeader>
        <CardTitle>Delete Account</CardTitle>
        <CardDescription>
          Deleting your user account has consequences
        </CardDescription>
        <Separator />
      </CardHeader>

      <CardContent>
        <p>
          <div>
            <span className="text-lg font-bold">API Keys: </span>All API keys
            associated with your account will be permanently deleted. Any
            applications or services relying on these keys will lose access to
            the associated data.
          </div>
          <div>
            <span className="text-lg font-bold"> Data Loss: </span>
            All data stored in your account, including watchlists, transaction
            notes, private tags, and verified addresses ownership, will be
            permanently erased.
          </div>
          <div>
            <span className="text-lg font-bold">Recovery Impossible: </span>
            Once you confirm the deletion, recovery of the above data and API
            keys is not possible
          </div>
        </p>
      </CardContent>
      <CardFooter>
        <div className="flex items-center justify-between w-full">
          <div className="flex-1 gap-2 center">
            <Checkbox
              id="terms1"
              onClick={() => {
                setDisable((prev) => !prev);
              }}
            />
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Please confirm your understanding of these consequences before
              proceeding with account deletion.
            </label>
          </div>

          <Button variant={"destructive"} size={"lg"} disabled={disable}>
            Delete Account
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default DeletionCard;
