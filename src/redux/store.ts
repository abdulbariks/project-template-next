import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/authSlice";
import chatReducer from "@/features/chat/chatSlice";
import callReducer from "@/features/call/callSlice";
import { baseApi } from "./services/baseApi";

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

export type RootState = ReturnType<ReturnType<typeof makeStore>["getState"]>;
export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];
