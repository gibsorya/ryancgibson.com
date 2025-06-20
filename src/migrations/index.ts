import * as migration_20250615_015527_add_tags_to_project from './20250615_015527_add_tags_to_project';
import * as migration_20250616_174533 from './20250616_174533';
import * as migration_20250617_203601 from './20250617_203601';
import * as migration_20250617_204007_add_skills from './20250617_204007_add_skills';
import * as migration_20250617_205211_add_skills_url from './20250617_205211_add_skills_url';
import * as migration_20250619_173353_add_types_to_hero from './20250619_173353_add_types_to_hero';
import * as migration_20250620_174321 from './20250620_174321';
import * as migration_20250620_211908 from './20250620_211908';
import * as migration_20250620_232325 from './20250620_232325';

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
    name: '20250620_232325'
  },
];
