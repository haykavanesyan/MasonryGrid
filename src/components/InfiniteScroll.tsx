import { ReactNode, useEffect, useRef } from "react";

interface Props {
  children: ReactNode;
  callback: () => void;
  loading: boolean;
}

const InfiniteScroll: React.FC<Props> = ({ children, callback, loading }) => {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const callbackRef = useRef(callback);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!sentinelRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && !loading) {
          // Skip the first intersection (initial render)
          if (!hasTriggeredRef.current) {
            hasTriggeredRef.current = true;
            return;
          }
          callbackRef.current();
        }
      },
      { threshold: 0.1 },
    );

    const currentSentinel = sentinelRef.current;
    observer.observe(currentSentinel);

    return () => {
      if (currentSentinel) {
        observer.unobserve(currentSentinel);
      }
      observer.disconnect();
    };
  }, [loading]);

  return (
    <>
      {children}
      <div ref={sentinelRef} style={{ height: 1 }} />
    </>
  );
};

export default InfiniteScroll;
