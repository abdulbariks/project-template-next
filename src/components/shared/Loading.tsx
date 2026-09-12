"use client";

import { Loader2 } from "lucide-react";

export default function Loading({ message = "Loading..." }: { message?: string }) {
  return (
    <div className="flex items-center justify-center p-8">
      <Loader2 className="h-8 w-8 animate-spin" />
      <span className="ml-2 text-sm text-muted-foreground">{message}</span>
    </div>
  );
}
