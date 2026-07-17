import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Check,
  X,
  Sparkles,
  Zap,
  Crown,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/billing")({
  head: () => ({
    meta: [
      { title: "Pricing — FiduciaryFlow OS" },
      {
        name: "description",
        content:
          "Choose the plan that fits your RIA. Start a 14-day free trial — no card required.",
      },
    ],
  }),
  component: Billing,
});

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.1 },
  }),
};

const plans = [
  {
    name: "Starter",
    price: 497,
    period: "mo",
    description: "For solo advisors building their pipeline",
    icon: Zap,
    highlights: ["100 leads / mo", "1 advisor seat"],
    features: {
      qualification: true,
      onboarding: true,
      meetingNotes: true,
      compliance: true,
      whiteLabel: false,
      apiAccess: false,
      prioritySupport: false,
      customIntegrations: false,
      dedicatedCsm: false,
    },
    cta: "Start free trial",
    popular: false,
  },
  {
    name: "Growth",
    price: 797,
    period: "mo",
    description: "For growing firms that want full brand control",
    icon: Crown,
    highlights: ["500 leads / mo", "3 advisor seats", "White label"],
    features: {
      qualification: true,
      onboarding: true,
      meetingNotes: true,
      compliance: true,
      whiteLabel: true,
      apiAccess: false,
      prioritySupport: false,
      customIntegrations: false,
      dedicatedCsm: false,
    },
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Scale",
    price: 1297,
    period: "mo",
    description: "For enterprise firms that need everything",
    icon: Crown,
    highlights: ["Unlimited leads", "Unlimited seats", "Full API", "Priority support"],
    features: {
      qualification: true,
      onboarding: true,
      meetingNotes: true,
      compliance: true,
      whiteLabel: true,
      apiAccess: true,
      prioritySupport: true,
      customIntegrations: true,
      dedicatedCsm: true,
    },
    cta: "Start free trial",
    popular: false,
  },
] as const;

const comparisonRows = [
  { label: "Lead qualification", starter: true, growth: true, scale: true },
  { label: "Client onboarding portal", starter: true, growth: true, scale: true },
  { label: "AI meeting notes", starter: true, growth: true, scale: true },
  { label: "SEC 17a-4 compliance", starter: true, growth: true, scale: true },
  { label: "White-label branding", starter: false, growth: true, scale: true },
  { label: "API access", starter: false, growth: false, scale: true },
  { label: "Priority support (<1hr SLA)", starter: false, growth: false, scale: true },
  { label: "Custom integrations", starter: false, growth: false, scale: true },
  { label: "Dedicated account manager", starter: false, growth: false, scale: true },
];

