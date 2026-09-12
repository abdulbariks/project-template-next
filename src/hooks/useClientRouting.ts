import { useCallback, useEffect, useState } from "react";

export function useCopyToClipboard(): [string | null, (text: string) => Promise<boolean>] {
  const [error, setError] = useState<string | null>(null);

  const copy = useCallback(async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text);
      setError(null);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to copy");
      return false;
    }
  }, []);

  return [error, copy];
}
