import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_project_background_color" AS ENUM('white', 'tomato-red', 'light_blue', 'rich_black', 'wenge-gray');
  CREATE TYPE "public"."enum__pages_v_blocks_project_background_color" AS ENUM('white', 'tomato-red', 'light_blue', 'rich_black', 'wenge-gray');
  ALTER TABLE "pages_blocks_project" ADD COLUMN "background_color" "enum_pages_blocks_project_background_color" DEFAULT 'white';
  ALTER TABLE "_pages_v_blocks_project" ADD COLUMN "background_color" "enum__pages_v_blocks_project_background_color" DEFAULT 'white';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_project" DROP COLUMN IF EXISTS "background_color";
  ALTER TABLE "_pages_v_blocks_project" DROP COLUMN IF EXISTS "background_color";
  DROP TYPE "public"."enum_pages_blocks_project_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_project_background_color";`)
}
