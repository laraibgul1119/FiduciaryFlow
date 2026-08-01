import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { ASSETS_RANGES, PAIN_POINTS, TIMELINES, SOURCES, scoreProspect } from "@/lib/constants";
import { ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/q/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `See if you're a fit — 45 second qualifier` },
      { name: "description", content: `Take a 45-second qualifier for ${params.slug}.` },
    ],
  }),
  component: Quiz,
});

type Advisor = {
  id: string;
  firm_name: string;
  calendly_link: string | null;
  disclosure: string | null;
  brand_color: string | null;
};

function Quiz() {
  const { slug } = Route.useParams();
  const [advisor, setAdvisor] = useState<Advisor | null>(null);
  const [advisorError, setAdvisorError] = useState(false);
  const [step, setStep] = useState(0);
  const [assets, setAssets] = useState("");
  const [pain, setPain] = useState("");
  const [timeline, setTimeline] = useState("");
  const [source, setSource] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<null | { qualified: boolean; score: number }>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadAdvisor() {
      // Try to fetch the advisor
      const { data, error } = await supabase
        .from("advisors")
        .select("id,firm_name,calendly_link,disclosure,brand_color")
        .eq("slug", slug)
        .maybeSingle();

      if (cancelled) return;

      if (data) {
        setAdvisor(data as Advisor);
        return;
      }

      // If no advisor found, try to seed the demo advisor
      const { data: inserted, error: insertError } = await supabase
        .from("advisors")
        .upsert(
          {
            id: "11111111-1111-1111-1111-111111111111",
            slug: "meridian",
            firm_name: "Meridian Wealth Partners",
            brand_color: "#7c5cff",
            aum_target: 250000000,
            calendly_link: "https://calendly.com/demo/intro",
            min_assets: 500000,
          },
          { onConflict: "slug" },
        )
        .select("id,firm_name,calendly_link,disclosure,brand_color")
        .maybeSingle();

      if (cancelled) return;

      if (inserted) {
        setAdvisor(inserted as Advisor);
      } else {
        setAdvisorError(true);
      }
    }

    loadAdvisor();

    return () => {
      cancelled = true;
    };
  }, [slug]);

  const totalSteps = 5;
  const progress = ((step + (result ? 1 : 0)) / totalSteps) * 100;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailRegex.test(email);

  const submit = async () => {
    if (!advisor || !isValidEmail) return;
    setSubmitting(true);
    const score = scoreProspect(assets, timeline);
    const qualified = score >= 80;
    const { data, error } = await supabase
      .from("prospects")
      .insert({
        advisor_id: advisor.id,
        full_name: name,
        email,
        phone: phone || null,
        investable_assets_range: assets,
        timeline,
        pain_point: pain,
        fit_score: score,
        status: qualified ? "qualified" : "new",
        source: source || "quiz",
        next_action: qualified ? "Book intro call" : "Add to nurture sequence",
      })
      .select()
      .single();
    setSubmitting(false);
    if (error) {
      toast.error("Submission failed. Please try again.", {
        description: error.message,
      });
      return;
    }
    try {
      if (data) {
        await supabase.from("audit_logs").insert({
          prospect_id: data.id,
          advisor_id: advisor.id,
          action: "prospect.qualified",
          actor: email,
          details: { score, qualified, source },
        });
      }
    } catch {
      // Audit log failure is non-critical, don't block the user
    }
    setResult({ qualified, score });
  };

  if (advisorError) {
    return (
      <div className="grid min-h-screen place-items-center">
        <div className="text-center">
          <p className="text-lg font-medium">Firm not found</p>
          <p className="mt-2 text-sm text-muted-foreground">
            No firm found for "{slug}". Please check the link and try again.
          </p>
          <a
            href="/"
            className="mt-6 inline-flex items-center gap-2 rounded-lg btn-primary px-4 py-2 text-sm font-medium hover:btn-primary-hover transition-all"
          >
            Go to homepage
          </a>
        </div>
      </div>
    );
  }

  if (!advisor) {
    return (
      <div className="grid min-h-screen place-items-center">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 flex items-center gap-2"
        >
          <div className="grid h-8 w-8 place-items-center rounded-lg btn-primary">
            <Sparkles className="h-4 w-4" />
          </div>
          <div className="text-sm font-medium">{advisor.firm_name}</div>
        </motion.div>

        {!result && (
          <>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-semibold tracking-tight md:text-4xl"
            >
              See if you're a fit for <span className="gradient-text">{advisor.firm_name}</span> in
              45 seconds.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 text-sm text-muted-foreground"
            >
              No credit check. No sales call unless you book one.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-8 h-1.5 w-full overflow-hidden rounded-full bg-muted"
            >
              <motion.div
                className="h-full btn-primary"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </motion.div>
            <div className="mt-2 flex justify-between text-xs text-muted-foreground">
              <span>
                Step {Math.min(step + 1, totalSteps)} of {totalSteps}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>

            <div className="mt-8 glass rounded-2xl p-6 md:p-8">
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div
                    key="step0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Step title="Investable assets?" subtitle="Excludes primary residence.">
                      <div className="grid gap-2">
                        {ASSETS_RANGES.map((r, i) => (
                          <motion.div
                            key={r.value}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: i * 0.05 }}
                          >
                            <ChoiceButton
                              selected={assets === r.value}
                              onClick={() => setAssets(r.value)}
                            >
                              {r.label}
                            </ChoiceButton>
                          </motion.div>
                        ))}
                      </div>
                    </Step>
                  </motion.div>
                )}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Step
                      title="What is your #1 financial concern?"
                      subtitle="Pick the one that keeps you up at night."
                    >
                      <div className="grid gap-2">
                        {PAIN_POINTS.map((p, i) => (
                          <motion.div
                            key={p}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: i * 0.05 }}
                          >
                            <ChoiceButton selected={pain === p} onClick={() => setPain(p)}>
                              {p}
                            </ChoiceButton>
                          </motion.div>
                        ))}
                      </div>
                    </Step>
                  </motion.div>
                )}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Step
                      title="Timeline to make a move?"
                      subtitle="Be honest — we'll route you accordingly."
                    >
                      <div className="grid gap-2">
                        {TIMELINES.map((t, i) => (
                          <motion.div
                            key={t.value}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: i * 0.05 }}
                          >
                            <ChoiceButton
                              selected={timeline === t.value}
                              onClick={() => setTimeline(t.value)}
                            >
                              {t.value}
                            </ChoiceButton>
                          </motion.div>
                        ))}
                      </div>
                    </Step>
                  </motion.div>
                )}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Step title="How did you hear about us?" subtitle="Helps us serve you better.">
                      <div className="grid gap-2">
                        {SOURCES.map((s, i) => (
                          <motion.div
                            key={s}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: i * 0.04 }}
                          >
                            <ChoiceButton selected={source === s} onClick={() => setSource(s)}>
                              {s}
                            </ChoiceButton>
                          </motion.div>
                        ))}
                      </div>
                    </Step>
                  </motion.div>
                )}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Step
                      title="Where should we send your results?"
                      subtitle="We never share your info. Ever."
                    >
                      <div className="grid gap-3">
                        <Input
                          label="Full name"
                          value={name}
                          onChange={setName}
                          placeholder="Jane Doe"
                        />
                        <Input
                          label="Email"
                          value={email}
                          onChange={setEmail}
                          placeholder="jane@example.com"
                          type="email"
                          error={email.length > 0 && !isValidEmail ? "Please enter a valid email" : undefined}
                        />
                        <Input
                          label="Phone (optional)"
                          value={phone}
                          onChange={setPhone}
                          placeholder="+1 415 555 0100"
                        />
                      </div>
                    </Step>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-8 flex items-center justify-between">
                <button
                  disabled={step === 0}
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground disabled:opacity-40 hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
                {step < 4 ? (
                  <button
                    disabled={
                      (step === 0 && !assets) ||
                      (step === 1 && !pain) ||
                      (step === 2 && !timeline) ||
                      (step === 3 && !source)
                    }
                    onClick={() => setStep((s) => s + 1)}
                    className="inline-flex items-center gap-2 rounded-lg btn-primary px-4 py-2 text-sm font-medium disabled:opacity-40 hover:btn-primary-hover transition-all"
                  >
                    Continue <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    disabled={!name || !email || !isValidEmail || submitting}
                    onClick={submit}
                    className="inline-flex items-center gap-2 rounded-lg btn-primary px-4 py-2 text-sm font-medium disabled:opacity-40 hover:btn-primary-hover transition-all"
                  >
                    {submitting ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <ArrowRight className="h-4 w-4" />
                    )}
                    See my result
                  </button>
                )}
              </div>
            </div>
          </>
        )}

        {result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="glass rounded-2xl p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent"
            >
              <CheckCircle2 className="h-7 w-7 text-[oklch(0.78_0.16_155)]" />
            </motion.div>
            <div className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
              Fit score
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-1 text-5xl font-semibold gradient-text"
            >
              {result.score}
            </motion.div>

            {result.qualified ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <h2 className="mt-6 text-2xl font-semibold">You're a strong fit.</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Book your intro call below. A senior advisor will be assigned within 24 hours.
                </p>
                <a
                  href={advisor.calendly_link || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg btn-primary px-5 py-3 text-sm font-medium hover:btn-primary-hover transition-all"
                >
                  Book intro call <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <h2 className="mt-6 text-2xl font-semibold">Join our weekly tax insights.</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  We'll send you fiduciary-grade tax and portfolio strategies every Friday. When
                  you're ready, we'll be here.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-4 py-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-[oklch(0.78_0.16_155)]" /> Added to nurture
                  list
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

        <p className="mt-10 text-center text-[11px] leading-relaxed text-muted-foreground">
          {advisor.disclosure || "Educational purposes only, not investment advice."}
        </p>
      </div>
    </div>
  );
}

function Step({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold">{title}</h2>
      {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      <div className="mt-6">{children}</div>
    </div>
  );
}

function ChoiceButton({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition-all ${
        selected
          ? "border-primary/60 bg-primary/10 text-foreground"
          : "border-border bg-muted/30 text-muted-foreground hover:border-primary/30 hover:text-foreground"
      }`}
    >
      <span>{children}</span>
      {selected && <CheckCircle2 className="h-4 w-4 text-primary" />}
    </button>
  );
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full rounded-lg border bg-muted/40 px-3 py-2.5 text-sm outline-none transition-colors focus:bg-muted/60 ${
          error ? "border-destructive focus:border-destructive" : "border-border focus:border-primary/50"
        }`}
      />
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
