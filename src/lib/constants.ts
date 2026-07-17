export const DEMO_ADVISOR_ID = "11111111-1111-1111-1111-111111111111";
export const DEMO_ADVISOR_SLUG = "meridian";

export const ASSETS_RANGES = [
  { value: "<250k", label: "Under $250k", score: 10 },
  { value: "250k-500k", label: "$250k – $500k", score: 40 },
  { value: "500k-1M", label: "$500k – $1M", score: 70 },
  { value: "1M-5M", label: "$1M – $5M", score: 90 },
  { value: "5M+", label: "$5M+", score: 100 },
];

export const PAIN_POINTS = [
  "Taxes on stock",
  "Retirement income",
  "Business exit",
  "Market volatility",
];

export const TIMELINES = [
  { value: "0-3 months", score: 100 },
  { value: "3-6 months", score: 80 },
  { value: "6-12 months", score: 50 },
  { value: "just browsing", score: 20 },
];

export function scoreProspect(assets: string, timeline: string): number {
  const a = ASSETS_RANGES.find((r) => r.value === assets)?.score ?? 0;
  const t = TIMELINES.find((r) => r.value === timeline)?.score ?? 0;
  return Math.min(100, Math.round(a * 0.55 + t * 0.45));
}

export function scoreColor(score: number): string {
  if (score >= 80)
    return "text-[oklch(0.78_0.16_155)] bg-[oklch(0.72_0.16_155)]/10 border-[oklch(0.72_0.16_155)]/30";
  if (score >= 50)
    return "text-[oklch(0.85_0.16_85)] bg-[oklch(0.82_0.16_85)]/10 border-[oklch(0.82_0.16_85)]/30";
  return "text-[oklch(0.75_0.22_25)] bg-[oklch(0.62_0.22_25)]/10 border-[oklch(0.62_0.22_25)]/30";
}

export const SOURCES = [
  "LinkedIn",
  "Referral",
  "Google search",
  "Newsletter",
  "Podcast",
  "Advertisement",
  "Other",
];

export function formatMoney(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}k`;
  return `$${n}`;
}

export function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}k`;
  return n.toString();
}
