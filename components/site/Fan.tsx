"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { chipStyle } from "@/lib/chip";

export { chipStyle };

function useFanOnce<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setOpen(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setOpen(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, open };
}

export function Fan({ className, children }: { className?: string; children: ReactNode }) {
  const { ref, open } = useFanOnce<HTMLDivElement>();
  return (
    <div ref={ref} className={`fan ${open ? "is-fanned" : ""} ${className ?? ""}`.trim()}>
      {children}
    </div>
  );
}

export function Mark({ color, fan = "-4deg" }: { color: string; fan?: string }) {
  const { ref, open } = useFanOnce<HTMLSpanElement>();
  const style = { "--chip": color, "--fan": fan } as CSSProperties;
  return <span ref={ref} className={`mark ${open ? "is-fanned" : ""}`} style={style} aria-hidden />;
}

