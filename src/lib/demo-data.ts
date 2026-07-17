export interface DemoProspect {
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
}

export const DEMO_FIRM = {
  name: "Crestline Capital Advisors",
  aum: "$68M",
  aumRaw: 68_000_000,
  targetAum: "$120M",
  advisorName: "Sarah Mitchell",
  firmSlug: "demo-firm",
};

export const DEMO_PROSPECTS: DemoProspect[] = [
  // New
  {
    id: "demo_001",
    full_name: "Alexandra Chen",
    email: "a.chen@gmail.com",
    fit_score: 92,
    investable_assets_range: "1M-5M",
    pain_point: "Retirement income",
    timeline: "0-3 months",
    status: "new",
    next_action: "AI qualifier scheduled",
    source: "LinkedIn",
    created_at: new Date(Date.now() - 1 * 24 * 3600_000).toISOString(),
  },
  {
    id: "demo_002",
    full_name: "James Worthington III",
    email: "james.w@outlook.com",
    fit_score: 88,
    investable_assets_range: "1M-5M",
    pain_point: "Business exit",
    timeline: "3-6 months",
    status: "new",
    next_action: "AI qualifier scheduled",
    source: "Referral",
    created_at: new Date(Date.now() - 2 * 24 * 3600_000).toISOString(),
  },
  // Qualified
  {
    id: "demo_003",
    full_name: "Dr. Priya Ramaswamy",
    email: "priya.r@hospital.org",
    fit_score: 95,
    investable_assets_range: "5M+",
    pain_point: "Taxes on stock",
    timeline: "0-3 months",
    status: "qualified",
    next_action: "Book discovery call",
    source: "Podcast",
    created_at: new Date(Date.now() - 3 * 24 * 3600_000).toISOString(),
  },
  {
    id: "demo_004",
    full_name: "Robert & Linda Hayes",
    email: "hayes.family@icloud.com",
    fit_score: 91,
    investable_assets_range: "5M+",
    pain_point: "Business exit",
    timeline: "0-3 months",
    status: "qualified",
    next_action: "Send onboarding portal",
    source: "Google search",
    created_at: new Date(Date.now() - 4 * 24 * 3600_000).toISOString(),
  },
  {
    id: "demo_005",
    full_name: "Michael Torres",
    email: "mtorres@finance.com",
    fit_score: 84,
    investable_assets_range: "1M-5M",
    pain_point: "Market volatility",
    timeline: "3-6 months",
    status: "qualified",
    next_action: "Book discovery call",
    source: "Newsletter",
    created_at: new Date(Date.now() - 5 * 24 * 3600_000).toISOString(),
  },
  {
    id: "demo_006",
    full_name: "Catherine Blackwell",
    email: "c.blackwell@lawfirm.com",
    fit_score: 87,
    investable_assets_range: "1M-5M",
    pain_point: "Retirement income",
    timeline: "0-3 months",
    status: "qualified",
    next_action: "Send onboarding portal",
    source: "LinkedIn",
    created_at: new Date(Date.now() - 5.5 * 24 * 3600_000).toISOString(),
  },
  // Booked
  {
    id: "demo_007",
    full_name: "Dr. Aisha Rahman",
    email: "aisha.r@medgroup.com",
    fit_score: 96,
    investable_assets_range: "1M-5M",
    pain_point: "Retirement income",
    timeline: "0-3 months",
    status: "booked",
    next_action: "Discovery call — Thu 2pm",
    source: "Referral",
    created_at: new Date(Date.now() - 7 * 24 * 3600_000).toISOString(),
  },
  {
    id: "demo_008",
    full_name: "Thomas & Diane Beckett",
    email: "t.beckett@proton.me",
    fit_score: 89,
    investable_assets_range: "1M-5M",
    pain_point: "Taxes on stock",
    timeline: "0-3 months",
    status: "booked",
    next_action: "Discovery call — Fri 10am",
    source: "Google search",
    created_at: new Date(Date.now() - 8 * 24 * 3600_000).toISOString(),
  },
  // Onboarding
  {
    id: "demo_009",
    full_name: "Sophie Laurent",
    email: "sophie.l@design.co",
    fit_score: 93,
    investable_assets_range: "5M+",
    pain_point: "Business exit",
    timeline: "0-3 months",
    status: "onboarding",
    next_action: "Collect missing docs",
    source: "LinkedIn",
    created_at: new Date(Date.now() - 10 * 24 * 3600_000).toISOString(),
  },
  {
    id: "demo_010",
    full_name: "William & Grace Nakamura",
    email: "w.nakamura@techcorp.io",
    fit_score: 90,
    investable_assets_range: "1M-5M",
    pain_point: "Retirement income",
    timeline: "3-6 months",
    status: "onboarding",
    next_action: "Risk tolerance review",
    source: "Referral",
    created_at: new Date(Date.now() - 12 * 24 * 3600_000).toISOString(),
  },
  // Active
  {
    id: "demo_011",
    full_name: "Elizabeth Crane",
    email: "elizabeth.crane@me.com",
    fit_score: 94,
    investable_assets_range: "5M+",
    pain_point: "Taxes on stock",
    timeline: "0-3 months",
    status: "active",
    next_action: "Quarterly review — Aug",
    source: "Podcast",
    created_at: new Date(Date.now() - 30 * 24 * 3600_000).toISOString(),
  },
  {
    id: "demo_012",
    full_name: "David Park",
    email: "d.park@vcfund.com",
    fit_score: 86,
    investable_assets_range: "1M-5M",
    pain_point: "Market volatility",
    timeline: "3-6 months",
    status: "active",
    next_action: "Portfolio rebalance",
    source: "Newsletter",
    created_at: new Date(Date.now() - 45 * 24 * 3600_000).toISOString(),
  },
];

export const DEMO_KPI = {
  newQualified: 12,
  booked: 5,
  avgScore: 90,
  atRisk: 2_500_000,
  totalAum: 68_000_000,
};

export const DEMO_PIPELINE = [
  { name: "New", count: 2, fill: "#6b7280" },
  { name: "Qualified", count: 4, fill: "#7c5cff" },
  { name: "Booked", count: 2, fill: "#38bdf8" },
  { name: "Onboarding", count: 2, fill: "#fbbf24" },
  { name: "Active", count: 2, fill: "#3ecf8e" },
];

export const DEMO_SCORE_DIST = [
  { range: "0-29", count: 0, fill: "#ef4444" },
  { range: "30-49", count: 0, fill: "#f97316" },
  { range: "50-69", count: 0, fill: "#fbbf24" },
  { range: "70-79", count: 0, fill: "#a78bfa" },
  { range: "80-100", count: 12, fill: "#3ecf8e" },
];

export const DEMO_SOURCES = [
  { name: "LinkedIn", value: 4 },
  { name: "Referral", value: 3 },
  { name: "Google search", value: 2 },
  { name: "Podcast", value: 2 },
  { name: "Newsletter", value: 1 },
];
