import HeaderPage from "@/components/componentsPages/HeaderPage";
import React from "react";
import DeletionCard from "./DeletionCard";
import HandlingPassword from "./HandlingPassword";

const SettingsPage = () => {
  return (
    <div>
      <HeaderPage title="Settings" desc="" />
      <div className="lg:w-[50%] space-y-10">
        <HandlingPassword />
        <DeletionCard />
      </div>
    </div>
  );
};

export default SettingsPage;
