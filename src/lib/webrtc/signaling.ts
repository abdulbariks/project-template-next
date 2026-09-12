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
