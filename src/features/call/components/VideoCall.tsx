import { Video, Phone } from "lucide-react";
import { useWebRTC } from "@/features/call/useWebRTC";
import { Button } from "@/components/ui/button";

interface VideoCallProps {
  roomId: string;
}

export function VideoCall({ roomId }: VideoCallProps) {
  const { isCallActive, startCall, endCall, toggleVideo, toggleAudio, localStream, isVideoEnabled, isAudioEnabled } = useWebRTC(roomId);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-video rounded-lg bg-black overflow-hidden">
        {isCallActive && localStream && (
          <video
            ref={(el) => { if (el) el.srcObject = localStream; }}
            autoPlay
            muted
            playsInline
            className={`w-full h-full object-cover ${!isVideoEnabled ? "opacity-0" : ""}`}
          />
        )}
        {!isCallActive && (
          <div className="flex items-center justify-center text-white">
            <Video size={48} />
          </div>
        )}
      </div>
      <div className="flex justify-center gap-4">
        <Button onClick={toggleAudio} variant={isAudioEnabled ? "default" : "outline"}>
          <Phone size={18} />
          {isAudioEnabled ? "Mute" : "Unmute"}
        </Button>
        <Button onClick={isCallActive ? endCall : startCall} variant={isCallActive ? "destructive" : "default"}>
          {isCallActive ? "End Call" : "Start Video Call"}
        </Button>
        <Button onClick={toggleVideo} variant={isVideoEnabled ? "default" : "outline"}>
          <Video size={18} />
          {isVideoEnabled ? "Stop Video" : "Start Video"}
        </Button>
      </div>
    </div>
  );
}
