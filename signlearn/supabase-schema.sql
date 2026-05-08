-- ================================================================
-- SignLearn — Schema para Supabase
-- Ejecuta esto en: Supabase Dashboard > SQL Editor > New query
-- ================================================================

-- 1. TABLA PROFILES
-- Se crea automáticamente cuando un usuario se registra
create table if not exists public.profiles (
  id            uuid references auth.users(id) on delete cascade primary key,
  name          text not null default '',
  email         text not null default '',
  plan          text not null default 'free' check (plan in ('free', 'premium')),
  xp            integer not null default 0,
  streak        integer not null default 0,
  last_activity date,
  completed_lessons text[] default '{}',
  quiz_scores   jsonb default '{}',
  stripe_customer_id text,
  stripe_subscription_id text,
  created_at    timestamptz default now(),
  updated_at    timestamptz default now()
);

-- 2. ROW LEVEL SECURITY
-- Cada usuario solo puede leer y editar su propio perfil
alter table public.profiles enable row level security;

create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- 3. TRIGGER: crea perfil automáticamente al registrarse
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, name, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'name', split_part(new.email, '@', 1)),
    new.email
  );
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- 4. TABLA LESSON_COMPLETIONS (historial detallado, opcional)
create table if not exists public.lesson_completions (
  id          uuid default gen_random_uuid() primary key,
  user_id     uuid references public.profiles(id) on delete cascade not null,
  lesson_id   text not null,
  score       integer not null default 0,
  xp_earned   integer not null default 0,
  completed_at timestamptz default now()
);

alter table public.lesson_completions enable row level security;

create policy "Users can view own completions"
  on public.lesson_completions for select
  using (auth.uid() = user_id);

create policy "Users can insert own completions"
  on public.lesson_completions for insert
  with check (auth.uid() = user_id);

-- 5. INDEX para performance
create index if not exists profiles_plan_idx on public.profiles(plan);
create index if not exists completions_user_idx on public.lesson_completions(user_id);
