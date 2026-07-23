import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { H as Check, I as Crown, n as X, p as ShieldCheck, q as ArrowRight, t as Zap, u as Sparkles } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/billing-2Oayspd1.js
var import_jsx_runtime = require_jsx_runtime();
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 16
	},
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: .45,
			delay: i * .1
		}
	})
};
var plans = [
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
			dedicatedCsm: false
		},
		cta: "Start free trial",
		popular: false
	},
	{
		name: "Growth",
		price: 797,
		period: "mo",
		description: "For growing firms that want full brand control",
		icon: Crown,
		highlights: [
			"500 leads / mo",
			"3 advisor seats",
			"White label"
		],
		features: {
			qualification: true,
			onboarding: true,
			meetingNotes: true,
			compliance: true,
			whiteLabel: true,
			apiAccess: false,
			prioritySupport: false,
			customIntegrations: false,
			dedicatedCsm: false
		},
		cta: "Start free trial",
		popular: true
	},
	{
		name: "Scale",
		price: 1297,
		period: "mo",
		description: "For enterprise firms that need everything",
		icon: Crown,
		highlights: [
			"Unlimited leads",
			"Unlimited seats",
			"Full API",
			"Priority support"
		],
		features: {
			qualification: true,
			onboarding: true,
			meetingNotes: true,
			compliance: true,
			whiteLabel: true,
			apiAccess: true,
			prioritySupport: true,
			customIntegrations: true,
			dedicatedCsm: true
		},
		cta: "Start free trial",
		popular: false
	}
];
var comparisonRows = [
	{
		label: "Lead qualification",
		starter: true,
		growth: true,
		scale: true
	},
	{
		label: "Client onboarding portal",
		starter: true,
		growth: true,
		scale: true
	},
	{
		label: "AI meeting notes",
		starter: true,
		growth: true,
		scale: true
	},
	{
		label: "SEC 17a-4 compliance",
		starter: true,
		growth: true,
		scale: true
	},
	{
		label: "White-label branding",
		starter: false,
		growth: true,
		scale: true
	},
	{
		label: "API access",
		starter: false,
		growth: false,
		scale: true
	},
	{
		label: "Priority support (<1hr SLA)",
		starter: false,
		growth: false,
		scale: true
	},
	{
		label: "Custom integrations",
		starter: false,
		growth: false,
		scale: true
	},
	{
		label: "Dedicated account manager",
		starter: false,
		growth: false,
		scale: true
	}
];
function Billing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: -8
				},
				animate: {
					opacity: 1,
					x: 0
				},
				transition: { duration: .4 },
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-8 w-8 place-items-center rounded-lg btn-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "leading-tight",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-semibold",
						children: "FiduciaryFlow"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] uppercase tracking-widest text-muted-foreground",
						children: "OS"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: 8
				},
				animate: {
					opacity: 1,
					x: 0
				},
				transition: {
					duration: .4,
					delay: .1
				},
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
					children: "Back to home"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/dashboard",
					className: "rounded-lg btn-primary px-4 py-2 text-sm font-medium hover:btn-primary-hover transition-all",
					children: "Dashboard"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-6 pt-12 pb-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 12
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .5 },
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3 w-3" }), "Trusted by 200+ fee-only RIAs"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "text-4xl font-semibold tracking-tight md:text-5xl",
							children: [
								"Plans that scale with your",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "gradient-text",
									children: "practice"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-xl text-muted-foreground",
							children: "Every plan includes a 14-day free trial. No credit card required. Cancel anytime."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-3",
					children: plans.map((plan, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						custom: i,
						variants: fadeUp,
						initial: "hidden",
						animate: "visible",
						className: `relative flex flex-col rounded-2xl p-8 transition-all ${plan.popular ? "glass-strong ring-2 ring-primary/40 shadow-[var(--shadow-glow)]" : "glass hover:shadow-[var(--shadow-glow)]"}`,
						children: [
							plan.popular && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full btn-primary px-3 py-0.5 text-xs font-semibold",
								children: "Most popular"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `grid h-10 w-10 place-items-center rounded-xl ${plan.popular ? "btn-primary" : "bg-accent"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(plan.icon, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold",
									children: plan.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: plan.description
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-baseline gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-4xl font-bold tracking-tight",
									children: ["$", plan.price]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-sm text-muted-foreground",
									children: ["/", plan.period]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-2",
								children: plan.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex items-center rounded-md bg-muted/60 px-2 py-0.5 text-xs text-muted-foreground",
									children: h
								}, h))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex-1 space-y-2.5",
								children: [
									{
										key: "qualification",
										label: "Lead qualification"
									},
									{
										key: "onboarding",
										label: "Client onboarding portal"
									},
									{
										key: "meetingNotes",
										label: "AI meeting notes"
									},
									{
										key: "compliance",
										label: "SEC 17a-4 compliance"
									},
									{
										key: "whiteLabel",
										label: "White-label branding"
									},
									{
										key: "apiAccess",
										label: "API access"
									},
									{
										key: "prioritySupport",
										label: "Priority support"
									},
									{
										key: "customIntegrations",
										label: "Custom integrations"
									},
									{
										key: "dedicatedCsm",
										label: "Dedicated account manager"
									}
								].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-sm",
									children: [plan.features[f.key] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 shrink-0 text-success" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4 shrink-0 text-muted-foreground/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: plan.features[f.key] ? "" : "text-muted-foreground",
										children: f.label
									})]
								}, f.key))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: `mt-8 flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-all ${plan.popular ? "btn-primary hover:btn-primary-hover" : "border border-border bg-muted/30 hover:bg-muted"}`,
								children: [plan.cta, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						]
					}, plan.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .5,
						delay: .5
					},
					className: "mt-16 glass-strong rounded-2xl p-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-semibold",
							children: "Start your 14-day free trial today"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "No credit card required. Full access to all features in your chosen plan. Set up in under 5 minutes."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex flex-wrap items-center justify-center gap-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "inline-flex items-center gap-2 rounded-lg btn-primary px-6 py-3 text-sm font-medium hover:btn-primary-hover transition-all",
								children: ["Start 14-Day Free Trial, No Card Required", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 text-success" }), "No credit card"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 text-success" }), "Cancel anytime"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 text-success" }), "SOC 2 compliant"]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .5,
						delay: .6
					},
					className: "mt-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-center text-2xl font-semibold tracking-tight",
						children: "Compare all features"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 overflow-x-auto rounded-2xl glass",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-4 text-left font-medium text-muted-foreground",
										children: "Feature"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-4 text-center font-medium",
										children: "Starter"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-4 text-center font-medium text-primary",
										children: "Growth"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-4 text-center font-medium",
										children: "Scale"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [comparisonRows.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: i < comparisonRows.length - 1 ? "border-b border-border" : "",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-3.5 text-muted-foreground",
										children: row.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-3.5 text-center",
										children: row.starter ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mx-auto h-4 w-4 text-success" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "mx-auto h-4 w-4 text-muted-foreground/30" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-3.5 text-center bg-primary/5",
										children: row.growth ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mx-auto h-4 w-4 text-success" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "mx-auto h-4 w-4 text-muted-foreground/30" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-3.5 text-center",
										children: row.scale ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mx-auto h-4 w-4 text-success" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "mx-auto h-4 w-4 text-muted-foreground/30" })
									})
								]
							}, row.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-t border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-4 font-medium",
										children: "Price"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-4 text-center font-semibold",
										children: "$497/mo"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-4 text-center font-semibold text-primary bg-primary/5",
										children: "$797/mo"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-6 py-4 text-center font-semibold",
										children: "$1,297/mo"
									})
								]
							})] })]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: {
						duration: .5,
						delay: .8
					},
					className: "mt-20 grid gap-6 md:grid-cols-3",
					children: [
						{
							q: "Can I change plans later?",
							a: "Yes, upgrade or downgrade anytime. Changes take effect on your next billing cycle."
						},
						{
							q: "What happens after the trial?",
							a: "You'll be prompted to select a plan. No charges until you confirm."
						},
						{
							q: "Do you offer annual pricing?",
							a: "Yes — save 20% with annual billing. Contact us for details."
						}
					].map((faq) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass rounded-xl p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-medium",
							children: faq.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: faq.a
						})]
					}, faq.q))
				})
			]
		})]
	});
}
//#endregion
export { Billing as component };
