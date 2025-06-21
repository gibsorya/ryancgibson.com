import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db}: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "media" ADD COLUMN "sizes_og_url" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_og_width" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_og_height" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_og_mime_type" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_og_filesize" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_og_filename" varchar;
  CREATE INDEX IF NOT EXISTS "media_sizes_og_sizes_og_filename_idx" ON "media" USING btree ("sizes_og_filename");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP INDEX IF EXISTS "media_sizes_og_sizes_og_filename_idx";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_og_url";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_og_width";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_og_height";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_og_mime_type";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_og_filesize";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_og_filename";`)
}
