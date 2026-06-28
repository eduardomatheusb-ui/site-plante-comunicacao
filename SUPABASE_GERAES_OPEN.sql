create table if not exists instagram_events (
  id uuid primary key default gen_random_uuid(),
  username text,
  instagram_user_id text,
  event_type text not null,
  event_payload jsonb,
  detected_at timestamptz not null default now(),
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create table if not exists direct_messages (
  id uuid primary key default gen_random_uuid(),
  username text,
  instagram_user_id text,
  tracking_token text,
  tracking_url text,
  message_text text,
  status text not null default 'pending',
  error_message text,
  meta_response jsonb,
  sent_at timestamptz,
  attempts integer not null default 1,
  created_at timestamptz not null default now()
);

create table if not exists participants (
  id uuid primary key default gen_random_uuid(),
  username text,
  name text not null,
  whatsapp text not null,
  email text,
  city text,
  instagram text,
  has_business text,
  business_name text,
  answer text,
  interest text,
  source text,
  tracking_token text,
  created_at timestamptz not null default now()
);

create table if not exists consents (
  id uuid primary key default gen_random_uuid(),
  participant_id uuid references participants(id) on delete cascade,
  consent_text text not null,
  source_url text,
  accepted_at timestamptz not null default now()
);

create table if not exists admin_actions (
  id uuid primary key default gen_random_uuid(),
  admin_user text,
  action text not null,
  target_id text,
  created_at timestamptz not null default now()
);

create index if not exists instagram_events_username_idx on instagram_events (username);
create index if not exists instagram_events_detected_at_idx on instagram_events (detected_at desc);
create index if not exists direct_messages_tracking_token_idx on direct_messages (tracking_token);
create index if not exists participants_tracking_token_idx on participants (tracking_token);
