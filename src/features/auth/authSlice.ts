import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState, AuthUser } from "./auth.types";
import { initialAuthState } from "./auth.types";

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setCredentials(
      state: AuthState,
      action: PayloadAction<{ user: AuthUser; token: string }>
    ) {
      state.user = action.payload.user as Record<string, unknown>;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.isLoading = false;
    },
    clearCredentials(state: AuthState) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.isLoading = false;
      state.error = null;
    },
    setLoading(state: AuthState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state: AuthState, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setCredentials, clearCredentials, setLoading, setError } =
  authSlice.actions;
export default authSlice.reducer;
