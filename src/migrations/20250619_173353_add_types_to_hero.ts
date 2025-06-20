import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_hero_type" AS ENUM('text', 'full', 'banner');
  CREATE TYPE "public"."enum_pages_blocks_skill_list_scroll_direction" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_hero_type" AS ENUM('text', 'full', 'banner');
  CREATE TYPE "public"."enum__pages_v_blocks_skill_list_scroll_direction" AS ENUM('left', 'right');
  CREATE TABLE IF NOT EXISTS "pages_blocks_skill_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"is_scrolling" boolean DEFAULT false,
  	"scroll_direction" "enum_pages_blocks_skill_list_scroll_direction",
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_skills_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"skills_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_skill_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"is_scrolling" boolean DEFAULT false,
  	"scroll_direction" "enum__pages_v_blocks_skill_list_scroll_direction",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_skills_card" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"skills_id" integer
  );
  
  ALTER TABLE "pages_blocks_hero" ALTER COLUMN "description" SET DATA TYPE jsonb;
  ALTER TABLE "_pages_v_blocks_hero" ALTER COLUMN "description" SET DATA TYPE jsonb;
  ALTER TABLE "skills" ALTER COLUMN "icon_id" DROP NOT NULL;
  ALTER TABLE "pages_blocks_hero" ADD COLUMN "type" "enum_pages_blocks_hero_type" DEFAULT 'text';
  ALTER TABLE "_pages_v_blocks_hero" ADD COLUMN "type" "enum__pages_v_blocks_hero_type" DEFAULT 'text';
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_skill_list" ADD CONSTRAINT "pages_blocks_skill_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_skills_card" ADD CONSTRAINT "pages_blocks_skills_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_skill_list" ADD CONSTRAINT "_pages_v_blocks_skill_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_skills_card" ADD CONSTRAINT "_pages_v_blocks_skills_card_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_skills_fk" FOREIGN KEY ("skills_id") REFERENCES "public"."skills"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_skill_list_order_idx" ON "pages_blocks_skill_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_skill_list_parent_id_idx" ON "pages_blocks_skill_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_skill_list_path_idx" ON "pages_blocks_skill_list" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_skills_card_order_idx" ON "pages_blocks_skills_card" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_skills_card_parent_id_idx" ON "pages_blocks_skills_card" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_skills_card_path_idx" ON "pages_blocks_skills_card" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "pages_rels_skills_id_idx" ON "pages_rels" USING btree ("skills_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_skill_list_order_idx" ON "_pages_v_blocks_skill_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_skill_list_parent_id_idx" ON "_pages_v_blocks_skill_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_skill_list_path_idx" ON "_pages_v_blocks_skill_list" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_skills_card_order_idx" ON "_pages_v_blocks_skills_card" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_skills_card_parent_id_idx" ON "_pages_v_blocks_skills_card" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_skills_card_path_idx" ON "_pages_v_blocks_skills_card" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_skills_id_idx" ON "_pages_v_rels" USING btree ("skills_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_skill_list" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_skills_card" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_skill_list" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_skills_card" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_rels" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_skill_list" CASCADE;
  DROP TABLE "pages_blocks_skills_card" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_blocks_skill_list" CASCADE;
  DROP TABLE "_pages_v_blocks_skills_card" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  ALTER TABLE "pages_blocks_hero" ALTER COLUMN "description" SET DATA TYPE varchar;
  ALTER TABLE "_pages_v_blocks_hero" ALTER COLUMN "description" SET DATA TYPE varchar;
  ALTER TABLE "skills" ALTER COLUMN "icon_id" SET NOT NULL;
  ALTER TABLE "pages_blocks_hero" DROP COLUMN IF EXISTS "type";
  ALTER TABLE "_pages_v_blocks_hero" DROP COLUMN IF EXISTS "type";
  DROP TYPE "public"."enum_pages_blocks_hero_type";
  DROP TYPE "public"."enum_pages_blocks_skill_list_scroll_direction";
  DROP TYPE "public"."enum__pages_v_blocks_hero_type";
  DROP TYPE "public"."enum__pages_v_blocks_skill_list_scroll_direction";`)
}
