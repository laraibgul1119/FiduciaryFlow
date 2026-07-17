import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import {
  Phone,
  Clock,
  CheckCircle2,
  XCircle,
  PhoneOff,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Mic,
  CalendarCheck,
  TrendingUp,
  User,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export const Route = createFileRoute("/voice-logs")({
  head: () => ({
    meta: [
      { title: "AI Voice Logs — FiduciaryFlow OS" },
      {
        name: "description",
        content:
          "Review AI voice qualifier call logs, transcripts, and outcomes.",
      },
    ],
  }),
  component: VoiceLogs,
});

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.06 },
  }),
};

type CallOutcome = "qualified_booked" | "not_qualified" | "no_answer" | "callback";

interface CallLog {
  id: string;
  prospectName: string;
  phone: string;
  duration: number;
  timestamp: string;
  outcome: CallOutcome;
  transcriptExcerpt: string;
  bookingConfirmed: boolean;
  advisorName: string;
}

const mockCalls: CallLog[] = [
  {
    id: "call_001",
    prospectName: "Margaret Chen",
    phone: "(415) 555-0192",
    duration: 342,
    timestamp: "2026-07-17T09:14:00Z",
    outcome: "qualified_booked",
    transcriptExcerpt:
      "I've been looking for someone to help with my retirement planning. I have about $2.3M in assets across multiple accounts and I'm 5 years from retirement. I'd love to schedule a deeper conversation.",
    bookingConfirmed: true,
    advisorName: "Sarah Mitchell",
  },
  {
    id: "call_002",
    prospectName: "David Park",
    phone: "(212) 555-0347",
    duration: 187,
    timestamp: "2026-07-17T09:42:00Z",
    outcome: "not_qualified",
    transcriptExcerpt:
      "I'm actually looking for someone who handles crypto investments specifically. My needs are pretty niche — mostly DeFi protocols and token allocations.",
    bookingConfirmed: false,
    advisorName: "Sarah Mitchell",
  },
  {
    id: "call_003",
    prospectName: "Robert & Linda Hayes",
    phone: "(617) 555-0281",
    duration: 421,
    timestamp: "2026-07-17T10:05:00Z",
    outcome: "qualified_booked",
    transcriptExcerpt:
      "We just sold our business and need help investing the proceeds. Around $5M total. We want someone who understands fiduciary responsibility and won't push commission products.",
    bookingConfirmed: true,
    advisorName: "Sarah Mitchell",
  },
  {
    id: "call_004",
    prospectName: "James Whitfield",
    phone: "(310) 555-0193",
    duration: 95,
    timestamp: "2026-07-17T10:30:00Z",
    outcome: "no_answer",
    transcriptExcerpt:
      "No answer — voicemail left. Follow-up text sent with scheduling link.",
    bookingConfirmed: false,
    advisorName: "Sarah Mitchell",
  },
  {
    id: "call_005",
    prospectName: "Aisha Rahman",
    phone: "(713) 555-0412",
    duration: 298,
    timestamp: "2026-07-17T11:15:00Z",
    outcome: "qualified_booked",
    transcriptExcerpt:
      "I'm an ER physician and I've been too busy to properly manage my portfolio. I have about $1.8M in retirement accounts and some real estate. I definitely want to meet.",
    bookingConfirmed: true,
    advisorName: "Sarah Mitchell",
  },
  {
    id: "call_006",
    prospectName: "Tommy Nguyen",
    phone: "(408) 555-0156",
    duration: 154,
    timestamp: "2026-07-17T11:48:00Z",
    outcome: "callback",
    transcriptExcerpt:
      "I'm in a meeting right now but this sounds interesting. Can you call me back Thursday afternoon? I manage about $800K and I'm looking for a long-term relationship.",
    bookingConfirmed: false,
    advisorName: "Sarah Mitchell",
  },
  {
    id: "call_007",
    prospectName: "Elena Vasquez",
    phone: "(305) 555-0278",
    duration: 389,
    timestamp: "2026-07-17T13:02:00Z",
    outcome: "qualified_booked",
    transcriptExcerpt:
      "My husband and I are both physicians. Combined assets around $4M. We've been with a wirehouse advisor but unhappy with the fees and the feel of being sold products. A fiduciary approach is exactly what we want.",
    bookingConfirmed: true,
    advisorName: "Sarah Mitchell",
  },
  {
    id: "call_008",
    prospectName: "Frank Morrison",
    phone: "(206) 555-0389",
    duration: 72,
    timestamp: "2026-07-17T13:30:00Z",
    outcome: "not_qualified",
    transcriptExcerpt:
      "I'm actually just starting out — only about $15K in savings. I know I'm probably not your typical client but I was hoping to get started early.",
    bookingConfirmed: false,
    advisorName: "Sarah Mitchell",
  },
];

const outcomeConfig: Record<
  CallOutcome,
  { label: string; color: string; bg: string; icon: typeof CheckCircle2 }
