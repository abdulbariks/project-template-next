export interface PeerConnectionConfig {
  iceServers?: RTCIceServer[];
}

export const createPeerConnection = (
  config?: PeerConnectionConfig
): RTCPeerConnection => {
  const iceServers: RTCIceServer[] = config?.iceServers || [
    { urls: "stun:stun.l.google.com:19302" },
    { urls: "stun:stun1.l.google.com:19302" },
  ];
  return new RTCPeerConnection({ iceServers });
};

export interface SignalingOffer {
  sdp: string;
  type: "offer";
}

export interface SignalingAnswer {
  sdp: string;
  type: "answer";
}

export interface SignalingIceCandidate {
  candidate: string;
  sdpMid: string;
  sdpMLineIndex: number;
}

export interface RoomParticipant {
  userId: string;
  name: string;
  avatar?: string;
}
