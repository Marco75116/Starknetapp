import HeaderPage from "@/components/componentsPages/HeaderPage";
import AccountForm from "@/components/form-account";

import React from "react";

const AccountPage = () => {
  return (
    <div>
      <HeaderPage title="Account" desc="Manage your account informations." />
      <div className="lg:w-[50%]">
        <AccountForm />
      </div>
    </div>
  );
};

export default AccountPage;
