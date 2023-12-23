import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const LendingPage = () => {
  return (
    <div>
      Landing page (unprotected)
      <div>
        <Link href="/sign-in">
          <Button>Connect Wallet</Button>
        </Link>
        <Link href="overview">
          <Button>Go to APP</Button>
        </Link>
        <br />
        <br />
      </div>
    </div>
  );
};

export default LendingPage;
