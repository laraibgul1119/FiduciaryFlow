import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Monitor, H as Check, N as FileText, O as Link2, S as Moon, T as Menu, h as Search, j as House, k as LayoutDashboard, l as Sun, m as Settings, n as X, q as ArrowRight, u as Sparkles, w as Mic } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { n as useDemoMode } from "./demo-mode-BOwLVUJd.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AppShell-CxlVXhT7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var nav = [
	{
		to: "/dashboard",
		label: "Dashboard",
		icon: LayoutDashboard
	},
	{
		to: "/voice-logs",
		label: "Voice Logs",
		icon: Mic
	},
	{
		to: "/meetings",
		label: "Meetings",
		icon: FileText
	},
	{
		to: "/settings",
		label: "Settings",
		icon: Settings
	}
];
function AppShell({ children }) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [light, setLight] = (0, import_react.useState)(false);
	const [cmdOpen, setCmdOpen] = (0, import_react.useState)(false);
	const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react.useState)(false);
	const { demoMode, toggleDemoMode } = useDemoMode();
	const [copied, setCopied] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const isLight = document.documentElement.classList.contains("light");
		setLight(isLight);
	}, []);
	const handleKeyDown = (0, import_react.useCallback)((e) => {
		if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
			e.preventDefault();
			setCmdOpen((v) => !v);
		} else if (e.key === "Escape") {
			setCmdOpen(false);
			setMobileMenuOpen(false);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [handleKeyDown]);
	const toggleTheme = () => {
		const next = !light;
		setLight(next);
		document.documentElement.classList.toggle("light", next);
		localStorage.setItem("ff-theme", next ? "light" : "dark");
	};
	const copyDemoLink = async () => {
		const url = `${window.location.origin}/q/demo-firm`;
		try {
			await navigator.clipboard.writeText(url);
			setCopied(true);
			toast.success("Demo link copied!", { description: url });
			setTimeout(() => setCopied(false), 2e3);
		} catch {
			toast.error("Failed to copy link");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-14 max-w-[1600px] items-center justify-between px-4 md:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/dashboard",
							className: "flex items-center gap-2 transition-opacity hover:opacity-80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-7 w-7 place-items-center rounded-lg btn-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "leading-tight",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-semibold",
									children: "FiduciaryFlow"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[9px] uppercase tracking-widest text-muted-foreground",
									children: "OS"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-1 md:flex",
							children: nav.map((n) => {
								const active = pathname.startsWith(n.to);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: n.to,
									className: `flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition-all ${active ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(n.icon, { className: "h-3.5 w-3.5" }), n.label]
								}, n.to);
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setCmdOpen(true),
								className: "hidden items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors sm:flex",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-3 w-3" }),
									" Search",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
										className: "rounded bg-background/60 px-1.5 py-0.5 text-[10px] font-mono",
										children: "⌘K"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: toggleDemoMode,
								className: `hidden items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all sm:flex ${demoMode ? "bg-[oklch(0.72_0.16_155)]/15 text-[oklch(0.78_0.16_155)] border border-[oklch(0.72_0.16_155)]/30" : "text-muted-foreground hover:bg-muted border border-transparent"}`,
								title: demoMode ? "Demo mode ON — showing fake data" : "Turn on demo mode for sales calls",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "h-3.5 w-3.5" }), demoMode ? "Demo" : "Demo mode"]
							}),
							demoMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: copyDemoLink,
								className: "hidden items-center gap-1.5 rounded-lg border border-border bg-muted/40 px-2.5 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors sm:flex",
								children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5 text-[oklch(0.72_0.16_155)]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, { className: "h-3.5 w-3.5" }), copied ? "Copied!" : "Copy Demo Link"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: toggleTheme,
								className: "hidden items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors sm:flex",
								children: light ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-3.5 w-3.5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setMobileMenuOpen((v) => !v),
								className: "grid h-8 w-8 place-items-center rounded-lg hover:bg-muted transition-colors md:hidden",
								children: mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
					transition: { duration: .2 },
					className: "overflow-hidden border-t border-border md:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1 px-4 py-3",
						children: [nav.map((n) => {
							const active = pathname.startsWith(n.to);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: n.to,
								onClick: () => setMobileMenuOpen(false),
								className: `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all ${active ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(n.icon, { className: "h-4 w-4" }), n.label]
							}, n.to);
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-border pt-2 mt-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => {
										toggleDemoMode();
										setMobileMenuOpen(false);
									},
									className: `flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${demoMode ? "text-[oklch(0.78_0.16_155)] bg-[oklch(0.72_0.16_155)]/10" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Monitor, { className: "h-4 w-4" }), demoMode ? "Demo mode ON" : "Demo mode"]
								}),
								demoMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => {
										copyDemoLink();
										setMobileMenuOpen(false);
									},
									className: "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors",
									children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-[oklch(0.72_0.16_155)]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link2, { className: "h-4 w-4" }), copied ? "Copied!" : "Copy Demo Link"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => {
										setCmdOpen(true);
										setMobileMenuOpen(false);
									},
									className: "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4" }),
										"Search",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
											className: "ml-auto rounded bg-background/60 px-1.5 py-0.5 text-[10px] font-mono",
											children: "⌘K"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => {
										toggleTheme();
										setMobileMenuOpen(false);
									},
									className: "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors",
									children: [light ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }), light ? "Dark mode" : "Light mode"]
								})
							]
						})]
					})
				}) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto max-w-[1600px] px-4 py-6 md:px-8 md:py-8",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: cmdOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				transition: { duration: .15 },
				className: "fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 pt-32 backdrop-blur-sm",
				onClick: () => setCmdOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .96,
						y: -8
					},
					animate: {
						opacity: 1,
						scale: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						scale: .96,
						y: -8
					},
					transition: { duration: .2 },
					className: "glass-strong w-full max-w-lg rounded-2xl p-2",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 border-b border-border px-4 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 text-muted-foreground" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								autoFocus: true,
								placeholder: "Search prospects, actions, pages…",
								className: "flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
								className: "rounded bg-background/60 px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground",
								children: "ESC"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground",
								children: "Navigation"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								onClick: () => setCmdOpen(false),
								className: "flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-muted transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-4 w-4 text-muted-foreground" }), "Home"]
							}),
							nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: n.to,
								onClick: () => setCmdOpen(false),
								className: `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${pathname.startsWith(n.to) ? "bg-accent" : "hover:bg-muted"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(n.icon, { className: "h-4 w-4 text-muted-foreground" }),
									"Go to ",
									n.label,
									pathname.startsWith(n.to) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-auto text-[10px] text-muted-foreground",
										children: "current"
									})
								]
							}, n.to)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 border-t border-border pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground",
									children: "Quick actions"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/q/$slug",
									params: { slug: "meridian" },
									onClick: () => setCmdOpen(false),
									className: "flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-muted transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-muted-foreground" }), "Open public quiz"]
								})]
							})
						]
					})]
				})
			}) })
		]
	});
}
//#endregion
export { AppShell as t };
