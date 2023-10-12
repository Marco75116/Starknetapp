import SidebarNav from "@/components/sidebar-nav";
import { dashboardConfig } from "@/lib/configs/global.config";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = async ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed z-30 hidden w-full h-full -ml-2 overflow-y-auto border-r shrink-0 md:sticky md:block">
          <div className="py-2 pr-6 lg:py-2">
            <SidebarNav className="p-1" />
          </div>
        </aside>
        <main className="flex flex-col w-full overflow-hidden">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
