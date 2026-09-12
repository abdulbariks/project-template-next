import { Phone } from "lucide-react";
import { useWebRTC } from "@/features/call/useWebRTC";
import { Button } from "@/components/ui/button";

interface AudioCallProps {
  roomId: string;
}

export function AudioCall({ roomId }: AudioCallProps) {
  const { isCallActive, startCall, endCall, toggleAudio, isAudioEnabled } = useWebRTC(roomId);

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center">
        <Phone size={48} className={isAudioEnabled ? "" : "opacity-30"} />
      </div>
      <div className="flex gap-4">
        <Button onClick={toggleAudio} variant={isAudioEnabled ? "default" : "outline"}>
          {isAudioEnabled ? "Mute" : "Unmute"}
        </Button>
        <Button onClick={isCallActive ? endCall : startCall} variant={isCallActive ? "destructive" : "default"}>
          {isCallActive ? "End Call" : "Start Audio Call"}
        </Button>
      </div>
    </div>
  );
}
