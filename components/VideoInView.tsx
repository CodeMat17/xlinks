"use client";

import { useEffect, useRef } from "react";

interface VideoInViewProps {
  src: string;
  className?: string;
}

export default function VideoInView({ src, className = "" }: VideoInViewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      loop
      // muted
      playsInline
      className={className}
    />
  );
}
