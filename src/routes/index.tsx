import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  LineChart,
  Users,
  Zap,
  Lock,
  BarChart3,
} from "lucide-react";
import { DEMO_ADVISOR_SLUG } from "@/lib/constants";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FiduciaryFlow OS — Client Acquisition & Compliance Autopilot" },
      {
        name: "description",
        content:
          "The operating system for fee-only RIAs. Qualify, onboard, and stay compliant — automatically.",
      },
    ],
  }),
  component: Landing,
});

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08 },
  }),
};

function Landing() {
  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2"
        >
          <div className="grid h-8 w-8 place-items-center rounded-lg btn-primary">
            <Sparkles className="h-4 w-4" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">FiduciaryFlow</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">OS</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center gap-3"
        >
          <Link
            to="/q/$slug"
            params={{ slug: DEMO_ADVISOR_SLUG }}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Try the quiz
          </Link>
          <Link
            to="/dashboard"
            className="rounded-lg btn-primary px-4 py-2 text-sm font-medium hover:btn-primary-hover transition-all"
          >
            Enter dashboard
          </Link>
        </motion.div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-16 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.72_0.16_155)] animate-pulse" />
          Built for RIAs managing $100M+ AUM
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
        >
          The <span className="gradient-text">client acquisition</span> and compliance autopilot for
          fee-only advisors.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          Qualify prospects in 45 seconds. Onboard with a compliant magic-link portal. Generate
          fiduciary meeting notes that satisfy SEC 17a-4 — automatically.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 rounded-lg btn-primary px-5 py-3 text-sm font-medium hover:btn-primary-hover transition-all"
          >
            Open command center <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/q/$slug"
            params={{ slug: DEMO_ADVISOR_SLUG }}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-5 py-3 text-sm font-medium hover:bg-muted transition-colors"
          >
            See the lead qualifier
          </Link>
        </motion.div>

        <div className="mt-20 grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Users,
              title: "Qualify in 45s",
              body: "Share one link. We score fit, timeline, and assets automatically.",
            },
            {
              icon: ShieldCheck,
              title: "Compliance-ready",
              body: "17a-4 audit trail, fiduciary language rewrites, flagged phrases.",
            },
            {
              icon: LineChart,
              title: "Onboarding autopilot",
              body: "Magic-link portal, KYC, risk score, doc vault, e-signature.",
            },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="glass rounded-2xl p-6 transition-all hover:shadow-[var(--shadow-glow)]"
            >
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-accent">
                <f.icon className="h-4 w-4" />
              </div>
              <h3 className="mt-4 font-medium">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-8 text-xs text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <Zap className="h-3.5 w-3.5" /> 45-second qualification
          </div>
          <div className="flex items-center gap-2">
            <Lock className="h-3.5 w-3.5" /> SOC 2 compliant
          </div>
          <div className="flex items-center gap-2">
            <BarChart3 className="h-3.5 w-3.5" /> $2.4B+ AUM managed
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5" /> SEC 17a-4 ready
          </div>
        </motion.div>
      </section>
    </div>
  );
}
