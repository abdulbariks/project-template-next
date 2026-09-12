import { InboxIcon } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
}

export default function EmptyState({
  title = "No items",
  description,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-2 p-8">
      <InboxIcon className="h-10 w-10 text-muted-foreground" />
      <h3 className="text-lg font-semibold">{title}</h3>
      {description && <p className="text-sm text-muted-foreground">{description}</p>}
    </div>
  );
}
