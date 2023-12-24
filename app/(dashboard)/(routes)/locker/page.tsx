import HeaderPage from "@/components/componentsPages/HeaderPage";
import AccountForm from "@/components/form-account";

import React from "react";

const LockerPage = () => {
  return (
    <div>
      <HeaderPage
        title="Locker"
        desc="Lock your LP token to make it reliable for investors."
      />
      <div className="lg:w-[50%]">
        <AccountForm />
      </div>
    </div>
  );
};

export default LockerPage;
