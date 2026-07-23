import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { D as LoaderCircle, P as Eye, g as Save } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { t as supabase } from "./client-DFEVOFwY.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as AppShell } from "./AppShell-CxlVXhT7.mjs";
import { n as DEMO_ADVISOR_ID } from "./constants-n5hCBu4R.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-De_lU3hY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Settings() {
	const [form, setForm] = (0, import_react.useState)({
		firm_name: "",
		brand_color: "#7c5cff",
		calendly_link: "",
		min_assets: 5e5,
		aum_target: 25e7,
		disclosure: "",
		logo_url: ""
	});
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [saving, setSaving] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		supabase.from("advisors").select("*").eq("id", DEMO_ADVISOR_ID).maybeSingle().then(({ data }) => {
			if (data) setForm({
				firm_name: data.firm_name || "",
				brand_color: data.brand_color || "#7c5cff",
				calendly_link: data.calendly_link || "",
				min_assets: data.min_assets || 5e5,
				aum_target: data.aum_target || 25e7,
				disclosure: data.disclosure || "",
				logo_url: data.logo_url || ""
			});
			setLoading(false);
		});
	}, []);
	const save = async () => {
		setSaving(true);
		await supabase.from("advisors").update(form).eq("id", DEMO_ADVISOR_ID);
		setSaving(false);
		toast.success("Settings saved");
	};
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid place-items-center py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-5 w-5 animate-spin text-muted-foreground" })
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 8
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: { duration: .4 },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-semibold tracking-tight",
				children: "Settings"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "White-label your practice. Changes apply to your public qualifier and client portal."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-6 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
						delay: .1
					},
					className: "glass rounded-2xl p-6 lg:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold",
							children: "Brand"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-4 md:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Firm name",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: form.firm_name,
										onChange: (e) => setForm({
											...form,
											firm_name: e.target.value
										}),
										className: "input"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Logo URL",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: form.logo_url,
										onChange: (e) => setForm({
											...form,
											logo_url: e.target.value
										}),
										placeholder: "https://…",
										className: "input"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Brand color",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "color",
											value: form.brand_color,
											onChange: (e) => setForm({
												...form,
												brand_color: e.target.value
											}),
											className: "h-10 w-14 rounded-lg border border-border bg-transparent cursor-pointer"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											value: form.brand_color,
											onChange: (e) => setForm({
												...form,
												brand_color: e.target.value
											}),
											className: "input flex-1"
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Calendly link",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: form.calendly_link,
										onChange: (e) => setForm({
											...form,
											calendly_link: e.target.value
										}),
										placeholder: "https://calendly.com/…",
										className: "input"
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-8 h-px w-full bg-border" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 text-sm font-semibold",
							children: "Qualifying rules"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid gap-4 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Minimum investable assets (USD)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									value: form.min_assets,
									onChange: (e) => setForm({
										...form,
										min_assets: Number(e.target.value)
									}),
									className: "input"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "AUM target (USD)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "number",
									value: form.aum_target,
									onChange: (e) => setForm({
										...form,
										aum_target: Number(e.target.value)
									}),
									className: "input"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-8 text-sm font-semibold",
							children: "Disclosure footer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Shown on public qualifier",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								rows: 3,
								value: form.disclosure,
								onChange: (e) => setForm({
									...form,
									disclosure: e.target.value
								}),
								className: "input"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: save,
							disabled: saving,
							className: "mt-6 inline-flex items-center gap-2 rounded-lg btn-primary px-4 py-2 text-sm font-medium disabled:opacity-40 hover:btn-primary-hover transition-all",
							children: [
								saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "h-4 w-4" }),
								" ",
								"Save changes"
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
						delay: .2
					},
					className: "glass rounded-2xl p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-3.5 w-3.5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-sm font-semibold",
								children: "Live Preview"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 rounded-xl border border-border bg-muted/30 p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-6 w-6 rounded-md transition-colors",
										style: { background: form.brand_color }
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-medium",
										children: form.firm_name || "Your firm"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 text-xl font-semibold",
									children: [
										"See if you're a fit in ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											style: { color: form.brand_color },
											children: "45 seconds"
										}),
										"."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 text-xs text-muted-foreground",
									children: [
										"Minimum assets: $",
										(form.min_assets / 1e3).toFixed(0),
										"k"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 h-1.5 w-full overflow-hidden rounded-full bg-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-full transition-all duration-500",
										style: {
											width: "60%",
											background: form.brand_color
										}
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-[10px] leading-relaxed text-muted-foreground",
									children: form.disclosure || "Educational purposes only, not investment advice."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 rounded-xl border border-border bg-muted/30 p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] font-semibold uppercase tracking-widest text-muted-foreground",
								children: "Your qualifier link"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
									className: "flex-1 truncate rounded bg-background/60 px-2 py-1.5 text-[11px]",
									children: typeof window !== "undefined" ? `${window.location.origin}/q/meridian` : "/q/meridian"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										navigator.clipboard.writeText(`${window.location.origin}/q/meridian`);
										toast.success("Copied to clipboard");
									},
									className: "rounded-md border border-border bg-muted/40 px-2 py-1.5 text-[10px] hover:bg-muted transition-colors",
									children: "Copy"
								})]
							})]
						})
					]
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `.input{width:100%;border-radius:0.5rem;border:1px solid var(--color-border);background:color-mix(in oklab, var(--color-muted) 40%, transparent);padding:0.5rem 0.75rem;font-size:0.875rem;outline:none;transition:border-color 0.15s, background-color 0.15s;}
      .input:focus{border-color: color-mix(in oklab, var(--color-primary) 50%, transparent); background: color-mix(in oklab, var(--color-muted) 60%, transparent);}` })] });
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1.5 block text-xs font-medium text-muted-foreground",
			children: label
		}), children]
	});
}
//#endregion
export { Settings as component };
