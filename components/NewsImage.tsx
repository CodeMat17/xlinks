"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

const FALLBACK = "/xlinks_logo.webp";

type Props = Omit<ImageProps, "onError"> & { src: string };

export default function NewsImage({ src, alt, ...props }: Props) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(FALLBACK)}
    />
  );
}
