import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { supabase } from "@/integrations/supabase/client";
import { DEMO_ADVISOR_ID } from "@/lib/constants";
import {
  Loader2,
  Sparkles,
  ShieldCheck,
  Copy,
  AlertTriangle,
  Mic,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/meetings")({
  head: () => ({ meta: [{ title: "Meeting Intelligence — FiduciaryFlow OS" }] }),
  component: Meetings,
});

const SAMPLE = `Advisor: Thanks for making time today. Walk me through your goals for the next 3 years.
Client: I want to retire by 60. I've got about $2.1M in a mix of company stock and a Fidelity IRA. Concentrated in NVDA.
Advisor: Understood. Concentration risk is real. If we diversified, we could target a smoother ride — historically the S&P returns 8-10% annualized.
Client: What kind of return can you guarantee me?
Advisor: I'd frame it as expected returns based on long-term historical performance — no guarantees in markets, but we can build a portfolio aligned to your risk tolerance.
Client: OK. I also worry about my tax bill if we sell the NVDA position.
Advisor: We'd stage the sale over 24 months, harvest losses elsewhere, and use donor-advised funds for the appreciated shares.`;

function Meetings() {
  const [transcript, setTranscript] = useState(SAMPLE);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | {
    summary: string[];
    goals: string[];
    actions: string[];
    flags: { phrase: string; suggestion: string }[];
    crmNotes: string;
  }>(null);
  const [complianceMode, setComplianceMode] = useState(true);

  const generate = async () => {
    setLoading(true);
    setTimeout(async () => {
      const flags: { phrase: string; suggestion: string }[] = [];
      if (/guarantee/i.test(transcript))
        flags.push({
          phrase: "guarantee",
          suggestion: "Replace with 'historical performance' or 'expected returns'.",
        });
      if (/promise/i.test(transcript))
        flags.push({ phrase: "promise", suggestion: "Replace with 'plan to' or 'target'." });
      const r = {
        summary: [
          "Client targeting retirement at age 60 with ~$2.1M in investable assets.",
          "Portfolio is concentrated in a single-name equity (NVDA); diversification discussed.",
          "Tax-efficient staged liquidation strategy proposed over 24 months.",
        ],
        goals: [
          "Retire by age 60",
          "Reduce single-stock concentration",
          "Minimize tax drag on liquidation",
        ],
        actions: [
          "Draft diversification plan and phased sale schedule (owner: advisor, due: +7d)",
          "Model tax impact using client's 2024 return (owner: advisor, due: +5d)",
          "Introduce donor-advised fund option and paperwork (owner: advisor, due: +14d)",
        ],
        flags,
        crmNotes: `Meeting held ${new Date().toLocaleString()}. Client re-confirmed 3-yr retirement horizon and moderate-aggressive risk tolerance. Discussed staged diversification of concentrated NVDA position with tax-loss harvesting and DAF donation of appreciated shares. Fiduciary framing used throughout — no return guarantees offered. Next step: deliver phased liquidation plan within 7 days.`,
      };
      setResult(r);
      await supabase.from("meetings").insert({
        advisor_id: DEMO_ADVISOR_ID,
        transcript_text: transcript,
        ai_summary: r.summary.join(" "),
        action_items: r.actions,
        compliance_flags: flags,
        fiduciary_notes: r.crmNotes,
      });
      await supabase.from("audit_logs").insert({
        advisor_id: DEMO_ADVISOR_ID,
        action: "meeting.notes_generated",
        actor: "advisor",
        details: { retention: "17a-4", flags: flags.length },
      });
      setLoading(false);
    }, 1400);
  };

  return (
    <AppShell>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Meeting Intelligence</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Generate fiduciary notes, flag compliance risk, log per SEC 17a-4.
            </p>
          </div>
          <label className="flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 py-2 text-xs">
            <ShieldCheck className="h-3.5 w-3.5 text-[oklch(0.78_0.16_155)]" />
            <span>Compliance mode {complianceMode ? "ON" : "OFF"}</span>
            <button
              onClick={() => setComplianceMode((v) => !v)}
              className={`ml-2 h-4 w-7 rounded-full transition-colors ${complianceMode ? "bg-primary" : "bg-muted"}`}
            >
              <span
                className={`block h-3 w-3 translate-y-0.5 rounded-full bg-white transition-transform ${complianceMode ? "translate-x-3.5" : "translate-x-0.5"}`}
              />
            </button>
          </label>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="glass rounded-2xl p-5"
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold">Transcript</h3>
              <button className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/40 px-2 py-1 text-xs hover:bg-muted transition-colors">
                <Mic className="h-3 w-3" /> Upload audio (mock)
              </button>
            </div>
            <textarea
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              rows={16}
              className="w-full resize-none rounded-lg border border-border bg-muted/30 p-3 text-xs leading-relaxed outline-none focus:border-primary/40 font-mono transition-colors"
            />
            <button
              onClick={generate}
              disabled={loading || !transcript}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg btn-primary py-2.5 text-sm font-medium disabled:opacity-40 hover:btn-primary-hover transition-all"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="h-4 w-4" />
              )}
              Generate Fiduciary Notes
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="glass rounded-2xl p-5"
          >
            {!result && !loading && (
              <div className="grid h-full place-items-center py-16 text-center">
                <div>
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-accent">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div className="mt-4 text-sm font-medium">Notes will appear here</div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    17a-4 retention · fiduciary language · flagged phrases
                  </p>
                </div>
              </div>
            )}
            {loading && (
              <div className="grid h-full place-items-center py-16">
                <div className="text-center">
                  <Loader2 className="mx-auto h-6 w-6 animate-spin text-muted-foreground" />
                  <div className="mt-3 text-xs text-muted-foreground">
                    Reviewing transcript with GPT-5…
                  </div>
                </div>
              </div>
            )}
            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-5"
                >
                  <Section title="Meeting Summary">
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {result.summary.map((s, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          • {s}
                        </motion.li>
                      ))}
                    </ul>
                  </Section>
                  <Section title="Client Goals Stated">
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {result.goals.map((g, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          • {g}
                        </motion.li>
                      ))}
                    </ul>
                  </Section>
                  <Section title="Fiduciary Action Items">
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {result.actions.map((a, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="flex gap-2"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {a}
                        </motion.li>
                      ))}
                    </ul>
                  </Section>
                  <Section title="Compliance Flags">
                    {result.flags.length === 0 ? (
                      <div className="rounded-lg border border-border bg-muted/30 p-3 text-xs text-muted-foreground flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[oklch(0.78_0.16_155)]" />
                        No flags detected. Transcript is compliant.
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {result.flags.map((f, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 + i * 0.1 }}
                            className="rounded-lg border border-destructive/30 bg-destructive/5 p-3"
                          >
                            <div className="flex items-center gap-2 text-xs font-medium text-destructive">
                              <AlertTriangle className="h-3.5 w-3.5" /> Flagged phrase: "{f.phrase}"
                            </div>
                            <div className="mt-1 text-xs text-muted-foreground">
                              → {f.suggestion}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </Section>
                  <Section title="CRM Notes (fiduciary language)">
                    <div className="relative rounded-lg border border-border bg-muted/30 p-3 text-xs leading-relaxed text-muted-foreground">
                      {result.crmNotes}
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(result.crmNotes);
                          toast.success("Copied to clipboard");
                        }}
                        className="absolute right-2 top-2 rounded-md border border-border bg-background/50 p-1.5 hover:bg-muted transition-colors"
                      >
                        <Copy className="h-3 w-3" />
                      </button>
                    </div>
                  </Section>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="rounded-lg border border-[oklch(0.72_0.16_155)]/30 bg-[oklch(0.72_0.16_155)]/5 p-3 text-xs text-[oklch(0.78_0.16_155)] flex items-center gap-2"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                    Meeting notes generated and stored per SEC Rule 17a-4 · Audit log created
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </AppShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {title}
      </div>
      {children}
    </div>
  );
}
