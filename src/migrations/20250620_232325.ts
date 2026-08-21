import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_collection" CASCADE;
  DROP TABLE "_pages_v_blocks_collection" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_collection_collection";
  DROP TYPE "public"."enum_pages_blocks_collection_collection_info_position";
  DROP TYPE "public"."enum__pages_v_blocks_collection_collection";
  DROP TYPE "public"."enum__pages_v_blocks_collection_collection_info_position";`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_collection_collection" AS ENUM('projects');
  CREATE TYPE "public"."enum_pages_blocks_collection_collection_info_position" AS ENUM('top', 'left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_collection_collection" AS ENUM('projects');
  CREATE TYPE "public"."enum__pages_v_blocks_collection_collection_info_position" AS ENUM('top', 'left', 'right');
  CREATE TABLE IF NOT EXISTS "pages_blocks_collection" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"collection" "enum_pages_blocks_collection_collection" DEFAULT 'projects',
  	"collection_info_position" "enum_pages_blocks_collection_collection_info_position" DEFAULT 'top',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_collection" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" jsonb,
  	"collection" "enum__pages_v_blocks_collection_collection" DEFAULT 'projects',
  	"collection_info_position" "enum__pages_v_blocks_collection_collection_info_position" DEFAULT 'top',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_collection" ADD CONSTRAINT "pages_blocks_collection_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_collection" ADD CONSTRAINT "_pages_v_blocks_collection_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_collection_order_idx" ON "pages_blocks_collection" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_collection_parent_id_idx" ON "pages_blocks_collection" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_collection_path_idx" ON "pages_blocks_collection" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_collection_order_idx" ON "_pages_v_blocks_collection" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_collection_parent_id_idx" ON "_pages_v_blocks_collection" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_collection_path_idx" ON "_pages_v_blocks_collection" USING btree ("_path");`)
}
