import { useState, useRef, useCallback, useEffect } from "react";
import { getLocalMediaStream, stopMediaStream } from "@/lib/webrtc/media";
import { createPeerConnection } from "@/lib/webrtc/peerConnection";

export function useWebRTC(roomId: string) {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const localStreamRef = useRef<MediaStream | null>(null);
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);

  const startCall = useCallback(async () => {
    try {
      const stream = await getLocalMediaStream(true, true);
      localStreamRef.current = stream;
      peerConnectionRef.current = createPeerConnection();
      stream.getTracks().forEach((track: MediaStreamTrack) => {
        peerConnectionRef.current?.addTrack(track, stream);
      });
      setIsCallActive(true);
    } catch (error) {
      console.error("Failed to start call:", error);
    }
  }, []);

  const endCall = useCallback(() => {
    stopMediaStream(localStreamRef.current!);
    peerConnectionRef.current?.close();
    localStreamRef.current = null;
    peerConnectionRef.current = null;
    setIsCallActive(false);
  }, []);

  const toggleVideo = useCallback(() => {
    localStreamRef.current?.getVideoTracks().forEach((track) => {
      track.enabled = !track.enabled;
    });
    setIsVideoEnabled((prev) => !prev);
  }, []);

  const toggleAudio = useCallback(() => {
    localStreamRef.current?.getAudioTracks().forEach((track) => {
      track.enabled = !track.enabled;
    });
    setIsAudioEnabled((prev) => !prev);
  }, []);

  useEffect(() => {
    return () => {
      stopMediaStream(localStreamRef.current!);
      peerConnectionRef.current?.close();
    };
  }, []);

  return {
    isCallActive,
    isVideoEnabled,
    isAudioEnabled,
    startCall,
    endCall,
    toggleVideo,
    toggleAudio,
    localStream: localStreamRef.current,
  };
}
