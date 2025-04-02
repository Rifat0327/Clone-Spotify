import MainContent from "@/3_widgets/MainContent";
import Sidebar from "@/3_widgets/sidebar";
import React from "react";
import { useMediaQuery } from "react-responsive";

const Home: React.FC = () => {
  const isNotTablet = useMediaQuery({
    query: "(min-width: 992.98px)",
  });

  return (
    <div className="grid grid-cols-2 gap-8">
      {isNotTablet && <Sidebar />}
      <MainContent />
    </div>
  );
};

export default Home;