function Billing() {
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
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              OS
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center gap-3"
        >
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to home
          </Link>
          <Link
            to="/dashboard"
            className="rounded-lg btn-primary px-4 py-2 text-sm font-medium hover:btn-primary-hover transition-all"
          >
            Dashboard
          </Link>
        </motion.div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-12 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs text-muted-foreground">
            <ShieldCheck className="h-3 w-3" />
            Trusted by 200+ fee-only RIAs
          </div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Plans that scale with your{" "}
            <span className="gradient-text">practice</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Every plan includes a 14-day free trial. No credit card required.
            Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className={`relative flex flex-col rounded-2xl p-8 transition-all ${
                plan.popular
                  ? "glass-strong ring-2 ring-primary/40 shadow-[var(--shadow-glow)]"
                  : "glass hover:shadow-[var(--shadow-glow)]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full btn-primary px-3 py-0.5 text-xs font-semibold">
                  Most popular
                </div>
              )}

              <div className="flex items-center gap-3">
                <div
                  className={`grid h-10 w-10 place-items-center rounded-xl ${
                    plan.popular ? "btn-primary" : "bg-accent"
                  }`}
                >
                  <plan.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{plan.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">
                  ${plan.price}
                </span>
                <span className="text-sm text-muted-foreground">
                  /{plan.period}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {plan.highlights.map((h) => (
                  <span
                    key={h}
                    className="inline-flex items-center rounded-md bg-muted/60 px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {h}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex-1 space-y-2.5">
                {[
                  { key: "qualification", label: "Lead qualification" },
                  { key: "onboarding", label: "Client onboarding portal" },
                  { key: "meetingNotes", label: "AI meeting notes" },
                  { key: "compliance", label: "SEC 17a-4 compliance" },
                  { key: "whiteLabel", label: "White-label branding" },
                  { key: "apiAccess", label: "API access" },
                  { key: "prioritySupport", label: "Priority support" },
                  { key: "customIntegrations", label: "Custom integrations" },
                  { key: "dedicatedCsm", label: "Dedicated account manager" },
                ].map((f) => (
                  <div
                    key={f.key}
                    className="flex items-center gap-2 text-sm"
                  >
                    {plan.features[f.key as keyof typeof plan.features] ? (
                      <Check className="h-4 w-4 shrink-0 text-success" />
                    ) : (
                      <X className="h-4 w-4 shrink-0 text-muted-foreground/40" />
                    )}
                    <span
                      className={
                        plan.features[f.key as keyof typeof plan.features]
                          ? ""
                          : "text-muted-foreground"
                      }
                    >
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`mt-8 flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-all ${
                  plan.popular
                    ? "btn-primary hover:btn-primary-hover"
                    : "border border-border bg-muted/30 hover:bg-muted"
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 glass-strong rounded-2xl p-8 text-center"
        >
          <h2 className="text-xl font-semibold">
            Start your 14-day free trial today
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            No credit card required. Full access to all features in your chosen
            plan. Set up in under 5 minutes.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg btn-primary px-6 py-3 text-sm font-medium hover:btn-primary-hover transition-all">
              Start 14-Day Free Trial, No Card Required
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Check className="h-3 w-3 text-success" />
              No credit card
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-3 w-3 text-success" />
              Cancel anytime
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-3 w-3 text-success" />
              SOC 2 compliant
            </span>
          </div>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-center text-2xl font-semibold tracking-tight">
            Compare all features
          </h2>
          <div className="mt-8 overflow-x-auto rounded-2xl glass">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-4 text-left font-medium text-muted-foreground">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center font-medium">Starter</th>
                  <th className="px-6 py-4 text-center font-medium text-primary">
                    Growth
                  </th>
                  <th className="px-6 py-4 text-center font-medium">Scale</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={
                      i < comparisonRows.length - 1 ? "border-b border-border" : ""
                    }
                  >
                    <td className="px-6 py-3.5 text-muted-foreground">
                      {row.label}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      {row.starter ? (
                        <Check className="mx-auto h-4 w-4 text-success" />
                      ) : (
                        <X className="mx-auto h-4 w-4 text-muted-foreground/30" />
                      )}
                    </td>
                    <td className="px-6 py-3.5 text-center bg-primary/5">
                      {row.growth ? (
                        <Check className="mx-auto h-4 w-4 text-success" />
                      ) : (
                        <X className="mx-auto h-4 w-4 text-muted-foreground/30" />
                      )}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      {row.scale ? (
                        <Check className="mx-auto h-4 w-4 text-success" />
                      ) : (
                        <X className="mx-auto h-4 w-4 text-muted-foreground/30" />
                      )}
                    </td>
                  </tr>
                ))}
                <tr className="border-t border-border">
                  <td className="px-6 py-4 font-medium">Price</td>
                  <td className="px-6 py-4 text-center font-semibold">$497/mo</td>
                  <td className="px-6 py-4 text-center font-semibold text-primary bg-primary/5">
                    $797/mo
                  </td>
                  <td className="px-6 py-4 text-center font-semibold">$1,297/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* FAQ / footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20 grid gap-6 md:grid-cols-3"
        >
          {[
            {
              q: "Can I change plans later?",
              a: "Yes, upgrade or downgrade anytime. Changes take effect on your next billing cycle.",
            },
            {
              q: "What happens after the trial?",
              a: "You'll be prompted to select a plan. No charges until you confirm.",
            },
            {
              q: "Do you offer annual pricing?",
              a: "Yes — save 20% with annual billing. Contact us for details.",
            },
          ].map((faq) => (
            <div key={faq.q} className="glass rounded-xl p-5">
              <h3 className="text-sm font-medium">{faq.q}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
