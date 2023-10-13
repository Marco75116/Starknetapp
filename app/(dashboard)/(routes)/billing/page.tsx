import HeaderPage from "@/components/componentsPages/HeaderPage";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { storeSubscriptionPlans } from "@/lib/configs/global.config";
import { formatNumber } from "@/lib/helpers/global.helper";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

const BillingPage = () => {
  return (
    <div className="space-y-6">
      <HeaderPage
        title="Billing"
        desc="Select the plan that best suits you or contact us for a custom option."
      />
      <section
        id="billing-info"
        aria-labelledby="billing-info-heading"
        className="space-y-5"
      >
        <h2 className="text-xl font-semibold sm:text-2xl">Billing info</h2>
        <Card className="grid gap-4 p-6">
          <h3 className="text-lg font-semibold sm:text-xl">Starter</h3>
          <p className="text-sm text-muted-foreground">
            Upgrade to get more features.
          </p>
        </Card>
      </section>

      <section
        id="subscription-plans"
        aria-labelledby="subscription-plans-heading"
        className="space-y-5 pb-2.5"
      >
        <h2 className="text-xl font-semibold sm:text-2xl">
          Subscription plans
        </h2>
        <div className="grid gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {storeSubscriptionPlans.map((plan, i) => (
            <Card
              key={plan.name}
              className={cn(
                "flex flex-col",
                i === storeSubscriptionPlans.length - 1 &&
                  "lg:col-span-2 xl:col-span-1",
                i === 1 && "border-primary shadow-md"
              )}
            >
              <CardHeader>
                <CardTitle className="line-clamp-1">{plan.name}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid flex-1 gap-6 place-items-start">
                <div className="text-3xl font-bold">
                  ${formatNumber(plan.price)}
                  <span className="text-sm font-normal text-muted-foreground">
                    /month
                  </span>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check className="w-4 h-4" aria-hidden="true" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-4">
                {plan.id !== "starter" ? (
                  <Button className={cn("w-full")}>
                    Subscribe
                    <span className="sr-only">Get started</span>
                  </Button>
                ) : (
                  <Button variant={"outline"} className={cn("w-full")}>
                    {" "}
                    Current Plan
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BillingPage;
