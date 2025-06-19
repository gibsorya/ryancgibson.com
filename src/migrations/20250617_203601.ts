import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  DO $$ BEGIN
    CREATE TYPE "public"."enum_pages_blocks_card_deck_padding" AS ENUM('small', 'medium', 'large', 'none');
  EXCEPTION
    WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
    CREATE TYPE "public"."enum__pages_v_blocks_card_deck_padding" AS ENUM('small', 'medium', 'large', 'none');
  EXCEPTION
    WHEN duplicate_object THEN null;
  END $$;

  ALTER TABLE "pages_blocks_card_deck" ADD COLUMN IF NOT EXISTS "padding" "enum_pages_blocks_card_deck_padding" DEFAULT 'small';
  ALTER TABLE "_pages_v_blocks_card_deck" ADD COLUMN IF NOT EXISTS "padding" "enum__pages_v_blocks_card_deck_padding" DEFAULT 'small';`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "pages_blocks_card_deck" DROP COLUMN IF EXISTS "padding";
  ALTER TABLE "_pages_v_blocks_card_deck" DROP COLUMN IF EXISTS "padding";
  DROP TYPE IF EXISTS "public"."enum_pages_blocks_card_deck_padding";
  DROP TYPE IF EXISTS "public"."enum__pages_v_blocks_card_deck_padding";`)
}
