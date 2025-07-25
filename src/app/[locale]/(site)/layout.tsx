import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const SiteLayout = async ({ children }: { children: React.ReactNode }) => {
  // const cookieStore = await cookies();
  // const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";
  return (
    <SidebarProvider>
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="m-4 p-4 rounded-lg bg-background">{children}</div>
      </div>
    </SidebarProvider>
  );
};

export default SiteLayout;
