import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import {
  Banknote,
  GraduationCap,
  Landmark,
  Languages,
  Newspaper,
  PlaneTakeoff,
  Stamp,
} from "lucide-react";

/**
 * Every article in `data.ts` points at a photo under /images/news/ that does
 * not exist in the repo, so each card used to 404 and fall back to a 199 KB
 * logo PNG stretched to 16:9. This resolves the file at build time and, when
 * it is genuinely missing, draws an on-brand cover instead of a broken one.
 *
 * To upgrade any article to a real photo, drop the file at the exact
 * `photoUrl` path from data.ts into /public — nothing else needs to change.
 */
const topicIcons: Record<string, typeof GraduationCap> = {
  "Study abroad": GraduationCap,
  Visas: Stamp,
  Travel: PlaneTakeoff,
  Funding: Banknote,
  "Language training": Languages,
  "Company news": Newspaper,
};

function fileExists(publicPath: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", publicPath));
  } catch {
    return false;
  }
}

export default function ArticleCover({
  photoUrl,
  topic,
  title,
  sizes,
  priority = false,
  className = "",
}: {
  photoUrl: string;
  topic: string;
  title: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const hasPhoto = fileExists(photoUrl);
  const Icon = topicIcons[topic] ?? Landmark;

  if (hasPhoto) {
    return (
      <div className={`relative overflow-hidden bg-brand-950 ${className}`}>
        <Image
          src={photoUrl}
          alt={title}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`brand-gradient relative isolate flex items-center justify-center overflow-hidden ${className}`}
      // Decorative: the article title is always adjacent as real text.
      aria-hidden="true"
    >
      <div className="dot-field absolute inset-0 opacity-50" />
      <div className="absolute -right-8 -bottom-10 h-40 w-40 rounded-full bg-support-500/20 blur-2xl" />
      <Icon className="relative h-12 w-12 text-brand-300/80" strokeWidth={1.25} />
      <span className="absolute bottom-4 left-4 rounded-full bg-white/10 px-3 py-1 font-display text-2xs font-bold tracking-[0.12em] text-white/85 uppercase backdrop-blur-sm">
        {topic}
      </span>
    </div>
  );
}
