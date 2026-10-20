"use client";
import { createContext, useCallback, useContext, useMemo, useState } from "react";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [introOpen, setIntroOpen] = useState(true);
  const [activeCase, setActiveCase] = useState(null);

  const replayIntro = useCallback(() => {
    window.scrollTo({ top: 0 });
    setIntroOpen(true);
  }, []);
  const closeIntro = useCallback(() => setIntroOpen(false), []);
  const openCase = useCallback((p) => setActiveCase(p), []);
  const closeCase = useCallback(() => setActiveCase(null), []);

  const value = useMemo(
    () => ({ introOpen, replayIntro, closeIntro, activeCase, openCase, closeCase }),
    [introOpen, replayIntro, closeIntro, activeCase, openCase, closeCase]
  );
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside <AppProvider>");
  return ctx;
}
