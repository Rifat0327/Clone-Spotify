import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";
import "./styles/index.css";
import { router } from "./Route.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
