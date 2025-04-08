import { Header } from "@/3_widgets/header";
import MobileNavbar from "@/3_widgets/mobileNavbar/ui/MobileNavbar";
import SidebarLayout from "@/3_widgets/sidebar";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router";

function BasePage() {
  const isMobile = useMediaQuery({
    query: "(max-width: 500.98px)",
  });

  return (
    <div className="container max-sm:h-[calc(100vh-60px)] h-[100vh] pb-5 max-sm:pb-12 dashboard-grid grid grid-cols-[minmax(40px,1fr)_2.4fr] max-lg:gap-3 gap-5 grid-rows-[auto_1fr_auto] max-md:grid-cols-[auto_1fr] max-sm:grid-cols-1">
      <Header />
      {isMobile ? <MobileNavbar /> : <SidebarLayout />}
      <Outlet />
    </div>
  );
}

export default BasePage;
