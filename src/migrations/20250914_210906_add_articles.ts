import {
    MigrateUpArgs,
    MigrateDownArgs,
    sql,
} from "@payloadcms/db-vercel-postgres";

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
    await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "articles" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"hero_image_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );

ALTER TABLE "articles" ENABLE ROW LEVEL SECURITY;

CREATE POLICY public_articles_read_policy ON "articles" FOR SELECT USING (true);
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "articles_id" integer;
  DO $$ BEGIN
   ALTER TABLE "articles" ADD CONSTRAINT "articles_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "articles" ADD CONSTRAINT "articles_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "articles_slug_idx" ON "articles" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "articles_hero_image_idx" ON "articles" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "articles_meta_meta_image_idx" ON "articles" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "articles_updated_at_idx" ON "articles" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "articles_created_at_idx" ON "articles" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_articles_fk" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_articles_id_idx" ON "payload_locked_documents_rels" USING btree ("articles_id");`);
}

export async function down({
    db,
    payload,
    req,
}: MigrateDownArgs): Promise<void> {
    await db.execute(sql`
   ALTER TABLE "articles" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "articles" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_articles_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_articles_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "articles_id";`);
}
