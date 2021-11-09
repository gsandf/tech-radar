import { CSSProperties } from 'react';

interface RadarRing {
  name: string;
  color: CSSProperties['backgroundColor'];
}

interface RadarQuadrant {
  name: string;
}

export interface RadarEntry {
  label: string;
  quadrant: Quadrant;
  ring: Ring;
  moved: MoveDirection;
}

export interface VisualizationConfig {
  svg_id: string;
  width: number;
  height: number;
  colors: {
    background: CSSProperties['backgroundColor'];
    grid: CSSProperties['backgroundColor'];
    inactive: CSSProperties['backgroundColor'];
  };
  title: string;
  quadrants: Record<Quadrant, RadarQuadrant>;
  rings: Record<Ring, RadarRing>;
  print_layout: boolean;
  entries: RadarEntry[];
}

export enum MoveDirection {
  Out = -1,
  None = 0,
  In = 1
}

export enum Quadrant {
  Platforms,
  Tools,
  Datastores,
  LanguagesAndFrameworks
}

export enum Ring {
  Adopt,
  Trial,
  Assess,
  Hold
}

export const quadrants: VisualizationConfig['quadrants'] = {
  [Quadrant.Datastores]: { name: 'Datastores' },
  [Quadrant.LanguagesAndFrameworks]: { name: 'Languages & Frameworks' },
  [Quadrant.Platforms]: { name: 'Platforms' },
  [Quadrant.Tools]: { name: 'Tools' }
};

export const rings: VisualizationConfig['rings'] = {
  [Ring.Adopt]: { name: 'Adopt', color: '#93c47d' },
  [Ring.Trial]: { name: 'Trial', color: '#b7e1cd' },
  [Ring.Assess]: { name: 'Assess', color: '#fce8b2' },
  [Ring.Hold]: { name: 'Hold', color: '#f4c7c3' }
};
