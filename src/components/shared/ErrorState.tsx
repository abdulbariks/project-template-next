import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export default function ErrorState({
  title = "Something went wrong",
  message,
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <AlertCircle className="h-10 w-10 text-red-500" />
      <h3 className="text-lg font-semibold">{title}</h3>
      {message && <p className="text-sm text-muted-foreground">{message}</p>}
      {onRetry && (
        <Button onClick={onRetry}>Retry</Button>
      )}
    </div>
  );
}
