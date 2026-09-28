CREATE TABLE public.applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  linkedin_url text CHECK (linkedin_url IS NULL OR char_length(linkedin_url) <= 300),
  motivation text CHECK (motivation IS NULL OR char_length(motivation) <= 2000),
  preferred_destination text CHECK (preferred_destination IS NULL OR char_length(preferred_destination) <= 60),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.applications TO anon, authenticated;
GRANT ALL ON public.applications TO service_role;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit an application" ON public.applications FOR INSERT TO anon, authenticated WITH CHECK (true);