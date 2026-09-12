"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { io, type Socket as SocketType } from "socket.io-client";
import { SocketEvents } from "./socket.events";
import type { SocketMessage, TypingEvent, JoinRoomEvent } from "./socket.types";

interface SocketContextValue {
  socket: SocketType | null;
  isConnected: boolean;
}

const SocketContext = createContext<SocketContextValue>({
  socket: null,
  isConnected: false,
});

export function SocketProvider({ children }: { children: ReactNode }) {
  const [socket, setSocket] = useState<SocketType | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const s = io(process.env.NEXT_PUBLIC_SOCKET_URL || "", {
      auth: { token },
      transports: ["websocket", "polling"],
    });

    s.on(SocketEvents.CONNECT, () => setIsConnected(true));
    s.on(SocketEvents.DISCONNECT, () => setIsConnected(false));
    s.on(SocketEvents.CONNECT_ERROR, () => {
      console.error("Socket connection error");
    });

    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket, isConnected }}>
      {children}
    </SocketContext.Provider>
  );
}

export const useSocketContext = () => useContext(SocketContext);
