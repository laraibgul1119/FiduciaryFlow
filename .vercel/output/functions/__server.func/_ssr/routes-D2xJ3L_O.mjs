import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as Lock, U as ChartLine, W as ChartColumn, i as Users, p as ShieldCheck, q as ArrowRight, t as Zap, u as Sparkles } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { r as DEMO_ADVISOR_SLUG } from "./constants-n5hCBu4R.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D2xJ3L_O.js
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
			delay: i * .08
		}
	})
};
function Landing() {
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
					to: "/q/$slug",
					params: { slug: DEMO_ADVISOR_SLUG },
					className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
					children: "Try the quiz"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/dashboard",
					className: "rounded-lg btn-primary px-4 py-2 text-sm font-medium hover:btn-primary-hover transition-all",
					children: "Enter dashboard"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-6 pt-16 pb-24",
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
					className: "mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[oklch(0.72_0.16_155)] animate-pulse" }), "Built for RIAs managing $100M+ AUM"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
					initial: {
						opacity: 0,
						y: 16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .6,
						delay: .1
					},
					className: "max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl",
					children: [
						"The ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "gradient-text",
							children: "client acquisition"
						}),
						" and compliance autopilot for fee-only advisors."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 12
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .5,
						delay: .2
					},
					className: "mt-6 max-w-2xl text-lg text-muted-foreground",
					children: "Qualify prospects in 45 seconds. Onboard with a compliant magic-link portal. Generate fiduciary meeting notes that satisfy SEC 17a-4 — automatically."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 12
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .5,
						delay: .3
					},
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/dashboard",
						className: "inline-flex items-center gap-2 rounded-lg btn-primary px-5 py-3 text-sm font-medium hover:btn-primary-hover transition-all",
						children: ["Open command center ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/q/$slug",
						params: { slug: DEMO_ADVISOR_SLUG },
						className: "inline-flex items-center gap-2 rounded-lg border border-border bg-muted/30 px-5 py-3 text-sm font-medium hover:bg-muted transition-colors",
						children: "See the lead qualifier"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20 grid gap-4 md:grid-cols-3",
					children: [
						{
							icon: Users,
							title: "Qualify in 45s",
							body: "Share one link. We score fit, timeline, and assets automatically."
						},
						{
							icon: ShieldCheck,
							title: "Compliance-ready",
							body: "17a-4 audit trail, fiduciary language rewrites, flagged phrases."
						},
						{
							icon: ChartLine,
							title: "Onboarding autopilot",
							body: "Magic-link portal, KYC, risk score, doc vault, e-signature."
						}
					].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						custom: i,
						variants: fadeUp,
						initial: "hidden",
						animate: "visible",
						className: "glass rounded-2xl p-6 transition-all hover:shadow-[var(--shadow-glow)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-9 w-9 place-items-center rounded-lg bg-accent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-medium",
								children: f.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: f.body
							})
						]
					}, f.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: {
						duration: .5,
						delay: .6
					},
					className: "mt-20 flex flex-wrap items-center justify-center gap-8 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-3.5 w-3.5" }), " 45-second qualification"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5" }), " SOC 2 compliant"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-3.5 w-3.5" }), " $2.4B+ AUM managed"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5" }), " SEC 17a-4 ready"]
						})
					]
				})
			]
		})]
	});
}
//#endregion
export { Landing as component };
