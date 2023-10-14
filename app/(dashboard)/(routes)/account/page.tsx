import HeaderPage from "@/components/componentsPages/HeaderPage";
import AutoForm, { AutoFormSubmit } from "@/components/ui/auto-form";

import React from "react";

import z from "zod";

const formSchema = z.object({});
const AccountForm = () => {
  return (
    <AutoForm formSchema={formSchema}>
      <AutoFormSubmit> send now</AutoFormSubmit>
    </AutoForm>
  );
};

const AccountPage = () => {
  return (
    <div>
      <HeaderPage title="Account" desc="Manage your account settings.ssss" />
      <AccountForm />
    </div>
  );
};

export default AccountPage;
