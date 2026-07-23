import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as DemoModeProvider } from "./demo-mode-BOwLVUJd.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$7 } from "./onboarding._id-DjSwJTqx.mjs";
import { t as Route$8 } from "./q._slug-Dy7a16DG.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DORhvVxA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-COAERm6Q.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass max-w-md rounded-2xl p-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-6xl font-semibold gradient-text",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-lg font-medium",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "This page has moved or never existed."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-6 inline-flex items-center justify-center rounded-lg btn-primary px-4 py-2 text-sm font-medium hover:btn-primary-hover",
					children: "Return home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass max-w-md rounded-2xl p-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-lg font-medium",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: error.message || "Unexpected error"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						router.invalidate();
						reset();
					},
					className: "mt-6 inline-flex items-center justify-center rounded-lg btn-primary px-4 py-2 text-sm font-medium",
					children: "Try again"
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "FiduciaryFlow OS — Client Acquisition & Compliance Autopilot for RIAs" },
			{
				name: "description",
				content: "The client acquisition and compliance operating system for RIAs and fee-only financial advisors managing $100M+ AUM."
			},
			{
				property: "og:title",
				content: "FiduciaryFlow OS"
			},
			{
				property: "og:description",
				content: "Client acquisition & compliance autopilot for fee-only advisors."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon",
				sizes: "any"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	(0, import_react.useEffect)(() => {
		if ((typeof window !== "undefined" ? localStorage.getItem("ff-theme") : null) === "light") document.documentElement.classList.add("light");
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DemoModeProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			theme: "dark",
			position: "top-right",
			richColors: true,
			closeButton: true
		})] })
	});
}
var $$splitComponentImporter$5 = () => import("./voice-logs-DEKOn81w.mjs");
var Route$5 = createFileRoute("/voice-logs")({
	head: () => ({ meta: [{ title: "AI Voice Logs — FiduciaryFlow OS" }, {
		name: "description",
		content: "Review AI voice qualifier call logs, transcripts, and outcomes."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./settings-De_lU3hY.mjs");
var Route$4 = createFileRoute("/settings")({
	head: () => ({ meta: [{ title: "Settings — FiduciaryFlow OS" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./meetings-CsV_DrDX.mjs");
var Route$3 = createFileRoute("/meetings")({
	head: () => ({ meta: [{ title: "Meeting Intelligence — FiduciaryFlow OS" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./dashboard-CnyOtbAA.mjs");
var Route$2 = createFileRoute("/dashboard")({
	head: () => ({ meta: [{ title: "Command Center — FiduciaryFlow OS" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./billing-2Oayspd1.mjs");
var Route$1 = createFileRoute("/billing")({
	head: () => ({ meta: [{ title: "Pricing — FiduciaryFlow OS" }, {
		name: "description",
		content: "Choose the plan that fits your RIA. Start a 14-day free trial — no card required."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-D2xJ3L_O.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [{ title: "FiduciaryFlow OS — Client Acquisition & Compliance Autopilot" }, {
		name: "description",
		content: "The operating system for fee-only RIAs. Qualify, onboard, and stay compliant — automatically."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var VoiceLogsRoute = Route$5.update({
	id: "/voice-logs",
	path: "/voice-logs",
	getParentRoute: () => Route$6
});
var SettingsRoute = Route$4.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => Route$6
});
var MeetingsRoute = Route$3.update({
	id: "/meetings",
	path: "/meetings",
	getParentRoute: () => Route$6
});
var DashboardRoute = Route$2.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => Route$6
});
var BillingRoute = Route$1.update({
	id: "/billing",
	path: "/billing",
	getParentRoute: () => Route$6
});
var IndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$6
});
var QSlugRoute = Route$8.update({
	id: "/q/$slug",
	path: "/q/$slug",
	getParentRoute: () => Route$6
});
var rootRouteChildren = {
	IndexRoute,
	BillingRoute,
	DashboardRoute,
	MeetingsRoute,
	SettingsRoute,
	VoiceLogsRoute,
	OnboardingIdRoute: Route$7.update({
		id: "/onboarding/$id",
		path: "/onboarding/$id",
		getParentRoute: () => Route$6
	}),
	QSlugRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
