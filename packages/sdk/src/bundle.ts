/**
 * @module minions-bundles-execution/bundle
 * MinionType definitions and imports for Minions Bundle: Execution.
 */

import type { MinionType } from 'minions-sdk';


// --- Inline Bundle Types ---

export const taskType: MinionType = {
  id: 'bundle-execution-task',
  name: 'Task',
  slug: 'task',
  description: 'Granular unit of work',
  icon: '✅',
  schema: [
    { name: 'title', type: 'string', label: 'title' },
    { name: 'projectId', type: 'string', label: 'projectId' },
    { name: 'priority', type: 'number', label: 'priority' },
    { name: 'targetDate', type: 'date', label: 'targetDate' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'isTop3Today', type: 'boolean', label: 'isTop3Today' },
  ],
};

export const dailySprintType: MinionType = {
  id: 'bundle-execution-dailySprint',
  name: 'DailySprint',
  slug: 'dailySprint',
  description: 'A focused daily work session',
  icon: '🏃',
  schema: [
    { name: 'date', type: 'date', label: 'date' },
    { name: 'notes', type: 'string', label: 'notes' },
  ],
};

// --- Bundle Export ---

export const bundleTypes: MinionType[] = [
  taskType,
  dailySprintType,
];

