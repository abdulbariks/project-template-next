import { useParams } from "next/navigation";

export function useParam<T = string>(key: string): T | undefined {
  const params = useParams();
  return params[key] as T | undefined;
}
