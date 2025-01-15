-- Drop the existing table
drop table if exists public.contacts;

-- Create the updated contacts table
create table public.contacts (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  whatsapp text not null,
  message text not null,
  status text default 'new' not null
);

-- Enable Row Level Security
alter table public.contacts enable row level security;

-- Create policy to allow inserts from authenticated and anonymous users
create policy "Allow anonymous submissions" 
on public.contacts 
for insert 
to anon 
with check (true);

-- Create policy to allow viewing only by authenticated users
create policy "Allow viewing by authenticated users only" 
on public.contacts 
for select 
to authenticated 
using (true);

