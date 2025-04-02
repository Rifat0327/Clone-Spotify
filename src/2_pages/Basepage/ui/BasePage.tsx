import Header from "@/3_widgets/header";
import MobileNavbar from "@/3_widgets/mobileNavbar/ui/MobileNavbar";
import Sidebar from "@/3_widgets/sidebar";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router";

function BasePage() {
  const isTablet = useMediaQuery({
    query: "(max-width: 991.98px)",
  });

  return (
    <div className="container h-[100vh] pb-5 dashboard-grid grid grid-cols-[minmax(40px,1fr)_2.4fr] gap-5 grid-rows-[auto_1fr_auto]">
      {isTablet && <MobileNavbar />}
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default BasePage;
