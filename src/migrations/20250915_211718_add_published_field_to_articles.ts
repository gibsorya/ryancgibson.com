import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_articles_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__articles_v_version_status" AS ENUM('draft', 'published');
  CREATE TABLE IF NOT EXISTS "_articles_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_hero_image_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__articles_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
    ALTER TABLE _articles_v ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public_read__articles_v" on _articles_v FOR SELECT USING (true);

ALTER TABLE header_nav_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public_read_header_nav_items" ON header_nav_items FOR SELECT USING (true);
  
  ALTER TABLE "articles" ADD COLUMN "published_at" timestamp(3) with time zone;
  ALTER TABLE "articles" ADD COLUMN "_status" "enum_articles_status" DEFAULT 'draft';
  DO $$ BEGIN
   ALTER TABLE "_articles_v" ADD CONSTRAINT "_articles_v_parent_id_articles_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."articles"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_articles_v" ADD CONSTRAINT "_articles_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_articles_v" ADD CONSTRAINT "_articles_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "_articles_v_parent_idx" ON "_articles_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_articles_v_version_version_slug_idx" ON "_articles_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_articles_v_version_version_hero_image_idx" ON "_articles_v" USING btree ("version_hero_image_id");
  CREATE INDEX IF NOT EXISTS "_articles_v_version_meta_version_meta_image_idx" ON "_articles_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_articles_v_version_version_updated_at_idx" ON "_articles_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_articles_v_version_version_created_at_idx" ON "_articles_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_articles_v_version_version__status_idx" ON "_articles_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_articles_v_created_at_idx" ON "_articles_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_articles_v_updated_at_idx" ON "_articles_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_articles_v_latest_idx" ON "_articles_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_articles_v_autosave_idx" ON "_articles_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "articles__status_idx" ON "articles" USING btree ("_status");`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "_articles_v" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "_articles_v" CASCADE;
  DROP INDEX IF EXISTS "articles__status_idx";
  ALTER TABLE "articles" DROP COLUMN IF EXISTS "published_at";
  ALTER TABLE "articles" DROP COLUMN IF EXISTS "_status";
  DROP TYPE "public"."enum_articles_status";
  DROP TYPE "public"."enum__articles_v_version_status";`)
}
