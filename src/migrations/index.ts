import * as migration_20250615_015527_add_tags_to_project from './20250615_015527_add_tags_to_project';

export const migrations = [
  {
    up: migration_20250615_015527_add_tags_to_project.up,
    down: migration_20250615_015527_add_tags_to_project.down,
    name: '20250615_015527_add_tags_to_project'
  },
];
