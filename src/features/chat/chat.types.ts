export interface ChatState {
  rooms: string[];
  activeRoomId: string | null;
  participants: string[];
  isLoading: boolean;
  error: string | null;
}

export const initialChatState: ChatState = {
  rooms: [],
  activeRoomId: null,
  participants: [],
  isLoading: false,
  error: null,
};

export interface ChatRoom {
  id: string;
  name: string;
  participants: string[];
  lastMessageAt: string;
  unreadCount: number;
}

export interface ChatMessage {
  id: string;
  roomId: string;
  content: string;
  senderId: string;
  senderName: string;
  timestamp: string;
  read: boolean;
}
