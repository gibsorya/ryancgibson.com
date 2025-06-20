import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "media" ADD COLUMN "sizes_thumbnail_url" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_thumbnail_width" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_thumbnail_height" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_thumbnail_mime_type" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_thumbnail_filesize" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_thumbnail_filename" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_standard_url" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_standard_width" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_standard_height" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_standard_mime_type" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_standard_filesize" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_standard_filename" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_icon_small_url" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_icon_small_width" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_icon_small_height" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_icon_small_mime_type" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_icon_small_filesize" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_icon_small_filename" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_icon_large_url" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_icon_large_width" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_icon_large_height" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_icon_large_mime_type" varchar;
  ALTER TABLE "media" ADD COLUMN "sizes_icon_large_filesize" numeric;
  ALTER TABLE "media" ADD COLUMN "sizes_icon_large_filename" varchar;
  ALTER TABLE "skills" ADD COLUMN "url" varchar;
  CREATE INDEX IF NOT EXISTS "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_standard_sizes_standard_filename_idx" ON "media" USING btree ("sizes_standard_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_icon_small_sizes_icon_small_filename_idx" ON "media" USING btree ("sizes_icon_small_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_icon_large_sizes_icon_large_filename_idx" ON "media" USING btree ("sizes_icon_large_filename");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP INDEX IF EXISTS "media_sizes_thumbnail_sizes_thumbnail_filename_idx";
  DROP INDEX IF EXISTS "media_sizes_standard_sizes_standard_filename_idx";
  DROP INDEX IF EXISTS "media_sizes_icon_small_sizes_icon_small_filename_idx";
  DROP INDEX IF EXISTS "media_sizes_icon_large_sizes_icon_large_filename_idx";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_thumbnail_url";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_thumbnail_width";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_thumbnail_height";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_thumbnail_mime_type";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_thumbnail_filesize";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_thumbnail_filename";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_standard_url";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_standard_width";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_standard_height";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_standard_mime_type";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_standard_filesize";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_standard_filename";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_icon_small_url";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_icon_small_width";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_icon_small_height";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_icon_small_mime_type";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_icon_small_filesize";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_icon_small_filename";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_icon_large_url";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_icon_large_width";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_icon_large_height";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_icon_large_mime_type";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_icon_large_filesize";
  ALTER TABLE "media" DROP COLUMN IF EXISTS "sizes_icon_large_filename";
  ALTER TABLE "skills" DROP COLUMN IF EXISTS "url";`)
}
