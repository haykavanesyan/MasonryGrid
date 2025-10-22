import { ReactNode, useEffect, useRef } from "react";

interface Props {
  children: ReactNode;
  callback: () => void;
  loading: boolean;
}

export const InfiniteScroll: React.FC<Props> = ({ children, callback, loading }) => {
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sentinelRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && !loading) {
          callback();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [callback, loading]);

  return (
    <>
      {children}
      <div ref={sentinelRef} style={{ height: 1 }} />
    </>
  );
};
