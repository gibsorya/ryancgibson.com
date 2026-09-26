import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
    await db.execute(sql`
        ALTER TABLE "newsletters" ENABLE ROW LEVEL SECURITY;
        ALTER TABLE "pages_blocks_article_list" ENABLE ROW LEVEL SECURITY;
        ALTER TABLE "_pages_v_blocks_article_list" ENABLE ROW LEVEL SECURITY;
        ALTER TABLE "payload_kv" ENABLE ROW LEVEL SECURITY;
        ALTER TABLE "users_sessions" ENABLE ROW LEVEL SECURITY;
    `);

    // Create policies for public read access
    await db.execute(sql`
        CREATE POLICY "public_read_newsletters" ON newsletters FOR SELECT USING (true);
        CREATE POLICY "public_read_pages_blocks_article_list" ON pages_blocks_article_list FOR SELECT USING (true);
        CREATE POLICY "public_read__pages_v_blocks_article_list" ON _pages_v_blocks_article_list FOR SELECT USING (true);
        CREATE POLICY "public_read_payload_kv" ON payload_kv FOR SELECT USING (true);
        CREATE POLICY "public_read_users_sessions" ON users_sessions FOR SELECT USING (true);
    `);
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
    await db.execute(sql`
        DROP POLICY IF EXISTS "public_read_newsletters" ON newsletters;
        DROP POLICY IF EXISTS "public_read_pages_blocks_article_list" ON pages_blocks_article_list;
        DROP POLICY IF EXISTS "public_read__pages_v_blocks_article_list" ON _pages_v_blocks_article_list;
        DROP POLICY IF EXISTS "public_read_payload_kv" ON payload_kv;
        DROP POLICY IF EXISTS "public_read_users_sessions" ON users_sessions;
    `);

    await db.execute(sql`
        ALTER TABLE "newsletters" DISABLE ROW LEVEL SECURITY;
        ALTER TABLE "pages_blocks_article_list" DISABLE ROW LEVEL SECURITY;
        ALTER TABLE "_pages_v_blocks_article_list" DISABLE ROW LEVEL SECURITY;
        ALTER TABLE "payload_kv" DISABLE ROW LEVEL SECURITY;
        ALTER TABLE "users_sessions" DISABLE ROW LEVEL SECURITY;
    `);
}
