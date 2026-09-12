import { useCallback, useEffect, useRef, useState } from "react";

export function useIntersectionObserver(
  options?: IntersectionObserverInit
): [React.RefObject<Element | null>, boolean] {
  const ref = useRef<Element | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return [ref, isIntersecting];
}
