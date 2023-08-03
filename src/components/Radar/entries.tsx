import { MoveDirection, RadarEntry, Quadrant, Ring } from './types';

export const entries: RadarEntry[] = [
  {
    label: 'Redis',
    moved: MoveDirection.In,
    quadrant: Quadrant.Datastores,
    ring: Ring.Assess
  },
  {
    label: 'Elixir & Phoenix',
    moved: MoveDirection.None,
    quadrant: Quadrant.LanguagesAndFrameworks,
    ring: Ring.Assess
  },
  {
    label: 'Railway',
    moved: MoveDirection.In,
    quadrant: Quadrant.Platforms,
    ring: Ring.Trial
  },
  {
    label: 'dprint',
    moved: MoveDirection.None,
    quadrant: Quadrant.Tools,
    ring: Ring.Trial
  },
  {
    label: 'Rome',
    moved: MoveDirection.None,
    quadrant: Quadrant.Tools,
    ring: Ring.Trial
  },
  {
    label: 'vultr',
    moved: MoveDirection.None,
    quadrant: Quadrant.Platforms,
    ring: Ring.Assess
  },
  {
    label: 'tRPC',
    moved: MoveDirection.None,
    quadrant: Quadrant.LanguagesAndFrameworks,
    ring: Ring.Assess
  },
  {
    label: 'React',
    moved: MoveDirection.None,
    quadrant: Quadrant.LanguagesAndFrameworks,
    ring: Ring.Adopt
  },
  {
    label: 'MySQL / MariaDB',
    moved: MoveDirection.None,
    quadrant: Quadrant.Datastores,
    ring: Ring.Adopt
  },
  {
    label: 'AWS S3',
    moved: MoveDirection.Out,
    quadrant: Quadrant.Datastores,
    ring: Ring.Assess
  },
  {
    label: 'Supabase',
    moved: MoveDirection.None,
    quadrant: Quadrant.Datastores,
    ring: Ring.Assess
  },
  {
    label: 'Firebase',
    moved: MoveDirection.Out,
    quadrant: Quadrant.Datastores,
    ring: Ring.Hold
  },
  {
    label: 'AWS Lambda',
    moved: MoveDirection.None,
    quadrant: Quadrant.Platforms,
    ring: Ring.Assess
  },
  {
    label: 'TypeScript',
    moved: MoveDirection.None,
    quadrant: Quadrant.LanguagesAndFrameworks,
    ring: Ring.Adopt
  },
  {
    label: 'JavaScript',
    moved: MoveDirection.None,
    quadrant: Quadrant.LanguagesAndFrameworks,
    ring: Ring.Adopt
  },
  {
    label: 'WordPress (vanilla)',
    moved: MoveDirection.None,
    quadrant: Quadrant.Platforms,
    ring: Ring.Adopt
  },
  {
    label: '.NET Core',
    moved: MoveDirection.In,
    quadrant: Quadrant.LanguagesAndFrameworks,
    ring: Ring.Adpot
  },
  {
    label: 'Go',
    moved: MoveDirection.None,
    quadrant: Quadrant.LanguagesAndFrameworks,
    ring: Ring.Assess
  },
  {
    label: 'Rust',
    moved: MoveDirection.None,
    quadrant: Quadrant.LanguagesAndFrameworks,
    ring: Ring.Trial
  },
  {
    label: 'GraphQL',
    moved: MoveDirection.None,
    quadrant: Quadrant.LanguagesAndFrameworks,
    ring: Ring.Adopt
  },
  {
    label: 'Python',
    moved: MoveDirection.Out,
    quadrant: Quadrant.LanguagesAndFrameworks,
    ring: Ring.Hold
  },
  {
    label: 'RethinkDB',
    moved: MoveDirection.None,
    quadrant: Quadrant.Datastores,
    ring: Ring.Hold
  },
  {
    label: 'npm (team plan)',
    moved: MoveDirection.None,
    quadrant: Quadrant.Platforms,
    ring: Ring.Adopt
  },
  {
    label: 'GitHub Packages',
    moved: MoveDirection.None,
    quadrant: Quadrant.Platforms,
    ring: Ring.Assess
  },
  {
    label: 'WP Engine - basic',
    moved: MoveDirection.None,
    quadrant: Quadrant.Platforms,
    ring: Ring.Adopt
  },
  {
    label: 'WP Engine Atlas',
    moved: MoveDirection.In,
    quadrant: Quadrant.Platforms,
    ring: Ring.Adopt
  },
  {
    label: 'PHP',
    moved: MoveDirection.None,
    quadrant: Quadrant.LanguagesAndFrameworks,
    ring: Ring.Trial
  },
  {
    label: 'Node.js',
    moved: MoveDirection.None,
    quadrant: Quadrant.LanguagesAndFrameworks,
    ring: Ring.Adopt
  },
  {
    label: 'Next.js',
    moved: MoveDirection.None,
    quadrant: Quadrant.LanguagesAndFrameworks,
    ring: Ring.Adopt
  },
  {
    label: 'Vercel',
    moved: MoveDirection.None,
    quadrant: Quadrant.Platforms,
    ring: Ring.Trial
  },
  {
    label: 'AWS SNS',
    moved: MoveDirection.None,
    quadrant: Quadrant.Platforms,
    ring: Ring.Assess
  },
  {
    label: 'AWS EFS',
    moved: MoveDirection.None,
    quadrant: Quadrant.Datastores,
    ring: Ring.Assess
  },
  {
    label: 'PostgreSQL',
    moved: MoveDirection.None,
    quadrant: Quadrant.Datastores,
    ring: Ring.Assess
  },
  {
    label: 'Redux',
    moved: MoveDirection.None,
    quadrant: Quadrant.LanguagesAndFrameworks,
    ring: Ring.Assess
  },
  {
    label: 'Headless WordPress',
    moved: MoveDirection.None,
    quadrant: Quadrant.Platforms,
    ring: Ring.Adopt
  },
  {
    label: 'AWS EC2',
    moved: MoveDirection.None,
    quadrant: Quadrant.Platforms,
    ring: Ring.Trial
  },
  {
    label: 'Umbraco',
    moved: MoveDirection.None,
    quadrant: Quadrant.Platforms,
    ring: Ring.Trial
  },
  {
    label: 'Ektron',
    moved: MoveDirection.None,
    quadrant: Quadrant.Platforms,
    ring: Ring.Hold
  },
  {
    label: 'ExpressionEngine',
    moved: MoveDirection.None,
    quadrant: Quadrant.Platforms,
    ring: Ring.Hold
  },
  {
    label: 'Laravel',
    moved: MoveDirection.None,
    quadrant: Quadrant.LanguagesAndFrameworks,
    ring: Ring.Hold
  },
  {
    label: 'MSSQL',
    moved: MoveDirection.None,
    quadrant: Quadrant.Datastores,
    ring: Ring.Adopt
  },
  {
    label: 'Styled Components',
    moved: MoveDirection.None,
    quadrant: Quadrant.LanguagesAndFrameworks,
    ring: Ring.Adopt
  },
  {
    label: 'Emotion',
    moved: MoveDirection.In,
    quadrant: Quadrant.LanguagesAndFrameworks,
    ring: Ring.Adopt
  },
  {
    label: 'GitHub',
    moved: MoveDirection.None,
    quadrant: Quadrant.Tools,
    ring: Ring.Adopt
  },
  {
    label: 'Bitbucket',
    moved: MoveDirection.None,
    quadrant: Quadrant.Tools,
    ring: Ring.Hold
  },
  {
    label: 'Bitbucket Pipelines',
    moved: MoveDirection.None,
    quadrant: Quadrant.Tools,
    ring: Ring.Hold
  },
  {
    label: 'Prisma',
    moved: MoveDirection.None,
    quadrant: Quadrant.LanguagesAndFrameworks,
    ring: Ring.Assess
  },
  {
    label: 'GitHub Actions',
    moved: MoveDirection.None,
    quadrant: Quadrant.Tools,
    ring: Ring.Adopt
  },
  {
    label: 'AWS CDK',
    moved: MoveDirection.None,
    quadrant: Quadrant.Tools,
    ring: Ring.Assess
  },
  {
    label: 'SWR',
    moved: MoveDirection.None,
    quadrant: Quadrant.LanguagesAndFrameworks,
    ring: Ring.Assess
  },
  {
    label: 'Prettier',
    moved: MoveDirection.None,
    quadrant: Quadrant.Tools,
    ring: Ring.Adopt
  },
  {
    label: 'ESLint',
    moved: MoveDirection.None,
    quadrant: Quadrant.Tools,
    ring: Ring.Adopt
  },
  {
    label: 'Netlify CMS',
    moved: MoveDirection.None,
    quadrant: Quadrant.Platforms,
    ring: Ring.Assess
  },
  {
    label: 'AWS ECS',
    moved: MoveDirection.None,
    quadrant: Quadrant.Platforms,
    ring: Ring.Assess
  },
  {
    label: 'Rsync',
    moved: MoveDirection.None,
    quadrant: Quadrant.Tools,
    ring: Ring.Adopt
  }
];
