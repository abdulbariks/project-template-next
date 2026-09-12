import { useSocketContext } from "@/lib/socket/socket";

export function useSocket() {
  return useSocketContext();
}
