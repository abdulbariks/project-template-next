export interface WebRTCConfig {
  iceServers?: RTCIceServer[];
}

export interface WebRTCState {
  isConnected: boolean;
  isCallActive: boolean;
  localStream: MediaStream | null;
  remoteStream: MediaStream | null;
  error: Error | null;
}
