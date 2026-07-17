import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { AppShell } from "@/components/AppShell";
import { DEMO_ADVISOR_ID, scoreColor, formatMoney } from "@/lib/constants";
import { useDemoMode } from "@/lib/demo-mode";
import {
  DEMO_FIRM,
  DEMO_PROSPECTS,
  DEMO_KPI,
  DEMO_PIPELINE,
  DEMO_SCORE_DIST,
  DEMO_SOURCES,
} from "@/lib/demo-data";
import {
  Loader2,
  TrendingUp,
  Users,
  Calendar,
  AlertTriangle,
  ExternalLink,
  X,
  FileText,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Command Center — FiduciaryFlow OS" }] }),
  component: Dashboard,
});

type Prospect = {
  id: string;
  full_name: string;
  email: string;
  fit_score: number;
  investable_assets_range: string | null;
  pain_point: string | null;
  timeline: string | null;
  status: string;
  next_action: string | null;
  source: string | null;
  created_at: string;
};

const STATUSES = ["new", "qualified", "booked", "onboarding", "active"] as const;

const STATUS_COLORS: Record<string, string> = {
  new: "#6b7280",
  qualified: "#7c5cff",
  booked: "#38bdf8",
  onboarding: "#fbbf24",
  active: "#3ecf8e",
};

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

