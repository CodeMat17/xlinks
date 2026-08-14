"use client";

import { useEffect, useRef } from "react";

/**
 * Autoplays only while visible, and only when the user hasn't asked for
 * reduced motion. Three fixes over the previous version:
 *  - `muted` is set. It was commented out, which meant every browser blocked
 *    the autoplay anyway *and* an unmuted video could start on its own.
 *  - `preload="none"`: the 1.2 MB file used to download on every page load.
 *  - `controls`: an auto-playing video the user cannot pause fails
 *    WCAG 2.2.2, and the poster gives it something to show before load.
 */
export default function VideoInView({
  src,
  poster,
  className = "",
  label,
}: {
  src: string;
  poster?: string;
  className?: string;
  label: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {
            /* Autoplay refused — controls are available, so this is fine. */
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      aria-label={label}
      loop
      muted
      playsInline
      controls
      preload="none"
      className={className}
    />
  );
}
