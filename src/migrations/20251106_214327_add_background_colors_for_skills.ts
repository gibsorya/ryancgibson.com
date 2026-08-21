import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_skills_card_background" AS ENUM('light', 'dark', 'light-blue', 'tomato-red', 'wenge-gray', 'gradient');
  CREATE TYPE "public"."enum__pages_v_blocks_skills_card_background" AS ENUM('light', 'dark', 'light-blue', 'tomato-red', 'wenge-gray', 'gradient');
  ALTER TABLE "pages_blocks_card" ALTER COLUMN "background" SET DATA TYPE text;
  ALTER TABLE "pages_blocks_card" ALTER COLUMN "background" SET DEFAULT 'dark'::text;
  DROP TYPE "public"."enum_pages_blocks_card_background";
  CREATE TYPE "public"."enum_pages_blocks_card_background" AS ENUM('light', 'dark', 'light-blue', 'tomato-red', 'wenge-gray', 'gradient');
  ALTER TABLE "pages_blocks_card" ALTER COLUMN "background" SET DEFAULT 'dark'::"public"."enum_pages_blocks_card_background";
  ALTER TABLE "pages_blocks_card" ALTER COLUMN "background" SET DATA TYPE "public"."enum_pages_blocks_card_background" USING "background"::"public"."enum_pages_blocks_card_background";
  ALTER TABLE "_pages_v_blocks_card" ALTER COLUMN "background" SET DATA TYPE text;
  ALTER TABLE "_pages_v_blocks_card" ALTER COLUMN "background" SET DEFAULT 'dark'::text;
  DROP TYPE "public"."enum__pages_v_blocks_card_background";
  CREATE TYPE "public"."enum__pages_v_blocks_card_background" AS ENUM('light', 'dark', 'light-blue', 'tomato-red', 'wenge-gray', 'gradient');
  ALTER TABLE "_pages_v_blocks_card" ALTER COLUMN "background" SET DEFAULT 'dark'::"public"."enum__pages_v_blocks_card_background";
  ALTER TABLE "_pages_v_blocks_card" ALTER COLUMN "background" SET DATA TYPE "public"."enum__pages_v_blocks_card_background" USING "background"::"public"."enum__pages_v_blocks_card_background";
  ALTER TABLE "pages_blocks_skills_card" ADD COLUMN "background" "enum_pages_blocks_skills_card_background" DEFAULT 'dark';
  ALTER TABLE "_pages_v_blocks_skills_card" ADD COLUMN "background" "enum__pages_v_blocks_skills_card_background" DEFAULT 'dark';`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_card" ALTER COLUMN "background" SET DATA TYPE text;
  DROP TYPE "public"."enum_pages_blocks_card_background";
  CREATE TYPE "public"."enum_pages_blocks_card_background" AS ENUM('light', 'dark', 'light-blue', 'gradient', 'none');
  ALTER TABLE "pages_blocks_card" ALTER COLUMN "background" SET DATA TYPE "public"."enum_pages_blocks_card_background" USING "background"::"public"."enum_pages_blocks_card_background";
  ALTER TABLE "_pages_v_blocks_card" ALTER COLUMN "background" SET DATA TYPE text;
  DROP TYPE "public"."enum__pages_v_blocks_card_background";
  CREATE TYPE "public"."enum__pages_v_blocks_card_background" AS ENUM('light', 'dark', 'light-blue', 'gradient', 'none');
  ALTER TABLE "_pages_v_blocks_card" ALTER COLUMN "background" SET DATA TYPE "public"."enum__pages_v_blocks_card_background" USING "background"::"public"."enum__pages_v_blocks_card_background";
  ALTER TABLE "pages_blocks_card" ALTER COLUMN "background" DROP DEFAULT;
  ALTER TABLE "_pages_v_blocks_card" ALTER COLUMN "background" DROP DEFAULT;
  ALTER TABLE "pages_blocks_skills_card" DROP COLUMN "background";
  ALTER TABLE "_pages_v_blocks_skills_card" DROP COLUMN "background";
  DROP TYPE "public"."enum_pages_blocks_skills_card_background";
  DROP TYPE "public"."enum__pages_v_blocks_skills_card_background";`)
}
