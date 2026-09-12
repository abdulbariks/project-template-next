import { baseApi } from "../baseApi";
import type { ChatRoom, ChatMessage } from "@/features/chat/chat.types";

export const chatApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRooms: builder.query<ChatRoom[], void>({
      query: () => "/chat/rooms",
      providesTags: (_result, _error, _arg) => [{ type: "Chat" as const }],
    }),
    getMessages: builder.query<ChatMessage[], { roomId: string }>({
      query: ({ roomId }) => `/chat/rooms/${roomId}/messages`,
      providesTags: (_result, _error, _arg) => [{ type: "Chat" as const }],
    }),
    sendMessage: builder.mutation<ChatMessage, { roomId: string; content: string }>({
      query: ({ roomId, content }) => ({
        url: `/chat/rooms/${roomId}/messages`,
        method: "POST",
        body: { content },
      }),
      invalidatesTags: (_result, _error, _arg) => [{ type: "Chat" as const }],
    }),
    createRoom: builder.mutation<ChatRoom, { name: string; participants: string[] }>({
      query: (data) => ({
        url: "/chat/rooms",
        method: "POST",
        body: data,
      }),
      invalidatesTags: (_result, _error, _arg) => [{ type: "Chat" as const }],
    }),
  }),
});

export const {
  useGetRoomsQuery,
  useGetMessagesQuery,
  useSendMessageMutation,
  useCreateRoomMutation,
} = chatApi;
