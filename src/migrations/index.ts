import * as migration_20250615_015527_add_tags_to_project from './20250615_015527_add_tags_to_project';
import * as migration_20250616_174533 from './20250616_174533';
import * as migration_20250617_203601 from './20250617_203601';
import * as migration_20250617_204007_add_skills from './20250617_204007_add_skills';
import * as migration_20250617_205211_add_skills_url from './20250617_205211_add_skills_url';
import * as migration_20250619_173353_add_types_to_hero from './20250619_173353_add_types_to_hero';
import * as migration_20250620_174321 from './20250620_174321';
import * as migration_20250620_211908 from './20250620_211908';
import * as migration_20250620_232325 from './20250620_232325';
import * as migration_20250621_003024 from './20250621_003024';
import * as migration_20250621_022746 from './20250621_022746';
import * as migration_20250912_161639_add_row_level_security from './20250912_161639_add_row_level_security';
import * as migration_20250914_210906_add_articles from './20250914_210906_add_articles';
import * as migration_20250915_211718_add_published_field_to_articles from './20250915_211718_add_published_field_to_articles';
import * as migration_20250917_210054_add_authors_to_articles from './20250917_210054_add_authors_to_articles';

export const migrations = [
  {
    up: migration_20250615_015527_add_tags_to_project.up,
    down: migration_20250615_015527_add_tags_to_project.down,
    name: '20250615_015527_add_tags_to_project',
  },
  {
    up: migration_20250616_174533.up,
    down: migration_20250616_174533.down,
    name: '20250616_174533',
  },
  {
    up: migration_20250617_203601.up,
    down: migration_20250617_203601.down,
    name: '20250617_203601',
  },
  {
    up: migration_20250617_204007_add_skills.up,
    down: migration_20250617_204007_add_skills.down,
    name: '20250617_204007_add_skills',
  },
  {
    up: migration_20250617_205211_add_skills_url.up,
    down: migration_20250617_205211_add_skills_url.down,
    name: '20250617_205211_add_skills_url',
  },
  {
    up: migration_20250619_173353_add_types_to_hero.up,
    down: migration_20250619_173353_add_types_to_hero.down,
    name: '20250619_173353_add_types_to_hero',
  },
  {
    up: migration_20250620_174321.up,
    down: migration_20250620_174321.down,
    name: '20250620_174321',
  },
  {
    up: migration_20250620_211908.up,
    down: migration_20250620_211908.down,
    name: '20250620_211908',
  },
  {
    up: migration_20250620_232325.up,
    down: migration_20250620_232325.down,
    name: '20250620_232325',
  },
  {
    up: migration_20250621_003024.up,
    down: migration_20250621_003024.down,
    name: '20250621_003024',
  },
  {
    up: migration_20250621_022746.up,
    down: migration_20250621_022746.down,
    name: '20250621_022746',
  },
  {
    up: migration_20250912_161639_add_row_level_security.up,
    down: migration_20250912_161639_add_row_level_security.down,
    name: '20250912_161639_add_row_level_security',
  },
  {
    up: migration_20250914_210906_add_articles.up,
    down: migration_20250914_210906_add_articles.down,
    name: '20250914_210906_add_articles',
  },
  {
    up: migration_20250915_211718_add_published_field_to_articles.up,
    down: migration_20250915_211718_add_published_field_to_articles.down,
    name: '20250915_211718_add_published_field_to_articles',
  },
  {
    up: migration_20250917_210054_add_authors_to_articles.up,
    down: migration_20250917_210054_add_authors_to_articles.down,
    name: '20250917_210054_add_authors_to_articles'
  },
];
