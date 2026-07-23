import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/demo-mode-BOwLVUJd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Ctx = (0, import_react.createContext)({
	demoMode: false,
	toggleDemoMode: () => {}
});
function useDemoMode() {
	return (0, import_react.useContext)(Ctx);
}
function DemoModeProvider({ children }) {
	const [demoMode, setDemoMode] = (0, import_react.useState)(() => {
		if (typeof window === "undefined") return false;
		return localStorage.getItem("ff-demo-mode") === "true";
	});
	(0, import_react.useEffect)(() => {
		localStorage.setItem("ff-demo-mode", String(demoMode));
	}, [demoMode]);
	const toggleDemoMode = () => setDemoMode((v) => !v);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ctx.Provider, {
		value: {
			demoMode,
			toggleDemoMode
		},
		children
	});
}
//#endregion
export { useDemoMode as n, DemoModeProvider as t };
