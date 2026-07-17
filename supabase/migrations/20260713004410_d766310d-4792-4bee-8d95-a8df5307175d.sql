
CREATE TABLE public.advisors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  firm_name TEXT NOT NULL,
  logo_url TEXT,
  brand_color TEXT DEFAULT '#7c5cff',
  aum_target BIGINT DEFAULT 100000000,
  calendly_link TEXT,
  min_assets BIGINT DEFAULT 500000,
  disclosure TEXT DEFAULT 'Educational purposes only, not investment advice.',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.advisors TO anon, authenticated;
GRANT ALL ON public.advisors TO service_role;
ALTER TABLE public.advisors ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public advisors" ON public.advisors FOR ALL USING (true) WITH CHECK (true);

CREATE TABLE public.prospects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  advisor_id UUID NOT NULL REFERENCES public.advisors(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  investable_assets_range TEXT,
  timeline TEXT,
  pain_point TEXT,
  fit_score INT DEFAULT 0,
  status TEXT DEFAULT 'new',
  source TEXT DEFAULT 'quiz',
  next_action TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.prospects TO anon, authenticated;
GRANT ALL ON public.prospects TO service_role;
ALTER TABLE public.prospects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public prospects" ON public.prospects FOR ALL USING (true) WITH CHECK (true);

CREATE TABLE public.onboarding_checklists (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  prospect_id UUID NOT NULL REFERENCES public.prospects(id) ON DELETE CASCADE,
  kyc_complete BOOLEAN DEFAULT false,
  risk_questionnaire_score INT,
  docs_uploaded BOOLEAN DEFAULT false,
  bank_linked BOOLEAN DEFAULT false,
  agreement_signed BOOLEAN DEFAULT false,
  progress_percent INT DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.onboarding_checklists TO anon, authenticated;
GRANT ALL ON public.onboarding_checklists TO service_role;
ALTER TABLE public.onboarding_checklists ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public onboarding" ON public.onboarding_checklists FOR ALL USING (true) WITH CHECK (true);

CREATE TABLE public.documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  prospect_id UUID NOT NULL REFERENCES public.prospects(id) ON DELETE CASCADE,
  file_name TEXT NOT NULL,
  file_url TEXT,
  type TEXT,
  upload_date TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.documents TO anon, authenticated;
GRANT ALL ON public.documents TO service_role;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public documents" ON public.documents FOR ALL USING (true) WITH CHECK (true);

CREATE TABLE public.meetings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  prospect_id UUID REFERENCES public.prospects(id) ON DELETE SET NULL,
  advisor_id UUID REFERENCES public.advisors(id) ON DELETE CASCADE,
  transcript_text TEXT,
  ai_summary TEXT,
  action_items JSONB DEFAULT '[]'::jsonb,
  compliance_flags JSONB DEFAULT '[]'::jsonb,
  fiduciary_notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.meetings TO anon, authenticated;
GRANT ALL ON public.meetings TO service_role;
ALTER TABLE public.meetings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public meetings" ON public.meetings FOR ALL USING (true) WITH CHECK (true);

CREATE TABLE public.audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  prospect_id UUID REFERENCES public.prospects(id) ON DELETE SET NULL,
  advisor_id UUID REFERENCES public.advisors(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  actor TEXT,
  details JSONB DEFAULT '{}'::jsonb,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.audit_logs TO anon, authenticated;
GRANT ALL ON public.audit_logs TO service_role;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public audit" ON public.audit_logs FOR ALL USING (true) WITH CHECK (true);

-- Seed demo advisor
INSERT INTO public.advisors (id, slug, firm_name, brand_color, aum_target, calendly_link, min_assets)
VALUES ('11111111-1111-1111-1111-111111111111', 'meridian', 'Meridian Wealth Partners', '#7c5cff', 250000000, 'https://calendly.com/demo/intro', 500000);

-- Seed 8 prospects
INSERT INTO public.prospects (advisor_id, full_name, email, phone, investable_assets_range, timeline, pain_point, fit_score, status, source, next_action) VALUES
('11111111-1111-1111-1111-111111111111', 'Alexandra Chen', 'alex.chen@example.com', '+1 415 555 0142', '1M-5M', '0-3 months', 'Taxes on stock', 94, 'qualified', 'LinkedIn', 'Send tax alpha memo'),
('11111111-1111-1111-1111-111111111111', 'Marcus Whitfield', 'marcus@whitfield.co', '+1 212 555 0198', '5M+', '0-3 months', 'Business exit', 98, 'booked', 'Referral', 'Prep exit-planning deck'),
('11111111-1111-1111-1111-111111111111', 'Priya Ramaswamy', 'priya.r@example.com', '+1 650 555 0177', '500k-1M', '3-6 months', 'Retirement income', 82, 'qualified', 'LinkedIn', 'Schedule discovery call'),
('11111111-1111-1111-1111-111111111111', 'Daniel Okafor', 'daniel.o@example.com', '+1 646 555 0110', '250k-500k', '6-12 months', 'Market volatility', 54, 'new', 'Newsletter', 'Add to nurture sequence'),
('11111111-1111-1111-1111-111111111111', 'Sophie Laurent', 'sophie@laurent.io', '+1 305 555 0166', '1M-5M', '3-6 months', 'Retirement income', 88, 'onboarding', 'Referral', 'Follow up on ID upload'),
('11111111-1111-1111-1111-111111111111', 'James Holloway', 'james.h@example.com', NULL, '<250k', 'just browsing', 'Market volatility', 22, 'lost', 'Ad', 'Below asset threshold'),
('11111111-1111-1111-1111-111111111111', 'Rita Fernandes', 'rita.f@example.com', '+1 512 555 0121', '5M+', '3-6 months', 'Taxes on stock', 96, 'active', 'Referral', 'Q4 review'),
('11111111-1111-1111-1111-111111111111', 'Thomas Beckett', 'tom.beckett@example.com', '+1 917 555 0134', '500k-1M', '0-3 months', 'Business exit', 86, 'qualified', 'LinkedIn', 'Send fiduciary brief');
