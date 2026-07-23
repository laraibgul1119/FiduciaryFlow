import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { A as Landmark, B as CircleCheck, D as LoaderCircle, M as FileUp, V as CircleAlert, b as PenLine, o as Upload, p as ShieldCheck, u as Sparkles } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { t as supabase } from "./client-DFEVOFwY.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { d as ResponsiveContainer, l as PolarAngleAxis, s as RadialBar, t as RadialBarChart } from "../_libs/recharts+[...].mjs";
import { t as Route } from "./onboarding._id-DjSwJTqx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/onboarding._id-Dt8b51fI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var RISK_Q = [
	"Market drops 20% next month. You…",
	"Your ideal portfolio in one word?",
	"Time horizon for these assets?",
	"Reaction to a 12-month flat return?",
	"Concentration in one stock is…",
	"Bonds in your portfolio should be…",
	"Alternative assets appetite?",
	"Preference for tax-loss harvesting?",
	"Interest in private markets?",
	"Overall risk tolerance self-rating?"
];
var cardVariants = {
	hidden: {
		opacity: 0,
		y: 16
	},
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: .35,
			delay: i * .08
		}
	})
};
function Onboarding() {
	const { id } = Route.useParams();
	const [prospect, setProspect] = (0, import_react.useState)(null);
	const [cl, setCl] = (0, import_react.useState)({
		kyc_complete: false,
		risk_questionnaire_score: null,
		docs_uploaded: false,
		bank_linked: false,
		agreement_signed: false,
		progress_percent: 0
	});
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [confetti, setConfetti] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		(async () => {
			const { data: p } = await supabase.from("prospects").select("id,full_name,email").eq("id", id).maybeSingle();
			setProspect(p);
			const { data: c } = await supabase.from("onboarding_checklists").select("*").eq("prospect_id", id).maybeSingle();
			if (c) setCl(c);
			setLoading(false);
		})();
	}, [id]);
	const persist = async (next) => {
		const merged = {
			...cl,
			...next
		};
		const steps = [
			merged.kyc_complete,
			merged.risk_questionnaire_score !== null,
			merged.docs_uploaded,
			merged.agreement_signed,
			merged.bank_linked
		];
		merged.progress_percent = Math.round(steps.filter(Boolean).length / steps.length * 100);
		setCl(merged);
		await supabase.from("onboarding_checklists").upsert({
			...merged,
			prospect_id: id
		}, { onConflict: "prospect_id" });
		await supabase.from("audit_logs").insert({
			prospect_id: id,
			action: "onboarding.update",
			actor: prospect?.email || "prospect",
			details: next
		});
		if (merged.progress_percent === 100) {
			setConfetti(true);
			setTimeout(() => setConfetti(false), 4e3);
			await supabase.from("prospects").update({ status: "active" }).eq("id", id);
		}
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-screen place-items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin text-muted-foreground" })
	});
	if (!prospect) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-screen place-items-center text-sm text-muted-foreground",
		children: "Invalid link."
	});
	const stepsLeft = [
		cl.kyc_complete,
		cl.risk_questionnaire_score !== null,
		cl.docs_uploaded,
		cl.agreement_signed,
		cl.bank_linked
	].filter((v) => !v).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [confetti && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Confetti, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-6 py-14",
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
					className: "mb-8 flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-8 w-8 place-items-center rounded-lg btn-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-medium",
						children: "FiduciaryFlow · Client Portal"
					})]
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
						delay: .1
					},
					className: "glass rounded-2xl p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs uppercase tracking-widest text-muted-foreground",
							children: ["Welcome, ", prospect.full_name.split(" ")[0]]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-2 text-3xl font-semibold tracking-tight",
							children: [
								"You're ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "gradient-text",
									children: stepsLeft
								}),
								" step",
								stepsLeft === 1 ? "" : "s",
								" away from your personalized plan."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 h-2 w-full overflow-hidden rounded-full bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								className: "h-full btn-primary",
								initial: { width: 0 },
								animate: { width: `${cl.progress_percent}%` },
								transition: {
									duration: .7,
									ease: "easeOut"
								}
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex justify-between text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Progress" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [cl.progress_percent, "%"] })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							custom: 0,
							variants: cardVariants,
							initial: "hidden",
							animate: "visible",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdentityCard, {
								done: cl.kyc_complete,
								onDone: () => persist({ kyc_complete: true })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							custom: 1,
							variants: cardVariants,
							initial: "hidden",
							animate: "visible",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskCard, {
								score: cl.risk_questionnaire_score,
								onDone: (s) => persist({ risk_questionnaire_score: s })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							custom: 2,
							variants: cardVariants,
							initial: "hidden",
							animate: "visible",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocsCard, {
								done: cl.docs_uploaded,
								onDone: () => persist({ docs_uploaded: true }),
								prospectId: id
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							custom: 3,
							variants: cardVariants,
							initial: "hidden",
							animate: "visible",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AgreementCard, {
								done: cl.agreement_signed,
								name: prospect.full_name,
								onDone: () => persist({ agreement_signed: true })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							custom: 4,
							variants: cardVariants,
							initial: "hidden",
							animate: "visible",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BankCard, {
								done: cl.bank_linked,
								onDone: () => persist({ bank_linked: true })
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: { delay: .6 },
					className: "mt-8 rounded-2xl border border-dashed border-border p-4 text-xs text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-foreground",
								children: "SMS nudge preview: "
							}),
							"If no upload in 2 days, we'll auto-send: \"Hi ",
							prospect.full_name.split(" ")[0],
							", still need your 401k statement to finalize your plan — takes 30 seconds via the secure link.\""
						] })]
					})
				})
			]
		})]
	});
}
function StepCard({ icon: Icon, title, subtitle, done, children, defaultOpen }) {
	const [open, setOpen] = (0, import_react.useState)(defaultOpen ?? !done);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `glass rounded-2xl transition-all ${done ? "opacity-70" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => setOpen((v) => !v),
			className: "flex w-full items-center gap-4 p-5 text-left",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `grid h-10 w-10 shrink-0 place-items-center rounded-lg transition-colors ${done ? "bg-[oklch(0.72_0.16_155)]/15 text-[oklch(0.78_0.16_155)]" : "bg-accent"}`,
					children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-medium",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: subtitle
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-muted-foreground",
					children: done ? "Done" : "Open"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				height: 0,
				opacity: 0
			},
			animate: {
				height: "auto",
				opacity: 1
			},
			exit: {
				height: 0,
				opacity: 0
			},
			transition: { duration: .25 },
			className: "overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border p-5",
				children
			})
		}) })]
	});
}
function IdentityCard({ done, onDone }) {
	const [scanning, setScanning] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepCard, {
		icon: ShieldCheck,
		title: "Identity Verification",
		subtitle: "Plaid-secured KYC — takes 30 seconds",
		done,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-lg border border-border bg-muted/30 p-6 text-center",
			children: scanning ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto h-1.5 w-40 overflow-hidden rounded-full bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-1/2 btn-primary shimmer" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs text-muted-foreground",
					children: "Verifying with Plaid Identity…"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 8
				},
				animate: {
					opacity: 1,
					y: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto grid h-10 w-10 place-items-center rounded-full bg-accent",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm",
						children: "Upload a photo of your government-issued ID"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							setScanning(true);
							setTimeout(() => {
								setScanning(false);
								onDone();
								toast.success("Identity verified");
							}, 1600);
						},
						className: "mt-4 inline-flex items-center gap-2 rounded-lg btn-primary px-4 py-2 text-sm font-medium hover:btn-primary-hover transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-4 w-4" }), " Verify with Plaid"]
					})
				]
			})
		})
	});
}
function RiskCard({ score, onDone }) {
	const [answers, setAnswers] = (0, import_react.useState)(Array(10).fill(50));
	const avg = Math.round(answers.reduce((a, b) => a + b, 0) / answers.length);
	const label = avg < 33 ? "Conservative" : avg < 66 ? "Moderate" : "Aggressive";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepCard, {
		icon: PenLine,
		title: "Risk Questionnaire",
		subtitle: "10 questions · gauge your tolerance",
		done: score !== null,
		children: score !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskGauge, { score }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				RISK_Q.map((q, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: -8
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: {
						duration: .2,
						delay: i * .03
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center justify-between text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted-foreground",
							children: [
								i + 1,
								". ",
								q
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums text-muted-foreground",
							children: answers[i]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "range",
						min: 1,
						max: 99,
						value: answers[i],
						onChange: (e) => setAnswers((a) => a.map((v, idx) => idx === i ? Number(e.target.value) : v)),
						className: "w-full accent-[oklch(0.72_0.19_290)]"
					})]
				}, i)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-muted/40 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: "Current profile"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 text-2xl font-semibold gradient-text",
						children: [
							label,
							" · ",
							avg
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						onDone(avg);
						toast.success("Risk profile saved");
					},
					className: "w-full rounded-lg btn-primary py-2.5 text-sm font-medium hover:btn-primary-hover transition-all",
					children: "Save risk profile"
				})
			]
		})
	});
}
function RiskGauge({ score }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid place-items-center py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-48 w-48",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
				width: "100%",
				height: "100%",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadialBarChart, {
					cx: "50%",
					cy: "50%",
					innerRadius: "70%",
					outerRadius: "100%",
					startAngle: 210,
					endAngle: -30,
					data: [{
						name: "risk",
						value: score,
						fill: score < 33 ? "#3ecf8e" : score < 66 ? "#fbbf24" : "#ef4444"
					}],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PolarAngleAxis, {
						type: "number",
						domain: [0, 100],
						tick: false
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadialBar, {
						background: { fill: "var(--color-muted)" },
						dataKey: "value",
						cornerRadius: 12,
						isAnimationActive: true,
						animationDuration: 1200
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 grid place-items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-4xl font-semibold gradient-text",
						children: score
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground",
						children: score < 33 ? "Conservative" : score < 66 ? "Moderate" : "Aggressive"
					})]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex items-center gap-6 text-[10px] text-muted-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-[#3ecf8e]" }), " Conservative"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-[#fbbf24]" }), " Moderate"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-[#ef4444]" }), " Aggressive"]
				})
			]
		})]
	});
}
function DocsCard({ done, onDone, prospectId }) {
	const [scanning, setScanning] = (0, import_react.useState)(false);
	const [files, setFiles] = (0, import_react.useState)([]);
	const drop = async (name) => {
		setScanning(true);
		await supabase.from("documents").insert({
			prospect_id: prospectId,
			file_name: name,
			type: name.toLowerCase().includes("tax") ? "tax_doc" : "statement"
		});
		setTimeout(() => {
			setScanning(false);
			setFiles((f) => [...f, name]);
		}, 1400);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StepCard, {
		icon: FileUp,
		title: "Document Vault",
		subtitle: "401k statement, tax return",
		done,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl border-2 border-dashed border-border p-6 text-center",
				children: scanning ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: "Extracting holdings…"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto mt-3 h-1 w-48 overflow-hidden rounded-full bg-muted",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-2/3 btn-primary shimmer" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[10px] text-muted-foreground",
							children: "AI-powered document scanning"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 8
					},
					animate: {
						opacity: 1,
						y: 0
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: "Drag & drop or"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap justify-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => drop("401k_statement_Q3.pdf"),
							className: "rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-xs hover:bg-muted transition-colors",
							children: "Upload 401(k) statement"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => drop("tax_return_2024.pdf"),
							className: "rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-xs hover:bg-muted transition-colors",
							children: "Upload tax return"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: files.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
				initial: {
					opacity: 0,
					height: 0
				},
				animate: {
					opacity: 1,
					height: "auto"
				},
				className: "mt-4 space-y-1 text-xs",
				children: files.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
					initial: {
						opacity: 0,
						x: -8
					},
					animate: {
						opacity: 1,
						x: 0
					},
					className: "flex items-center gap-2 text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-[oklch(0.78_0.16_155)]" }),
						" ",
						f,
						" · scanned"
					]
				}, f))
			}) }),
			files.length > 0 && !done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onDone,
				className: "mt-4 w-full rounded-lg btn-primary py-2 text-sm font-medium hover:btn-primary-hover transition-all",
				children: "Confirm documents"
			})
		]
	});
}
function AgreementCard({ done, name, onDone }) {
	const [agreed, setAgreed] = (0, import_react.useState)(false);
	const [sig, setSig] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StepCard, {
		icon: PenLine,
		title: "Investment Advisory Agreement",
		subtitle: "Fiduciary standard · Reg BI compliant",
		done,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-h-40 overflow-y-auto rounded-lg border border-border bg-muted/30 p-4 text-xs leading-relaxed text-muted-foreground",
				children: "This Agreement is entered into between the Client and Meridian Wealth Partners LLC (\"Advisor\"), acting as fiduciary under the Investment Advisers Act of 1940. Advisor will manage Client's assets on a discretionary basis, in accordance with the risk profile established herein and the Client's stated objectives…"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 flex items-center gap-2 text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "checkbox",
					checked: agreed,
					onChange: (e) => setAgreed(e.target.checked),
					className: "accent-primary"
				}), "I have read and agree to the terms above."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-muted-foreground",
					children: "Type your full legal name to sign:"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: sig,
					onChange: (e) => setSig(e.target.value),
					placeholder: name,
					className: "mt-1 w-full rounded-lg border border-border bg-muted/40 px-3 py-2 font-[serif] italic tracking-wide outline-none focus:border-primary/40 transition-colors"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				disabled: !agreed || sig.trim().length < 3,
				onClick: () => {
					onDone();
					toast.success("Agreement signed");
				},
				className: "mt-4 w-full rounded-lg btn-primary py-2 text-sm font-medium disabled:opacity-40 hover:btn-primary-hover transition-all",
				children: "Sign electronically"
			})
		]
	});
}
function BankCard({ done, onDone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StepCard, {
		icon: Landmark,
		title: "Link Custodian",
		subtitle: "Schwab, Fidelity, or Altruist",
		done,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-3 gap-2",
			children: [
				"Schwab",
				"Fidelity",
				"Altruist"
			].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => {
					onDone();
					toast.success(`${b} connected`);
				},
				className: "rounded-lg border border-border bg-muted/40 py-3 text-sm hover:bg-muted transition-colors",
				children: b
			}, b))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-[11px] text-muted-foreground",
			children: "Read-only, bank-level 256-bit encryption. Powered by Plaid."
		})]
	});
}
function Confetti() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 z-50 overflow-hidden",
		children: [Array.from({ length: 50 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute h-2 w-2 rounded-sm",
			style: {
				left: `${Math.random() * 100}%`,
				top: `-${Math.random() * 15}%`,
				background: [
					"#7c5cff",
					"#3ecf8e",
					"#fbbf24",
					"#38bdf8",
					"#ec4899"
				][i % 5],
				animation: `confetti-fall ${2 + Math.random() * 2}s ease-in forwards`,
				animationDelay: `${Math.random() * .8}s`,
				transform: `rotate(${Math.random() * 360}deg)`
			}
		}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes confetti-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
      ` })]
	});
}
//#endregion
export { Onboarding as component };
