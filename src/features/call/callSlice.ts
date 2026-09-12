import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CallState } from "./call.types";
import { initialCallState } from "./call.types";

const callSlice = createSlice({
  name: "call",
  initialState: initialCallState,
  reducers: {
    startCall(state: CallState, action: PayloadAction<string>) {
      state.activeCall = {
        id: crypto.randomUUID(),
        roomId: action.payload,
        type: "audio",
        status: "active",
        callerId: "user",
        calleeId: "other",
        startedAt: new Date().toISOString(),
      };
      state.isRinging = false;
    },
    endCall(state: CallState) {
      state.activeCall = null;
      state.isRinging = false;
    },
    setRinging(state: CallState, action: PayloadAction<boolean>) {
      state.isRinging = action.payload;
    },
    setLoading(state: CallState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state: CallState, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { startCall, endCall, setRinging, setLoading, setError } =
  callSlice.actions;
export default callSlice.reducer;
