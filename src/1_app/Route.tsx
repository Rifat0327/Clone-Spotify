import { createBrowserRouter } from "react-router";
import BasePage from "@/2_pages/Basepage";
import MainContent from "@/3_widgets/MainContent";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: BasePage,
    children: [{ index: true, Component:  MainContent}],
  },
]);
