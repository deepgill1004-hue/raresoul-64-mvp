create extension if not exists "pgcrypto";

create table if not exists public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  email text,
  created_at timestamptz not null default now()
);

create table if not exists public.questions (
  id text primary key,
  text text not null,
  module text not null,
  dimension text not null,
  direction text not null,
  weight numeric(5, 2) not null default 1,
  reverse boolean not null default false,
  scale integer not null default 5,
  active boolean not null default true,
  sort_order integer not null
);

create table if not exists public.test_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id) on delete set null,
  status text not null default 'in_progress',
  current_question_id text references public.questions(id),
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

create table if not exists public.answers (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.test_sessions(id) on delete cascade,
  question_id text not null references public.questions(id),
  value integer not null check (value between 1 and 5),
  created_at timestamptz not null default now(),
  unique (session_id, question_id)
);

create table if not exists public.archetype_profiles (
  code_internal text primary key,
  public_name text not null,
  species_group text not null,
  rarity_level integer not null check (rarity_level between 1 and 5),
  core_sentence text not null,
  outer_image text not null,
  inner_truth text not null,
  core_desire text not null,
  core_fear text not null,
  gift text not null,
  blindspot text not null,
  stress_behavior text not null,
  relationship_style text not null,
  career_style text not null,
  growth_path text not null,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.dimension_reports (
  id uuid primary key default gen_random_uuid(),
  dimension text not null,
  band text not null,
  title text not null,
  body text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.love_profiles (
  code_internal text primary key references public.archetype_profiles(code_internal) on delete cascade,
  core_need text not null,
  attracted_to text not null,
  conflict_pattern text not null,
  advice text not null
);

create table if not exists public.career_profiles (
  code_internal text primary key references public.archetype_profiles(code_internal) on delete cascade,
  work_fuel text not null,
  suitable_roles text[] not null default '{}',
  draining_environment text not null,
  thirty_day_strategy text not null
);

create table if not exists public.stress_profiles (
  code_internal text primary key references public.archetype_profiles(code_internal) on delete cascade,
  stress_trigger text not null,
  stress_behavior text not null,
  repair_action text not null
);

create table if not exists public.pairing_rules (
  id uuid primary key default gen_random_uuid(),
  code_a text not null references public.archetype_profiles(code_internal),
  code_b text not null references public.archetype_profiles(code_internal),
  relationship_archetype text not null,
  emotional_score integer not null check (emotional_score between 0 and 100),
  rhythm_score integer not null check (rhythm_score between 0 and 100),
  repair_score integer not null check (repair_score between 0 and 100),
  complement_score integer not null check (complement_score between 0 and 100),
  high_attraction_cost integer not null check (high_attraction_cost between 0 and 100),
  repair_advice text not null,
  unique (code_a, code_b)
);

create table if not exists public.reports (
  id uuid primary key default gen_random_uuid(),
  session_id uuid references public.test_sessions(id) on delete set null,
  user_id uuid references public.users(id) on delete set null,
  code_internal text not null references public.archetype_profiles(code_internal),
  preview_json jsonb not null,
  full_report_json jsonb not null,
  radar_json jsonb not null,
  intensity numeric(5, 2) not null,
  unlocked boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id) on delete set null,
  report_id uuid references public.reports(id) on delete set null,
  product_code text not null,
  amount integer not null,
  currency text not null default 'TWD',
  provider text not null default 'placeholder',
  provider_trade_no text,
  status text not null default 'pending',
  created_at timestamptz not null default now(),
  paid_at timestamptz
);

create table if not exists public.couple_invites (
  id uuid primary key default gen_random_uuid(),
  inviter_report_id uuid not null references public.reports(id) on delete cascade,
  invite_token text not null unique,
  invited_user_id uuid references public.users(id) on delete set null,
  invited_report_id uuid references public.reports(id) on delete set null,
  status text not null default 'pending',
  created_at timestamptz not null default now(),
  accepted_at timestamptz
);

create table if not exists public.couple_reports (
  id uuid primary key default gen_random_uuid(),
  invite_id uuid not null references public.couple_invites(id) on delete cascade,
  report_a_id uuid not null references public.reports(id) on delete cascade,
  report_b_id uuid not null references public.reports(id) on delete cascade,
  pairing_json jsonb not null,
  unlocked boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.coupons (
  code text primary key,
  discount_type text not null,
  discount_value integer not null,
  active boolean not null default true,
  expires_at timestamptz
);

create table if not exists public.admin_logs (
  id uuid primary key default gen_random_uuid(),
  admin_user_id uuid references public.users(id) on delete set null,
  action text not null,
  target_table text,
  target_id text,
  payload jsonb not null default '{}',
  created_at timestamptz not null default now()
);

alter table public.users enable row level security;
alter table public.test_sessions enable row level security;
alter table public.answers enable row level security;
alter table public.reports enable row level security;
alter table public.orders enable row level security;
alter table public.couple_invites enable row level security;
alter table public.couple_reports enable row level security;

create policy "Users can read own profile" on public.users
  for select using (auth.uid() = id);

create policy "Users can update own profile" on public.users
  for update using (auth.uid() = id);

create policy "Public can read active questions" on public.questions
  for select using (active = true);

create policy "Public can read active archetypes" on public.archetype_profiles
  for select using (active = true);
