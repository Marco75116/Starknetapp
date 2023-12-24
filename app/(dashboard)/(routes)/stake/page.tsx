import HeaderPage from "@/components/componentsPages/HeaderPage";
import AccountForm from "@/components/form-account";

import React from "react";

const StakePage = () => {
  return (
    <div>
      <HeaderPage
        title="Stake"
        desc="  Establish a staking pool that allows your currency holders to earn rewards, thereby helping to maintain and stabilize its value."
      />
      <div className="lg:w-[50%]">
        <AccountForm />
      </div>
    </div>
  );
};

export default StakePage;
