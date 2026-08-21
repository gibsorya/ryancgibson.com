import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "pages_blocks_article_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"featured_article_id" integer,
  	"show_images" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_article_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"featured_article_id" integer,
  	"show_images" boolean,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages" ADD COLUMN "enable_borders" boolean;
  ALTER TABLE "_pages_v" ADD COLUMN "version_enable_borders" boolean;
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_article_list" ADD CONSTRAINT "pages_blocks_article_list_featured_article_id_articles_id_fk" FOREIGN KEY ("featured_article_id") REFERENCES "public"."articles"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_article_list" ADD CONSTRAINT "pages_blocks_article_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_article_list" ADD CONSTRAINT "_pages_v_blocks_article_list_featured_article_id_articles_id_fk" FOREIGN KEY ("featured_article_id") REFERENCES "public"."articles"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_article_list" ADD CONSTRAINT "_pages_v_blocks_article_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_article_list_order_idx" ON "pages_blocks_article_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_article_list_parent_id_idx" ON "pages_blocks_article_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_article_list_path_idx" ON "pages_blocks_article_list" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_article_list_featured_article_idx" ON "pages_blocks_article_list" USING btree ("featured_article_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_article_list_order_idx" ON "_pages_v_blocks_article_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_article_list_parent_id_idx" ON "_pages_v_blocks_article_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_article_list_path_idx" ON "_pages_v_blocks_article_list" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_article_list_featured_article_idx" ON "_pages_v_blocks_article_list" USING btree ("featured_article_id");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_article_list" CASCADE;
  DROP TABLE "_pages_v_blocks_article_list" CASCADE;
  ALTER TABLE "pages" DROP COLUMN IF EXISTS "enable_borders";
  ALTER TABLE "_pages_v" DROP COLUMN IF EXISTS "version_enable_borders";`)
}
