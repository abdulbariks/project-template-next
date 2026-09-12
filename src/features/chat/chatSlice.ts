import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ChatState } from "./chat.types";
import { initialChatState } from "./chat.types";

const chatSlice = createSlice({
  name: "chat",
  initialState: initialChatState,
  reducers: {
    setActiveRoom(state: ChatState, action: PayloadAction<string>) {
      state.activeRoomId = action.payload;
    },
    addRoom(state: ChatState, action: PayloadAction<string>) {
      if (!state.rooms.includes(action.payload)) {
        state.rooms.push(action.payload);
      }
    },
    setLoading(state: ChatState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state: ChatState, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setActiveRoom, addRoom, setLoading, setError } =
  chatSlice.actions;
export default chatSlice.reducer;
