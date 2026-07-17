import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  Loader2,
  ShieldCheck,
  FileUp,
  PenLine,
  Landmark,
  Sparkles,
  CheckCircle2,
  Upload,
  AlertCircle,
} from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts";

export const Route = createFileRoute("/onboarding/$id")({
  head: () => ({ meta: [{ title: "Your onboarding — FiduciaryFlow" }] }),
  component: Onboarding,
});

type Prospect = { id: string; full_name: string; email: string };
type Checklist = {
  id?: string;
  kyc_complete: boolean;
  risk_questionnaire_score: number | null;
  docs_uploaded: boolean;
  bank_linked: boolean;
  agreement_signed: boolean;
  progress_percent: number;
};

const RISK_Q = [
  "Market drops 20% next month. You…",
  "Your ideal portfolio in one word?",
  "Time horizon for these assets?",
  "Reaction to a 12-month flat return?",
  "Concentration in one stock is…",
  "Bonds in your portfolio should be…",
  "Alternative assets appetite?",
  "Preference for tax-loss harvesting?",
  "Interest in private markets?",
  "Overall risk tolerance self-rating?",
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: i * 0.08 },
  }),
};

function Onboarding() {
  const { id } = Route.useParams();
  const [prospect, setProspect] = useState<Prospect | null>(null);
  const [cl, setCl] = useState<Checklist>({
    kyc_complete: false,
    risk_questionnaire_score: null,
    docs_uploaded: false,
    bank_linked: false,
    agreement_signed: false,
    progress_percent: 0,
  });
  const [loading, setLoading] = useState(true);
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    (async () => {
      const { data: p } = await supabase
        .from("prospects")
        .select("id,full_name,email")
        .eq("id", id)
        .maybeSingle();
      setProspect(p as Prospect);
      const { data: c } = await supabase
        .from("onboarding_checklists")
        .select("*")
        .eq("prospect_id", id)
        .maybeSingle();
      if (c) setCl(c as Checklist);
      setLoading(false);
    })();
  }, [id]);

  const persist = async (next: Partial<Checklist>) => {
    const merged = { ...cl, ...next };
    const steps = [
      merged.kyc_complete,
      merged.risk_questionnaire_score !== null,
      merged.docs_uploaded,
      merged.agreement_signed,
      merged.bank_linked,
    ];
    merged.progress_percent = Math.round((steps.filter(Boolean).length / steps.length) * 100);
    setCl(merged);
    await supabase
      .from("onboarding_checklists")
      .upsert({ ...merged, prospect_id: id }, { onConflict: "prospect_id" });
    await supabase.from("audit_logs").insert({
      prospect_id: id,
      action: "onboarding.update",
      actor: prospect?.email || "prospect",
      details: next,
    });
    if (merged.progress_percent === 100) {
      setConfetti(true);
      setTimeout(() => setConfetti(false), 4000);
      await supabase.from("prospects").update({ status: "active" }).eq("id", id);
    }
  };

  if (loading)
    return (
      <div className="grid min-h-screen place-items-center">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  if (!prospect)
    return (
      <div className="grid min-h-screen place-items-center text-sm text-muted-foreground">
        Invalid link.
      </div>
    );

  const stepsLeft = [
    cl.kyc_complete,
    cl.risk_questionnaire_score !== null,
    cl.docs_uploaded,
    cl.agreement_signed,
    cl.bank_linked,
  ].filter((v) => !v).length;

  return (
    <div className="min-h-screen">
      {confetti && <Confetti />}
      <div className="mx-auto max-w-3xl px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex items-center gap-2"
        >
          <div className="grid h-8 w-8 place-items-center rounded-lg btn-primary">
            <Sparkles className="h-4 w-4" />
          </div>
          <div className="text-sm font-medium">FiduciaryFlow · Client Portal</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-2xl p-8"
        >
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            Welcome, {prospect.full_name.split(" ")[0]}
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            You're <span className="gradient-text">{stepsLeft}</span> step
            {stepsLeft === 1 ? "" : "s"} away from your personalized plan.
          </h1>
          <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-muted">
            <motion.div
              className="h-full btn-primary"
              initial={{ width: 0 }}
              animate={{ width: `${cl.progress_percent}%` }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          </div>
          <div className="mt-2 flex justify-between text-xs text-muted-foreground">
            <span>Progress</span>
            <span>{cl.progress_percent}%</span>
          </div>
        </motion.div>

        <div className="mt-8 space-y-4">
          <motion.div custom={0} variants={cardVariants} initial="hidden" animate="visible">
            <IdentityCard done={cl.kyc_complete} onDone={() => persist({ kyc_complete: true })} />
          </motion.div>
          <motion.div custom={1} variants={cardVariants} initial="hidden" animate="visible">
            <RiskCard
              score={cl.risk_questionnaire_score}
              onDone={(s) => persist({ risk_questionnaire_score: s })}
            />
          </motion.div>
          <motion.div custom={2} variants={cardVariants} initial="hidden" animate="visible">
            <DocsCard
              done={cl.docs_uploaded}
              onDone={() => persist({ docs_uploaded: true })}
              prospectId={id}
            />
          </motion.div>
          <motion.div custom={3} variants={cardVariants} initial="hidden" animate="visible">
            <AgreementCard
              done={cl.agreement_signed}
              name={prospect.full_name}
              onDone={() => persist({ agreement_signed: true })}
            />
          </motion.div>
          <motion.div custom={4} variants={cardVariants} initial="hidden" animate="visible">
            <BankCard done={cl.bank_linked} onDone={() => persist({ bank_linked: true })} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 rounded-2xl border border-dashed border-border p-4 text-xs text-muted-foreground"
        >
          <div className="flex items-start gap-2">
            <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
            <div>
              <span className="font-medium text-foreground">SMS nudge preview: </span>
              If no upload in 2 days, we'll auto-send: "Hi {prospect.full_name.split(" ")[0]}, still
              need your 401k statement to finalize your plan — takes 30 seconds via the secure
              link."
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function StepCard({
  icon: Icon,
  title,
  subtitle,
  done,
  children,
  defaultOpen,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  done: boolean;
  children?: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen ?? !done);
  return (
    <div className={`glass rounded-2xl transition-all ${done ? "opacity-70" : ""}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-4 p-5 text-left"
      >
        <div
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg transition-colors ${done ? "bg-[oklch(0.72_0.16_155)]/15 text-[oklch(0.78_0.16_155)]" : "bg-accent"}`}
        >
          {done ? <CheckCircle2 className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium">{title}</div>
          <div className="text-xs text-muted-foreground">{subtitle}</div>
        </div>
        <div className="text-xs text-muted-foreground">{done ? "Done" : "Open"}</div>
      </button>
      <AnimatePresence>
        {open && children && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="border-t border-border p-5">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function IdentityCard({ done, onDone }: { done: boolean; onDone: () => void }) {
  const [scanning, setScanning] = useState(false);
  return (
    <StepCard
      icon={ShieldCheck}
      title="Identity Verification"
      subtitle="Plaid-secured KYC — takes 30 seconds"
      done={done}
    >
      <div className="rounded-lg border border-border bg-muted/30 p-6 text-center">
        {scanning ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="mx-auto h-1.5 w-40 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-1/2 btn-primary shimmer" />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Verifying with Plaid Identity…</p>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-accent">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <p className="mt-3 text-sm">Upload a photo of your government-issued ID</p>
            <button
              onClick={() => {
                setScanning(true);
                setTimeout(() => {
                  setScanning(false);
                  onDone();
                  toast.success("Identity verified");
                }, 1600);
              }}
              className="mt-4 inline-flex items-center gap-2 rounded-lg btn-primary px-4 py-2 text-sm font-medium hover:btn-primary-hover transition-all"
            >
              <Upload className="h-4 w-4" /> Verify with Plaid
            </button>
          </motion.div>
        )}
      </div>
    </StepCard>
  );
}

function RiskCard({ score, onDone }: { score: number | null; onDone: (s: number) => void }) {
  const [answers, setAnswers] = useState<number[]>(Array(10).fill(50));
  const avg = Math.round(answers.reduce((a, b) => a + b, 0) / answers.length);
  const label = avg < 33 ? "Conservative" : avg < 66 ? "Moderate" : "Aggressive";
  return (
    <StepCard
      icon={PenLine}
      title="Risk Questionnaire"
      subtitle="10 questions · gauge your tolerance"
      done={score !== null}
    >
      {score !== null ? (
        <RiskGauge score={score} />
      ) : (
        <div className="space-y-4">
          {RISK_Q.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: i * 0.03 }}
            >
              <div className="mb-2 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">
                  {i + 1}. {q}
                </span>
                <span className="tabular-nums text-muted-foreground">{answers[i]}</span>
              </div>
              <input
                type="range"
                min={1}
                max={99}
                value={answers[i]}
                onChange={(e) =>
                  setAnswers((a) => a.map((v, idx) => (idx === i ? Number(e.target.value) : v)))
                }
                className="w-full accent-[oklch(0.72_0.19_290)]"
              />
            </motion.div>
          ))}
          <div className="rounded-lg bg-muted/40 p-4">
            <div className="text-xs text-muted-foreground">Current profile</div>
            <div className="mt-1 text-2xl font-semibold gradient-text">
              {label} · {avg}
            </div>
          </div>
          <button
            onClick={() => {
              onDone(avg);
              toast.success("Risk profile saved");
            }}
            className="w-full rounded-lg btn-primary py-2.5 text-sm font-medium hover:btn-primary-hover transition-all"
          >
            Save risk profile
          </button>
        </div>
      )}
    </StepCard>
  );
}

function RiskGauge({ score }: { score: number }) {
  const data = [
    {
      name: "risk",
      value: score,
      fill: score < 33 ? "#3ecf8e" : score < 66 ? "#fbbf24" : "#ef4444",
    },
  ];
  const label = score < 33 ? "Conservative" : score < 66 ? "Moderate" : "Aggressive";

  return (
    <div className="grid place-items-center py-4">
      <div className="relative h-48 w-48">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="70%"
            outerRadius="100%"
            startAngle={210}
            endAngle={-30}
            data={data}
          >
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <RadialBar
              background={{ fill: "var(--color-muted)" }}
              dataKey="value"
              cornerRadius={12}
              isAnimationActive={true}
              animationDuration={1200}
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center">
            <div className="text-4xl font-semibold gradient-text">{score}</div>
            <div className="text-xs text-muted-foreground">{label}</div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-6 text-[10px] text-muted-foreground">
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-[#3ecf8e]" /> Conservative
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-[#fbbf24]" /> Moderate
        </span>
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-[#ef4444]" /> Aggressive
        </span>
      </div>
    </div>
  );
}

function DocsCard({
  done,
  onDone,
  prospectId,
}: {
  done: boolean;
  onDone: () => void;
  prospectId: string;
}) {
  const [scanning, setScanning] = useState(false);
  const [files, setFiles] = useState<string[]>([]);
  const drop = async (name: string) => {
    setScanning(true);
    await supabase.from("documents").insert({
      prospect_id: prospectId,
      file_name: name,
      type: name.toLowerCase().includes("tax") ? "tax_doc" : "statement",
    });
    setTimeout(() => {
      setScanning(false);
      setFiles((f) => [...f, name]);
    }, 1400);
  };
  return (
    <StepCard
      icon={FileUp}
      title="Document Vault"
      subtitle="401k statement, tax return"
      done={done}
    >
      <div className="rounded-xl border-2 border-dashed border-border p-6 text-center">
        {scanning ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
            <p className="text-sm">Extracting holdings…</p>
            <div className="mx-auto mt-3 h-1 w-48 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-2/3 btn-primary shimmer" />
            </div>
            <p className="mt-2 text-[10px] text-muted-foreground">AI-powered document scanning</p>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-sm">Drag & drop or</p>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              <button
                onClick={() => drop("401k_statement_Q3.pdf")}
                className="rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-xs hover:bg-muted transition-colors"
              >
                Upload 401(k) statement
              </button>
              <button
                onClick={() => drop("tax_return_2024.pdf")}
                className="rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-xs hover:bg-muted transition-colors"
              >
                Upload tax return
              </button>
            </div>
          </motion.div>
        )}
      </div>
      <AnimatePresence>
        {files.length > 0 && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-4 space-y-1 text-xs"
          >
            {files.map((f) => (
              <motion.li
                key={f}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-[oklch(0.78_0.16_155)]" /> {f} · scanned
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      {files.length > 0 && !done && (
        <button
          onClick={onDone}
          className="mt-4 w-full rounded-lg btn-primary py-2 text-sm font-medium hover:btn-primary-hover transition-all"
        >
          Confirm documents
        </button>
      )}
    </StepCard>
  );
}

function AgreementCard({
  done,
  name,
  onDone,
}: {
  done: boolean;
  name: string;
  onDone: () => void;
}) {
  const [agreed, setAgreed] = useState(false);
  const [sig, setSig] = useState("");
  return (
    <StepCard
      icon={PenLine}
      title="Investment Advisory Agreement"
      subtitle="Fiduciary standard · Reg BI compliant"
      done={done}
    >
      <div className="max-h-40 overflow-y-auto rounded-lg border border-border bg-muted/30 p-4 text-xs leading-relaxed text-muted-foreground">
        This Agreement is entered into between the Client and Meridian Wealth Partners LLC
        ("Advisor"), acting as fiduciary under the Investment Advisers Act of 1940. Advisor will
        manage Client's assets on a discretionary basis, in accordance with the risk profile
        established herein and the Client's stated objectives…
      </div>
      <label className="mt-4 flex items-center gap-2 text-xs">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="accent-primary"
        />
        I have read and agree to the terms above.
      </label>
      <div className="mt-3">
        <div className="text-xs text-muted-foreground">Type your full legal name to sign:</div>
        <input
          value={sig}
          onChange={(e) => setSig(e.target.value)}
          placeholder={name}
          className="mt-1 w-full rounded-lg border border-border bg-muted/40 px-3 py-2 font-[serif] italic tracking-wide outline-none focus:border-primary/40 transition-colors"
        />
      </div>
      <button
        disabled={!agreed || sig.trim().length < 3}
        onClick={() => {
          onDone();
          toast.success("Agreement signed");
        }}
        className="mt-4 w-full rounded-lg btn-primary py-2 text-sm font-medium disabled:opacity-40 hover:btn-primary-hover transition-all"
      >
        Sign electronically
      </button>
    </StepCard>
  );
}

function BankCard({ done, onDone }: { done: boolean; onDone: () => void }) {
  return (
    <StepCard
      icon={Landmark}
      title="Link Custodian"
      subtitle="Schwab, Fidelity, or Altruist"
      done={done}
    >
      <div className="grid grid-cols-3 gap-2">
        {["Schwab", "Fidelity", "Altruist"].map((b) => (
          <button
            key={b}
            onClick={() => {
              onDone();
              toast.success(`${b} connected`);
            }}
            className="rounded-lg border border-border bg-muted/40 py-3 text-sm hover:bg-muted transition-colors"
          >
            {b}
          </button>
        ))}
      </div>
      <p className="mt-3 text-[11px] text-muted-foreground">
        Read-only, bank-level 256-bit encryption. Powered by Plaid.
      </p>
    </StepCard>
  );
}

function Confetti() {
  const pieces = Array.from({ length: 50 });
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map((_, i) => (
        <span
          key={i}
          className="absolute h-2 w-2 rounded-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 15}%`,
            background: ["#7c5cff", "#3ecf8e", "#fbbf24", "#38bdf8", "#ec4899"][i % 5],
            animation: `confetti-fall ${2 + Math.random() * 2}s ease-in forwards`,
            animationDelay: `${Math.random() * 0.8}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
      <style>{`
        @keyframes confetti-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
