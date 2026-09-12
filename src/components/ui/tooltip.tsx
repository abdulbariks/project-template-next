import { cn } from "@/lib/utils";

export interface TooltipProps {
  content: string;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
}

export function Tooltip({ content, children, side = "top" }: TooltipProps) {
  return (
    <div className="group relative">
      {children}
      <div className="pointer-events-none absolute z-50 invisible whitespace-nowrap rounded bg-popover px-2 py-1 text-xs text-popover-foreground opacity-0 shadow-md transition-all group-hover:visible group-hover:opacity-100" style={{ [side]: "-28px" }}>
        {content}
      </div>
    </div>
  );
}
