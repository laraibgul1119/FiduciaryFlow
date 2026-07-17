import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { DemoModeProvider } from "../lib/demo-mode";
import { Toaster } from "sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="glass max-w-md rounded-2xl p-10 text-center">
        <h1 className="text-6xl font-semibold gradient-text">404</h1>
        <h2 className="mt-3 text-lg font-medium">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">This page has moved or never existed.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-lg btn-primary px-4 py-2 text-sm font-medium hover:btn-primary-hover"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="glass max-w-md rounded-2xl p-10 text-center">
        <h1 className="text-lg font-medium">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message || "Unexpected error"}</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 inline-flex items-center justify-center rounded-lg btn-primary px-4 py-2 text-sm font-medium"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "FiduciaryFlow OS — Client Acquisition & Compliance Autopilot for RIAs" },
      {
        name: "description",
        content:
          "The client acquisition and compliance operating system for RIAs and fee-only financial advisors managing $100M+ AUM.",
      },
      { property: "og:title", content: "FiduciaryFlow OS" },
      {
        property: "og:description",
        content: "Client acquisition & compliance autopilot for fee-only advisors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  // theme toggle
  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("ff-theme") : null;
    if (saved === "light") document.documentElement.classList.add("light");
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <DemoModeProvider>
        <Outlet />
        <Toaster theme="dark" position="top-right" richColors closeButton />
      </DemoModeProvider>
    </QueryClientProvider>
  );
}