> = {
  qualified_booked: {
    label: "Qualified & Booked",
    color: "text-[oklch(0.72_0.16_155)]",
    bg: "bg-[oklch(0.72_0.16_155)]/10",
    icon: CalendarCheck,
  },
  not_qualified: {
    label: "Not Qualified",
    color: "text-muted-foreground",
    bg: "bg-muted/50",
    icon: XCircle,
  },
  no_answer: {
    label: "No Answer",
    color: "text-[oklch(0.82_0.16_85)]",
    bg: "bg-[oklch(0.82_0.16_85)]/10",
    icon: PhoneOff,
  },
  callback: {
    label: "Callback Requested",
    color: "text-[oklch(0.7_0.15_250)]",
    bg: "bg-[oklch(0.7_0.15_250)]/10",
    icon: Phone,
  },
};

function formatDuration(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function AudioPlayer({ duration }: { duration: number }) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    setPlaying(!playing);
    if (!playing) {
      const interval = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            clearInterval(interval);
            setPlaying(false);
            return 0;
          }
          return p + 100 / (duration * 2);
        });
      }, 500);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={togglePlay}
        className="grid h-9 w-9 shrink-0 place-items-center rounded-full btn-primary hover:btn-primary-hover transition-all"
      >
        {playing ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4 ml-0.5" />
        )}
      </button>

      <div className="flex flex-1 items-center gap-2">
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <SkipBack className="h-3.5 w-3.5" />
        </button>

        <div className="relative flex-1">
          <div className="h-1.5 rounded-full bg-muted/60">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary/80 to-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          {/* Waveform decoration */}
          <div className="mt-1.5 flex items-end gap-[2px] h-4 opacity-40">
            {Array.from({ length: 40 }).map((_, i) => {
              const h = Math.sin(i * 0.5) * 8 + 6 + Math.random() * 4;
              return (
                <div
                  key={i}
                  className="w-[3px] rounded-full bg-primary/60 shrink-0"
                  style={{ height: `${h}px` }}
                />
              );
            })}
          </div>
        </div>

        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <SkipForward className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-[11px] font-mono text-muted-foreground tabular-nums">
          {formatDuration(Math.floor((progress / 100) * duration))}
        </span>
        <span className="text-[11px] text-muted-foreground/50">/</span>
        <span className="text-[11px] font-mono text-muted-foreground tabular-nums">
          {formatDuration(duration)}
        </span>
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <Volume2 className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

