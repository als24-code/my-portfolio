"use client";
import { useCallback, useState } from "react";

export function useCopy(text, resetMs = 1800) {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), resetMs);
    } catch {}
  }, [text, resetMs]);
  return { copied, copy };
}
