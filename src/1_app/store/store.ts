
import { switchContentFromHeader } from "@/3_widgets/header";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    switchContentFromHeader,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

