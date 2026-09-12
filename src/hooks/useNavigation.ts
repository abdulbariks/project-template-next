import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return {
    router,
    pathname,
    searchParams,
    push: (path: string) => router.push(path),
    replace: (path: string) => router.replace(path),
    back: () => router.back(),
    refresh: () => router.refresh(),
  };
}