function VoiceLogs() {
  const [selectedCall, setSelectedCall] = useState<CallLog | null>(null);
  const [filter, setFilter] = useState<CallOutcome | "all">("all");

  const totalCalls = mockCalls.length;
  const qualified = mockCalls.filter(
    (c) => c.outcome === "qualified_booked"
  ).length;
  const avgDuration = Math.round(
    mockCalls.reduce((a, c) => a + c.duration, 0) / totalCalls
  );
  const booked = mockCalls.filter((c) => c.bookingConfirmed).length;

  const filtered =
    filter === "all" ? mockCalls : mockCalls.filter((c) => c.outcome === filter);

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl btn-primary">
              <Mic className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">
                AI Voice Qualifier
              </h1>
              <p className="text-sm text-muted-foreground">
                Vapi-powered call logs — your AI handles qualification so you
                don't have to.
              </p>
            </div>
          </div>
        </motion.div>

        {/* KPI strip */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Phone,
              label: "Total Calls Today",
              value: totalCalls.toString(),
              trend: "+3 vs yesterday",
            },
            {
              icon: CheckCircle2,
              label: "Qualified & Booked",
              value: `${qualified}/${totalCalls}`,
              trend: `${Math.round((qualified / totalCalls) * 100)}% conversion`,
            },
            {
              icon: Clock,
              label: "Avg Call Duration",
              value: formatDuration(avgDuration),
              trend: "AI handles full conversation",
            },
            {
              icon: CalendarCheck,
              label: "Meetings Booked",
              value: booked.toString(),
              trend: "Directly from calls",
            },
          ].map((kpi, i) => (
            <motion.div
              key={kpi.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="glass rounded-2xl p-5 transition-all hover:shadow-[var(--shadow-glow)]"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <kpi.icon className="h-3.5 w-3.5" /> {kpi.label}
              </div>
              <div className="mt-3 text-3xl font-semibold tracking-tight">
                {kpi.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {kpi.trend}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Time saved banner */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="glass-strong rounded-2xl p-5 flex flex-wrap items-center gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[oklch(0.72_0.16_155)]/15">
              <TrendingUp className="h-5 w-5 text-[oklch(0.72_0.16_155)]" />
            </div>
            <div>
              <div className="text-sm font-medium">Time saved today</div>
              <div className="text-xs text-muted-foreground">
                AI qualifier handled{" "}
                <span className="font-semibold text-foreground">
                  {totalCalls} calls
                </span>{" "}
                totaling{" "}
                <span className="font-semibold text-foreground">
                  {formatDuration(mockCalls.reduce((a, c) => a + c.duration, 0))}
                </span>{" "}
                — saving approximately{" "}
                <span className="font-semibold text-foreground">
                  {Math.round(
                    mockCalls.reduce((a, c) => a + c.duration, 0) / 60
                  )}{" "}
                  min
                </span>{" "}
                of advisor time.
              </div>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1 rounded-full bg-[oklch(0.72_0.16_155)]/10 px-2.5 py-1 font-medium text-[oklch(0.72_0.16_155)]">
              <CheckCircle2 className="h-3 w-3" /> {qualified} booked
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-muted/50 px-2.5 py-1 font-medium">
              <XCircle className="h-3 w-3" />{" "}
              {mockCalls.filter((c) => c.outcome === "not_qualified").length} not
              qualified
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-muted/50 px-2.5 py-1 font-medium">
              <PhoneOff className="h-3 w-3" />{" "}
              {mockCalls.filter((c) => c.outcome === "no_answer").length} no
              answer
            </span>
          </div>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="flex flex-wrap gap-2"
        >
          {(
            [
              { key: "all", label: "All calls" },
              { key: "qualified_booked", label: "Qualified & Booked" },
              { key: "not_qualified", label: "Not qualified" },
              { key: "callback", label: "Callbacks" },
              { key: "no_answer", label: "No answer" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                filter === tab.key
                  ? "btn-primary"
                  : "border border-border bg-muted/30 text-muted-foreground hover:bg-muted"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Call log table */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="glass rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-xs uppercase tracking-wider text-muted-foreground">
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left font-medium">Prospect</th>
                  <th className="px-4 py-3 text-left font-medium">Time</th>
                  <th className="px-4 py-3 text-left font-medium">Duration</th>
                  <th className="px-4 py-3 text-left font-medium">
                    Transcript
                  </th>
                  <th className="px-4 py-3 text-left font-medium">Outcome</th>
                  <th className="px-4 py-3 text-left font-medium">Audio</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((call) => {
                  const cfg = outcomeConfig[call.outcome];
                  const Icon = cfg.icon;
                  const isSelected = selectedCall?.id === call.id;
                  return (
                    <tr
                      key={call.id}
                      onClick={() =>
                        setSelectedCall(isSelected ? null : call)
                      }
                      className={`cursor-pointer border-b border-border/50 transition-colors hover:bg-muted/30 ${
                        isSelected ? "bg-muted/40" : ""
                      }`}
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent">
                            <User className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="font-medium">
                              {call.prospectName}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {call.phone}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {formatTime(call.timestamp)}
                      </td>
                      <td className="px-4 py-3 font-mono text-xs tabular-nums">
                        {formatDuration(call.duration)}
                      </td>
                      <td className="px-4 py-3 max-w-xs">
                        <p className="truncate text-xs text-muted-foreground">
                          "{call.transcriptExcerpt}"
                        </p>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${cfg.color} ${cfg.bg}`}
                        >
                          <Icon className="h-3 w-3" />
                          {cfg.label}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCall(call);
                          }}
                          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/40 px-2.5 py-1 text-xs text-muted-foreground hover:bg-muted transition-colors"
                        >
                          <Play className="h-3 w-3" /> Listen
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Expanded call detail + audio player */}
        {selectedCall && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3 }}
            className="glass-strong rounded-2xl p-6"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-accent">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">
                    {selectedCall.prospectName}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedCall.phone} · Called at{" "}
                    {formatTime(selectedCall.timestamp)} · Duration{" "}
                    {formatDuration(selectedCall.duration)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${outcomeConfig[selectedCall.outcome].color} ${outcomeConfig[selectedCall.outcome].bg}`}
                >
                  {(() => {
                    const Icon = outcomeConfig[selectedCall.outcome].icon;
                    return <Icon className="h-3.5 w-3.5" />;
                  })()}
                  {outcomeConfig[selectedCall.outcome].label}
                </span>
                {selectedCall.bookingConfirmed && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-[oklch(0.72_0.16_155)]/10 px-2.5 py-1 text-xs font-medium text-[oklch(0.72_0.16_155)]">
                    <CalendarCheck className="h-3 w-3" /> Meeting booked
                  </span>
                )}
              </div>
            </div>

            {/* Audio player */}
            <div className="mt-6 rounded-xl border border-border bg-muted/20 p-4">
              <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                <Mic className="h-3 w-3" /> AI Voice Recording —{" "}
                {selectedCall.advisorName}'s qualifier
              </div>
              <AudioPlayer duration={selectedCall.duration} />
            </div>

            {/* Transcript */}
            <div className="mt-4">
              <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Transcript excerpt
              </div>
              <div className="rounded-xl border border-border bg-muted/20 p-4">
                <p className="text-sm leading-relaxed text-muted-foreground italic">
                  "{selectedCall.transcriptExcerpt}"
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </AppShell>
  );
}
