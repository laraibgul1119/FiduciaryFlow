import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/q._slug-Dy7a16DG.js
var $$splitComponentImporter = () => import("./q._slug-DSb9s2GW.mjs");
var Route = createFileRoute("/q/$slug")({
	head: ({ params }) => ({ meta: [{ title: `See if you're a fit — 45 second qualifier` }, {
		name: "description",
		content: `Take a 45-second qualifier for ${params.slug}.`
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
