import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  FileText,
  Settings,
  Sun,
  Moon,
  Sparkles,
  ArrowRight,
  Search,
  Home,
  Menu,
  X,
  Mic,
  Monitor,
  Link2,
  Check,
} from "lucide-react";
import { useEffect, useState, useCallback, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDemoMode } from "@/lib/demo-mode";
import { toast } from "sonner";

const nav = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/voice-logs", label: "Voice Logs", icon: Mic },
  { to: "/meetings", label: "Meetings", icon: FileText },
  { to: "/settings", label: "Settings", icon: Settings },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [light, setLight] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { demoMode, toggleDemoMode } = useDemoMode();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const isLight = document.documentElement.classList.contains("light");
    setLight(isLight);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      setCmdOpen((v) => !v);
    } else if (e.key === "Escape") {
      setCmdOpen(false);
      setMobileMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("ff-theme", next ? "light" : "dark");
  };

  const copyDemoLink = async () => {
    const url = `${window.location.origin}/q/demo-firm`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Demo link copied!", { description: url });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy link");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Top nav bar */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between px-4 md:px-8">
          {/* Left: Logo + nav links */}
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <div className="grid h-7 w-7 place-items-center rounded-lg btn-primary">
                <Sparkles className="h-3.5 w-3.5" />
              </div>
              <div className="leading-tight">
                <div className="text-xs font-semibold">FiduciaryFlow</div>
                <div className="text-[9px] uppercase tracking-widest text-muted-foreground">OS</div>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {nav.map((n) => {
                const active = pathname.startsWith(n.to);
                return (
                  <Link
                    key={n.to}
                    to={n.to}
                    className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition-all ${
                      active
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <n.icon className="h-3.5 w-3.5" />
                    {n.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right: actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCmdOpen(true)}
              className="hidden items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors sm:flex"
            >
              <Search className="h-3 w-3" /> Search
              <kbd className="rounded bg-background/60 px-1.5 py-0.5 text-[10px] font-mono">⌘K</kbd>
            </button>

            {/* Demo mode toggle */}
            <button
              onClick={toggleDemoMode}
              className={`hidden items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all sm:flex ${
                demoMode
                  ? "bg-[oklch(0.72_0.16_155)]/15 text-[oklch(0.78_0.16_155)] border border-[oklch(0.72_0.16_155)]/30"
                  : "text-muted-foreground hover:bg-muted border border-transparent"
              }`}
              title={demoMode ? "Demo mode ON — showing fake data" : "Turn on demo mode for sales calls"}
            >
              <Monitor className="h-3.5 w-3.5" />
              {demoMode ? "Demo" : "Demo mode"}
            </button>

            {/* Copy demo link — only visible when demo mode is ON */}
            {demoMode && (
              <button
                onClick={copyDemoLink}
                className="hidden items-center gap-1.5 rounded-lg border border-border bg-muted/40 px-2.5 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors sm:flex"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-[oklch(0.72_0.16_155)]" />
                ) : (
                  <Link2 className="h-3.5 w-3.5" />
                )}
                {copied ? "Copied!" : "Copy Demo Link"}
              </button>
            )}

            <button
              onClick={toggleTheme}
              className="hidden items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors sm:flex"
            >
              {light ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="grid h-8 w-8 place-items-center rounded-lg hover:bg-muted transition-colors md:hidden"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-border md:hidden"
            >
              <div className="space-y-1 px-4 py-3">
                {nav.map((n) => {
                  const active = pathname.startsWith(n.to);
                  return (
                    <Link
                      key={n.to}
                      to={n.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all ${
                        active
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <n.icon className="h-4 w-4" />
                      {n.label}
                    </Link>
                  );
                })}
                <div className="border-t border-border pt-2 mt-2">
                  <button
                    onClick={() => {
                      toggleDemoMode();
                      setMobileMenuOpen(false);
                    }}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                      demoMode
                        ? "text-[oklch(0.78_0.16_155)] bg-[oklch(0.72_0.16_155)]/10"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Monitor className="h-4 w-4" />
                    {demoMode ? "Demo mode ON" : "Demo mode"}
                  </button>
                  {demoMode && (
                    <button
                      onClick={() => {
                        copyDemoLink();
                        setMobileMenuOpen(false);
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-[oklch(0.72_0.16_155)]" />
                      ) : (
                        <Link2 className="h-4 w-4" />
                      )}
                      {copied ? "Copied!" : "Copy Demo Link"}
                    </button>
                  )}
                  <button
                    onClick={() => {
                      setCmdOpen(true);
                      setMobileMenuOpen(false);
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                  >
                    <Search className="h-4 w-4" />
                    Search
                    <kbd className="ml-auto rounded bg-background/60 px-1.5 py-0.5 text-[10px] font-mono">
                      ⌘K
                    </kbd>
                  </button>
                  <button
                    onClick={() => {
                      toggleTheme();
                      setMobileMenuOpen(false);
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                  >
                    {light ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                    {light ? "Dark mode" : "Light mode"}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main content — full width */}
      <main className="mx-auto max-w-[1600px] px-4 py-6 md:px-8 md:py-8">{children}</main>

      {/* Command palette */}
      <AnimatePresence>
        {cmdOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 pt-32 backdrop-blur-sm"
            onClick={() => setCmdOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.2 }}
              className="glass-strong w-full max-w-lg rounded-2xl p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 border-b border-border px-4 py-3">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  autoFocus
                  placeholder="Search prospects, actions, pages…"
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
                <kbd className="rounded bg-background/60 px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">
                  ESC
                </kbd>
              </div>
              <div className="p-2">
                <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Navigation
                </div>
                <Link
                  to="/"
                  onClick={() => setCmdOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-muted transition-colors"
                >
                  <Home className="h-4 w-4 text-muted-foreground" />
                  Home
                </Link>
                {nav.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => setCmdOpen(false)}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                      pathname.startsWith(n.to) ? "bg-accent" : "hover:bg-muted"
                    }`}
                  >
                    <n.icon className="h-4 w-4 text-muted-foreground" />
                    Go to {n.label}
                    {pathname.startsWith(n.to) && (
                      <span className="ml-auto text-[10px] text-muted-foreground">current</span>
                    )}
                  </Link>
                ))}
                <div className="mt-2 border-t border-border pt-2">
                  <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Quick actions
                  </div>
                  <Link
                    to="/q/$slug"
                    params={{ slug: "meridian" }}
                    onClick={() => setCmdOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-muted transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    Open public quiz
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
