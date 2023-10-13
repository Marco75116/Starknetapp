import React from "react";

type HeaderPageProps = {
  title: string;
  desc: string;
};
const HeaderPage = ({ title, desc }: HeaderPageProps) => {
  return (
    <div>
      <h3 className="text-3xl font-medium">{title}</h3>
      <p className="text-lg text-muted-foreground">{desc}</p>
    </div>
  );
};

export default HeaderPage;
