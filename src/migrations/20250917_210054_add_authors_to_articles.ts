import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "articles" ADD COLUMN "author" varchar DEFAULT 'Ryan Gibson';
  ALTER TABLE "_articles_v" ADD COLUMN "version_author" varchar DEFAULT 'Ryan Gibson';`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "articles" DROP COLUMN IF EXISTS "author";
  ALTER TABLE "_articles_v" DROP COLUMN IF EXISTS "version_author";`)
}
