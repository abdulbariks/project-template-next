import { SocketMessage } from "@/lib/socket/socket.types";

interface MessageListProps {
  messages: SocketMessage[];
}

export function MessageList({ messages }: MessageListProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-2">
      {messages.map((msg) => (
        <div key={msg.id} className={`text-sm ${msg.senderId ? "text-left" : "text-right"}`}>
          <strong>{msg.senderName}:</strong> {msg.content}
        </div>
      ))}
    </div>
  );
}
