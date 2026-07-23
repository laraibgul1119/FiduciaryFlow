-- Production RLS policies: Restrict writes to service_role, keep reads open for client queries.
-- This prevents unauthorized writes while keeping the app functional.
-- NOTE: For full security, move all data access to server functions and restrict reads to authenticated users.

-- Drop existing permissive policies
DROP POLICY IF EXISTS "public advisors" ON public.advisors;
DROP POLICY IF EXISTS "public prospects" ON public.prospects;
DROP POLICY IF EXISTS "public onboarding" ON public.onboarding_checklists;
DROP POLICY IF EXISTS "public documents" ON public.documents;
DROP POLICY IF EXISTS "public meetings" ON public.meetings;
DROP POLICY IF EXISTS "public audit" ON public.audit_logs;

-- Advisors: Anyone can read (public profiles), only service_role can write
CREATE POLICY "advisors_select" ON public.advisors
  FOR SELECT USING (true);

CREATE POLICY "advisors_insert" ON public.advisors
  FOR INSERT WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "advisors_update" ON public.advisors
  FOR UPDATE USING (auth.role() = 'service_role');

CREATE POLICY "advisors_delete" ON public.advisors
  FOR DELETE USING (auth.role() = 'service_role');

-- Prospects: Anyone can read (used in dashboard), only service_role can write
CREATE POLICY "prospects_select" ON public.prospects
  FOR SELECT USING (true);

CREATE POLICY "prospects_insert" ON public.prospects
  FOR INSERT WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "prospects_update" ON public.prospects
  FOR UPDATE USING (auth.role() = 'service_role');

CREATE POLICY "prospects_delete" ON public.prospects
  FOR DELETE USING (auth.role() = 'service_role');

-- Onboarding checklists: Anyone can read, only service_role can write
CREATE POLICY "onboarding_select" ON public.onboarding_checklists
  FOR SELECT USING (true);

CREATE POLICY "onboarding_insert" ON public.onboarding_checklists
  FOR INSERT WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "onboarding_update" ON public.onboarding_checklists
  FOR UPDATE USING (auth.role() = 'service_role');

CREATE POLICY "onboarding_delete" ON public.onboarding_checklists
  FOR DELETE USING (auth.role() = 'service_role');

-- Documents: Anyone can read, only service_role can write
CREATE POLICY "documents_select" ON public.documents
  FOR SELECT USING (true);

CREATE POLICY "documents_insert" ON public.documents
  FOR INSERT WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "documents_update" ON public.documents
  FOR UPDATE USING (auth.role() = 'service_role');

CREATE POLICY "documents_delete" ON public.documents
  FOR DELETE USING (auth.role() = 'service_role');

-- Meetings: Anyone can read, only service_role can write
CREATE POLICY "meetings_select" ON public.meetings
  FOR SELECT USING (true);

CREATE POLICY "meetings_insert" ON public.meetings
  FOR INSERT WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "meetings_update" ON public.meetings
  FOR UPDATE USING (auth.role() = 'service_role');

CREATE POLICY "meetings_delete" ON public.meetings
  FOR DELETE USING (auth.role() = 'service_role');

-- Audit logs: Anyone can read, only service_role can write
CREATE POLICY "audit_select" ON public.audit_logs
  FOR SELECT USING (true);

CREATE POLICY "audit_insert" ON public.audit_logs
  FOR INSERT WITH CHECK (auth.role() = 'service_role');

CREATE POLICY "audit_update" ON public.audit_logs
  FOR UPDATE USING (auth.role() = 'service_role');

CREATE POLICY "audit_delete" ON public.audit_logs
  FOR DELETE USING (auth.role() = 'service_role');
