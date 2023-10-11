import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const LendingPage = () => {
  return (
    <div>
      Landing page (unprotected)
      <div>
        <Link href="/sign-in">
          <Button>Sign-In</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Sign-Up</Button>
        </Link>
        <UserButton afterSignOutUrl="/" />
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
