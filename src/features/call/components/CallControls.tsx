import { useState } from "react";
import { Button } from "@/components/ui/button";

interface CallControlsProps {
  isCallActive: boolean;
  onStart: () => void;
  onEnd: () => void;
  type: "audio" | "video";
}

export function CallControls({
  isCallActive,
  onStart,
  onEnd,
  type,
}: CallControlsProps) {
  return (
    <div className="flex items-center gap-2">
      <Button onClick={isCallActive ? onEnd : onStart} variant={isCallActive ? "destructive" : "default"}>
        {isCallActive ? "End" : `Start ${type}`} Call
      </Button>
    </div>
  );
}
