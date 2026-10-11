
"use client";

import {
  downwardsReveal,
  upwardsReveal,
  useAnimation,
} from "@/lib/animations";
import { useEffect } from "react";

function useCommonAnimation(sectionRef, delay = 0) {
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const cleanupUp = useAnimation(section, upwardsReveal);
    const cleanupDown = useAnimation(
      section,
      downwardsReveal,
      delay
    );

    return () => {
      cleanupUp?.();
      cleanupDown?.();
    };
  }, [sectionRef, delay]);
}

export default useCommonAnimation;
