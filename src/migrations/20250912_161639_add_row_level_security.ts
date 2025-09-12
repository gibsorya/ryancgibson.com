import {
  MigrateUpArgs,
  MigrateDownArgs,
  sql,
} from "@payloadcms/db-vercel-postgres";

export async function up({ db }: MigrateUpArgs): Promise<void> {
  // Enable Row Level Security on all tables
  await db.execute(sql`
    ALTER TABLE users ENABLE ROW LEVEL SECURITY;
    ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
    ALTER TABLE socials ENABLE ROW LEVEL SECURITY;
    ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
    ALTER TABLE projects_rels ENABLE ROW LEVEL SECURITY;
    ALTER TABLE projects_links ENABLE ROW LEVEL SECURITY;
    ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
    ALTER TABLE payload_preferences_rels ENABLE ROW LEVEL SECURITY;
    ALTER TABLE payload_preferences ENABLE ROW LEVEL SECURITY;
    ALTER TABLE payload_migrations ENABLE ROW LEVEL SECURITY;
    ALTER TABLE payload_locked_documents ENABLE ROW LEVEL SECURITY;
    ALTER TABLE payload_locked_documents_rels ENABLE ROW LEVEL SECURITY;
    ALTER TABLE payload_jobs_log ENABLE ROW LEVEL SECURITY;
    ALTER TABLE payload_jobs ENABLE ROW LEVEL SECURITY;
    ALTER TABLE pages_rels ENABLE ROW LEVEL SECURITY;
    ALTER TABLE pages_blocks_skills_card ENABLE ROW LEVEL SECURITY;
    ALTER TABLE pages_blocks_skill_list ENABLE ROW LEVEL SECURITY;
    ALTER TABLE pages_blocks_project ENABLE ROW LEVEL SECURITY;
    ALTER TABLE pages_blocks_contact ENABLE ROW LEVEL SECURITY;
    ALTER TABLE pages_blocks_hero ENABLE ROW LEVEL SECURITY;
    ALTER TABLE pages_blocks_card_deck ENABLE ROW LEVEL SECURITY;
    ALTER TABLE pages_blocks_card ENABLE ROW LEVEL SECURITY;
    ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
    ALTER TABLE media ENABLE ROW LEVEL SECURITY;
    ALTER TABLE header_rels ENABLE ROW LEVEL SECURITY;
    ALTER TABLE header ENABLE ROW LEVEL SECURITY;
    ALTER TABLE footer ENABLE ROW LEVEL SECURITY;
    ALTER TABLE call_to_actions ENABLE ROW LEVEL SECURITY;
    ALTER TABLE _pages_v_blocks_skills_card ENABLE ROW LEVEL SECURITY;
    ALTER TABLE _pages_v_blocks_skill_list ENABLE ROW LEVEL SECURITY;
    ALTER TABLE _pages_v_blocks_project ENABLE ROW LEVEL SECURITY;
    ALTER TABLE _pages_v_blocks_contact ENABLE ROW LEVEL SECURITY;
    ALTER TABLE _pages_v_blocks_hero ENABLE ROW LEVEL SECURITY;
    ALTER TABLE _pages_v_blocks_card_deck ENABLE ROW LEVEL SECURITY;
    ALTER TABLE _pages_v_blocks_card ENABLE ROW LEVEL SECURITY;
    ALTER TABLE _pages_v_rels ENABLE ROW LEVEL SECURITY;
    ALTER TABLE _pages_v ENABLE ROW LEVEL SECURITY;
  `);

  // Create policies for public read access (excluding users table)
  await db.execute(sql`
    CREATE POLICY "public_read_tags" ON tags FOR SELECT USING (true);
    CREATE POLICY "public_read_socials" ON socials FOR SELECT USING (true);
    CREATE POLICY "public_read_skills" ON skills FOR SELECT USING (true);
    CREATE POLICY "public_read_projects_rels" ON projects_rels FOR SELECT USING (true);
    CREATE POLICY "public_read_projects_links" ON projects_links FOR SELECT USING (true);
    CREATE POLICY "public_read_projects" ON projects FOR SELECT USING (true);
    CREATE POLICY "public_read_payload_preferences_rels" ON payload_preferences_rels FOR SELECT USING (true);
    CREATE POLICY "public_read_payload_preferences" ON payload_preferences FOR SELECT USING (true);
    CREATE POLICY "public_read_payload_migrations" ON payload_migrations FOR SELECT USING (true);
    CREATE POLICY "public_read_payload_locked_documents" ON payload_locked_documents FOR SELECT USING (true);
    CREATE POLICY "public_read_payload_locked_documents_rels" ON payload_locked_documents_rels FOR SELECT USING (true);
    CREATE POLICY "public_read_payload_jobs_log" ON payload_jobs_log FOR SELECT USING (true);
    CREATE POLICY "public_read_payload_jobs" ON payload_jobs FOR SELECT USING (true);
    CREATE POLICY "public_read_pages_rels" ON pages_rels FOR SELECT USING (true);
    CREATE POLICY "public_read_pages_blocks_skills_card" ON pages_blocks_skills_card FOR SELECT USING (true);
    CREATE POLICY "public_read_pages_blocks_skill_list" ON pages_blocks_skill_list FOR SELECT USING (true);
    CREATE POLICY "public_read_pages_blocks_project" ON pages_blocks_project FOR SELECT USING (true);
    CREATE POLICY "public_read_pages_blocks_contact" ON pages_blocks_contact FOR SELECT USING (true);
    CREATE POLICY "public_read_pages_blocks_hero" ON pages_blocks_hero FOR SELECT USING (true);
    CREATE POLICY "public_read_pages_blocks_card_deck" ON pages_blocks_card_deck FOR SELECT USING (true);
    CREATE POLICY "public_read_pages_blocks_card" ON pages_blocks_card FOR SELECT USING (true);
    CREATE POLICY "public_read_pages" ON pages FOR SELECT USING (true);
    CREATE POLICY "public_read_media" ON media FOR SELECT USING (true);
    CREATE POLICY "public_read_header_rels" ON header_rels FOR SELECT USING (true);
    CREATE POLICY "public_read_header" ON header FOR SELECT USING (true);
    CREATE POLICY "public_read_footer" ON footer FOR SELECT USING (true);
    CREATE POLICY "public_read_call_to_actions" ON call_to_actions FOR SELECT USING (true);
    CREATE POLICY "public_read__pages_v_blocks_skills_card" ON _pages_v_blocks_skills_card FOR SELECT USING (true);
    CREATE POLICY "public_read__pages_v_blocks_skill_list" ON _pages_v_blocks_skill_list FOR SELECT USING (true);
    CREATE POLICY "public_read__pages_v_blocks_project" ON _pages_v_blocks_project FOR SELECT USING (true);
    CREATE POLICY "public_read__pages_v_blocks_contact" ON _pages_v_blocks_contact FOR SELECT USING (true);
    CREATE POLICY "public_read__pages_v_blocks_hero" ON _pages_v_blocks_hero FOR SELECT USING (true);
    CREATE POLICY "public_read__pages_v_blocks_card_deck" ON _pages_v_blocks_card_deck FOR SELECT USING (true);
    CREATE POLICY "public_read__pages_v_blocks_card" ON _pages_v_blocks_card FOR SELECT USING (true);
    CREATE POLICY "public_read__pages_v_rels" ON _pages_v_rels FOR SELECT USING (true);
    CREATE POLICY "public_read__pages_v" ON _pages_v FOR SELECT USING (true);

    CREATE POLICY "payload_auth_access" ON users FOR ALL USING (true);
  `);
}

