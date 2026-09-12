export interface SocketMessage {
  id: string;
  content: string;
  senderId: string;
  senderName: string;
  timestamp: Date;
  read: boolean;
}

export interface TypingEvent {
  roomId: string;
  userId: string;
  isTyping: boolean;
}

export interface JoinRoomEvent {
  roomId: string;
  userId: string;
}

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
