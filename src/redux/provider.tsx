"use client";

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/authSlice";
import chatReducer from "@/features/chat/chatSlice";
import callReducer from "@/features/call/callSlice";
import { baseApi } from "./services/baseApi";
import { Provider } from "react-redux";
import type { ReactNode } from "react";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      chat: chatReducer,
      call: callReducer,
      [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["socket/connect", "socket/disconnect"],
        },
      }).concat(baseApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export function StoreProvider({ children }: { children: ReactNode }) {
  const store = makeStore();
  return <Provider store={store}>{children}</Provider>;
}
