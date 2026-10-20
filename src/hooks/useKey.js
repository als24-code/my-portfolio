"use client";
import { useEffect } from "react";

export function useKey(key, handler, active = true) {
  useEffect(() => {
    if (!active) return;
    const fn = (e) => { if (e.key === key) handler(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [key, handler, active]);
}
