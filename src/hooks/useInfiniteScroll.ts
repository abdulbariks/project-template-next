import { useRef, useEffect } from "react";

export function useInfiniteScroll(callback: () => void, hasMore: boolean): [React.RefObject<HTMLDivElement | null>] {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          callback();
        }
      },
      { threshold: 1.0 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [callback, hasMore]);

  return [ref];
}
