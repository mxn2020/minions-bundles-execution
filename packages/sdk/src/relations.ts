/**
 * @module minions-bundles-execution/relations
 * Relation definitions for Minions Bundle: Execution.
 */

export const bundleRelations = [
  { from: 'task', relation: 'included_in', to: 'dailySprint' },
];

