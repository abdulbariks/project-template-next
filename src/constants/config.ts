export const APP_CONFIG = {
  name: "Next.js App",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001",
  socketUrl: process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:3002",
} as const;
