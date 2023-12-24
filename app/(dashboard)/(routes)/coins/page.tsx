import HeaderPage from "@/components/componentsPages/HeaderPage";
import AccountForm from "@/components/form-account";

import React from "react";

const CoinPage = () => {
  return (
    <div>
      <HeaderPage title="Coin" desc="Configure & Launch your cryptocurrency." />
      <div className="lg:w-[50%]">
        <AccountForm />
      </div>
    </div>
  );
};

export default CoinPage;
