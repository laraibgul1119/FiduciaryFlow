import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { B as CircleCheck, K as CalendarCheck, R as Clock, _ as Play, a as User, c as TrendingUp, d as SkipForward, f as SkipBack, r as Volume2, v as Phone, w as Mic, x as Pause, y as PhoneOff, z as CircleX } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { t as AppShell } from "./AppShell-CxlVXhT7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/voice-logs-DEKOn81w.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 12
	},
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: .4,
			delay: i * .06
		}
	})
};
var mockCalls = [
	{
		id: "call_001",
		prospectName: "Margaret Chen",
		phone: "(415) 555-0192",
		duration: 342,
		timestamp: "2026-07-17T09:14:00Z",
		outcome: "qualified_booked",
		transcriptExcerpt: "I've been looking for someone to help with my retirement planning. I have about $2.3M in assets across multiple accounts and I'm 5 years from retirement. I'd love to schedule a deeper conversation.",
		bookingConfirmed: true,
		advisorName: "Sarah Mitchell"
	},
	{
		id: "call_002",
		prospectName: "David Park",
		phone: "(212) 555-0347",
		duration: 187,
		timestamp: "2026-07-17T09:42:00Z",
		outcome: "not_qualified",
		transcriptExcerpt: "I'm actually looking for someone who handles crypto investments specifically. My needs are pretty niche — mostly DeFi protocols and token allocations.",
		bookingConfirmed: false,
		advisorName: "Sarah Mitchell"
	},
	{
		id: "call_003",
		prospectName: "Robert & Linda Hayes",
		phone: "(617) 555-0281",
		duration: 421,
		timestamp: "2026-07-17T10:05:00Z",
		outcome: "qualified_booked",
		transcriptExcerpt: "We just sold our business and need help investing the proceeds. Around $5M total. We want someone who understands fiduciary responsibility and won't push commission products.",
		bookingConfirmed: true,
		advisorName: "Sarah Mitchell"
	},
	{
		id: "call_004",
		prospectName: "James Whitfield",
		phone: "(310) 555-0193",
		duration: 95,
		timestamp: "2026-07-17T10:30:00Z",
		outcome: "no_answer",
		transcriptExcerpt: "No answer — voicemail left. Follow-up text sent with scheduling link.",
		bookingConfirmed: false,
		advisorName: "Sarah Mitchell"
	},
	{
		id: "call_005",
		prospectName: "Aisha Rahman",
		phone: "(713) 555-0412",
		duration: 298,
		timestamp: "2026-07-17T11:15:00Z",
		outcome: "qualified_booked",
		transcriptExcerpt: "I'm an ER physician and I've been too busy to properly manage my portfolio. I have about $1.8M in retirement accounts and some real estate. I definitely want to meet.",
		bookingConfirmed: true,
		advisorName: "Sarah Mitchell"
	},
	{
		id: "call_006",
		prospectName: "Tommy Nguyen",
		phone: "(408) 555-0156",
		duration: 154,
		timestamp: "2026-07-17T11:48:00Z",
		outcome: "callback",
		transcriptExcerpt: "I'm in a meeting right now but this sounds interesting. Can you call me back Thursday afternoon? I manage about $800K and I'm looking for a long-term relationship.",
		bookingConfirmed: false,
		advisorName: "Sarah Mitchell"
	},
	{
		id: "call_007",
		prospectName: "Elena Vasquez",
		phone: "(305) 555-0278",
		duration: 389,
		timestamp: "2026-07-17T13:02:00Z",
		outcome: "qualified_booked",
		transcriptExcerpt: "My husband and I are both physicians. Combined assets around $4M. We've been with a wirehouse advisor but unhappy with the fees and the feel of being sold products. A fiduciary approach is exactly what we want.",
		bookingConfirmed: true,
		advisorName: "Sarah Mitchell"
	},
	{
		id: "call_008",
		prospectName: "Frank Morrison",
		phone: "(206) 555-0389",
		duration: 72,
		timestamp: "2026-07-17T13:30:00Z",
		outcome: "not_qualified",
		transcriptExcerpt: "I'm actually just starting out — only about $15K in savings. I know I'm probably not your typical client but I was hoping to get started early.",
		bookingConfirmed: false,
		advisorName: "Sarah Mitchell"
	}
];
var outcomeConfig = {
	qualified_booked: {
		label: "Qualified & Booked",
		color: "text-[oklch(0.72_0.16_155)]",
		bg: "bg-[oklch(0.72_0.16_155)]/10",
		icon: CalendarCheck
	},
	not_qualified: {
		label: "Not Qualified",
		color: "text-muted-foreground",
		bg: "bg-muted/50",
		icon: CircleX
	},
	no_answer: {
		label: "No Answer",
		color: "text-[oklch(0.82_0.16_85)]",
		bg: "bg-[oklch(0.82_0.16_85)]/10",
		icon: PhoneOff
	},
	callback: {
		label: "Callback Requested",
		color: "text-[oklch(0.7_0.15_250)]",
		bg: "bg-[oklch(0.7_0.15_250)]/10",
		icon: Phone
	}
};
function formatDuration(seconds) {
	return `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, "0")}`;
}
function formatTime(iso) {
	return new Date(iso).toLocaleTimeString("en-US", {
		hour: "numeric",
		minute: "2-digit",
		hour12: true
	});
}
function AudioPlayer({ duration }) {
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const togglePlay = () => {
		setPlaying(!playing);
		if (!playing) {
			const interval = setInterval(() => {
				setProgress((p) => {
					if (p >= 100) {
						clearInterval(interval);
						setPlaying(false);
						return 0;
					}
					return p + 100 / (duration * 2);
				});
			}, 500);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: togglePlay,
				className: "grid h-9 w-9 shrink-0 place-items-center rounded-full btn-primary hover:btn-primary-hover transition-all",
				children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4 ml-0.5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "text-muted-foreground hover:text-foreground transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipBack, { className: "h-3.5 w-3.5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-1.5 rounded-full bg-muted/60",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full bg-gradient-to-r from-primary/80 to-primary transition-all duration-300",
								style: { width: `${progress}%` }
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1.5 flex items-end gap-[2px] h-4 opacity-40",
							children: Array.from({ length: 40 }).map((_, i) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-[3px] rounded-full bg-primary/60 shrink-0",
									style: { height: `${Math.sin(i * .5) * 8 + 6 + Math.random() * 4}px` }
								}, i);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "text-muted-foreground hover:text-foreground transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipForward, { className: "h-3.5 w-3.5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-mono text-muted-foreground tabular-nums",
						children: formatDuration(Math.floor(progress / 100 * duration))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] text-muted-foreground/50",
						children: "/"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-mono text-muted-foreground tabular-nums",
						children: formatDuration(duration)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "text-muted-foreground hover:text-foreground transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "h-3.5 w-3.5" })
					})
				]
			})
		]
	});
}
function VoiceLogs() {
	const [selectedCall, setSelectedCall] = (0, import_react.useState)(null);
	const [filter, setFilter] = (0, import_react.useState)("all");
	const totalCalls = mockCalls.length;
	const qualified = mockCalls.filter((c) => c.outcome === "qualified_booked").length;
	const avgDuration = Math.round(mockCalls.reduce((a, c) => a + c.duration, 0) / totalCalls);
	const booked = mockCalls.filter((c) => c.bookingConfirmed).length;
	const filtered = filter === "all" ? mockCalls : mockCalls.filter((c) => c.outcome === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 8
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { duration: .4 },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-10 w-10 place-items-center rounded-xl btn-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-2xl font-semibold tracking-tight",
						children: "AI Voice Qualifier"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Vapi-powered call logs — your AI handles qualification so you don't have to."
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						icon: Phone,
						label: "Total Calls Today",
						value: totalCalls.toString(),
						trend: "+3 vs yesterday"
					},
					{
						icon: CircleCheck,
						label: "Qualified & Booked",
						value: `${qualified}/${totalCalls}`,
						trend: `${Math.round(qualified / totalCalls * 100)}% conversion`
					},
					{
						icon: Clock,
						label: "Avg Call Duration",
						value: formatDuration(avgDuration),
						trend: "AI handles full conversation"
					},
					{
						icon: CalendarCheck,
						label: "Meetings Booked",
						value: booked.toString(),
						trend: "Directly from calls"
					}
				].map((kpi, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					custom: i,
					variants: fadeUp,
					initial: "hidden",
					animate: "visible",
					className: "glass rounded-2xl p-5 transition-all hover:shadow-[var(--shadow-glow)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(kpi.icon, { className: "h-3.5 w-3.5" }),
								" ",
								kpi.label
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 text-3xl font-semibold tracking-tight",
							children: kpi.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs text-muted-foreground",
							children: kpi.trend
						})
					]
				}, kpi.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 8
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .4,
					delay: .25
				},
				className: "glass-strong rounded-2xl p-5 flex flex-wrap items-center gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-10 w-10 place-items-center rounded-xl bg-[oklch(0.72_0.16_155)]/15",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-5 w-5 text-[oklch(0.72_0.16_155)]" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-medium",
						children: "Time saved today"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-muted-foreground",
						children: [
							"AI qualifier handled",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold text-foreground",
								children: [totalCalls, " calls"]
							}),
							" ",
							"totaling",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground",
								children: formatDuration(mockCalls.reduce((a, c) => a + c.duration, 0))
							}),
							" ",
							"— saving approximately",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-semibold text-foreground",
								children: [
									Math.round(mockCalls.reduce((a, c) => a + c.duration, 0) / 60),
									" ",
									"min"
								]
							}),
							" ",
							"of advisor time."
						]
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-center gap-2 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1 rounded-full bg-[oklch(0.72_0.16_155)]/10 px-2.5 py-1 font-medium text-[oklch(0.72_0.16_155)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3 w-3" }),
								" ",
								qualified,
								" booked"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1 rounded-full bg-muted/50 px-2.5 py-1 font-medium",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-3 w-3" }),
								" ",
								mockCalls.filter((c) => c.outcome === "not_qualified").length,
								" not qualified"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1 rounded-full bg-muted/50 px-2.5 py-1 font-medium",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneOff, { className: "h-3 w-3" }),
								" ",
								mockCalls.filter((c) => c.outcome === "no_answer").length,
								" no answer"
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					duration: .3,
					delay: .3
				},
				className: "flex flex-wrap gap-2",
				children: [
					{
						key: "all",
						label: "All calls"
					},
					{
						key: "qualified_booked",
						label: "Qualified & Booked"
					},
					{
						key: "not_qualified",
						label: "Not qualified"
					},
					{
						key: "callback",
						label: "Callbacks"
					},
					{
						key: "no_answer",
						label: "No answer"
					}
				].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setFilter(tab.key),
					className: `rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${filter === tab.key ? "btn-primary" : "border border-border bg-muted/30 text-muted-foreground hover:bg-muted"}`,
					children: tab.label
				}, tab.key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 12
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					duration: .4,
					delay: .35
				},
				className: "glass rounded-2xl overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
										children: "Prospect"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 text-left font-medium",
										children: "Time"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 text-left font-medium",
										children: "Duration"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 text-left font-medium",
										children: "Transcript"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 text-left font-medium",
										children: "Outcome"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-4 py-3 text-left font-medium",
										children: "Audio"
									})
								]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: filtered.map((call) => {
							const cfg = outcomeConfig[call.outcome];
							const Icon = cfg.icon;
							const isSelected = selectedCall?.id === call.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								onClick: () => setSelectedCall(isSelected ? null : call),
								className: `cursor-pointer border-b border-border/50 transition-colors hover:bg-muted/30 ${isSelected ? "bg-muted/40" : ""}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-medium",
												children: call.prospectName
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs text-muted-foreground",
												children: call.phone
											})] })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 text-muted-foreground",
										children: formatTime(call.timestamp)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 font-mono text-xs tabular-nums",
										children: formatDuration(call.duration)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3 max-w-xs",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "truncate text-xs text-muted-foreground",
											children: [
												"\"",
												call.transcriptExcerpt,
												"\""
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: `inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${cfg.color} ${cfg.bg}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3 w-3" }), cfg.label]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-4 py-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											onClick: (e) => {
												e.stopPropagation();
												setSelectedCall(call);
											},
											className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/40 px-2.5 py-1 text-xs text-muted-foreground hover:bg-muted transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-3 w-3" }), " Listen"]
										})
									})
								]
							}, call.id);
						}) })]
					})
				})
			}),
			selectedCall && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 12
				},
				animate: {
					opacity: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					y: 12
				},
				transition: { duration: .3 },
				className: "glass-strong rounded-2xl p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-12 w-12 place-items-center rounded-full bg-accent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-6 w-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-semibold",
								children: selectedCall.prospectName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground",
								children: [
									selectedCall.phone,
									" · Called at",
									" ",
									formatTime(selectedCall.timestamp),
									" · Duration",
									" ",
									formatDuration(selectedCall.duration)
								]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: `inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${outcomeConfig[selectedCall.outcome].color} ${outcomeConfig[selectedCall.outcome].bg}`,
								children: [(() => {
									const Icon = outcomeConfig[selectedCall.outcome].icon;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3.5 w-3.5" });
								})(), outcomeConfig[selectedCall.outcome].label]
							}), selectedCall.bookingConfirmed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 rounded-full bg-[oklch(0.72_0.16_155)]/10 px-2.5 py-1 text-xs font-medium text-[oklch(0.72_0.16_155)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, { className: "h-3 w-3" }), " Meeting booked"]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-xl border border-border bg-muted/20 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex items-center gap-2 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "h-3 w-3" }),
								" AI Voice Recording —",
								" ",
								selectedCall.advisorName,
								"'s qualifier"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AudioPlayer, { duration: selectedCall.duration })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
							children: "Transcript excerpt"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-xl border border-border bg-muted/20 p-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm leading-relaxed text-muted-foreground italic",
								children: [
									"\"",
									selectedCall.transcriptExcerpt,
									"\""
								]
							})
						})]
					})
				]
			})
		]
	}) });
}
//#endregion
export { VoiceLogs as component };