export async function down({
  db,
}: MigrateDownArgs): Promise<void> {
  // Drop all policies first
  await db.execute(sql`
    DROP POLICY IF EXISTS "public_read_users" ON users;
    DROP POLICY IF EXISTS "public_read_tags" ON tags;
    DROP POLICY IF EXISTS "public_read_socials" ON socials;
    DROP POLICY IF EXISTS "public_read_skills" ON skills;
    DROP POLICY IF EXISTS "public_read_projects_rels" ON projects_rels;
    DROP POLICY IF EXISTS "public_read_projects_links" ON projects_links;
    DROP POLICY IF EXISTS "public_read_projects" ON projects;
    DROP POLICY IF EXISTS "public_read_payload_preferences_rels" ON payload_preferences_rels;
    DROP POLICY IF EXISTS "public_read_payload_preferences" ON payload_preferences;
    DROP POLICY IF EXISTS "public_read_payload_migrations" ON payload_migrations;
    DROP POLICY IF EXISTS "public_read_payload_locked_documents" ON payload_locked_documents;
    DROP POLICY IF EXISTS "public_read_payload_locked_documents_rels" ON payload_locked_documents_rels;
    DROP POLICY IF EXISTS "public_read_payload_jobs_log" ON payload_jobs_log;
    DROP POLICY IF EXISTS "public_read_payload_jobs" ON payload_jobs;
    DROP POLICY IF EXISTS "public_read_pages_rels" ON pages_rels;
    DROP POLICY IF EXISTS "public_read_pages_blocks_skills_card" ON pages_blocks_skills_card;
    DROP POLICY IF EXISTS "public_read_pages_blocks_skill_list" ON pages_blocks_skill_list;
    DROP POLICY IF EXISTS "public_read_pages_blocks_project" ON pages_blocks_project;
    DROP POLICY IF EXISTS "public_read_pages_blocks_contact" ON pages_blocks_contact;
    DROP POLICY IF EXISTS "public_read_pages_blocks_hero" ON pages_blocks_hero;
    DROP POLICY IF EXISTS "public_read_pages_blocks_card_deck" ON pages_blocks_card_deck;
    DROP POLICY IF EXISTS "public_read_pages_blocks_card" ON pages_blocks_card;
    DROP POLICY IF EXISTS "public_read_pages" ON pages;
    DROP POLICY IF EXISTS "public_read_media" ON media;
    DROP POLICY IF EXISTS "public_read_header_rels" ON header_rels;
    DROP POLICY IF EXISTS "public_read_header" ON header;
    DROP POLICY IF EXISTS "public_read_footer" ON footer;
    DROP POLICY IF EXISTS "public_read_call_to_actions" ON call_to_actions;
    DROP POLICY IF EXISTS "public_read__pages_v_blocks_skills_card" ON _pages_v_blocks_skills_card;
    DROP POLICY IF EXISTS "public_read__pages_v_blocks_skill_list" ON _pages_v_blocks_skill_list;
    DROP POLICY IF EXISTS "public_read__pages_v_blocks_project" ON _pages_v_blocks_project;
    DROP POLICY IF EXISTS "public_read__pages_v_blocks_contact" ON _pages_v_blocks_contact;
    DROP POLICY IF EXISTS "public_read__pages_v_blocks_hero" ON _pages_v_blocks_hero;
    DROP POLICY IF EXISTS "public_read__pages_v_blocks_card_deck" ON _pages_v_blocks_card_deck;
    DROP POLICY IF EXISTS "public_read__pages_v_blocks_card" ON _pages_v_blocks_card;
    DROP POLICY IF EXISTS "public_read__pages_v_rels" ON _pages_v_rels;
    DROP POLICY IF EXISTS "public_read__pages_v" ON _pages_v;
  `);

  // Disable Row Level Security on all tables
  await db.execute(sql`
    ALTER TABLE users DISABLE ROW LEVEL SECURITY;
    ALTER TABLE tags DISABLE ROW LEVEL SECURITY;
    ALTER TABLE socials DISABLE ROW LEVEL SECURITY;
    ALTER TABLE skills DISABLE ROW LEVEL SECURITY;
    ALTER TABLE projects_rels DISABLE ROW LEVEL SECURITY;
    ALTER TABLE projects_links DISABLE ROW LEVEL SECURITY;
    ALTER TABLE projects DISABLE ROW LEVEL SECURITY;
    ALTER TABLE payload_preferences_rels DISABLE ROW LEVEL SECURITY;
    ALTER TABLE payload_preferences DISABLE ROW LEVEL SECURITY;
    ALTER TABLE payload_migrations DISABLE ROW LEVEL SECURITY;
    ALTER TABLE payload_locked_documents DISABLE ROW LEVEL SECURITY;
    ALTER TABLE payload_locked_documents_rels DISABLE ROW LEVEL SECURITY;
    ALTER TABLE payload_jobs_log DISABLE ROW LEVEL SECURITY;
    ALTER TABLE payload_jobs DISABLE ROW LEVEL SECURITY;
    ALTER TABLE pages_rels DISABLE ROW LEVEL SECURITY;
    ALTER TABLE pages_blocks_skills_card DISABLE ROW LEVEL SECURITY;
    ALTER TABLE pages_blocks_skill_list DISABLE ROW LEVEL SECURITY;
    ALTER TABLE pages_blocks_project DISABLE ROW LEVEL SECURITY;
    ALTER TABLE pages_blocks_contact DISABLE ROW LEVEL SECURITY;
    ALTER TABLE pages_blocks_hero DISABLE ROW LEVEL SECURITY;
    ALTER TABLE pages_blocks_card_deck DISABLE ROW LEVEL SECURITY;
    ALTER TABLE pages_blocks_card DISABLE ROW LEVEL SECURITY;
    ALTER TABLE pages DISABLE ROW LEVEL SECURITY;
    ALTER TABLE media DISABLE ROW LEVEL SECURITY;
    ALTER TABLE header_rels DISABLE ROW LEVEL SECURITY;
    ALTER TABLE header DISABLE ROW LEVEL SECURITY;
    ALTER TABLE footer DISABLE ROW LEVEL SECURITY;
    ALTER TABLE call_to_actions DISABLE ROW LEVEL SECURITY;
    ALTER TABLE _pages_v_blocks_skills_card DISABLE ROW LEVEL SECURITY;
    ALTER TABLE _pages_v_blocks_skill_list DISABLE ROW LEVEL SECURITY;
    ALTER TABLE _pages_v_blocks_project DISABLE ROW LEVEL SECURITY;
    ALTER TABLE _pages_v_blocks_contact DISABLE ROW LEVEL SECURITY;
    ALTER TABLE _pages_v_blocks_hero DISABLE ROW LEVEL SECURITY;
    ALTER TABLE _pages_v_blocks_card_deck DISABLE ROW LEVEL SECURITY;
    ALTER TABLE _pages_v_blocks_card DISABLE ROW LEVEL SECURITY;
    ALTER TABLE _pages_v_rels DISABLE ROW LEVEL SECURITY;
    ALTER TABLE _pages_v DISABLE ROW LEVEL SECURITY;
  `);
}
