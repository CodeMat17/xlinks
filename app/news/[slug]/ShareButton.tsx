"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";

export default function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = window.location.href;

    // Use Web Share API when available and on a secure context
    if (
      typeof navigator !== "undefined" &&
      typeof navigator.share === "function" &&
      window.isSecureContext
    ) {
      try {
        await navigator.share({ title, url });
        return;
      } catch (err: unknown) {
        // AbortError means the user dismissed the sheet — do nothing
        if (err instanceof Error && err.name === "AbortError") return;
        // Any other error: fall through to clipboard
      }
    }

    // Clipboard fallback
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // Clipboard blocked — use the legacy execCommand approach
      const el = document.createElement("textarea");
      el.value = url;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all"
      aria-label="Share this article">
      {copied ? (
        <>
          <Check className="w-4 h-4 text-emerald-500" />
          Link copied!
        </>
      ) : (
        <>
          <Share2 className="w-4 h-4" />
          Share
        </>
      )}
    </button>
  );
}
