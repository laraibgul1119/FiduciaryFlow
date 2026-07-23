import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { B as CircleCheck, D as LoaderCircle, L as Copy, p as ShieldCheck, s as TriangleAlert, u as Sparkles, w as Mic } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { t as supabase } from "./client-DFEVOFwY.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AppShell } from "./AppShell-CxlVXhT7.mjs";
import { n as DEMO_ADVISOR_ID } from "./constants-n5hCBu4R.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/meetings-CsV_DrDX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SAMPLE = `Advisor: Thanks for making time today. Walk me through your goals for the next 3 years.
Client: I want to retire by 60. I've got about $2.1M in a mix of company stock and a Fidelity IRA. Concentrated in NVDA.
Advisor: Understood. Concentration risk is real. If we diversified, we could target a smoother ride — historically the S&P returns 8-10% annualized.
Client: What kind of return can you guarantee me?
Advisor: I'd frame it as expected returns based on long-term historical performance — no guarantees in markets, but we can build a portfolio aligned to your risk tolerance.
Client: OK. I also worry about my tax bill if we sell the NVDA position.
Advisor: We'd stage the sale over 24 months, harvest losses elsewhere, and use donor-advised funds for the appreciated shares.`;
function Meetings() {
	const [transcript, setTranscript] = (0, import_react.useState)(SAMPLE);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [result, setResult] = (0, import_react.useState)(null);
	const [complianceMode, setComplianceMode] = (0, import_react.useState)(true);
	const generate = async () => {
		setLoading(true);
		setTimeout(async () => {
			const flags = [];
			if (/guarantee/i.test(transcript)) flags.push({
				phrase: "guarantee",
				suggestion: "Replace with 'historical performance' or 'expected returns'."
			});
			if (/promise/i.test(transcript)) flags.push({
				phrase: "promise",
				suggestion: "Replace with 'plan to' or 'target'."
			});
			const r = {
				summary: [
					"Client targeting retirement at age 60 with ~$2.1M in investable assets.",
					"Portfolio is concentrated in a single-name equity (NVDA); diversification discussed.",
					"Tax-efficient staged liquidation strategy proposed over 24 months."
				],
				goals: [
					"Retire by age 60",
					"Reduce single-stock concentration",
					"Minimize tax drag on liquidation"
				],
				actions: [
					"Draft diversification plan and phased sale schedule (owner: advisor, due: +7d)",
					"Model tax impact using client's 2024 return (owner: advisor, due: +5d)",
					"Introduce donor-advised fund option and paperwork (owner: advisor, due: +14d)"
				],
				flags,
				crmNotes: `Meeting held ${(/* @__PURE__ */ new Date()).toLocaleString()}. Client re-confirmed 3-yr retirement horizon and moderate-aggressive risk tolerance. Discussed staged diversification of concentrated NVDA position with tax-loss harvesting and DAF donation of appreciated shares. Fiduciary framing used throughout — no return guarantees offered. Next step: deliver phased liquidation plan within 7 days.`
			};
			setResult(r);
			await supabase.from("meetings").insert({
				advisor_id: DEMO_ADVISOR_ID,
				transcript_text: transcript,
				ai_summary: r.summary.join(" "),
				action_items: r.actions,
				compliance_flags: flags,
				fiduciary_notes: r.crmNotes
			});
			await supabase.from("audit_logs").insert({
				advisor_id: DEMO_ADVISOR_ID,
				action: "meeting.notes_generated",
				actor: "advisor",
				details: {
					retention: "17a-4",
					flags: flags.length
				}
			});
			setLoading(false);
		}, 1400);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 8
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: { duration: .4 },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold tracking-tight",
				children: "Meeting Intelligence"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Generate fiduciary notes, flag compliance risk, log per SEC 17a-4."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 py-2 text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-[oklch(0.78_0.16_155)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Compliance mode ", complianceMode ? "ON" : "OFF"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setComplianceMode((v) => !v),
						className: `ml-2 h-4 w-7 rounded-full transition-colors ${complianceMode ? "bg-primary" : "bg-muted"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block h-3 w-3 translate-y-0.5 rounded-full bg-white transition-transform ${complianceMode ? "translate-x-3.5" : "translate-x-0.5"}` })
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: -12
				},
				animate: {
					opacity: 1,
					x: 0
				},
				transition: {
					duration: .4,
					delay: .1
				},
				className: "glass rounded-2xl p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-semibold",
							children: "Transcript"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/40 px-2 py-1 text-xs hover:bg-muted transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "h-3 w-3" }), " Upload audio (mock)"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: transcript,
						onChange: (e) => setTranscript(e.target.value),
						rows: 16,
						className: "w-full resize-none rounded-lg border border-border bg-muted/30 p-3 text-xs leading-relaxed outline-none focus:border-primary/40 font-mono transition-colors"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: generate,
						disabled: loading || !transcript,
						className: "mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg btn-primary py-2.5 text-sm font-medium disabled:opacity-40 hover:btn-primary-hover transition-all",
						children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }), "Generate Fiduciary Notes"]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: 12
				},
				animate: {
					opacity: 1,
					x: 0
				},
				transition: {
					duration: .4,
					delay: .2
				},
				className: "glass rounded-2xl p-5",
				children: [
					!result && !loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-full place-items-center py-16 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto grid h-12 w-12 place-items-center rounded-full bg-accent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 text-sm font-medium",
								children: "Notes will appear here"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: "17a-4 retention · fiduciary language · flagged phrases"
							})
						] })
					}),
					loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-full place-items-center py-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mx-auto h-6 w-6 animate-spin text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 text-xs text-muted-foreground",
								children: "Reviewing transcript with GPT-5…"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .4 },
						className: "space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
								title: "Meeting Summary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-1.5 text-sm text-muted-foreground",
									children: result.summary.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
										initial: {
											opacity: 0,
											x: -8
										},
										animate: {
											opacity: 1,
											x: 0
										},
										transition: { delay: i * .1 },
										children: ["• ", s]
									}, i))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
								title: "Client Goals Stated",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-1.5 text-sm text-muted-foreground",
									children: result.goals.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
										initial: {
											opacity: 0,
											x: -8
										},
										animate: {
											opacity: 1,
											x: 0
										},
										transition: { delay: .3 + i * .1 },
										children: ["• ", g]
									}, i))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
								title: "Fiduciary Action Items",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-1.5 text-sm text-muted-foreground",
									children: result.actions.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
										initial: {
											opacity: 0,
											x: -8
										},
										animate: {
											opacity: 1,
											x: 0
										},
										transition: { delay: .5 + i * .1 },
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" }), a]
									}, i))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
								title: "Compliance Flags",
								children: result.flags.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border border-border bg-muted/30 p-3 text-xs text-muted-foreground flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-[oklch(0.78_0.16_155)]" }), "No flags detected. Transcript is compliant."]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-2",
									children: result.flags.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
										initial: {
											opacity: 0,
											scale: .95
										},
										animate: {
											opacity: 1,
											scale: 1
										},
										transition: { delay: .6 + i * .1 },
										className: "rounded-lg border border-destructive/30 bg-destructive/5 p-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 text-xs font-medium text-destructive",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-3.5 w-3.5" }),
												" Flagged phrase: \"",
												f.phrase,
												"\""
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-1 text-xs text-muted-foreground",
											children: ["→ ", f.suggestion]
										})]
									}, i))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
								title: "CRM Notes (fiduciary language)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative rounded-lg border border-border bg-muted/30 p-3 text-xs leading-relaxed text-muted-foreground",
									children: [result.crmNotes, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											navigator.clipboard.writeText(result.crmNotes);
											toast.success("Copied to clipboard");
										},
										className: "absolute right-2 top-2 rounded-md border border-border bg-background/50 p-1.5 hover:bg-muted transition-colors",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-3 w-3" })
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: { opacity: 0 },
								animate: { opacity: 1 },
								transition: { delay: .8 },
								className: "rounded-lg border border-[oklch(0.72_0.16_155)]/30 bg-[oklch(0.72_0.16_155)]/5 p-3 text-xs text-[oklch(0.78_0.16_155)] flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 shrink-0" }), "Meeting notes generated and stored per SEC Rule 17a-4 · Audit log created"]
							})
						]
					}) })
				]
			})]
		})]
	}) });
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
		children: title
	}), children] });
}
//#endregion
export { Meetings as component };
