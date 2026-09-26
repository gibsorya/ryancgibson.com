import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
    await db.execute(sql`
        ALTER TABLE "newsletters" ENABLE ROW LEVEL SECURITY;
        ALTER TABLE "pages_blocks_article_list" ENABLE ROW LEVEL SECURITY;
        ALTER TABLE "_pages_v_blocks_article_list" ENABLE ROW LEVEL SECURITY;
        ALTER TABLE "payload_kv" ENABLE ROW LEVEL SECURITY;
        ALTER TABLE "users_sessions" ENABLE ROW LEVEL SECURITY;
    `);
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
    // Migration code
}
