export interface CallState {
  activeCall: Call | null;
  incomingCall: Call | null;
  isRinging: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface Call {
  id: string;
  roomId: string;
  type: "audio" | "video";
  status: "pending" | "active" | "ended";
  callerId: string;
  calleeId: string;
  startedAt?: string;
  endedAt?: string;
}

export const initialCallState: CallState = {
  activeCall: null,
  incomingCall: null,
  isRinging: false,
  isLoading: false,
  error: null,
};