function Dashboard() {
  const [prospects, setProspects] = useState<Prospect[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("all");
  const [selected, setSelected] = useState<Prospect | null>(null);
  const { demoMode } = useDemoMode();

  const load = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("prospects")
      .select("*")
      .eq("advisor_id", DEMO_ADVISOR_ID)
      .order("created_at", { ascending: false });
    setProspects((data as Prospect[]) || []);
    setLoading(false);
  };
  useEffect(() => {
    if (demoMode) {
      setProspects(DEMO_PROSPECTS);
      setLoading(false);
    } else {
      load();
    }
  }, [demoMode]);

  const kpis = useMemo(() => {
    if (demoMode) {
      return {
        newQualified: DEMO_KPI.newQualified,
        booked: DEMO_KPI.booked,
        avgScore: DEMO_KPI.avgScore,
        atRisk: DEMO_KPI.atRisk,
      };
    }
    const weekAgo = Date.now() - 7 * 24 * 3600 * 1000;
    const newQualified = prospects.filter(
      (p) => p.fit_score >= 80 && new Date(p.created_at).getTime() > weekAgo,
    ).length;
    const booked = prospects.filter(
      (p) => p.status === "booked" || p.status === "onboarding" || p.status === "active",
    ).length;
    const avgScore = prospects.length
      ? Math.round(prospects.reduce((a, p) => a + p.fit_score, 0) / prospects.length)
      : 0;
    const atRisk = prospects.filter((p) => p.status === "onboarding").length * 1_250_000;
    return { newQualified, booked, avgScore, atRisk };
  }, [prospects, demoMode]);

  const pipelineData = useMemo(() => {
    if (demoMode) return DEMO_PIPELINE;
    return STATUSES.map((s) => ({
      name: s.charAt(0).toUpperCase() + s.slice(1),
      count: prospects.filter((p) => p.status === s).length,
      fill: STATUS_COLORS[s],
    }));
  }, [prospects, demoMode]);

  const scoreDistribution = useMemo(() => {
    if (demoMode) return DEMO_SCORE_DIST;
    const buckets = [
      { range: "0-29", count: 0, fill: "#ef4444" },
      { range: "30-49", count: 0, fill: "#f97316" },
      { range: "50-69", count: 0, fill: "#fbbf24" },
      { range: "70-79", count: 0, fill: "#a78bfa" },
      { range: "80-100", count: 0, fill: "#3ecf8e" },
    ];
    prospects.forEach((p) => {
      const s = p.fit_score;
      if (s < 30) buckets[0].count++;
      else if (s < 50) buckets[1].count++;
      else if (s < 70) buckets[2].count++;
      else if (s < 80) buckets[3].count++;
      else buckets[4].count++;
    });
    return buckets;
  }, [prospects, demoMode]);

  const sourceData = useMemo(() => {
    if (demoMode) return DEMO_SOURCES;
    const map: Record<string, number> = {};
    prospects.forEach((p) => {
      const s = p.source || "Unknown";
      map[s] = (map[s] || 0) + 1;
    });
    return Object.entries(map).map(([name, value]) => ({ name, value }));
  }, [prospects, demoMode]);

  const filtered = filter === "all" ? prospects : prospects.filter((p) => p.status === filter);

  return (
    <AppShell>
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item} className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Command Center</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {demoMode ? (
                <>
                  {DEMO_FIRM.name} · {DEMO_FIRM.aum} AUM ·{" "}
                  <span className="text-[oklch(0.72_0.16_155)] font-medium">DEMO</span>
                </>
              ) : (
                "Meridian Wealth Partners · $250M AUM target"
              )}
            </p>
          </div>
          <div className="flex gap-2">
            <Link
              to="/q/$slug"
              params={{ slug: demoMode ? DEMO_FIRM.firmSlug : "meridian" }}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 py-2 text-xs hover:bg-muted transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" /> View public quiz
            </Link>
          </div>
        </motion.div>

        {/* KPIs */}
        <motion.div variants={item} className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <Kpi
            icon={TrendingUp}
            label="New qualified this week"
            value={kpis.newQualified.toString()}
            trend="+3 vs last"
          />
          <Kpi
            icon={Calendar}
            label="Booked calls"
            value={kpis.booked.toString()}
            trend="Pipeline flowing"
          />
          <Kpi
            icon={AlertTriangle}
            label="Onboarding revenue at risk"
            value={formatMoney(kpis.atRisk)}
            trend="2 stalled >48h"
            tone="warn"
          />
          <Kpi
            icon={Users}
            label="Avg fit score"
            value={kpis.avgScore.toString()}
            trend="Target ≥ 75"
          />
        </motion.div>

        {/* Charts row */}
        <motion.div variants={item} className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="glass rounded-2xl p-5">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Pipeline
            </h3>
            <div className="mt-4 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={pipelineData} barSize={28}>
                  <XAxis
                    dataKey="name"
                    tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }}
                    axisLine={false}
                    tickLine={false}
                    allowDecimals={false}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "var(--color-card)",
                      border: "1px solid var(--color-border)",
                      borderRadius: 12,
                      fontSize: 12,
                    }}
                    cursor={{ fill: "var(--color-muted)", opacity: 0.3 }}
                  />
                  <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                    {pipelineData.map((entry, i) => (
                      <Cell key={i} fill={entry.fill} fillOpacity={0.85} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass rounded-2xl p-5">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Score distribution
            </h3>
            <div className="mt-4 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={scoreDistribution} barSize={24}>
                  <XAxis
                    dataKey="range"
                    tick={{ fontSize: 10, fill: "var(--color-muted-foreground)" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 11, fill: "var(--color-muted-foreground)" }}
                    axisLine={false}
                    tickLine={false}
                    allowDecimals={false}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "var(--color-card)",
                      border: "1px solid var(--color-border)",
                      borderRadius: 12,
                      fontSize: 12,
                    }}
                    cursor={{ fill: "var(--color-muted)", opacity: 0.3 }}
                  />
                  <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                    {scoreDistribution.map((entry, i) => (
                      <Cell key={i} fill={entry.fill} fillOpacity={0.8} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="glass rounded-2xl p-5">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Lead sources
            </h3>
            <div className="mt-4 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={sourceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={70}
                    paddingAngle={3}
                    dataKey="value"
                    stroke="none"
                  >
                    {sourceData.map((_, i) => (
                      <Cell
                        key={i}
                        fill={
                          [
                            "#7c5cff",
                            "#38bdf8",
                            "#3ecf8e",
                            "#fbbf24",
                            "#f97316",
                            "#ec4899",
                            "#6b7280",
                          ][i % 7]
                        }
                        fillOpacity={0.85}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "var(--color-card)",
                      border: "1px solid var(--color-border)",
                      borderRadius: 12,
                      fontSize: 12,
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-1 flex flex-wrap justify-center gap-3 text-[10px] text-muted-foreground">
                {sourceData.map((s, i) => (
                  <span key={s.name} className="flex items-center gap-1">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{
                        background: [
                          "#7c5cff",
                          "#38bdf8",
                          "#3ecf8e",
                          "#fbbf24",
                          "#f97316",
                          "#ec4899",
                          "#6b7280",
                        ][i % 7],
                      }}
                    />
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* Inbox */}
          <motion.div variants={item} className="glass rounded-2xl">
            <div className="flex items-center justify-between border-b border-border p-4">
              <h2 className="text-sm font-semibold">Lead Inbox</h2>
              <div className="flex gap-1 text-xs">
                {["all", ...STATUSES].map((s) => (
                  <button
                    key={s}
                    onClick={() => setFilter(s)}
                    className={`rounded-md px-2 py-1 capitalize transition-colors ${filter === s ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            {loading ? (
              <div className="grid place-items-center p-12">
                <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
              </div>
            ) : filtered.length === 0 ? (
              <EmptyInbox />
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-xs uppercase tracking-wider text-muted-foreground">
                    <tr className="border-b border-border">
                      <th className="px-4 py-3 text-left font-medium">Name</th>
                      <th className="px-4 py-3 text-left font-medium">Fit</th>
                      <th className="px-4 py-3 text-left font-medium">Assets</th>
                      <th className="px-4 py-3 text-left font-medium">Pain</th>
                      <th className="px-4 py-3 text-left font-medium">Timeline</th>
                      <th className="px-4 py-3 text-left font-medium">Status</th>
                      <th className="px-4 py-3 text-left font-medium">Next action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((p) => (
                      <tr
                        key={p.id}
                        onClick={() => setSelected(p)}
                        className="cursor-pointer border-b border-border/50 transition-colors hover:bg-muted/30"
                      >
                        <td className="px-4 py-3">
                          <div className="font-medium">{p.full_name}</div>
                          <div className="text-xs text-muted-foreground">{p.email}</div>
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium ${scoreColor(p.fit_score)}`}
                          >
                            {p.fit_score}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {p.investable_assets_range || "—"}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">{p.pain_point || "—"}</td>
                        <td className="px-4 py-3 text-muted-foreground">{p.timeline || "—"}</td>
                        <td className="px-4 py-3">
                          <StatusPill status={p.status} />
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">{p.next_action || "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>

          {/* Morning Brief */}
          <motion.aside variants={item} className="glass rounded-2xl p-5">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[oklch(0.72_0.16_155)] animate-pulse" />
              <h3 className="text-sm font-semibold">
                {demoMode ? "Demo Morning Brief" : "Morning Brief"}
              </h3>
            </div>
            <p className="text-xs text-muted-foreground">Generated 6:04 AM · GPT-5</p>
            <ul className="mt-4 space-y-3 text-sm">
              {demoMode ? (
                <>
                  <BriefItem tone="warn">
                    2 high-value leads (Priya Ramaswamy, Sophie Laurent) waiting for discovery call — combined $9M+ AUM
                  </BriefItem>
                  <BriefItem tone="muted">
                    AI voice qualifier booked 4 meetings yesterday — saving ~2.5 hours of advisor time
                  </BriefItem>
                  <BriefItem tone="danger">
                    1 compliance flag on the Beckett transcript (word: "guarantee") — auto-suggested rewrite
                  </BriefItem>
                  <BriefItem tone="muted">
                    Sophie Laurent's onboarding at 75% — missing tax documents, auto-nudge sent
                  </BriefItem>
                </>
              ) : (
                <>
                  <BriefItem tone="warn">
                    3 follow-ups overdue — Alexandra Chen, Priya Ramaswamy, Thomas Beckett
                  </BriefItem>
                  <BriefItem tone="danger">
                    1 compliance flag on the Whitfield transcript (word: "guaranteed")
                  </BriefItem>
                  <BriefItem tone="muted">
                    2 docs missing from Sophie Laurent's onboarding (ID, 401k statement)
                  </BriefItem>
                  <BriefItem tone="muted">
                    $1.25M AUM stalled &gt;48h in onboarding — nudge queued for tomorrow
                  </BriefItem>
                </>
              )}
            </ul>
            <Link
              to="/meetings"
              className="mt-5 inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
            >
              Open meeting intel <ArrowRight className="h-3 w-3" />
            </Link>
          </motion.aside>
        </div>

        {/* Pipeline Kanban */}
        <motion.div variants={item} className="mt-8">
          <h2 className="mb-3 text-sm font-semibold">Pipeline</h2>
          <div className="grid gap-3 md:grid-cols-5">
            {STATUSES.map((s) => {
              const rows = prospects.filter((p) => p.status === s);
              return (
                <div key={s} className="glass rounded-xl p-3">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="h-2 w-2 rounded-full"
                        style={{ background: STATUS_COLORS[s] }}
                      />
                      <div className="text-xs font-medium capitalize">{s}</div>
                    </div>
                    <div className="text-xs text-muted-foreground">{rows.length}</div>
                  </div>
                  <div className="space-y-2">
                    {rows.length === 0 ? (
                      <div className="rounded-lg border border-dashed border-border p-3 text-xs text-muted-foreground">
                        Empty
                      </div>
                    ) : (
                      rows.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => setSelected(p)}
                          className="w-full rounded-lg border border-border bg-muted/30 p-2.5 text-left transition-colors hover:bg-muted/60"
                        >
                          <div className="truncate text-xs font-medium">{p.full_name}</div>
                          <div className="mt-1 flex items-center justify-between">
                            <span
                              className={`inline-flex items-center rounded border px-1.5 py-0 text-[10px] ${scoreColor(p.fit_score)}`}
                            >
                              {p.fit_score}
                            </span>
                            <span className="text-[10px] text-muted-foreground">
                              {p.investable_assets_range}
                            </span>
                          </div>
                        </button>
                      ))
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      {/* Drawer */}
      {selected && <ProspectDrawer prospect={selected} onClose={() => setSelected(null)} />}
    </AppShell>
  );
}

function Kpi({
  icon: Icon,
  label,
  value,
  trend,
  tone,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  trend: string;
  tone?: "warn";
}) {
  return (
    <div className="glass rounded-2xl p-5 transition-all hover:shadow-[var(--shadow-glow)]">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Icon className="h-3.5 w-3.5" /> {label}
      </div>
      <div className="mt-3 text-3xl font-semibold tracking-tight">{value}</div>
      <div
        className={`mt-1 text-xs ${tone === "warn" ? "text-[oklch(0.85_0.16_85)]" : "text-muted-foreground"}`}
      >
        {trend}
      </div>
    </div>
  );
}

function StatusPill({ status }: { status: string }) {
  const map: Record<string, string> = {
    new: "bg-muted text-muted-foreground",
    qualified: "bg-primary/15 text-primary",
    booked: "bg-[oklch(0.68_0.20_220)]/15 text-[oklch(0.78_0.20_220)]",
    onboarding: "bg-[oklch(0.82_0.16_85)]/15 text-[oklch(0.85_0.16_85)]",
    active: "bg-[oklch(0.72_0.16_155)]/15 text-[oklch(0.78_0.16_155)]",
    lost: "bg-destructive/15 text-destructive",
  };
  return (
    <span
      className={`inline-flex rounded-md px-2 py-0.5 text-xs capitalize ${map[status] || map.new}`}
    >
      {status}
    </span>
  );
}

function BriefItem({
  tone,
  children,
}: {
  tone: "warn" | "danger" | "muted";
  children: React.ReactNode;
}) {
  const dot =
    tone === "warn"
      ? "bg-[oklch(0.82_0.16_85)]"
      : tone === "danger"
        ? "bg-destructive"
        : "bg-muted-foreground";
  return (
    <li className="flex gap-2">
      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dot}`} />
      <span className="text-muted-foreground">{children}</span>
    </li>
  );
}

function EmptyInbox() {
  return (
    <div className="p-12 text-center">
      <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-muted/60">
        <Users className="h-5 w-5 text-muted-foreground" />
      </div>
      <div className="mt-4 text-sm font-medium">No leads yet</div>
      <p className="mt-1 text-xs text-muted-foreground">
        Share your qualifier link on LinkedIn to fill the pipeline.
      </p>
    </div>
  );
}

function ProspectDrawer({ prospect, onClose }: { prospect: Prospect; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 flex justify-end bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="glass-strong h-full w-full max-w-md overflow-y-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="text-xs text-muted-foreground">Prospect</div>
            <h3 className="mt-1 text-xl font-semibold">{prospect.full_name}</h3>
            <div className="text-sm text-muted-foreground">{prospect.email}</div>
          </div>
          <button onClick={onClose} className="rounded-md p-1 hover:bg-muted transition-colors">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
          <Field label="Fit score">
            <span
              className={`inline-flex rounded border px-2 py-0.5 text-xs ${scoreColor(prospect.fit_score)}`}
            >
              {prospect.fit_score}
            </span>
          </Field>
          <Field label="Status">
            <StatusPill status={prospect.status} />
          </Field>
          <Field label="Assets">{prospect.investable_assets_range || "—"}</Field>
          <Field label="Timeline">{prospect.timeline || "—"}</Field>
          <Field label="Pain point">{prospect.pain_point || "—"}</Field>
          <Field label="Next action">{prospect.next_action || "—"}</Field>
        </div>
        <div className="mt-6 flex gap-2">
          <Link
            to="/onboarding/$id"
            params={{ id: prospect.id }}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg btn-primary px-4 py-2 text-sm font-medium hover:btn-primary-hover transition-all"
          >
            <FileText className="h-4 w-4" /> Open onboarding
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-1">{children}</div>
    </div>
  );
}
