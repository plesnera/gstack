import type { HostConfig } from '../scripts/host-config';

const vibe: HostConfig = {
  name: 'vibe',
  displayName: 'Mistral Vibe',
  cliCommand: 'vibe',
  cliAliases: [],

  globalRoot: '.vibe/skills/gstack',
  localSkillRoot: '.vibe/skills/gstack',
  hostSubdir: '.vibe',
  usesEnvVars: true,

  frontmatter: {
    mode: 'allowlist',
    keepFields: ['name', 'description'],
    descriptionLimit: null,
  },

  generation: {
    generateMetadata: false,
    skipSkills: ['codex'],
  },

  pathRewrites: [
    { from: '~/.claude/skills/gstack', to: '~/.vibe/skills/gstack' },
    { from: '.claude/skills/gstack', to: '.vibe/skills/gstack' },
    { from: '.claude/skills', to: '.vibe/skills' },
  ],

  runtimeRoot: {
    globalSymlinks: ['bin', 'browse/dist', 'browse/bin', 'gstack-upgrade', 'ETHOS.md'],
    globalFiles: {
      'review': ['checklist.md', 'TODOS-format.md'],
    },
  },

  install: {
    prefixable: false,
    linkingStrategy: 'symlink-generated',
  },

  learningsMode: 'basic',
};

export default vibe;
