const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-full">
      {/* navbar */}
      <div className="">{children}</div>
      {/* bottom */}
    </div>
  );
};

export default DashboardLayout;
