import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AppShell } from "@/components/AppShell";
import { supabase } from "@/integrations/supabase/client";
import { DEMO_ADVISOR_ID } from "@/lib/constants";
import { Loader2, Save, Eye } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings — FiduciaryFlow OS" }] }),
  component: Settings,
});

function Settings() {
  const [form, setForm] = useState({
    firm_name: "",
    brand_color: "#7c5cff",
    calendly_link: "",
    min_assets: 500000,
    aum_target: 250000000,
    disclosure: "",
    logo_url: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    supabase
      .from("advisors")
      .select("*")
      .eq("id", DEMO_ADVISOR_ID)
      .maybeSingle()
      .then(({ data }) => {
        if (data)
          setForm({
            firm_name: data.firm_name || "",
            brand_color: data.brand_color || "#7c5cff",
            calendly_link: data.calendly_link || "",
            min_assets: data.min_assets || 500000,
            aum_target: data.aum_target || 250000000,
            disclosure: data.disclosure || "",
            logo_url: data.logo_url || "",
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

  if (loading)
    return (
      <AppShell>
        <div className="grid place-items-center py-24">
          <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
        </div>
      </AppShell>
    );

  return (
    <AppShell>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          White-label your practice. Changes apply to your public qualifier and client portal.
        </p>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="glass rounded-2xl p-6 lg:col-span-2"
          >
            <h2 className="text-sm font-semibold">Brand</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Field label="Firm name">
                <input
                  value={form.firm_name}
                  onChange={(e) => setForm({ ...form, firm_name: e.target.value })}
                  className="input"
                />
              </Field>
              <Field label="Logo URL">
                <input
                  value={form.logo_url}
                  onChange={(e) => setForm({ ...form, logo_url: e.target.value })}
                  placeholder="https://…"
                  className="input"
                />
              </Field>
              <Field label="Brand color">
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={form.brand_color}
                    onChange={(e) => setForm({ ...form, brand_color: e.target.value })}
                    className="h-10 w-14 rounded-lg border border-border bg-transparent cursor-pointer"
                  />
                  <input
                    value={form.brand_color}
                    onChange={(e) => setForm({ ...form, brand_color: e.target.value })}
                    className="input flex-1"
                  />
                </div>
              </Field>
              <Field label="Calendly link">
                <input
                  value={form.calendly_link}
                  onChange={(e) => setForm({ ...form, calendly_link: e.target.value })}
                  placeholder="https://calendly.com/…"
                  className="input"
                />
              </Field>
            </div>

            <div className="mt-8 h-px w-full bg-border" />

            <h2 className="mt-6 text-sm font-semibold">Qualifying rules</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Field label="Minimum investable assets (USD)">
                <input
                  type="number"
                  value={form.min_assets}
                  onChange={(e) => setForm({ ...form, min_assets: Number(e.target.value) })}
                  className="input"
                />
              </Field>
              <Field label="AUM target (USD)">
                <input
                  type="number"
                  value={form.aum_target}
                  onChange={(e) => setForm({ ...form, aum_target: Number(e.target.value) })}
                  className="input"
                />
              </Field>
            </div>

            <h2 className="mt-8 text-sm font-semibold">Disclosure footer</h2>
            <Field label="Shown on public qualifier">
              <textarea
                rows={3}
                value={form.disclosure}
                onChange={(e) => setForm({ ...form, disclosure: e.target.value })}
                className="input"
              />
            </Field>

            <button
              onClick={save}
              disabled={saving}
              className="mt-6 inline-flex items-center gap-2 rounded-lg btn-primary px-4 py-2 text-sm font-medium disabled:opacity-40 hover:btn-primary-hover transition-all"
            >
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}{" "}
              Save changes
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-2">
              <Eye className="h-3.5 w-3.5 text-muted-foreground" />
              <h2 className="text-sm font-semibold">Live Preview</h2>
            </div>
            <div className="mt-4 rounded-xl border border-border bg-muted/30 p-5">
              <div className="flex items-center gap-2">
                <div
                  className="h-6 w-6 rounded-md transition-colors"
                  style={{ background: form.brand_color }}
                />
                <div className="text-sm font-medium">{form.firm_name || "Your firm"}</div>
              </div>
              <div className="mt-4 text-xl font-semibold">
                See if you're a fit in <span style={{ color: form.brand_color }}>45 seconds</span>.
              </div>
              <div className="mt-3 text-xs text-muted-foreground">
                Minimum assets: ${(form.min_assets / 1000).toFixed(0)}k
              </div>
              <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full transition-all duration-500"
                  style={{ width: "60%", background: form.brand_color }}
                />
              </div>
              <p className="mt-6 text-[10px] leading-relaxed text-muted-foreground">
                {form.disclosure || "Educational purposes only, not investment advice."}
              </p>
            </div>

            <div className="mt-4 rounded-xl border border-border bg-muted/30 p-4">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Your qualifier link
              </div>
              <div className="mt-2 flex items-center gap-2">
                <code className="flex-1 truncate rounded bg-background/60 px-2 py-1.5 text-[11px]">
                  {typeof window !== "undefined"
                    ? `${window.location.origin}/q/meridian`
                    : "/q/meridian"}
                </code>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(`${window.location.origin}/q/meridian`);
                    toast.success("Copied to clipboard");
                  }}
                  className="rounded-md border border-border bg-muted/40 px-2 py-1.5 text-[10px] hover:bg-muted transition-colors"
                >
                  Copy
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <style>{`.input{width:100%;border-radius:0.5rem;border:1px solid var(--color-border);background:color-mix(in oklab, var(--color-muted) 40%, transparent);padding:0.5rem 0.75rem;font-size:0.875rem;outline:none;transition:border-color 0.15s, background-color 0.15s;}
      .input:focus{border-color: color-mix(in oklab, var(--color-primary) 50%, transparent); background: color-mix(in oklab, var(--color-muted) 60%, transparent);}`}</style>
    </AppShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
