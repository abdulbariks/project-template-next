import { Send } from "lucide-react";
import { useSocket } from "@/hooks/useSocket";
import { useState, useEffect } from "react";
import { SocketMessage } from "@/lib/socket/socket.types";

export function ChatWindow({ roomId }: { roomId: string }) {
  const { socket, isConnected } = useSocket();
  const [messages, setMessages] = useState<SocketMessage[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!socket) return;
    const handleMessage = (msg: SocketMessage) => {
      setMessages((prev) => [...prev, msg]);
    };
    socket.on("receive_message", handleMessage);
    return () => {
      socket.off("receive_message", handleMessage);
    };
  }, [socket]);

  const sendMessage = () => {
    if (!input.trim()) return;
    socket?.emit("send_message", { roomId, content: input });
    setInput("");
  };

  return (
    <div className="flex flex-col h-full">
      <div className="border-b p-2">
        <span className="font-medium">Room: {roomId}</span>
        <span
          className={`ml-2 text-xs ${
            isConnected ? "text-green-500" : "text-red-500"
          }`}
        >
          {isConnected ? "Connected" : "Disconnected"}
        </span>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg) => (
          <div key={msg.id} className="text-sm">
            <strong>{msg.senderName}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <div className="border-t p-2 flex gap-2">
        <input
          className="flex-1 rounded border px-3 py-2 text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Type a message..."
        />
        <button
          onClick={sendMessage}
          className="rounded bg-primary px-4 py-2 text-sm text-primary-foreground"
        >
          Send
        </button>
      </div>
    </div>
  );
}
