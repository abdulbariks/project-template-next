import { Send } from "lucide-react";

interface MessageInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

export function MessageInput({ value, onChange, onSend }: MessageInputProps) {
  return (
    <div className="border-t p-2 flex gap-2">
      <input
        className="flex-1 rounded border px-3 py-2 text-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type a message..."
      />
      <button
        onClick={onSend}
        className="rounded bg-primary px-4 py-2 text-sm text-primary-foreground"
      >
        <Send size={16} />
      </button>
    </div>
  );
}
