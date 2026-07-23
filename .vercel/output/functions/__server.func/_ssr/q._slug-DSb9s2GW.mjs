import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { B as CircleCheck, D as LoaderCircle, J as ArrowLeft, q as ArrowRight, u as Sparkles } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { t as supabase } from "./client-DFEVOFwY.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as SOURCES, i as PAIN_POINTS, l as scoreProspect, o as TIMELINES, t as ASSETS_RANGES } from "./constants-n5hCBu4R.mjs";
import { t as Route } from "./q._slug-Dy7a16DG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/q._slug-DSb9s2GW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Quiz() {
	const { slug } = Route.useParams();
	const [advisor, setAdvisor] = (0, import_react.useState)(null);
	const [step, setStep] = (0, import_react.useState)(0);
	const [assets, setAssets] = (0, import_react.useState)("");
	const [pain, setPain] = (0, import_react.useState)("");
	const [timeline, setTimeline] = (0, import_react.useState)("");
	const [source, setSource] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [result, setResult] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		supabase.from("advisors").select("id,firm_name,calendly_link,disclosure,brand_color").eq("slug", slug).maybeSingle().then(({ data }) => setAdvisor(data));
	}, [slug]);
	const totalSteps = 5;
	const progress = (step + (result ? 1 : 0)) / totalSteps * 100;
	const submit = async () => {
		if (!advisor) return;
		setSubmitting(true);
		const score = scoreProspect(assets, timeline);
		const qualified = score >= 80;
		const { data, error } = await supabase.from("prospects").insert({
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
			next_action: qualified ? "Book intro call" : "Add to nurture sequence"
		}).select().single();
		setSubmitting(false);
		if (error) {
			toast.error("Something went wrong. Please try again.");
			return;
		}
		if (data) await supabase.from("audit_logs").insert({
			prospect_id: data.id,
			advisor_id: advisor.id,
			action: "prospect.qualified",
			actor: email,
			details: {
				score,
				qualified,
				source
			}
		});
		setResult({
			qualified,
			score
		});
	};
	if (!advisor) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-screen place-items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin text-muted-foreground" })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl px-6 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 8
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .4 },
					className: "mb-10 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-8 w-8 place-items-center rounded-lg btn-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-medium",
						children: advisor.firm_name
					})]
				}),
				!result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
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
							delay: .1
						},
						className: "text-3xl font-semibold tracking-tight md:text-4xl",
						children: [
							"See if you're a fit for ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gradient-text",
								children: advisor.firm_name
							}),
							" in 45 seconds."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							duration: .5,
							delay: .2
						},
						className: "mt-3 text-sm text-muted-foreground",
						children: "No credit check. No sales call unless you book one."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							duration: .4,
							delay: .3
						},
						className: "mt-8 h-1.5 w-full overflow-hidden rounded-full bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "h-full btn-primary",
							initial: { width: 0 },
							animate: { width: `${progress}%` },
							transition: {
								duration: .5,
								ease: "easeOut"
							}
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex justify-between text-xs text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"Step ",
							Math.min(step + 1, totalSteps),
							" of ",
							totalSteps
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [Math.round(progress), "%"] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 glass rounded-2xl p-6 md:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, {
							mode: "wait",
							children: [
								step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: {
										opacity: 0,
										x: 20
									},
									animate: {
										opacity: 1,
										x: 0
									},
									exit: {
										opacity: 0,
										x: -20
									},
									transition: { duration: .25 },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
										title: "Investable assets?",
										subtitle: "Excludes primary residence.",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid gap-2",
											children: ASSETS_RANGES.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
												initial: {
													opacity: 0,
													y: 8
												},
												animate: {
													opacity: 1,
													y: 0
												},
												transition: {
													duration: .2,
													delay: i * .05
												},
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceButton, {
													selected: assets === r.value,
													onClick: () => setAssets(r.value),
													children: r.label
												})
											}, r.value))
										})
									})
								}, "step0"),
								step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: {
										opacity: 0,
										x: 20
									},
									animate: {
										opacity: 1,
										x: 0
									},
									exit: {
										opacity: 0,
										x: -20
									},
									transition: { duration: .25 },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
										title: "What is your #1 financial concern?",
										subtitle: "Pick the one that keeps you up at night.",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid gap-2",
											children: PAIN_POINTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
												initial: {
													opacity: 0,
													y: 8
												},
												animate: {
													opacity: 1,
													y: 0
												},
												transition: {
													duration: .2,
													delay: i * .05
												},
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceButton, {
													selected: pain === p,
													onClick: () => setPain(p),
													children: p
												})
											}, p))
										})
									})
								}, "step1"),
								step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: {
										opacity: 0,
										x: 20
									},
									animate: {
										opacity: 1,
										x: 0
									},
									exit: {
										opacity: 0,
										x: -20
									},
									transition: { duration: .25 },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
										title: "Timeline to make a move?",
										subtitle: "Be honest — we'll route you accordingly.",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid gap-2",
											children: TIMELINES.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
												initial: {
													opacity: 0,
													y: 8
												},
												animate: {
													opacity: 1,
													y: 0
												},
												transition: {
													duration: .2,
													delay: i * .05
												},
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceButton, {
													selected: timeline === t.value,
													onClick: () => setTimeline(t.value),
													children: t.value
												})
											}, t.value))
										})
									})
								}, "step2"),
								step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: {
										opacity: 0,
										x: 20
									},
									animate: {
										opacity: 1,
										x: 0
									},
									exit: {
										opacity: 0,
										x: -20
									},
									transition: { duration: .25 },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
										title: "How did you hear about us?",
										subtitle: "Helps us serve you better.",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid gap-2",
											children: SOURCES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
												initial: {
													opacity: 0,
													y: 8
												},
												animate: {
													opacity: 1,
													y: 0
												},
												transition: {
													duration: .2,
													delay: i * .04
												},
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChoiceButton, {
													selected: source === s,
													onClick: () => setSource(s),
													children: s
												})
											}, s))
										})
									})
								}, "step3"),
								step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									initial: {
										opacity: 0,
										x: 20
									},
									animate: {
										opacity: 1,
										x: 0
									},
									exit: {
										opacity: 0,
										x: -20
									},
									transition: { duration: .25 },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
										title: "Where should we send your results?",
										subtitle: "We never share your info. Ever.",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid gap-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													label: "Full name",
													value: name,
													onChange: setName,
													placeholder: "Jane Doe"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													label: "Email",
													value: email,
													onChange: setEmail,
													placeholder: "jane@example.com",
													type: "email"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													label: "Phone (optional)",
													value: phone,
													onChange: setPhone,
													placeholder: "+1 415 555 0100"
												})
											]
										})
									})
								}, "step4")
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								disabled: step === 0,
								onClick: () => setStep((s) => Math.max(0, s - 1)),
								className: "inline-flex items-center gap-2 text-sm text-muted-foreground disabled:opacity-40 hover:text-foreground transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back"]
							}), step < 4 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								disabled: step === 0 && !assets || step === 1 && !pain || step === 2 && !timeline || step === 3 && !source,
								onClick: () => setStep((s) => s + 1),
								className: "inline-flex items-center gap-2 rounded-lg btn-primary px-4 py-2 text-sm font-medium disabled:opacity-40 hover:btn-primary-hover transition-all",
								children: ["Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								disabled: !name || !email || submitting,
								onClick: submit,
								className: "inline-flex items-center gap-2 rounded-lg btn-primary px-4 py-2 text-sm font-medium disabled:opacity-40 hover:btn-primary-hover transition-all",
								children: [submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" }), "See my result"]
							})]
						})]
					})
				] }),
				result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .95
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						duration: .5,
						ease: "easeOut"
					},
					className: "glass rounded-2xl p-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: { scale: 0 },
							animate: { scale: 1 },
							transition: {
								duration: .4,
								delay: .2,
								type: "spring",
								stiffness: 200
							},
							className: "mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-7 w-7 text-[oklch(0.78_0.16_155)]" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 text-xs uppercase tracking-widest text-muted-foreground",
							children: "Fit score"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .4,
								delay: .3
							},
							className: "mt-1 text-5xl font-semibold gradient-text",
							children: result.score
						}),
						result.qualified ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .4,
								delay: .4
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-6 text-2xl font-semibold",
									children: "You're a strong fit."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "Book your intro call below. A senior advisor will be assigned within 24 hours."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: advisor.calendly_link || "#",
									target: "_blank",
									rel: "noreferrer",
									className: "mt-6 inline-flex items-center gap-2 rounded-lg btn-primary px-5 py-3 text-sm font-medium hover:btn-primary-hover transition-all",
									children: ["Book intro call ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})
							]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .4,
								delay: .4
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-6 text-2xl font-semibold",
									children: "Join our weekly tax insights."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "We'll send you fiduciary-grade tax and portfolio strategies every Friday. When you're ready, we'll be here."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 inline-flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-4 py-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-[oklch(0.78_0.16_155)]" }), " Added to nurture list"]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 text-center text-[11px] leading-relaxed text-muted-foreground",
					children: advisor.disclosure || "Educational purposes only, not investment advice."
				})
			]
		})
	});
}
function Step({ title, subtitle, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-xl font-semibold",
			children: title
		}),
		subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted-foreground",
			children: subtitle
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6",
			children
		})
	] });
}
function ChoiceButton({ selected, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick,
		className: `flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition-all ${selected ? "border-primary/60 bg-primary/10 text-foreground" : "border-border bg-muted/30 text-muted-foreground hover:border-primary/30 hover:text-foreground"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }), selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-primary" })]
	});
}
function Input({ label, value, onChange, placeholder, type = "text" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1.5 block text-xs font-medium text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			value,
			onChange: (e) => onChange(e.target.value),
			placeholder,
			className: "w-full rounded-lg border border-border bg-muted/40 px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary/50 focus:bg-muted/60"
		})]
	});
}
//#endregion
export { Quiz as component };
