import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as LoaderCircle, F as ExternalLink, G as Calendar, N as FileText, c as TrendingUp, i as Users, n as X, q as ArrowRight, s as TriangleAlert } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { n as useDemoMode } from "./demo-mode-BOwLVUJd.mjs";
import { t as supabase } from "./client-DFEVOFwY.mjs";
import { t as AppShell } from "./AppShell-CxlVXhT7.mjs";
import { c as scoreColor, n as DEMO_ADVISOR_ID, s as formatMoney } from "./constants-n5hCBu4R.mjs";
import { a as XAxis, c as Pie, d as ResponsiveContainer, f as Tooltip, i as YAxis, n as PieChart, o as Bar, r as BarChart, u as Cell } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-CnyOtbAA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DEMO_FIRM = {
	name: "Crestline Capital Advisors",
	aum: "$68M",
	aumRaw: 68e6,
	targetAum: "$120M",
	advisorName: "Sarah Mitchell",
	firmSlug: "demo-firm"
};
var DEMO_PROSPECTS = [
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
		created_at: (/* @__PURE__ */ new Date(Date.now() - 24 * 36e5)).toISOString()
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
		created_at: (/* @__PURE__ */ new Date(Date.now() - 48 * 36e5)).toISOString()
	},
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
		created_at: (/* @__PURE__ */ new Date(Date.now() - 72 * 36e5)).toISOString()
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
		created_at: (/* @__PURE__ */ new Date(Date.now() - 96 * 36e5)).toISOString()
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
		created_at: (/* @__PURE__ */ new Date(Date.now() - 120 * 36e5)).toISOString()
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
		created_at: (/* @__PURE__ */ new Date(Date.now() - 5.5 * 24 * 36e5)).toISOString()
	},
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
		created_at: (/* @__PURE__ */ new Date(Date.now() - 168 * 36e5)).toISOString()
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
		created_at: (/* @__PURE__ */ new Date(Date.now() - 192 * 36e5)).toISOString()
	},
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
		created_at: (/* @__PURE__ */ new Date(Date.now() - 240 * 36e5)).toISOString()
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
		created_at: (/* @__PURE__ */ new Date(Date.now() - 288 * 36e5)).toISOString()
	},
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
		created_at: (/* @__PURE__ */ new Date(Date.now() - 720 * 36e5)).toISOString()
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
		created_at: (/* @__PURE__ */ new Date(Date.now() - 1080 * 36e5)).toISOString()
	}
];
var DEMO_KPI = {
	newQualified: 12,
	booked: 5,
	avgScore: 90,
	atRisk: 25e5,
	totalAum: 68e6
};
var DEMO_PIPELINE = [
	{
		name: "New",
		count: 2,
		fill: "#6b7280"
	},
	{
		name: "Qualified",
		count: 4,
		fill: "#7c5cff"
	},
	{
		name: "Booked",
		count: 2,
		fill: "#38bdf8"
	},
	{
		name: "Onboarding",
		count: 2,
		fill: "#fbbf24"
	},
	{
		name: "Active",
		count: 2,
		fill: "#3ecf8e"
	}
];
var DEMO_SCORE_DIST = [
	{
		range: "0-29",
		count: 0,
		fill: "#ef4444"
	},
	{
		range: "30-49",
		count: 0,
		fill: "#f97316"
	},
	{
		range: "50-69",
		count: 0,
		fill: "#fbbf24"
	},
	{
		range: "70-79",
		count: 0,
		fill: "#a78bfa"
	},
	{
		range: "80-100",
		count: 12,
		fill: "#3ecf8e"
	}
];
var DEMO_SOURCES = [
	{
		name: "LinkedIn",
		value: 4
	},
	{
		name: "Referral",
		value: 3
	},
	{
		name: "Google search",
		value: 2
	},
	{
		name: "Podcast",
		value: 2
	},
	{
		name: "Newsletter",
		value: 1
	}
];
var STATUSES = [
	"new",
	"qualified",
	"booked",
	"onboarding",
	"active"
];
var STATUS_COLORS = {
	new: "#6b7280",
	qualified: "#7c5cff",
	booked: "#38bdf8",
	onboarding: "#fbbf24",
	active: "#3ecf8e"
};
var container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: .06 }
	}
};
var item = {
	hidden: {
		opacity: 0,
		y: 12
	},
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: .35 }
	}
};
function Dashboard() {
	const [prospects, setProspects] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [selected, setSelected] = (0, import_react.useState)(null);
	const { demoMode } = useDemoMode();
	const load = async () => {
		setLoading(true);
		const { data } = await supabase.from("prospects").select("*").eq("advisor_id", DEMO_ADVISOR_ID).order("created_at", { ascending: false });
		setProspects(data || []);
		setLoading(false);
	};
	(0, import_react.useEffect)(() => {
		if (demoMode) {
			setProspects(DEMO_PROSPECTS);
			setLoading(false);
		} else load();
	}, [demoMode]);
	const kpis = (0, import_react.useMemo)(() => {
		if (demoMode) return {
			newQualified: DEMO_KPI.newQualified,
			booked: DEMO_KPI.booked,
			avgScore: DEMO_KPI.avgScore,
			atRisk: DEMO_KPI.atRisk
		};
		const weekAgo = Date.now() - 168 * 3600 * 1e3;
		return {
			newQualified: prospects.filter((p) => p.fit_score >= 80 && new Date(p.created_at).getTime() > weekAgo).length,
			booked: prospects.filter((p) => p.status === "booked" || p.status === "onboarding" || p.status === "active").length,
			avgScore: prospects.length ? Math.round(prospects.reduce((a, p) => a + p.fit_score, 0) / prospects.length) : 0,
			atRisk: prospects.filter((p) => p.status === "onboarding").length * 125e4
		};
	}, [prospects, demoMode]);
	const pipelineData = (0, import_react.useMemo)(() => {
		if (demoMode) return DEMO_PIPELINE;
		return STATUSES.map((s) => ({
			name: s.charAt(0).toUpperCase() + s.slice(1),
			count: prospects.filter((p) => p.status === s).length,
			fill: STATUS_COLORS[s]
		}));
	}, [prospects, demoMode]);
	const scoreDistribution = (0, import_react.useMemo)(() => {
		if (demoMode) return DEMO_SCORE_DIST;
		const buckets = [
			{
				range: "0-29",
				count: 0,
				fill: "#ef4444"
			},
			{
				range: "30-49",
				count: 0,
				fill: "#f97316"
			},
			{
				range: "50-69",
				count: 0,
				fill: "#fbbf24"
			},
			{
				range: "70-79",
				count: 0,
				fill: "#a78bfa"
			},
			{
				range: "80-100",
				count: 0,
				fill: "#3ecf8e"
			}
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
	const sourceData = (0, import_react.useMemo)(() => {
		if (demoMode) return DEMO_SOURCES;
		const map = {};
		prospects.forEach((p) => {
			const s = p.source || "Unknown";
			map[s] = (map[s] || 0) + 1;
		});
		return Object.entries(map).map(([name, value]) => ({
			name,
			value
		}));
	}, [prospects, demoMode]);
	const filtered = filter === "all" ? prospects : prospects.filter((p) => p.status === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		variants: container,
		initial: "hidden",
		animate: "show",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: item,
				className: "flex flex-wrap items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold tracking-tight",
					children: "Command Center"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: demoMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						DEMO_FIRM.name,
						" · ",
						DEMO_FIRM.aum,
						" AUM ·",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[oklch(0.72_0.16_155)] font-medium",
							children: "DEMO"
						})
					] }) : "Meridian Wealth Partners · $250M AUM target"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/q/$slug",
						params: { slug: demoMode ? DEMO_FIRM.firmSlug : "meridian" },
						className: "inline-flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 py-2 text-xs hover:bg-muted transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5" }), " View public quiz"]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: item,
				className: "mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						icon: TrendingUp,
						label: "New qualified this week",
						value: kpis.newQualified.toString(),
						trend: "+3 vs last"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						icon: Calendar,
						label: "Booked calls",
						value: kpis.booked.toString(),
						trend: "Pipeline flowing"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						icon: TriangleAlert,
						label: "Onboarding revenue at risk",
						value: formatMoney(kpis.atRisk),
						trend: "2 stalled >48h",
						tone: "warn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kpi, {
						icon: Users,
						label: "Avg fit score",
						value: kpis.avgScore.toString(),
						trend: "Target ≥ 75"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: item,
				className: "mt-6 grid gap-4 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-2xl p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
							children: "Pipeline"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 h-48",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: pipelineData,
									barSize: 28,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "name",
											tick: {
												fontSize: 11,
												fill: "var(--color-muted-foreground)"
											},
											axisLine: false,
											tickLine: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											tick: {
												fontSize: 11,
												fill: "var(--color-muted-foreground)"
											},
											axisLine: false,
											tickLine: false,
											allowDecimals: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
											contentStyle: {
												background: "var(--color-card)",
												border: "1px solid var(--color-border)",
												borderRadius: 12,
												fontSize: 12
											},
											cursor: {
												fill: "var(--color-muted)",
												opacity: .3
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "count",
											radius: [
												6,
												6,
												0,
												0
											],
											children: pipelineData.map((entry, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
												fill: entry.fill,
												fillOpacity: .85
											}, i))
										})
									]
								})
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-2xl p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
							children: "Score distribution"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 h-48",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
									data: scoreDistribution,
									barSize: 24,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
											dataKey: "range",
											tick: {
												fontSize: 10,
												fill: "var(--color-muted-foreground)"
											},
											axisLine: false,
											tickLine: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
											tick: {
												fontSize: 11,
												fill: "var(--color-muted-foreground)"
											},
											axisLine: false,
											tickLine: false,
											allowDecimals: false
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
											contentStyle: {
												background: "var(--color-card)",
												border: "1px solid var(--color-border)",
												borderRadius: 12,
												fontSize: 12
											},
											cursor: {
												fill: "var(--color-muted)",
												opacity: .3
											}
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
											dataKey: "count",
											radius: [
												6,
												6,
												0,
												0
											],
											children: scoreDistribution.map((entry, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
												fill: entry.fill,
												fillOpacity: .8
											}, i))
										})
									]
								})
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-2xl p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
							children: "Lead sources"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 h-48",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
									data: sourceData,
									cx: "50%",
									cy: "50%",
									innerRadius: 45,
									outerRadius: 70,
									paddingAngle: 3,
									dataKey: "value",
									stroke: "none",
									children: sourceData.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
										fill: [
											"#7c5cff",
											"#38bdf8",
											"#3ecf8e",
											"#fbbf24",
											"#f97316",
											"#ec4899",
											"#6b7280"
										][i % 7],
										fillOpacity: .85
									}, i))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
									background: "var(--color-card)",
									border: "1px solid var(--color-border)",
									borderRadius: 12,
									fontSize: 12
								} })] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 flex flex-wrap justify-center gap-3 text-[10px] text-muted-foreground",
								children: sourceData.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "h-2 w-2 rounded-full",
										style: { background: [
											"#7c5cff",
											"#38bdf8",
											"#3ecf8e",
											"#fbbf24",
											"#f97316",
											"#ec4899",
											"#6b7280"
										][i % 7] }
									}), s.name]
								}, s.name))
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-6 lg:grid-cols-[1fr_320px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: item,
					className: "glass rounded-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between border-b border-border p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold",
							children: "Lead Inbox"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1 text-xs",
							children: ["all", ...STATUSES].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setFilter(s),
								className: `rounded-md px-2 py-1 capitalize transition-colors ${filter === s ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground"}`,
								children: s
							}, s))
						})]
					}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid place-items-center p-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin text-muted-foreground" })
					}) : filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyInbox, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "text-xs uppercase tracking-wider text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-b border-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-4 py-3 text-left font-medium",
											children: "Name"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-4 py-3 text-left font-medium",
											children: "Fit"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-4 py-3 text-left font-medium",
											children: "Assets"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-4 py-3 text-left font-medium",
											children: "Pain"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-4 py-3 text-left font-medium",
											children: "Timeline"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-4 py-3 text-left font-medium",
											children: "Status"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											className: "px-4 py-3 text-left font-medium",
											children: "Next action"
										})
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: filtered.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								onClick: () => setSelected(p),
								className: "cursor-pointer border-b border-border/50 transition-colors hover:bg-muted/30",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "px-4 py-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-medium",
											children: p.full_name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-muted-foreground",
											children: p.email
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium ${scoreColor(p.fit_score)}`,
											children: p.fit_score
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 text-muted-foreground",
										children: p.investable_assets_range || "—"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 text-muted-foreground",
										children: p.pain_point || "—"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 text-muted-foreground",
										children: p.timeline || "—"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: p.status })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 text-muted-foreground",
										children: p.next_action || "—"
									})
								]
							}, p.id)) })]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.aside, {
					variants: item,
					className: "glass rounded-2xl p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-2 rounded-full bg-[oklch(0.72_0.16_155)] animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-semibold",
								children: demoMode ? "Demo Morning Brief" : "Morning Brief"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Generated 6:04 AM · GPT-5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-3 text-sm",
							children: demoMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefItem, {
									tone: "warn",
									children: "2 high-value leads (Priya Ramaswamy, Sophie Laurent) waiting for discovery call — combined $9M+ AUM"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefItem, {
									tone: "muted",
									children: "AI voice qualifier booked 4 meetings yesterday — saving ~2.5 hours of advisor time"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefItem, {
									tone: "danger",
									children: "1 compliance flag on the Beckett transcript (word: \"guarantee\") — auto-suggested rewrite"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefItem, {
									tone: "muted",
									children: "Sophie Laurent's onboarding at 75% — missing tax documents, auto-nudge sent"
								})
							] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefItem, {
									tone: "warn",
									children: "3 follow-ups overdue — Alexandra Chen, Priya Ramaswamy, Thomas Beckett"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefItem, {
									tone: "danger",
									children: "1 compliance flag on the Whitfield transcript (word: \"guaranteed\")"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefItem, {
									tone: "muted",
									children: "2 docs missing from Sophie Laurent's onboarding (ID, 401k statement)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefItem, {
									tone: "muted",
									children: "$1.25M AUM stalled >48h in onboarding — nudge queued for tomorrow"
								})
							] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/meetings",
							className: "mt-5 inline-flex items-center gap-1.5 text-xs text-primary hover:underline",
							children: ["Open meeting intel ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: item,
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 text-sm font-semibold",
					children: "Pipeline"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 md:grid-cols-5",
					children: STATUSES.map((s) => {
						const rows = prospects.filter((p) => p.status === s);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass rounded-xl p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-3 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-2 w-2 rounded-full",
										style: { background: STATUS_COLORS[s] }
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs font-medium capitalize",
										children: s
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: rows.length
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-2",
								children: rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-lg border border-dashed border-border p-3 text-xs text-muted-foreground",
									children: "Empty"
								}) : rows.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setSelected(p),
									className: "w-full rounded-lg border border-border bg-muted/30 p-2.5 text-left transition-colors hover:bg-muted/60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "truncate text-xs font-medium",
										children: p.full_name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-1 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `inline-flex items-center rounded border px-1.5 py-0 text-[10px] ${scoreColor(p.fit_score)}`,
											children: p.fit_score
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-muted-foreground",
											children: p.investable_assets_range
										})]
									})]
								}, p.id))
							})]
						}, s);
					})
				})]
			})
		]
	}), selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProspectDrawer, {
		prospect: selected,
		onClose: () => setSelected(null)
	})] });
}
function Kpi({ icon: Icon, label, value, trend, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass rounded-2xl p-5 transition-all hover:shadow-[var(--shadow-glow)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" }),
					" ",
					label
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 text-3xl font-semibold tracking-tight",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `mt-1 text-xs ${tone === "warn" ? "text-[oklch(0.85_0.16_85)]" : "text-muted-foreground"}`,
				children: trend
			})
		]
	});
}
function StatusPill({ status }) {
	const map = {
		new: "bg-muted text-muted-foreground",
		qualified: "bg-primary/15 text-primary",
		booked: "bg-[oklch(0.68_0.20_220)]/15 text-[oklch(0.78_0.20_220)]",
		onboarding: "bg-[oklch(0.82_0.16_85)]/15 text-[oklch(0.85_0.16_85)]",
		active: "bg-[oklch(0.72_0.16_155)]/15 text-[oklch(0.78_0.16_155)]",
		lost: "bg-destructive/15 text-destructive"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex rounded-md px-2 py-0.5 text-xs capitalize ${map[status] || map.new}`,
		children: status
	});
}
function BriefItem({ tone, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${tone === "warn" ? "bg-[oklch(0.82_0.16_85)]" : tone === "danger" ? "bg-destructive" : "bg-muted-foreground"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground",
			children
		})]
	});
}
function EmptyInbox() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-12 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid h-12 w-12 place-items-center rounded-full bg-muted/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-5 w-5 text-muted-foreground" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 text-sm font-medium",
				children: "No leads yet"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: "Share your qualifier link on LinkedIn to fill the pipeline."
			})
		]
	});
}
function ProspectDrawer({ prospect, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-40 flex justify-end bg-black/50 backdrop-blur-sm",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: { x: "100%" },
			animate: { x: 0 },
			transition: {
				type: "spring",
				damping: 30,
				stiffness: 300
			},
			className: "glass-strong h-full w-full max-w-md overflow-y-auto p-6",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: "Prospect"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 text-xl font-semibold",
							children: prospect.full_name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-muted-foreground",
							children: prospect.email
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "rounded-md p-1 hover:bg-muted transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid grid-cols-2 gap-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Fit score",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `inline-flex rounded border px-2 py-0.5 text-xs ${scoreColor(prospect.fit_score)}`,
								children: prospect.fit_score
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Status",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusPill, { status: prospect.status })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Assets",
							children: prospect.investable_assets_range || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Timeline",
							children: prospect.timeline || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Pain point",
							children: prospect.pain_point || "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Next action",
							children: prospect.next_action || "—"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/onboarding/$id",
						params: { id: prospect.id },
						className: "inline-flex flex-1 items-center justify-center gap-2 rounded-lg btn-primary px-4 py-2 text-sm font-medium hover:btn-primary-hover transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4" }), " Open onboarding"]
					})
				})
			]
		})
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-xs text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-1",
		children
	})] });
}
//#endregion
export { Dashboard as component };
