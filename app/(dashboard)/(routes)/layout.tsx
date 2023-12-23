import CheckConnected from "@/components/checkConnected";
import Navbar from "@/components/navbar";
import SidebarNav from "@/components/sidebar-nav";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = async ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <CheckConnected />
      <div className="flex flex-col min-h-screen">
        <div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
          <aside className="fixed z-30 hidden w-full h-full -ml-2 overflow-y-auto border-r shrink-0 md:sticky md:block">
            <SidebarNav className="p-1" />
          </aside>
          <main className="flex flex-col w-full overflow-hidden">
            <Navbar />
            <div className="flex-1 px-4">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
