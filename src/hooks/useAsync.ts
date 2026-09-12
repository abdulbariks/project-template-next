import { useCallback, useEffect, useRef, useState } from "react";

export function useAsync<T>(
  asyncFn: (...args: unknown[]) => Promise<T>
): {
  loading: boolean;
  error: Error | null;
  data: T | null;
  execute: (...args: unknown[]) => Promise<T | null>;
  reset: () => void;
} {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);

  const execute = useCallback(
    async (...args: unknown[]): Promise<T | null> => {
      setLoading(true);
      setError(null);
      try {
        const result = await asyncFn(...args);
        setData(result);
        return result;
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
        return null;
      } finally {
        setLoading(false);
      }
    },
    [asyncFn]
  );

  const reset = useCallback(() => {
    setLoading(false);
    setError(null);
    setData(null);
  }, []);

  return { loading, error, data, execute, reset };
}
