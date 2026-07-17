import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

interface DemoModeCtx {
  demoMode: boolean;
  toggleDemoMode: () => void;
}

const Ctx = createContext<DemoModeCtx>({ demoMode: false, toggleDemoMode: () => {} });

export function useDemoMode() {
  return useContext(Ctx);
}

export function DemoModeProvider({ children }: { children: ReactNode }) {
  const [demoMode, setDemoMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("ff-demo-mode") === "true";
  });

  useEffect(() => {
    localStorage.setItem("ff-demo-mode", String(demoMode));
  }, [demoMode]);

  const toggleDemoMode = () => setDemoMode((v) => !v);

  return (
    <Ctx.Provider value={{ demoMode, toggleDemoMode }}>
      {children}
    </Ctx.Provider>
  );
}
