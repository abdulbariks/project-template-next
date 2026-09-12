export const createPeerConnection = (config?: RTCConfiguration) => {
  const iceServers: RTCIceServer[] = config?.iceServers || [
    { urls: "stun:stun.l.google.com:19302" },
    { urls: "stun:stun1.l.google.com:19302" },
  ];

  return new RTCPeerConnection({ iceServers });
};

export const getLocalMediaStream = async (
  video = true,
  audio = true
): Promise<MediaStream> => {
  const constraints: MediaStreamConstraints = { audio, video };
  return await navigator.mediaDevices.getUserMedia(constraints);
};

export const stopMediaStream = (stream: MediaStream) => {
  stream.getTracks().forEach((track: MediaStreamTrack) => track.stop());
};
